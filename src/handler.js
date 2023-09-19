const {nanoid} = require('nanoid');
const books = require ('./books');

const addBooks = (req, h )=>{
    const {name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading} = req.payload;

    if (!name){
        const response = h.response({
            status : 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        response.code(400).json;
        return response;
    }
    if (readPage > pageCount){
        const response = h.response({
            status : 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        })
            response.code(400).json;
            return response
    }
    const id = nanoid(16);
    const finished = pageCount === readPage

    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBooks= {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt
    };
    books.push(newBooks);
    const isSuccess = books.filter((book)=> book.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data : {
                bookId: id,
            },
        });
        response.code(201);
        return response
    }
    const response = h.response({
        status : 'fail',
    })
    response.code(500)
}


const getAllBooksHandler = ()=>({
    status: 'success',
    data: {
        books: books.map((book)=>({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        })),
    }
})

const getBooksByIdHandler = (req,h)=>{
    const { bookId } = req.params;
    const book = books.find((b)=>b.id === bookId);
    if(!book){
        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        })
        response.code(404);
        return response
    }
        const response = h.response({
            status : 'success',
            data: {
                book,
            },
        })
        response.code(200);
        return response
}

const updateBookByIdHandler = (req,h)=>{
    const {bookId} = req.params;

    const {name,year,author,summary,publisher,pageCount,readPage,reading} = req.payload;
    const updatedAt = new Date ().toISOString;

    const index = books.findIndex((book)=>book.id === bookId);
    if(index !==-1){
        books[index]= {
        id : bookId,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
        };
    };
    if(!name){
        const response =h.response({
            status : 'fail',
            message: 'Gagal memperbarui buku.Mohon isi nama buku'
        })
        response.code(400);
        return response
    }
    if(readPage > pageCount){
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbaharui buku.readPage tidak boleh lebih besar dari pada pageCount'
        })
        response.code(400);
    }
    if(!id){
        const response = h.response({
            status : 'fail',
            message: 'Gagal memperbaharui buku. iD tidak ditemukan'
        })
        response.code(404)
        return response
    }
    const response = h.response({
        status :'success',
        message: 'Buku Berhasil diperbarui'
    })
    response.code(200);
    return response
}

const deleteBooksByIdHandler =(req,h)=>{
    const {bookId} = req.params;
    const index = books.findIndex((book)=>book.id === bookId);

    if(index !== -1){
        books.splice(index,1);
        const response = h.response({
            status : 'success',
            message: 'Buku berhasil terhapus',
        });
        response.code(200);
        return response
    }
    const response = h.response({
        status : 'fail',
        message: 'Buku gagal dihapus.Id tidak ditemukan'
    })
    response.code(404);
    return response
}

module.exports = {
    addBooks,
    getAllBooksHandler,
    getBooksByIdHandler,
    updateBookByIdHandler,
    deleteBooksByIdHandler
}