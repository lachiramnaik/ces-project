import React from 'react';
import surya from './images/funding team/surya.jpg';
import digvijay from './images/funding team/pawar.jpg';
import pratik from './images/funding team/Pratik.jpg';
import ganapati from './images/funding team/ganapati.jpg';
import dhanush from './images/funding team/Dhanush.jpg';
import hariomsingh from './images/funding team/Hari Om Singh.jpg';
import lachiram from './images/funding team/lachiram.jpg';
import sowbhagya from './images/funding team/sowbhagya.jpg';

const Funding_team = () => {
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
        width: '150px',
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
        width: '100px',
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
                    <h1 style={about_heading_1}> Founding Team </h1>
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

                                <div className='col-lg-3' style={card_col}>
                                    <img src={ganapati} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Ganapati M Patil</h5>
                                            <p className="card-text">PhD Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:Ce17resch11005@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:917901441160" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/ganapati-patil-5a1534190" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={pratik} style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Pratik Chaudhary</h5>
                                            <p className="card-text">M.Tech Representative</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:CE19MTECH11018@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:918130831242" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/pratik-chaudhary-a993321b4/" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={dhanush} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Dhanush Sahasra</h5>
                                            <p className="card-text">B.Tech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:CE17BTECH11011@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:919121491040" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/dhanushsahasra" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={hariomsingh} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Hari Om Singh</h5>
                                            <p className="card-text">B.Tech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18btech11013@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:917897942457" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://linkedin.com/in/hari-om-singh-410061196" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className='row justify-content-center' >
                                <center><h1 style={faculty}>Web-Designers</h1></center>
                                <center><hr style={hr_2}></hr></center>
                                <div className='col-md-4' style={card_col}>
                                    <img src={lachiram} style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Lachiram Naik</h5>
                                            <p className="card-text">Web Developer</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce18btech11022@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:919553716082" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/lachiram-naik-0973871b7" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4' style={card_col}>
                                    <img src={sowbhagya} style={img} />
                                    <div className="card" style={team_card} >


                                        <div className="card-body">
                                            <h5 className="card-title">Sowbhagya</h5>
                                            <p className="card-text">Web Developer</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18btech11008@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:919550073918" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/sowbhagya-lakshmi-bobbala-826a19202" style={icon_link}><i class="bi bi-linkedin"></i></a>
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

export default Funding_team;
