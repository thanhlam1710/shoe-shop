import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from '../../../redux/redux-book/actionBook';

import '../../../style/add.css'

const ProductsAdd = () => {
    const [book, setBook] = useState({
        title: "",
        price: "",
        image: "",
        view: "",
        desc: "",
        category: "",
    });
    const [error, setError] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { title, price, image, view, category, desc } = book;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !price || !image || !view || !category || !desc) {
            setError("Xin hãy nhập đầy đủ thông tin sản phẩm!");
        } else {
            dispatch(addBook(book));
            setError("");
            navigate("/manageProduct");
        }
    };
    return (
        <div class="container-fluid">
            <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span class="bg-secondary pr-3">THÊM SẢN PHẨM</span>
            </h2>
            <div class="row px-xl-5">
                <div class="col-lg-7 mb-5 m-auto">
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
                                    THÊM SẢN PHẨM
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsAdd