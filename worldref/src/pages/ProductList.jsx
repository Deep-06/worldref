import React, { useEffect } from 'react'
import { getProduct } from '../redux/Products/action';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
 //import { products } from "../db"
 import {styled} from "styled-components"
export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((store) => store.productReducer.products);
  const isAuth = useSelector(state => state.authReducer.isAuthenticated); 

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
    <DIV >
      {products.length > 0 && products.map((e, i) => {
        return (
          <div key={i} style={{padding:'20px',backgroundColor:'lightblue',borderRadius:'5px',gap:'10px',textAlign:'left'}}>
            <img src={e.image} alt='img' width='100%' style={{borderRadius:'10px'}} />
            <h4>{e.name}</h4>
            <p><b >Price:</b> {e.price}</p>
            <p><b>Description:</b> {e.description}</p>
            <div style={{display:'flex',justifyContent:'space-around',alignContent:'center'}}>
            <button style={{padding:'10px',borderRadius:'10px'}} onClick={()=>navigate('/cart')} disabled={isAuth ? false : true}
           >Add to Cart</button>
           <button style={{padding:'10px',borderRadius:'10px'}} onClick={()=>navigate('/details')} disabled={isAuth ? false : true}
           >Check details</button>
            </div>
           

          </div>
        )
      })}
      </DIV>
    </div>
  )
}


const DIV = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
padding:'15px';

@media screen and (min-width:651px) and (max-width:1000px){
  grid-template-columns:repeat(3,1fr);
}

@media screen and  (max-width:650px){
  grid-template-columns:repeat(2,1fr);
}

`;