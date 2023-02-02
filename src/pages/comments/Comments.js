import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addComment, loadComments } from '../../redux/comment/actionComment';

const Comments = (props) => {
  const { comments } = useSelector(state => state.comments)
  console.log("Comments: ", comments);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadComments())
  }, []);



  // THÊM BÌNH LUẬN
  const [cmt, setCmt] = useState({
    userName: "",
    body: "",
  });
  const { userName, body } = cmt;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCmt({ ...cmt, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(cmt));
    setCmt({
      userName: "",
      body: ""
    });
  };
  return (
    <div className="tab-pane fade" id="tab-pane-3">
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-4">Bình luận cho sản phẩm <b>"{props.title}"</b></h4>
          <div className="media mb-4">
            <img
              src="img/user.jpg"
              alt=""
              className="img-fluid mr-3 mt-1"
              style={{ width: "45px" }}
            />

            {comments.map((comment) => (
              <div className="media-body">
                <h6>
                  {comment.userName}
                  <small>
                    {" "}
                    - <i>17/10/2021</i>
                  </small>
                </h6>
                <div className="text-primary mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  {comment.body}
                </p>
              </div>
            ))}

          </div>
        </div>
        <div className="col-md-6">
          <h4 className="mb-4">Để lại một đánh giá</h4>
          <small>
            Địa chỉ email của bạn sẽ không được công bố. Yêu cầu
            các trường được đánh dấu *
          </small>
          <div className="d-flex my-3">
            <p className="mb-0 mr-2">Đánh giá sao * :</p>
            <div className="text-primary">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="message">Đánh giá của bạn *</label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                name='body'
                value={body}
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="name">Họ và tên *</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name='userName'
                value={userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-0">
              <button className='btn btn-primary px-3' type='submit'>
                Gửi đánh giá
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comments