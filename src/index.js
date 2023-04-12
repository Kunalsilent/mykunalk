import React from "react";
import ReactDom from "react-dom";
import './index.css'

const name = 'kunal';
const last = "chauhan";
const age = "21";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();
const image1 = "https://picsum.photos/230/300 "
const image2 = "https://picsum.photos/220/300 "
const image3 = "https://picsum.photos/210/300 "
const portfolio = "https://heykunal.vercel.app/"

const heading ={
  color: '#fa9191',
  TextTransform:'capitalize',
  textAlign:'center',
    fontWeight: 'bold',
    textShadow: '5px 8px 8px #ffe9c5',
    margin: '20px 0' ,
    fontFamily: "'Alkatra', cursive",
  
};

ReactDom.render(
  //<>
  //  <h1> hii my name is {name}</h1>
  //  <p>
  //   your  lucky number is {Math.random()}         #------expression
  //   </p>

  // </>  ,


  <>
    <h1 style={heading} contentEditable="true">{` hii my name ${name} ${last} and i m  ${age} years old `} </h1>           #--------templates literals
    <p  >
      current date is = {currdate}
    </p>
    #------challenge 2   date and time fetch
   <p>                                                               
      current time is = {currtime}
    </p>
    <div className="image">
    <a href={portfolio}>
      <img src={image1} alt="random images" /></a>
      <img src={image2} alt="random images" />
      <img src={image3} alt="random images" />
    </div>
  </>,
  document.getElementById('root')

) 

