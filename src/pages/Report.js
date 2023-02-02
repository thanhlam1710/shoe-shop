import React from 'react'

const Report = () => {
  return (
    <div class="container-fluid">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span class="bg-secondary pr-3">Báo cáo</span>
      
    </h2>
    <div style={{textAlign: 'center', fontSize: '25px'}} >
    <p >1. Tạo mảng dữ liệu json loại sản phẩm: id, ten, thutu, anhien</p>
      <p>2. Tạo mảng dữ liệu json id, tensp, gia, urlhinh, mota, idLoai, moi, hot, xem </p>
      <p>3. Tạo các trang layout: Trang chủ, sản phẩm, giỏ hàng, chi tiết sản phẩm, liên hệ, đăng nhập </p>
      <p>4. Sử dụng router để link đến các component </p>
      <p>4. Thực hiện các chức năng: Sử dụng dữ liệu json hiện danh sách sản phẩm, chi tiết sản phẩm</p>
      <p>5. Sử dụng redux: Hiện số lượng giỏ hàng. Xóa, thêm và tính tổng giỏ hàng</p>
      <p>6. Thực hiện chức năng: Tìm kiếm sản phẩm, phân trang</p>
      <p>7. Hiện dữ liệu sản phẩm mới, sản phẩm xem nhiều, sản phẩm hot</p>
      <p>8. Chọn vào thích sẽ đổi màu sản phẩm</p>
      <p>9. Lọc sản phẩm theo loại</p>
    </div>
    </div>
   
  )
}

export default Report