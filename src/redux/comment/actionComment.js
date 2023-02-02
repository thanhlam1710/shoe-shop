import * as types from "../actionType"
import axios from "axios"

const getComments = (comments) => ({
    type: types.GET_COMMENTS,
    payload: comments,
})

// const bookDeleted = () => ({
//     type: types.DELETE_BOOK,
// })

const commentAdd = () => ({
    type: types.ADD_COMMENTS,
})



  
export const loadComments = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/comments?`).then((res)=> {
            console.log("Comments: ", res);
            dispatch(getComments(res.data))
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}

export const addComment = (comment) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/comments`, comment).then((res)=> {
            console.log("Sách được thêm là: ", comment);
            dispatch(commentAdd());
            dispatch(loadComments());
        })
        .catch((error)=> {
            console.log("Lỗi: ", error);
        });
    }
}
