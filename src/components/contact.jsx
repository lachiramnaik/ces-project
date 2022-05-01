import React,{useState} from 'react';
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const[data,setdata]=useState({
subject:'',
name:'',
email:'',
queries:''
    })
    const{subject,name,email,queries}=data;
    const changehandle=e=>{
        setdata({
            ...data,[e.target.name]:e.target.value
        })
    }
const submithandle = e =>{
    e.preventDefault();

    emailjs.sendForm('service_hn8sfhf', 'template_fzaodzj', e.target, 'user_ETFL8h3TIXSsaOJtiVH1x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

}
    //css stylimg
   
    const about_color = {
        height: '350px',
        background: '#c31432',

        background: '-webkit-linear-gradient(to right, #240b36, #c31432)',

        background: 'linear-gradient(to right, #240b36, #c31432)'

    };
    const container_setting = {
        marginTop: '-250px'

    };

    const about_heading_1 = {
        color: '#ffffff',
        marginTop: '40px',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Gabriola',
        fontSize: ' 40px'

    };
    const hr_1 = {
        justifyContent: 'center',
        textAlign: 'center',
        width: '100px',
        borderRadius: '8px',
        padding: '1px',
        color: 'white',

    };
    const main_card = {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginTop: '50px',
        border: 'none',
        textDecoration: 'none',
        marginBottom: '40px'
    };
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '40px'
    };
    

    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container' style={container_setting}>
            <div className='row justify-content-center'>
                <div className='col-lg-6'>
                    <h1 style={about_heading_1}>Contact Us</h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>

                       <div class="card-body">
                        <form action="https://formspree.io/f/moqprbaq" method="post">
                            <input type="text" name="Name" placeholder="Name" class="form-control mb-2" required/>
                            <input type="email" name="Email" placeholder="Email" class="form-control mb-2" required/>
                         
                            <textarea name="Queries" class="form-control query mb-2" placeholder=" Queries" required></textarea>
                            <button class="btn btn-success" name="btn-send"> Send </button>
                        </form>
</div>
 {/*<form onSubmit={submithandle}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label ">Subject</label>
  <input type="name" name='subject' class="form-control" id="exampleFormControlInput1" placeholder="Full Name" required
  value={subject}
  onChange={changehandle}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label ">Full Name</label>
  <input type="name" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Full Name" required
  value={name}
  onChange={changehandle}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="Email " required
  value={email}
  onChange={changehandle}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Queries</label>
  <textarea class="form-control" name='queries' id="exampleFormControlTextarea1" rows="4" placeholder='Queries' required
  value={queries}
  onChange={changehandle}
  />
</div>
<button type='submit' class="btn btn-success" name="submit"> Send </button>
</form>*/}



                        </div>
                    </div>

                </div>
            </div>

            {/*<div classNameName='row'>
<div className='col-sm-6 '>
hello
</div>
<div className='col-sm-6'>
hello
</div>
</div>*/}





        </div>





    </div>;
};

export default Contact;

