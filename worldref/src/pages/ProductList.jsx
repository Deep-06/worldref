import React, { useEffect } from 'react'
import { getProduct } from '../redux/Products/action';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
 //import { products } from "../db"
export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((store) => store.productReducer.products);
  const isAuth=useSelector((store) => store.authReducer.isAuth);

  useEffect(() => {
    const paramObj = {
       
    }
   dispatch(getProduct({ params: paramObj }))
    // getProduct(dispatch);
  }, [])
  console.log(products)

  return (
    <div >
    <h3>Products</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',padding:'15px'}}>
      {products.length > 0 && products.map((e, i) => {
        return (
          <div key={i} style={{padding:'20px',backgroundColor:'lightblue',borderRadius:'10px',gap:'10px'}}>
            <img src={e.image} alt='img' width='100%'/>
            <p>{e.name}</p>
            <p>Price: {e.price}</p>
            <p>Description: {e.description}</p>
           <button style={{height:'30px',borderRadius:'10px'}} onClick={()=>navigate('/cart')} disabled={isAuth ? false : true}
           >Add to Cart</button>
           <button style={{height:'30px',borderRadius:'10px'}} onClick={()=>navigate('/details')} disabled={isAuth ? false : true}
           >Check details</button>

          </div>
        )
      })}
      </div>
    </div>
  )
}
// disabled={isAuth ? false : true}