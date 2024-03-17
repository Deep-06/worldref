import React, { useEffect } from 'react'
import { getProduct } from '../redux/Products/action';
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  useEffect(() => {
    const paramObj = {
       
    }
   dispatch(getProduct({ params: paramObj }))
  }, [])
  return (
    <div>
      <h3>Home Page</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',padding:'15px'}}>
      {products.length > 0 && products.map((e, i) => {
        return (
          <div key={i} style={{padding:'20px',backgroundColor:'lightblue',borderRadius:'10px',gap:'10px'}}>
            <img src={e.image} alt='img' width='100%'/>
            <p>{e.name}</p>
            <p>{e.price}</p>
            <p>{e.description}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}
