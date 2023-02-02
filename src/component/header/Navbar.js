import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';


const Navbar = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
   
  return (
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', padding: '0px 30px'}}>
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Loại sản phẩm</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: '999'}}>
                    <div className="navbar-nav w-100">
                        <a href="a" className="nav-item nav-link">Hunter</a>
                        <a href="a" className="nav-item nav-link">Scandal</a>
                        <a href="a" className="nav-item nav-link">Giày Thể Thao</a>
                        <a href="a" className="nav-item nav-link">Giày Chạy Bộ</a>
                        <a href="a" className="nav-item nav-link">Giày Tây</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <a href="a" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                        <Link to='/'><a href="inde" className="nav-item nav-link active">Trang chủ</a></Link>
                        <Link to='/products'><a href="inde" className="nav-item nav-link">Sản phẩm</a></Link>
                        <Link to='/cart'><a href="inde" className="nav-item nav-link">Giỏ hàng</a></Link>
                        <Link to='/contact'><a href="inde" className="nav-item nav-link">Liên hệ</a></Link>
                        <Link to='/report'><a href="inde" className="nav-item nav-link">Báo cáo</a></Link>
                        <Link to='/searchImg'><a href="inde" className="nav-item nav-link">Tìm kiếm hình ảnh</a></Link>
                        <Link to='/searchWeather'><a href="inde" className="nav-item nav-link">Dự báo thời tiết</a></Link>
                        <Link to='/manageProduct'><a href="inde" className="nav-item nav-link">Quản lý sản phẩm</a></Link>
                        <Link to='/manageCategory'><a href="inde" className="nav-item nav-link">Quản lý loại sản phẩm</a></Link>
                        
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="a" className="btn px-0">
                                <i className="fas fa-heart text-primary"></i>
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                            </a>
                            <Link to='/cart'>
                            <a href="a" className="btn px-0 ml-3">
                                <i className="fas fa-shopping-cart text-primary"></i>
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>{totalQuantity}</span>
                            </a>
                            
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar