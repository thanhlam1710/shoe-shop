import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAcions } from "../redux/cart/cartSilce";
import { useState} from "react";



const CartItem = ({ item }) => {
  const [items, setItems] = useState([])
  const { id, title, price, image, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  // Tăng item
  const increment = () => {
    dispatch(
      cartAcions.addItem({
        id,
        title,
        price,
        image,
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(item))
  }, [item])

  

  //   Giảm item
  const decreceItem = () => {
    dispatch(cartAcions.removeItem(id))
  }

  //   Giảm item
  const deleteItem = () => {
    dispatch(cartAcions.deleteItem(id))
  }

  return (
    <>
      <tbody className="align-middle">
        <tr>
          <td className="align-middle">
             {title}
          </td>
          <td className='align-middle'>
          <img src={image} alt="" style={{ width: "100px" }} />
          </td>
         
          <td className="align-middle">{price} ₫</td>
          <td className="align-middle">
            <div
              className="input-group quantity mx-auto"
              style={{ width: "100px", display: "flex", justifyContent: "center", alignItems: 'center' }}
            >
              <div className="input-group-btn">
                <button className="btn btn-sm btn-primary btn-minus" onClick={decreceItem}>
                  <i className="fa fa-minus"></i>
                </button>
              </div>     
              <span style={{padding: '10px', overflow: 'hidden', width: '39px'}}>{quantity}</span>
              <div className="input-group-btn">
                <button
                  className="btn btn-sm btn-primary btn-plus"
                  onClick={increment}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </td>
          <td className="align-middle">{totalPrice} ₫</td>
          <td className="align-middle">
            <button className="btn btn-sm btn-danger" onClick={deleteItem}>
              <i className="fa fa-times"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
