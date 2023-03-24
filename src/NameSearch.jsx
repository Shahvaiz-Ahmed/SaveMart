import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'
import StickyHeadTable from './StickyHeadTable';

function NameSearch() {

    const [value, setValue] = useState("")
    const [dataValue, setDataValue] = useState()

    const searchByName = async ()=>{
        await axios.get(`http://localhost:3000/api/savemart/getitempricebyname?name=${value}`).then((res)=>{
            setDataValue(res.data.result);
        })
    }
  return (


    <div className="nameSearch">
        <form >
            <input type="search" placeholder='Search by Name' id='inputSearch' value={value} onChange={(e) => {
                setValue(e.target.value);
                }}/>
        <button type="submit" onClick={(e)=>{
            e.preventDefault();
            setValue(document.querySelector('#inputSearch').value);
            console.log(value);
            searchByName();
            console.log(e);
        }} >Search</button>
        </form>
        <table style={{ maxWidth: "60vw" }} >                                      
                       {
                        dataValue ? 
                        <StickyHeadTable dataValue={dataValue} />
                        :<></>
                       }
                         
        </table>
    </div>
  )
}

export default NameSearch