import * as types from "../actionType"
import axios from "axios"

const getCateBooks = (cates) => ({
    type: types.GET_BOOK_CATE,
    payload: cates,
})

const cateDeleled = () => ({
    type: types.DELETE_BOOK_CATE,
})

const cateBookAdded = () => ({
    type: types.ADD_BOOK_CATE,
})

const getCateBook = (cate) => ({
    type: types.GET_SINGLE_BOOK_CATE,
    payload: cate,
})

const cateBookUpdate = (cate) => ({
    type: types.UPDATE_BOOK_CATE,
    payload: cate,
})
  
export const loadCateBooks = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/categories`).then((res)=> {
            console.log("Loại sách: ", res);
            dispatch(getCateBooks(res.data))
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const deleteBookCate = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/categories/${id}`).then((res)=> {
            console.log("Loại sách đã xóa: ", res);
            dispatch(cateDeleled())
            dispatch(loadCateBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const addBookCate = (cate) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/categories`, cate).then((res)=> {
            console.log("Sách được thêm là: ", cate);
            dispatch(cateBookAdded());
            dispatch(loadCateBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}


export const getSingleBookCate = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/categories/${id}`).then((res)=> {
            console.log("Sách đang chỉnh sửa: ", res);
            dispatch(getCateBook(res.data))
            dispatch(loadCateBooks());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const updateBookCate = (book, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/categories/${id}`, book).then((res)=> {
            console.log("Sách chỉnh sửa: ", res);
            dispatch(cateBookUpdate())
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}