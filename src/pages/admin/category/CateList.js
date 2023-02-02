import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBookCate, loadCateBooks } from "../../../redux/redux-category-book/actionBookCate";


import '../../../style/table.css'



const CateList = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("")
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch((loadCateBooks()));
  }, []);


  // Xóa sách
  const handleDelete = (id) => {
    if (window.confirm("Bạn có muốn xóa sách này không?")) {
      dispatch(deleteBookCate(id))
    }
  }
  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">QUẢN LÝ LOẠI SẢN PHẨM</span>

      </h2>
      <div className="position-relative mx-xl-5 mb-4">
        <div className="table__header">
          <div>
            <input type="text" placeholder="Tìm kiếm sản phẩm" onChange={(e) => setSearchItem(e.target.value)} />
            <button className="add_new" onClick={() => navigate('/cate-add')}>Thêm loại sản phẩm</button>
          </div>
        </div>
        <div className="table__section">
          <table className="table">
            <thead className="table__thead">
              <tr className="table__thead-tr">
                <th className="table__thead-th th-1">ID</th>
                <th className="table__thead-th th-2">Tên loại sản phẩm</th>
                <th className="table__thead-th th-2">Thứ tự</th>
                <th className="table__thead-th th-2">Ẩn hiện</th>
                <th className="table__thead-th th-6">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {categories && categories.filter((val) => {
                if (searchItem === "") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
                  return val
                }
              }).map((cate, index) => (
                <tr key={index} className="table__thead-tr">
                  <td className="table__thead-td">{cate.id}</td>
                  <td className="table__thead-td">{cate.title}</td>
                  <td className="table__thead-td">{cate.orther === 1 ? 'Ưu tiên' : 'Bình thường'}</td>
                  <td className="table__thead-td">{cate.hidden === 1 ? 'Hiện' : 'Ẩn'}</td>
      
                  <td style={{ textAlign: "center" }}>
                    <div className="btn__action">
                      <button onClick={() => handleDelete(cate.id)}>
                        <span>
                          <i className="bx bx-trash"></i>
                        </span>
                      </button>
                      <button onClick={() => navigate(`/cate-edit/${cate.id}`)}>
                        <i className="bx bx-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default CateList