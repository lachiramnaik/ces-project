import React, { Component } from 'react';
import  { useState} from 'react';

const Form=()=> {
  
      const[user,setuser]=useState({
name:"",email:"",phone:"",work:"",password:"",cpassword:""
      });
      let name,value;
      const handleInputs=(e)=>{
console.log(e);
name=e.target.name;
value=e.target.value;
setuser({...user,[name]:value});
      }

const postdata=async(e)=>{
e.preventDefault();

}



    return (
    <div>
        <div className='container md-5'>
            <div className='row'>
                <div className='col'>
                <form method='POST'>
  <div class="form-group">
    <label htmlfor="name">Name</label>
    <input type="name" class="form-control" name='name' id="name" aria-describedby="emailHelp" placeholder="Enter name" autoComplete='off'
    value={user.name}
    onChange={handleInputs}
    />
   </div>
   <div class="form-group">
    <label htmlfor="email">Email</label>
    <input type="email" class="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter Email" autoComplete='off'
    value={user.email}
    onChange={handleInputs} 
    />
   </div>
   <div class="form-group">
    <label htmlfor="phone">Phone</label>
    <input type="number" class="form-control" name='phone' id="phone" aria-describedby="emailHelp" placeholder="Enter phone" autoComplete='off'
    value={user.phone}
    onChange={handleInputs}
    />
   </div>
   <div class="form-group">
    <label htmlfor="work">Work</label>
    <input type="name" class="form-control" name='work' id="work" aria-describedby="emailHelp" placeholder="Enter work" autoComplete='off'
    value={user.work}
    onChange={handleInputs}
    />
   </div>
   <div class="form-group">
    <label htmlfor="password">Password</label>
    <input type="password" class="form-control" name='password' id="password" aria-describedby="emailHelp" placeholder="Enter password" autoComplete='off'
    value={user.password}
    onChange={handleInputs}
    />
   </div>
   <div class="form-group">
    <label htmlfor="cpassword">Conform Password</label>
    <input type="password" class="form-control" name='cpassword' id="cpassword" aria-describedby="emailHelp" placeholder="Enter conform password" autoComplete='off'
    value={user.cpassword}
    onChange={handleInputs}
    />
   </div>
  
  <button type="submit" class="btn btn-primary" onChange={postdata}>Submit</button>
</form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Form;
