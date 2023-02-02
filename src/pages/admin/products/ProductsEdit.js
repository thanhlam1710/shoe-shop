import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSingleBook, updateBook } from '../../../redux/redux-book/actionBook';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../style/add.css'

const ProductsEdit = () => {
    const [products, setProducts] = useState({
        title: "",
        price: "",
        image: "",
        view: "",
        desc: "",
        category: "",
    });
    const [error, setError] = useState("");

    const { id } = useParams();

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const {book} = useSelector(state => state.books);
    const { title, price, image, view, category, desc } = products;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setProducts({ ...products, [name]: value });
    };

    useEffect(() => {
        dispatch(getSingleBook(id));
      }, []);

      useEffect(() => {
        if(book) {
            setProducts({...book})
        }
      }, [book]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !price || !image || !view || !category || !desc) {
            setError("Xin hãy nhập đầy đủ thông tin sản phẩm!");
        } else {
            dispatch(updateBook(products, id));
            setError("");
            navigate("/manageProduct");
        }
    };
    return (
        <div class="container-fluid">
            <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span class="bg-secondary pr-3">CẬP NHẬT SẢN PHẨM SẢN PHẨM</span>
            </h2>
            <div class="row px-xl-5 form-edit">
                <div class="col-lg-7 mb-5">
                    <div class="contact-form bg-light p-30 form-add">

                        <div id="success">
                            {error && <h3>{error}</h3>}
                        </div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={handleSubmit}>
                            <div class="control-group">
                                <label>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name='title'
                                    placeholder="Tên sản phẩm"
                                    value={title}
                                    onChange={handleInputChange}
                                    required="required"
                                    data-validation-required-message="Please enter your name"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <label>Giá sản phẩm</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="price"
                                    name='price'
                                    placeholder="Giá sản phẩm"
                                    value={price}
                                    onChange={handleInputChange}
                                    required="required"
                                    data-validation-required-message="Please enter your email"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <label>Hình ảnh</label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="image"
                                    name='image'
                                    placeholder="Hình ảnh"
                                    required="required"
                                    value={image}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter a subject"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <label>Lượt xem</label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="view"
                                    name='view'
                                    placeholder="Lượt xem"
                                    required="required"
                                    value={view}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter a subject"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                            
                            <div class="control-group">
                                <label>Mô tả</label>

                                <textarea
                                    class="form-control"
                                    rows="8"
                                    id="desc"
                                    name='desc'
                                    placeholder="Mô tả"
                                    required="required"
                                    value={desc}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter your message"
                                ></textarea>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="control-group">
                                <label>Loại sản phẩm</label>
                                <select
                                    class="form-control"
                                    id="category"
                                    name='category'
                                    required="required"
                                    value={category}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter a subject" 
                                >
                                    <option value='0'>Hunter</option>
                                    <option value='1'>Giày chạy bộ</option>
                                    <option value='2'>Giày thể thao</option>
                                    <option value='3'>Giày đá bóng</option>
                                </select>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button
                                    class="btn btn-primary py-2 px-4"
                                    type="submit"
                                    id="sendMessageButton"
                                >
                                    CẬP NHẬT SẢN PHẨM
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="img-detail">
                    <img src={image} alt='' className='w-20'></img>
                </div>
            </div>
        </div>
    )
}

export default ProductsEdit