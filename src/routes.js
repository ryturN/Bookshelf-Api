const { addBooks, getAllBooksHandler, getBooksByIdHandler } = require("./handler")


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
        path :'/books/{booksId}',
        handler: getBooksByIdHandler
    },
    {
        method : 'PUT',
        path : '/books/{booksId}',
        handler: ()=>{}

    }
]

module.exports= routes