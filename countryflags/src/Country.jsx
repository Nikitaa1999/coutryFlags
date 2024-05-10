import {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import React from 'react'

export default function Country(){
    const [country, setCountry]=useState([]);
    const [filteredCountry, setFilteredCountry]=useState(country);
    const[searchField,setSearchField]=useState('');

    useEffect(()=>{
        try{
      axios.get('https://restcountries.com/v3.1/all')
      .then((data)=>{
        
        // console.log(data.data[0].flags);
        setCountry(data.data);
        // console.log(country[0].flags)
  
      })}
      catch(err){
        console.log(err);
      }
    },[])

    const onSearchChange=(event)=>{
 
        const searchFieldString=event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        }

        useEffect(()=>{
            const newfilterdCountry=country.filter((country)=>{
              return country.name.common.toLocaleLowerCase().includes(searchField);
        })
              setFilteredCountry(newfilterdCountry)
           },[country,searchField])

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
                 height:"200px"
            }}>
            <img src={flagUrl} alt={name} style={{width:"100px", height:"100px"}}/>
            <h2>{name}</h2>
        
            </div>
        )
    }

    return (
    
        <>
       
         <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"15px"
         }}>
            {/* <TextField 
            onChange={onSearchChange} 
            label="Search for Countries"/> */}
            <input type="text"
        onInput={onSearchChange} 
            name="Search for Countries" 
            />
    </div>
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        flexWrap:"wrap"

    }}>
   
    
{filteredCountry.map((country)=><Card key={country.name.common} flagUrl={country.flags.png} name={country.name.common}/>

)}


    </div>
    </>)
}