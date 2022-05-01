import React, { Component } from 'react';
import './stylesheet/about.css'
import Navbar from './Navbar';
import Footer from './Footer';
export class about extends Component {
    render() {
        
        return <div > 
       
            <div className='about-color'></div>

            <div className='container container-setting'>
                    <div className='row'>
                        <div className='col about-heading-1'>
                            <h1> About CES </h1>
                            <center><hr className='hrline'></hr></center>
                            <br></br>
                            <div className="card card-1">

                                <div className="card-body card-body-1">
                                    <p><span>Civil Engineering Society (CES)</span>  in collaboration with the Department of Civil Engineering - IIT Hyderabad, aims to serve as a unique
                                        platform for all the civil engineering
                                        student to prosper in their career through the concept of "Learn-Network-Prosper".<br></br>
                                        Through the seminars, talks, and events, students have an opportunity to get exposed to the diverse
                                        fields of civil engineering which will make them appreciate the intricacies of civil engineering.
                                    </p><br></br>
                                    <h2 class="activity"><strong>Activities :</strong></h2> <br></br>

                                    <li >Seminars by various professors about their core research and the career opportunities associated
                                        with those respective fields.</li>
                                    <li> Talks by students who succesfully cracked IES and GATE examinations about the preparation strategies. </li>
                                    <li> Interactive sessions with distinguished Alumni of the Civil Engineering Department of IITH. </li>
                                    <li> Networking between Bachleors and PhD students through Research Mentor-Mentee Program. </li>
                                    <li> FAQ sessions with PhD students about the life of a PhD student. </li>
                                    <li> Workshops related to Civil Engineering related software like Staad-Pro, AutoCAD etc. </li>
                                    <li> Informal talks by faculty about their personal as well as professional experiences to strengthen
                                        the student-faculty relatonship. </li>
                                    <li> Organising Civil day, for promoting interaction and research based activities among civil enthusiasts. </li>
                                    <li> Site visits. </li>
                                    <li> Scheduled networking events between freshers and the seniors. </li>
                                    <li> Monthly circulation of innovative and new research development made in the said month in the field of Civil Engineering. </li>
                                    <li> Talks by industrial leaders about the job market and job profiles of Civil Engineers. </li>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            
        </div>;
    }
}

export default about;