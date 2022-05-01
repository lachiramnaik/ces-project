import React, { Component } from 'react';
import './stylesheet/home.css'
import img1 from './images/home/logo.png'
import ces from './images/home/ces.mp4'
import iith from './images/home/iith.mp4'

export class Home extends Component {
    render() {

        return <div>
        
            {/*section-1 */}
            <section className='section-1'>

                <video autoPlay muted loop className='video-1'>
                    <source src={iith} type="video/mp4"></source>
                </video>

                <div className="content-1">
                    <img src={img1}></img>
                    <h1>Civil Engineering Society IIT Hyderabad</h1>

                </div>
            </section>
            {/*section-2 */}
            <section className='section-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col about-heading'>
                            <h1> ABOUT CES </h1>
                            <center><hr className='hrline-1'></hr></center>
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

            </section>


            {/*section-3 */}
            <section className='section-3'>
                <div className='container-fluid container-2'>
                    <div className='row'>
                        <div className='col heading-3'>
                            <center><h1>Short Video</h1></center>
                            <center><hr className='hrline-3'></hr></center>
                            <br></br>
                            <br></br>
                            <video autoPlay muted loop className="Video-2" style={{ width: '100%' }}>
                                <source src={ces} type="video/mp4"></source>


                            </video>



                        </div>
                    </div>
                </div>

                {/*section-4 */}
            </section>
            <section className='section-4'>
                <div className='container container-3'>
                    <div className='row'>
                        <div className='col-sm-6 heading-2 '>
                            <center><h1>News</h1></center>
                            <center><hr className='hrline-2'></hr></center>
                            <div class="card card-3">
                                <div class="card-body card-body-3">



                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" direction='right'>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <p className=' events-news'>IIT Hyderabad Inter-IIT Civil Contingent has finished 5th among 13 IITs
                                                    in the Inter-IIT Civil Conclave 2020 organized by IIT Roorkee during November 7th-8th.</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p className=' events-news'>PM session conducted on 8th June.</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p className=' events-news'>IITH secured 4th rank overall in InterIIT Civil Conclave 2021.</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p className=' events-news'>Birth anniversary of father of civil engineering celebrated.</p>
                                            </div>
                                        </div>
                                    </div>







                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 heading-2'>
                            <center><h1 >Events</h1></center>
                            <center><hr className='hrline-2'></hr></center>
                            <div class="card card-3">
                                <div class="card-body card-body-3">


                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <p className=' events-news'>Civil Engineering Society(CES) Orientation and Placement Talk - 1 was successfully organized on 24th October, 2020.</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p className=' events-news'>Seminar on 'Metamaterials Towards Resilient Infrastructure' conducted on 25th June,2021.</p>
                                            </div>

                                        </div>
                                    </div>










                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>;
    }
}

export default Home;
