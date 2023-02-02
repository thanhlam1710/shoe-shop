import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const TopBar = () => {
    const navigate = useNavigate();
    const {user, logOut} = UserAuth()
    console.log(user?.displayName);
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container-fluid">
            <div className="row bg-secondary py-1 px-xl-5">
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center h-100">
                        <a className="text-body mr-3" href="a">Ý kiến</a>
                        <a className="text-body mr-3" href="a">Liên hệ</a>
                        <a className="text-body mr-3" href="a">Giúp đỡ</a>
                        <a className="text-body mr-3" href="a">Câu hỏi</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    {user?.photoURL && (<img src={user.photoURL} alt='' style={{width: '5%' ,borderRadius: '30px', marginRight: '10px'}}></img>)}
                    <div className="d-inline-flex align-items-center">
                        {user?.displayName ?(
                             <div className="btn-group">
                                
                             <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">{user.displayName}</button>
                             <div className="dropdown-menu dropdown-menu-right">
                                    
                                 <button className="dropdown-item" type="button">Thông tin cá nhân</button>
                                 <button className="dropdown-item" type="button" onClick={handleSignOut}>Đăng xuất</button>
                             </div>
                         </div>
                        ) : (
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Tài khoản</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button" onClick={() => navigate('/login')}>Đăng nhập</button>
                            </div>
                        </div>
                        )}
                       
                        <div className="btn-group mx-2">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button">EUR</button>
                                <button className="dropdown-item" type="button">GBP</button>
                                <button className="dropdown-item" type="button">CAD</button>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">VN</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item" type="button">EN</button>
                                <button className="dropdown-item" type="button">AR</button>
                                <button className="dropdown-item" type="button">RU</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex align-items-center d-block d-lg-none">
                        <a href="a" className="btn px-0 ml-2">
                            <i className="fas fa-heart text-dark"></i>
                            <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                        </a>
                        <a href="a" className="btn px-0 ml-2">
                            <i className="fas fa-shopping-cart text-dark"></i>
                            <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                <div className="col-lg-4">
                    <a href="a" className="text-decoration-none">
                        <span className="h1 text-uppercase text-primary bg-dark px-2">THANH</span>
                        <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">LÂM</span>
                    </a>
                </div>
                <div className="col-lg-4 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm..." />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 col-6 text-right">
                    <p className="m-0">Dịch vụ khách hàng</p>
                    <h5 className="m-0">+(84) 356 144 635</h5>
                </div>
            </div>
        </div>
    )
}

export default TopBar;