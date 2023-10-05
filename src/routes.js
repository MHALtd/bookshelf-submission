const {
  addBookHandler,
  getAllBooksHandler,
  getBookDetailByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getBookDetailByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
