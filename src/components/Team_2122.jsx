import React from 'react';
import surya from './images/team 21-22/surya.jpg';
import digvijay from './images/team 21-22/pawar.jpg';
import vedashree from './images/team 21-22/Vedashree.jpg';
import smita from './images/team 21-22/Smita.jpg';
import kuldeep from './images/team 21-22/Kuldeep.jpg';
import sheeraja from './images/team 21-22/sheeraja.jpg';
import aditya from './images/team 21-22/Aaditya.jpg';
import ganapati from './images/team 21-22/ganapati.jpg';
import shridhar from './images/team 21-22/Shridhar.jpg';
import swapnil from './images/team 21-22/Swapnil.jpg';
import sumit from './images/team 21-22/Sumit.jpg';
import lachiram from './images/team 21-22/lachiram.jpg';
import bhuvanesh from './images/team 21-22/bhuvanesh.jpg';
import saivenkat from './images/team 21-22/Sai Venkat.jpg';
import saikrishi from './images/team 21-22/sai krishi.jpeg';
//import lachiram from './images/team 21-22/lachiram.jpg';


const Team_2122 = () => {
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
        padding: '40px',
        background: '#f1f2f6'
    };
    const faculty = {
        marginTop: '30px',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Gabriola',
        fontSize: '40px'
    };
    const hr_2 = {
        justifyContent: 'center',
        textAlign: 'center',
        width: '80px',
        borderRadius: '8px',
        padding: ' 1px',
        color: 'rgb(0, 0, 0)',
        background: 'black'
    }
    const img = {
        width: '200px',
        height: '200px',

        clipPath: 'circle()',


    };

    const team_card = {
        border: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px'

    };
    const card_col = {
        marginTop: '50px'
    };
    const icons = {

        margin: '10px 0px 10px 0px',
        fontSize: '30px'


    };
    const icon_link = {
        padding: '15px',
        color: 'black',

    }

    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container-fluid' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}>CES Team  </h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>


                            <div className='row justify-content-center' >
                                <center><h1 style={faculty}>Faculty</h1></center>
                                <center><hr style={hr_2}></hr></center>
                                <div className='col-md-4' style={card_col}>
                                    <img src={surya} style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Suriya Prakash</h5>
                                            <p className="card-text">Head of the Department</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:suriyap@ce.iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6307" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/suriya-prakash-s-profile/index.html" style={icon_link}><i class="bi bi-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4' style={card_col}>
                                    <img src={digvijay} style={img} />
                                    <div className="card" style={team_card} >


                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Digvijay S. Pawar</h5>
                                            <p className="card-text">Faculty In-charge</p>
                                            <div style={icons}>
                                                <a href="mailto:dspawar@ce.iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6314" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/people_faculty_digvijay/index.html" style={icon_link}><i class="bi bi-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className='row justify-content-center' >
                                <center><h1 style={faculty}>Student Team</h1></center>
                                <center><hr style={hr_2}></hr></center>

                                <div className='row justify-content-center' >
                                <div className='col-md-4' style={card_col}>
                                    <img src={vedashree} style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Vedashree Chandewar</h5>
                                            <p className="card-text">General Secretary</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce18btech11036@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7769944432" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/vedashree-chandewar-9099571b3" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>





                                <div className='col-lg-3' style={card_col}>
                                    <img src={ smita} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Smita Singh</h5>
                                            <p className="card-text">PhD Representative-1</p>
                                            <div style={icons}>
                                                <a href="mailto:ce17resch11007@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9599500335" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/smita-singh-iitr-iith/" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ kuldeep}  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Kuldeep Singh Sodha</h5>
                                            <p className="card-text">PhD Representative-2</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce20resch11010@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8769157733" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/kuldeep-singh-sodha-274810150/" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={ sheeraja} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">A.L.Ksheeraja</h5>
                                            <p className="card-text">MTech Representative-1</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20mtech14010@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9148788279" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/ksheeraja-akkiraju-630516100" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ aditya} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Aaditya Thakkar</h5>
                                            <p className="card-text">MTech Representative-2</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20mtech14008@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7575027081" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/aadityathakkar" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className='row justify-content-center' >
                                

                        
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ ganapati} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Ganapati M Patil</h5>
                                            <p className="card-text">Events & Hospitality Coordinator</p>
                                            <div style={icons}>
                                                <a href="mailto:Ce17resch11005@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+917901441160" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/ganapati-patil-5a1534190" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ shridhar}  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Kulkarni Shridhar</h5>
                                            <p className="card-text">Events and hospitality executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce18btech11019@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9158831095" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/shridhar-kulkarni-74531b202" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={ swapnil} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Swapnil Vaidya</h5>
                                            <p className="card-text">Events and hospitality executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18btech11031@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+917972175185" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/swapnil-vaidya-3682701aa" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ sumit} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Sumit Saha</h5>
                                            <p className="card-text">Events and hospitality executive</p>
                                            <div style={icons}>
                                                <a href="#" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="#" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className='row justify-content-center' >
                            
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ bhuvanesh} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Bhuvenesh Sharma</h5>
                                            <p className="card-text">PR Coordinator</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18btech11007@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+916355394988" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={lachiram }  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Lachiram Naik</h5>
                                            <p className="card-text">Web Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce18btech11022@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9553716082" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/lachiram-naik-0973871b7" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={ saikrishi} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Sai Krishi</h5>
                                            <p className="card-text">Design Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce19btech11031@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+918790340249 " style={icon_link}><i class="bi bi-telephone"></i></a>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ saivenkat} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">N.Sai Venkat</h5>
                                            <p className="card-text">publicity and marketing executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce19btech11015@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9553366368" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




































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

export default Team_2122;
