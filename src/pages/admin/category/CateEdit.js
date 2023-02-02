import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookCate, getSingleBookCate, updateBookCate } from '../../../redux/redux-category-book/actionBookCate';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../../style/add.css'

const CateEdit = () => {
    const [cate, setCate] = useState({
        title: "",
        orther: "",
        hidden: ""
    });
    const [error, setError] = useState("");
    const { id } = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const {category} = useSelector(state => state.categories);

    const { title, orther, hidden } = cate;

    useEffect(() => {
      dispatch(getSingleBookCate(id));
    }, []);
  
    useEffect(() => {
      if(category) {
        setCate({...category})
      }
    }, [category]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setCate({ ...cate, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !orther || !hidden) {
            setError("Xin hãy nhập đầy đủ thông tin sản phẩm!");
        } else {
            dispatch(updateBookCate(cate, id));
            setError("");
            navigate("/manageCategory");
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
                                <label>Tên loại sản phẩm</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name='title'
                                    placeholder="Tên loại sản phẩm"
                                    value={title}
                                    onChange={handleInputChange}
                                    required="required"
                                    data-validation-required-message="Please enter your name"
                                />
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="control-group">
                                <label>Thứ tự</label>
                                <select
                                    class="form-control"
                                    id="orther"
                                    name='orther'
                                    required="required"
                                    value={orther}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter a subject" 
                                >
                                    <option>Chọn ưu tiên</option>
                                    <option value='1'>Ưu tiên</option>
                                    <option value='2'>Bình thường</option>
                                </select>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div class="control-group">
                                <label>Ẩn hiện</label>
                                <select
                                    class="form-control"
                                    id="hidden"
                                    name='hidden'
                                    required="required"
                                    value={hidden}
                                    onChange={handleInputChange}
                                    data-validation-required-message="Please enter a subject" 
                                >
                                    <option>Chọn ẩn hiện</option>
                                    <option value='1'>Ẩn</option>
                                    <option value='2'>Hiện</option>
                                </select>
                                <p class="help-block text-danger"></p>
                            </div>

                            <div>
                                <button
                                    class="btn btn-primary py-2 px-4"
                                    type="submit"
                                    id="sendMessageButton"
                                >
                                    CẬP NHẬT LOẠI PHẨM
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CateEdit