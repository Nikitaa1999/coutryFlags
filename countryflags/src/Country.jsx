import {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import React from 'react'
import "./Country.css"

export default function Country(){
    const [country, setCountry]=useState([]);
    const [filteredCountry, setFilteredCountry]=useState(country);
    const[searchField,setSearchField]=useState('');

    // useEffect(()=>{
    //     try{
    //   axios.get('https://restcountries.com/v3.1/all')
    //   .then((data)=>{
        
    //     // console.log(data.data[0].flags);
    //     setCountry(data.data);
    //     // console.log(country[0].flags)
  
    //   })}
    //   catch(error){
    //     console.error();
    //   }
    // },[])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("https://restcountries.com/v3.1/all");
            const data = await resp.json();
            setCountry(data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

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
            <div className="countryCard">
            <img src={flagUrl} alt={name}></img>
            <p>{name}</p>
          </div>
        )
    }

    return (
    
        <div>
       
         <div className='inp'>
             {/* <TextField 
            onChange={onSearchChange} 
            label="Search for Countries"/>  */}
            <input type="text"
        onInput={onSearchChange} 
            name="Search for Countries" 
            placeholder="Search for Countries"
            margin="15px"
            />
        </div>

        <div className='App'>

        {filteredCountry.map((country)=><Card key={country.name.common} flagUrl={country.flags.png} name={country.name.common}/>
    )}
        </div>


{/*     
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        flexWrap:"wrap"

    }}>
   
    
{filteredCountry.map((country)=><Card key={country.name.common} flagUrl={country.flags.png} name={country.name.common}/>

)}


    </div> */}
    </div>)
}