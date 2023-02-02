import React from "react";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
  }, [cartProducts])
  return (
    <>
      <div class="container-fluid">
        <div class="row px-xl-5">
          <div class="col-12">
            <nav class="breadcrumb bg-light mb-30">
              <a class="breadcrumb-item text-dark" href="/">
                Trang chủ
              </a>
              <a class="breadcrumb-item text-dark" href="/products">
                Sản phẩm
              </a>
              <span class="breadcrumb-item active">Giỏ hàng</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Tổng giá sản phẩm</th> 
                  <th>Xóa</th>
                </tr>
              </thead>
              {
                cartProducts.length === 0 ? <h6 style={{padding: '20px', textAlign: 'center', fontSize: '20px', width: '206%'}}>Không có sản phẩm nào được thêm</h6> : cartProducts.map((item, index)=>(
                  <CartItem item={item} key={index}/>
                ))
              }
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Mã giảm giá"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Áp dụng mã giảm giá</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">GIỎ HÀNG</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Tổng phụ</h6>
                  <h6>$0</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Vận chuyển</h6>
                  <h6 className="font-weight-medium">$0</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Tổng đơn hàng</h5>
                  <h5>{totalAmount} ₫</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Tiến hành đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
