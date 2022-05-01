import React from 'react';
import surya from './images/faculty/surya.jpg';
import rajgopal from './images/faculty/rajagopal.jpg';
import kvl from './images/faculty/kvl.jpg';
import madhavan from './images/faculty/madhavan.jpg';
import somala from './images/faculty/somala.jpg';
import anil from './images/faculty/anil.jpg';
import tarun from './images/faculty/tarun.png';
import umashankar from './images/faculty/umashankar.jpg';
import sireesh from './images/faculty/sireesh.jpg';
import basha from './images/faculty/basha.jpg';
import khan from './images/faculty/khan.png';
import yadav from './images/faculty/yadav.jpg';
import madhav from './images/faculty/madhav.png';
import sashidhar from './images/faculty/shashidhar.png';
import asif from './images/faculty/asif.jpg';
import debraj from './images/faculty/debraj.jpg';
import ambika from './images/faculty/ambika.png';
import pritha from './images/faculty/pritha.jpg';
import kbvn from './images/faculty/kbvn.png';
import maheswaran from './images/faculty/maheswaran.jpg';
import satish from './images/faculty/satish.jpg';
import seetha from './images/faculty/seetha.jpg';
import ali from './images/faculty/ali.jpg';
import vijay from './images/faculty/vijay.jpg';
import pawar from './images/faculty/pawar.png';
import ramya from './images/faculty/ramya.jpg';
import majid from './images/faculty/majid.jpeg';
const Faculty = () => {
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
        width: '80px',
        borderRadius: '8px',
        padding: '1px',
        color: 'white',

    };
    const main_card = {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginTop: '10px',
        border: 'none',
        textDecoration: 'none',
        marginBottom: '40px',

    };
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '10px',
        background: '#f1f2f6'
    };
    const structural_heading = {
        color: 'black',
        marginTop: '40px',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Gabriola',
        fontSize: ' 35px'
    };
    const hr = {
        justifyContent: 'center',
        textAlign: 'center',
        width: '200px',
        borderRadius: '8px',
        padding: '1px',
        background: 'black'
    };
    const card_deck = {

        marginTop: '20px',

        textDecoration: 'none',
        marginBottom: '40px'
    };


    const img = {
        width: '100%',
        height: '300px',

    };

    const faculty_name = {
        color: '#DC143C',
    };
    const icons = {

        margin: '20px',
        fontSize: '30px'


    };
    const icon_link = {
        padding: '20px',
        color: 'black',

    }


    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container-fluid' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}> Faculty</h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>

                            <h1 style={structural_heading}>Structural Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>


                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card} >
                                    <img src={surya} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. S. Suriya Prakash</h4>
                                        <h6>Head and Professor</h6>
                                        <p>Ph.D., Missouri University of Science and Technology, U.S.A.</p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:suriyap@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6307" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={rajgopal} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. Amirtham Rajagopal</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., Indian Institute of Technology Madras,India.</p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:rajagopal@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6303" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={kvl} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. K. V. L. Subramaniam</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., Northwestern University, U.S.A.</p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:kvls@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6304" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="card-deck" style={card_deck}>
                                <div class="card" style={main_card} >
                                    <img src={madhavan} class="card-img-top" alt="..." style={img} />
                                    <div class="card-body" >
                                        <h4 style={faculty_name}>Prof. Mahendrakumar Madhavan</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., University of Alabama at Birmingham, U.S.A. </p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:mkm@ce.iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6308" style={icon_link}><i class="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>

                                <div class="card" style={main_card}>
                                    <img src={somala} class="card-img-top" alt="..." style={img} />
                                    <div class="card-body" >
                                        <h4 style={faculty_name}>Dr. Surendra Nadh Somala</h4>
                                        <h6>Associate Professor</h6>
                                        <p>Ph.D., California Institute of Technology (Caltech), U.S.A.</p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:surendra@ce.iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6313" style={icon_link}><i class="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div class="card" style={main_card}>
                                    <img src={anil} class="card-img-top" alt="..." style={img} />
                                    <div class="card-body" >
                                        <h4 style={faculty_name}>Dr. Anil Agarwal</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Purdue University, U.S.A. </p>
                                        <h5>Structural Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:anil@ce.iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6312" style={icon_link}><i class="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div class="card" style={main_card}  >
                                            <img src={tarun} class="card-img-top" alt="..." style={img} />
                                            <div class="card-body" >
                                                <h4 style={faculty_name}>Prof. Tarun Kant</h4>
                                                <h6>Professor(Adjunct Professors)</h6>
                                                <p>Ph.D., Indian Institute of Technology Bombay, India. </p>
                                                <h5>Structural Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:tkant@iith.ac.in" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:91 40 2301-6249" style={icon_link}><i class="bi bi-telephone"></i></a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <h1 style={structural_heading}>Geotechnical Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>



                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card} >
                                    <img src={umashankar} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. B. Umashankar</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., Purdue University, U.S.A.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:buma@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6301" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={sireesh} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. S. Sireesh</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., Indian Institute of Science, India.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto: sireesh@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6302" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={basha} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. B. Munwar Basha</h4>
                                        <h6>Associate Professor</h6>
                                        <p>Ph.D., Indian Institute of Science,Bangalore, India.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:basha@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6311" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card} >
                                    <img src={khan} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Roshan Khan</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Indian Institute of Technology, Bombay, India.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:roshan@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6323" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={yadav} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Shwetabh Yadav</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Indian Institute of Science, India.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:shwetabh@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6321" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={madhav} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. M. R. Madhav</h4>
                                        <h6>Professor(Honorary Professors)</h6>
                                        <p>Ph.D., Indian Institute of Science, Bangalore, India.</p>
                                        <h5>Geotechnical Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:madhav@iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6249" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>




                            <h1 style={structural_heading}>Environmental Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>


                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card} >
                                    <img src={sashidhar} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. Shashidhar</h4>
                                        <h6>Professor</h6>
                                        <p>Ph.D., Indian Institute of Technology Madras, India.</p>
                                        <h5>Environmental and Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:shashidhar@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6305" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={asif} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Asif Qureshi</h4>
                                        <h6>Associate Professor</h6>
                                        <p>Ph.D., ETH Zurich, Switzerland.</p>
                                        <h5>Environmental Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:asif@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6310" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={debraj} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Debraj Bhattacharyya</h4>
                                        <h6>Associate Professor</h6>
                                        <p>Ph.D., University of New Brunswick, Canada.</p>
                                        <h5>Environmental Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:debrajb@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6309" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div className='row justify-content-center'>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div className="card" style={main_card}>
                                            <img src={ambika} className="card-img-top" alt="..." style={img} />
                                            <div className="card-body" >
                                                <h4 style={faculty_name}>Dr. Ambika S</h4>
                                                <h6>Assistant Professor</h6>
                                                <p>Ph.D., Indian Institute of Technology, Madras, India</p>
                                                <h5>Environmental Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ambika@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                                    <a href="tel:91 40 2301-6319" style={icon_link}><i className="bi bi-telephone"></i></a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div className="card" style={main_card}>
                                            <img src={pritha} className="card-img-top" alt="..." style={img} />
                                            <div className="card-body" >
                                                <h4 style={faculty_name}>Dr. Pritha Chatterjee</h4>
                                                <h6>Assistant Professor</h6>
                                                <p>Ph.D., Indian Institute of Technology, Kharagpur, India.</p>
                                                <h5>Environmental Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto: prith@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                                    <a href="tel:91 40 2301-6317" style={icon_link}><i className="bi bi-telephone"></i></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <h1 style={structural_heading}>Water Resources Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>




                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card}>
                                    <img src={kbvn} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. K. B. V. N. Phanindra</h4>
                                        <h6>Associate Professor</h6>
                                        <p>Ph.D., New Mexico State University, U.S.A.</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:phanindra@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6306 " style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={maheswaran} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Maheswaran Rathinasamy</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Indian Institute of Technology Delhi, India.</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:rmaheswaran@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6324" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={satish} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Satish Regonda</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., University of Colorado Boulder, U.S.A.</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:satishr@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6315" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="card-deck" style={card_deck}>
                                <div className="card" style={main_card}>
                                    <img src={seetha} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Seetha N</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Indian Institute of Science, Bangalore, India.</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:seetha@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6316 " style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>


                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={ali} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Dr. Sk Zeeshan Ali</h4>
                                        <h6>Assistant Professor</h6>
                                        <p>Ph.D., Indian Institute of Technology Kharagpur, India</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:zeeshan@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="tel:91 40 2301-6318" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="card" style={main_card}>
                                    <img src={vijay} className="card-img-top" alt="..." style={img} />
                                    <div className="card-body" >
                                        <h4 style={faculty_name}>Prof. Vijay Kumar Singh</h4>
                                        <h6>Professor(Distinguished Professors)</h6>
                                        <p>Ph.D., Colorado State University, USA.</p>
                                        <h5>Water Resources Engineering</h5>
                                        <div style={icons} className='icons'>
                                            <a href="mailto:vijaysingh46@gmail.com" style={icon_link}><i className="bi bi-envelope"></i></a>
                                            <a href="" style={icon_link}><i className="bi bi-telephone"></i></a>

                                        </div>

                                    </div>
                                </div>
                            </div>





                            <h1 style={structural_heading}>Transportation Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>



                            <div className='row justify-content-center'>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div className="card" style={main_card}>
                                            <img src={pawar} className="card-img-top" alt="..." style={img} />
                                            <div className="card-body" >
                                                <h4 style={faculty_name}>Dr. Digvijay S. Pawar</h4>
                                                <h6>Assistant Professor</h6>
                                                <p>Ph.D., Indian Institute of Technology, Bombay, India </p>
                                                <h5>Transportation Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:dspawar@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                                    <a href="tel:91 40 2301-6314" style={icon_link}><i className="bi bi-telephone"></i></a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div className="card" style={main_card}>
                                            <img src={ramya} className="card-img-top" alt="..." style={img} />
                                            <div className="card-body" >
                                                <h4 style={faculty_name}>Dr. Ramya Sri Mullapudi</h4>
                                                <h6>Assistant Professor</h6>
                                                <p>Ph.D., Indian Institute of Technology, Kharagpur, India.</p>
                                                <h5>Transportation Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto: ramyamullapudi@ce.iith.ac.in" style={icon_link}><i className="bi bi-envelope"></i></a>
                                                    <a href="tel:91 40 2301-6320" style={icon_link}><i className="bi bi-telephone"></i></a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <h1 style={structural_heading}>Hydraulic Engineering</h1>
                            <center><hr style={hr}></hr></center>
                            <br></br>



                            <div className='row justify-content-center'>
                                <div className='col-md-4'>
                                    <div className="card-deck" style={card_deck}>
                                        <div class="card" style={main_card}  >
                                            <img src={majid} class="card-img-top" alt="..." style={img} />
                                            <div class="card-body" >
                                                <h4 style={faculty_name}>Prof. Dr. ir. S. Majid Hassanizadeh</h4>
                                                <h6>Professor(Adjunct Professors)</h6>
                                                <p>Ph.D., Princeton University, USA. </p>
                                                <h5>Hydraulic Engineering</h5>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:s.m.hassanizadeh@uu.nl" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="" style={icon_link}><i class="bi bi-telephone"></i></a>

                                                </div>

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

export default Faculty;
