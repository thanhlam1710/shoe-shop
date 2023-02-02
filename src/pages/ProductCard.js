import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAcions } from "../redux/cart/cartSilce";


const ProductCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  const {id, title, price, image, desc, category} = props.item
  // Đổi background Card
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartAcions.addItem({
      id,
      title,
      image,
      price
    }))
  }

  console.log(cartAcions.addItem());

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={id} >
      <div className="product-item change bg-light mb-4">
        <div className="product-img position-relative overflow-hidden change">
          <img className="img-fluid w-100" src={image} alt="" />
          <div className="product-action">
            <Link
            to=''
              className="btn btn-outline-dark btn-square"
              onClick={addToCart}
            >
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <a className="btn btn-outline-dark btn-square" onClick={handleClick}>
              <i className="far fa-heart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" >
              <i className="fa fa-sync-alt"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="a">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div className={isActive ? "text-center py-4 change" : "text-center py-4"}>
          <Link
            to={`/product/${id}`}
            className="h6 text-decoration-none text-truncate"
            href="a"
          >
            {title}
          </Link>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>$123.00</h5>
            <h6 className="text-muted ml-2">
              <del>{price}</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
