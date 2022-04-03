import Headerimg from './images/undraw_remotely_2j6y.svg'
import React, { useState, useEffect } from 'react'
import './css/style.css'
import './css/bootstrap.min.css'
import './css/bootstrap.min.css.map'
import './css/bootstrap/bootstrap-grid.css'
import './css/bootstrap/bootstrap-reboot.css'
import {useSelector, useDispatch} from 'react-redux'
import calculatorData from "../data/api.json"
const Headercomponet=(props)=>{
  let catall=[];
  catall=calculatorData.categories;
/*State for countervariables(increment,decrement)  */

//const count=useSelector(state=>state.count);
//const dispatch=useDispatch();
/*Storing data to file */
//var fs = require('browserify-fs');
var filesystem = require('level-filesystem');
const formObject = {
  "name":"arif updated",
  "surname":"shariati updated"
}
var obj = JSON.stringify(formObject)
/*State to manage username */
const unamefornext=useSelector(state=>state.uname);
const unamedispatch=useDispatch();

/*Storing Username and password */
  const [username,serusername]=useState('');
  const [password,serpassword]=useState('');
  /*Error Hadnling */
  const [uerror,setuerror]=useState({})
  const [perror,setperror]=useState({})
  /*Handling submit */  
  const navigateto=(e)=>{
    const isValidate=Validateform();
    if(isValidate){
      unamedispatch({type:"login",value:username})
     // dispatch({type:"INCREMENT"})
      console.log(unamefornext);
      //console.log(count);
      props.history.push("/home");
      filesystem.writeFile('/Userdata.json',obj, function() {
          console.log("The file was saved!");
        });
    }
  }
  const Validateform=()=>{
const uer={};
const per={};
let flag=true;
if(username.length===0){
  flag=false;
  uer.value='Enter UserName';
}
if(password.length===0){
  flag=false;
  per.value='Enter Password';
}
setuerror(uer)
setperror(per)
return flag;
  }
return(
<div id='header'>
<div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={Headerimg} alt="Image" className="img-fluid"/>
        </div>
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3>Sign In</h3>
              <p className="mb-4">Welcome Back!.</p>
            </div>
            <form action="#">
              <div className="form-group first">
                <input type="text" className="form-control" id="username" placeholder='Username' onChange={(e)=>{serusername(e.target.value)}}/>
              {Object.keys(uerror).map((key1)=>{
                return <div style={{color:"red"}}>{uerror[key1]}</div>
              })}
              </div>
              <div className="form-group last mb-4">
                <input type="password" className="form-control" id="password" placeholder='Password'  onChange={(e)=>{serpassword(e.target.value)}}/> 
                {Object.keys(perror).map((key)=>{
                return <div style={{color:"red"}}>{perror[key]}</div>
              })}
              </div>
              <input type="submit" className="btn btn-block btn-primary" onClick={navigateto}/>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {
    catall.map((currentValue,index)=>{
      return(
          <div>
             <img id={currentValue.strCategory} src={currentValue.strCategoryThumb} alt={currentValue.strCategory}></img>
             <p>{currentValue.strCategory}</p>
          </div>
      )
  })
  }
</div>
)
}
export default Headercomponet