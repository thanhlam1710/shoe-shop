import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBook, loadBooks } from "../../../redux/redux-book/actionBook";

import '../../../style/table.css'



const Product = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("")
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);


  // Xóa sách
  const handleDelete = (id) => {
    if (window.confirm("Bạn có muốn xóa sách này không?")) {
      dispatch(deleteBook(id))
    }
  }
  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">QUẢN LÝ SẢN PHẨM</span>

      </h2>
      <div className="position-relative mx-xl-5 mb-4">
        <div className="table__header">
          <div>
            <input type="text" placeholder="Tìm kiếm sản phẩm" onChange={(e) => setSearchItem(e.target.value)} />
            <button className="add_new" onClick={() => navigate('/product-add')}>Thêm sản phẩm</button>
          </div>
        </div>
        <div className="table__section">
          <table className="table">
            <thead className="table__thead">
              <tr className="table__thead-tr">
                <th className="table__thead-th th-1">ID</th>
                <th className="table__thead-th th-2">Tên giày</th>
                <th className="table__thead-th th-5">Hình ảnh</th>
                <th className="table__thead-th th-3">Mô tả</th>
                <th className="table__thead-th th-4">Giá</th>
                <th className="table__thead-th th-5">Lượt xem</th>
                <th className="table__thead-th th-6">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {books && books.filter((val) => {
                if (searchItem === "") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
                  return val
                }
              }).map((book, index) => (
                <tr key={index} className="table__thead-tr">
                  <td className="table__thead-td">{book.id}</td>
                  <td className="table__thead-td">{book.title}</td>
                  <td className="table__thead-td">
                    <img
                      src={book.image}
                      alt=""
                    />
                  </td>
                  <td className="table__thead-td">{book.desc}</td>
                  <td className="table__thead-td">{book.price} ₫</td>
                  <td className="table__thead-td">{book.view}</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="btn__action">
                      <button onClick={() => handleDelete(book.id)}>
                        <span>
                          <i className="bx bx-trash"></i>
                        </span>
                      </button>
                      <button onClick={() => navigate(`/product-edit/${book.id}`)}>
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

export default Product