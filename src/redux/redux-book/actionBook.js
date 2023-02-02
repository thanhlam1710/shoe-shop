import * as types from "../actionType"
import axios from "axios"

const getBooks = (books) => ({
    type: types.GET_BOOK,
    payload: books,
})

const bookDeleted = () => ({
    type: types.DELETE_BOOK,
})

const bookAdded = () => ({
    type: types.ADD_BOOK,
})

const getBook = (book) => ({
    type: types.GET_SINGLE_BOOK,
    payload: book,
})

const BookUpdate = (book) => ({
    type: types.GET_SINGLE_BOOK,
    payload: book,
})

// const pageBooks = (books) => ({
//     type: types.PAGE_BOOK,
//     payload: books,
// })

  
export const loadBooks = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/products?`).then((res)=> {
            console.log("Data: ", res);
            dispatch(getBooks(res.data))
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const deleteBook = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/products/${id}`).then((res)=> {
            console.log("Sách đã xóa: ", res);
            dispatch(bookDeleted())
            dispatch(loadBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const addBook = (book) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/products`, book).then((res)=> {
            console.log("Sách được thêm là: ", book);
            dispatch(bookAdded());
            dispatch(loadBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}


export const getSingleBook = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/products/${id}`).then((res)=> {
            console.log("Sách đang chỉnh sửa: ", res);
            dispatch(getBook(res.data))
            dispatch(loadBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const updateBook = (book, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/products/${id}`, book).then((res)=> {
            console.log("Sách chỉnh sửa: ", res);
            dispatch(BookUpdate())
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

// export const bookPage = (current) => {
//     return function (dispatch) {
//         axios.get(`http://localhost:5000/sach?_page=${current}&_limit=5`).then((res)=> {
//             console.log("Data: ", res);
//             dispatch(pageBooks(res.data))
//         })
//         .catch((error)=> {
//             console.log("Lỗi: ", error);
//         });
//     }
// }