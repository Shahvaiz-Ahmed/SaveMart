import './App.css';
import axios from 'axios';
import logo from './download.png'
import React, { useState } from 'react';
import './Search.css'
import NameSearch from './NameSearch';

function App() {

  let x,y,z ;
  const [productid, setProductid] = useState()
  const [productname, setProductname] = useState()
  const [productprice, setProductprice] = useState()
  
  const getData = (value)=>{
     axios.get(`http://localhost:3000/api/savemart/getitemprice?barcode=${value}`).then((res)=>{
          console.log(res.data.result.NAME);
          x = res.data.result.ITEMID;
          y = res.data.result.NAME;
          z = res.data.result.SALESPRICE;
          console.log(x);
          setProductid(x);
          setProductname(y);
          setProductprice(z);
          console.log(productid);
          
      })
  }
  
  
  return(
   
    <div className='App'>
      <img src={logo} alt='logo' />
      <div className="search">
        <div id='searchInputs'>
        <label htmlFor="scanner">Scan Here</label>
        <input type="search" placeholder='Scan Here' id='scanner'  onChange={(e)=>{
            setTimeout(() => {
              getData(e.target.value);
              setTimeout(() => {
               e.target.value = '';
              }, 1000);
            }, 500);
        }} />
        </div>
                                      
                       {
                        x !=='' ? 
                        <div id='table'>
                          <div className='itemId'>
                          <h2>Item ID</h2>
                          <h6>{productid}</h6>
                          </div>
                          <div className='itemId'>
                          <h2>Name</h2>
                          <h6>{productname}</h6>
                          </div>
                          <div style={{borderRight: '1px solid #011C66', marginRight: '2rem'}} className='itemId'>
                          <h2>Price Inc. Tax</h2>
                          <h6 style={{ textAlign: 'end', marginRight: '3rem',fontWeight: 'bolder', marginTop: '5rem', marginBottom: 0 }} >PKR {productprice? productprice.toFixed(2): 0}</h6>
                          </div>
                          </div>
                        :<></>
                       }
                           
        <NameSearch/>
    </div>
      </div>
  );
}

export default App;
