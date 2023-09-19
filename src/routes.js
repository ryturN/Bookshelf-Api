const { addBooks, getAllBooksHandler, getBooksByIdHandler, updateBookByIdHandler, deleteBooksByIdHandler } = require("./handler")


const routes = [
    {
        method : 'POST',
        path : '/books',
        handler : addBooks
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBooksHandler
    },
    {
        method :'GET',
        path :'/books/{bookId}',
        handler: getBooksByIdHandler
    },
    {
        method : 'PUT',
        path : '/books/{bookId}',
        handler: updateBookByIdHandler

    },
    {
        method : 'DELETE',
        path : '/books/{bookId}',
        handler : deleteBooksByIdHandler
    }
]

module.exports= routes