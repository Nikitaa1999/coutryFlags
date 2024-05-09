import {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

export default function Country(){
    const [country, setCountry]=useState([]);

    useEffect(()=>{
      axios.get('https://restcountries.com/v3.1/all')
      .then((data)=>{
        
        // console.log(data.data[0].flags);
        setCountry(data.data);
        // console.log(country[0].flags)
  
      })
    },[])

    const Card = ({flagUrl, name})=>{
        return (
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"100vh",
                margin:"10px",
                padding:"10px",
                border: "1px solid black",
                borderRadius:"10px",
                flexDirection:"column",
                width:"200px",
                height:"250px"
            }}>
            <img src={flagUrl} alt={name} style={{width:"100px", height:"100px"}}/>
            <h2>{name}</h2>
        
            </div>
        )
    }

    return (
    
        <>
        <div>
            
        </div>
         <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"15px"
         }}>
            <TextField label="Search for Countries"/>
    </div>
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        flexWrap:"wrap"

    }}>
   
    
{country.map((country)=><Card key={country.name.common} flagUrl={country.flags.png} name={country.name.common}/>

)}


    </div>
    </>)
}