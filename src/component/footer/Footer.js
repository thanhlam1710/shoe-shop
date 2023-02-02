import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">LIÊN HỆ</h5>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>206/29 Phạm Văn Bạch</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>trantlam17102201@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+84 356 144 635</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">THANH LÂM</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Trang chủ</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Sản phẩm</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Sản phẩm chi tiết</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Giỏ hàng</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Thủ tục thanh toán</a>
                            <a className="text-secondary" href="a"><i className="fa fa-angle-right mr-2"></i>Liên hệ chúng tôi</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">THANH LÂM</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Trang chủ</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Sản phẩm</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Sản phẩm chi tiết</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Giỏ hàng</a>
                            <a className="text-secondary mb-2" href="a"><i className="fa fa-angle-right mr-2"></i>Thủ tục thanh toán</a>
                            <a className="text-secondary" href="a"><i className="fa fa-angle-right mr-2"></i>Liên hệ chúng tôi</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">TIN TỨC MỚI</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email của bạn"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Đăng nhập</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Theo dõi</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="a"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="a"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="a"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="a"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <a className="text-primary" href="a">PS15135</a>. Bản quyền thuộc về
                    <a className="text-primary" href="https://htmlcodex.com">Trần Thanh Lâm</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Footer