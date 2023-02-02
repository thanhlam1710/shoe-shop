import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filer, setFilter] = useState(data);
  const [newProduct, setNewProduct] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);
  const [hotProduct, setHotProduct] = useState([]);
  const [search, setSearch] = useState('')
  let componentMounted = true;

  
  // Lấy dữ liệu tất cả sản phẩm
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("http://localhost:5000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log("Tất cả sản phẩm: ", data);
        
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);



  // Lấy dữ liệu sản phẩm mới
  useEffect(() => {
    const filterNew = filer.filter((item) => item.new === 1);
    const sliceNew = filterNew.slice(0, 4);
    setNewProduct(sliceNew);
    console.log("Sản phẩm mới: ", newProduct);
  }, []);
  

  // Lấy dữ liệu sản phẩm xem nhiều
  useEffect(() => {
    const filterView = filer.filter((item) => item.view === 1);
    const sliceView = filterView.slice(0, 4);
    setViewProduct(sliceView);
    console.log("Sản phẩm xe nhiều: ", viewProduct);
  }, []);

  // Lấy dữ liệu sản phẩm hot
  useEffect(() => {
    const filterHot = filer.filter((item) => item.hot === 1);
    const sliceHot = filterHot.slice(0, 4);
    setHotProduct(sliceHot);
    console.log("Sản phẩm hot: ", hotProduct);
  }, []);

  // Sản phẩm trong loại
  const filterProduct = (category) => {
    const updateList = filer.filter((x) => x.category === category);
    setFilter(updateList);
  };

  const fetchCommets = async (curentPage) => {
    const res = await fetch(
      `http://localhost:5000/products?_page=${curentPage}&_limit=8`
    );
    const data = await res.json();
    return data;
  };

  const handleClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentFormServer = await fetchCommets(currentPage);
    setFilter(commentFormServer);
  };

  
  
  // Tất cả sản phẩm
  const ShowProduct = () => {
    return (
      <>
       {
          filer.filter((val) => {
            if(search === '') {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((product) => (
            <ProductCard item={product} />
          ))
        }
      </>
    );
  };


  // Sản phẩm mới
  const NewProduct = () => {
    return (
      <>
        {newProduct.map((product) => (
          <ProductCard item={product} />
        ))}
      </>
    );
  };

  // Sản phẩm xem nhiều
  const ViewProduct = () => {
    return (
      <>
        {viewProduct.map((product) => (
          <ProductCard item={product} />
        ))}
      </>
    );
  };

  // Sản phẩm hot
  const HotProduct = () => {
    return (
      <>
        {hotProduct.map((product) => (
          <ProductCard item={product} />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Loại sản phẩm</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1"
            onClick={() => setFilter(data)}
          >
            <div className="text-decoration-none category__shadow">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="https://product.hstatic.net/1000230642/product/dsmh09400xam__3__eeef3296002343be9edb94d69b9fa189_1024x1024.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h4>Tất cả sản phẩm</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1"
            onClick={() => filterProduct("Hunter")}
          >
            <div className="text-decoration-none category__shadow">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="https://product.hstatic.net/1000230642/product/09400den__3__7ea25cfeb017405da34adb0121eb31a1_1024x1024.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h4>Hunter</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1 "
            onClick={() => filterProduct("Sandal")}
          >
            <div className="text-decoration-none category__shadow">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="https://product.hstatic.net/1000230642/product/03900cam__3__b089fe56e4124dd89e487156067eb78b_large.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h3>Sandal</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1"
            onClick={() => filterProduct("Giày Thể Thao")}
          >
            <div className="text-decoration-none category__shadow">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="https://product.hstatic.net/1000230642/product/dsmh09100trg__3__1e0fd31486ce419499b04b7cc65ee343_1024x1024.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h4>Giày Thể Thao</h4>
                </div>
              </div>
            </div>
          </div>


          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1"
            onClick={() => filterProduct("Giày Chạy Bộ")}
          >
            <div className="text-decoration-none category__shadow">
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src="https://product.hstatic.net/1000230642/product/dsmh09100trg__3__1e0fd31486ce419499b04b7cc65ee343_1024x1024.jpg" alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h4>Giày Thể Thao</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Tất cả sản phẩm */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">DANH SÁCH SẢN PHẨM</span>
        </h2>
        <div className="col-lg-4 col-6 text-left mb-5" style={{marginLeft: '30px'}}>
            <form action="">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm" onChange={(e) => setSearch(e.target.value)}/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </form>
        </div>
        <div className="row px-xl-5">
          <ShowProduct />
        </div>
        <ReactPaginate
          prevPageRel={"Trước"}
          nextLabel={"Sau"}
          breakLabel={"..."}
          pageCount={3}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handleClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page=item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>


      {/* Sản phẩm mới*/}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">SẢN PHẨM MỚI</span>
        </h2>
        <div className="row px-xl-5">
          <NewProduct />
        </div>
      </div>

      {/* Sản phẩm xem nhiều */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">SẢN PHẨM XEM NHIỀU</span>
        </h2>
        <div className="row px-xl-5">
          <ViewProduct />
        </div>
      </div>

      {/* Sản phẩm hot */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">SẢN PHẨM HOT</span>
        </h2>
        <div className="row px-xl-5">
          <HotProduct />
        </div>
      </div>
    </>
  );
};

export default ProductList;
