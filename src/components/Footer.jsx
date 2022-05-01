import React, { Component } from 'react';

import './stylesheet/footer.css'

export class footer extends Component {
    render() {
        return <div >
            <>
                <div className='footer'>
                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            {/*<h1 className='heading'>quick links</h1>
                            <center><hr></hr></center>
    */}
                            <br></br>
                            <br></br>
                            <div className='col-md-3 tab-1'>
                                <a href="https://www.iith.ac.in/">IITH Website</a><br></br>
                                <a href="https://civil.iith.ac.in/">IITH Civil Website</a><br></br>
                                <a href="./faculty">Faculty </a><br></br>
                               
                            </div>
                            <div className='col-md-3 tab-2'>
                                <h2>follow us</h2><center><hr></hr></center>
                                <a class="social" href="https://www.facebook.com/CivilEngineeringSocietyIITHyderabad/"><i class="bi bi-facebook"></i></a>
                                <a class="social" href="https://www.instagram.com/ces_iith/"><i class="bi bi-instagram"></i></a><br></br>
                                <a class="social-1" href="https://youtube.com/channel/UCaNcGV6cJQt3S1ykonNIq7g"><i class="bi bi-youtube"></i></a>
                                <a class="social-1" href="https://www.linkedin.com/company/civil-engineering-society-iit-hyderabad"><i class="bi bi-linkedin"></i></a>
                            </div>
                            <div className='col-md-3 tab-3'>
                                <h2>Contact us</h2><center><hr></hr></center>
                                <p> Head, Department of Civil Engineering, Indian Institute of Technology Hyderabad, Kandi, Telangana - 502285, India.</p>
                                <a href="mailto:ces@ce.iith.ac.in">Mail id : ces@ce.iith.ac.in</a><br></br>
                                <a href="tel:91 7769944432">Mobile : +91 7769944432</a>
                            </div>

                            <div className='col-md-3 tab-3'>
                            <h2>Location</h2><center><hr></hr></center>
<p>Indian Institute of technology Hyderabad
Near NH-65, Sangareddy, Kandi, Telangana 502285</p>
<a href='https://www.google.com/maps/place/Indian+Institute+Of+Technology+(IIT),+Hyderabad/@17.5947078,78.1208514,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcbefdc136bffbb:0x73414ff6594c9191!8m2!3d17.5947027!4d78.1230401'>Map Link</a>

                            </div>

                            <p className='allrightreserved'>©Civil Engineering Society IIT Hyderabad | All rights reserved 2022</p>
                        </div>
                    </div>
                </div>
            </>
        </div>;
    }
}



export default footer;