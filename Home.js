import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Home.css"
import { useState } from 'react';
import Writenote from './writenote';
import Backdrop from './Backdrop';
import Dairy from './Dairy';
import { Link } from 'react-router-dom';
function Home(){
    const[noteisopen, setnoteisopen]=useState(false);
const Hello=()=>{
    alert("Hello");
}
function Note(){
    setnoteisopen(true);
}
    return(
        <div className="home-main">
             <h1>Dairy</h1>
             <div class="paper">
            <div class="pin">
    <div class="shadow"></div>
    <div class="metal"></div>
    <div class="bottom-circle"></div>
  </div>
  <p>Write Your Feelings Here
 </p>
 <button className="btn" onClick={Note}>Go</button>
    </div> 
    {noteisopen && <Writenote />}   
    {noteisopen && <Backdrop/>}  
        </div>
    )
}
export default Home;