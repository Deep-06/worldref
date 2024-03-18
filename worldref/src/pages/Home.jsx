import React, { useEffect } from 'react'
import { getProduct } from '../redux/Products/action';
import { useDispatch, useSelector } from "react-redux";
import {styled} from "styled-components"

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
    <DIV>
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