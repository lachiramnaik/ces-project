import React from 'react';
import venkat from './images/seminars/venkat.jpg';
import kvl from './images/seminars/kvl.jpg';
import arnab from './images/seminars/Arnab.jpg';
import tanusree from './images/seminars/Tanusree.jpg';
const Seminars = () => {
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
        marginTop: '50px',
        border: 'none',
        textDecoration: 'none',
        marginBottom: '40px'
    };
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '20px'
    };
    const tittle={
        color : 'white',
        backgroundColor: '#cc0044',
        padding:  '20px',
        height : 'auto',
        width : '100%',
        fontSize:'30px',
        margin :' 0 0 20px 0',
        borderRadius : '4px'

    };
    const img = {
        width: '200px',
        height: '200px',
 clipPath: 'circle()',
};
const speaker_name={
paddingTop : '10px',
color : '#cc0044',
fontSize:'25px'
};
const speaker_position={
    fontSize:'15px'
};
const abstract={
    color : '#cc0044',
    textAlign:'left'

};
const content={
    lineHeight: '25px',
  fontSize: '20px',
  wordSpacing:'5px',
  textAlign:'left'
};

   const videos={
       marginTop:'8px',
       textAlign:'left'
};
const videos_link={
textDecoration:'none',
color:'red'
};


    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}> Seminars </h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<h2 style={tittle}>CES Orientation and Placement Talk</h2>
<img src={venkat} style={img}></img>
<h3  style={speaker_name}> Venkat Ramoju</h3>
<h4 style={speaker_position}>Operations Officer, HPCL</h4>
<h3 style={abstract}>Abstract:-</h3>
<p style={content}>First event of CES - CES Orientation and Placement talk by Mr. Venkat Ramoju was successfully held on 24th October 2020. Dr. S Suriya Prakash, HoD - Department of Civil Engineering, and Dr. Digivijay S. Pawar, Faculty Advisor - Civil Engineering Society addressed the audience during orientation. Mr. Venkat Ramoju, who is an Operations Officer at Hindustan Petroleum Corporation Limited (HPCL) and an alumnus of IIT Hyderabad (Batch 2020), delivered the placement talk. The talk focused on preparation for the placement exams, do's and dont's during the placement season, interview experiences, concluded by a Q & A session.</p>
                            </div>
                            </div>


                            <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<h2 style={tittle}>A Talk on Careers in Civil Engineering</h2>
<img src={kvl} style={img}></img>
<h3  style={speaker_name}> Prof. K.V.L. Subramaniam</h3>
<h4 style={speaker_position}>Professor, Department of Civil Engineering, IIT Hyderabad</h4>
<h3 style={abstract}>Abstract:-</h3>
<p style={content}>A Talk on Careers in Civil Engineering by Prof. K.V.L Subramaniam was successfully held on 8th March, 2021. Prof. K.V.L. Subramaniam presented an overview of the career opportunities present in different fields of civil engineering and the relevant skill set required.
</p>
<h3 style={abstract}>About the Speaker:-</h3>
<p style={content}>Prof. K.V. L. Subramaniam is currently a Professor in the Department of Civil Engineering and Dean (Planning) at Indian Institute of Technology Hyderabad (IITH). He was the Dean (Planning and Development) at IIT Hyderabad and oversaw the construction of the new campus. Prior to joining IITH, he was a Professor and Catell Research Fellow in Department of Civil Engineering at the Grove School of Engineering, the City College of New York (CCNY). Dr. Subramaniam obtained a B.Tech. in Civil Engineering from IIT Delhi and Ph.D. in Structural Engineering and Materials from Northwestern University, Evanston. After graduation, Dr. Subramaniam worked as a Research Associate at the NSF Center for Advanced Cement Based Materials. Dr. Subramaniam was awarded the Early Career Award from the National Science Foundation of USA for investigating the early-age changes in cementitious materials. He received the James Instrument Award from the American Concrete Institute (ACI) in 1999 for his research on nondestructive evaluation of concrete. He was the Chairman, committee 215 on Fatigue of Concrete of the ACI. In 2009, he was elected a Fellow of the American Concrete Institute for notable contribution in the area of fracture and fatigue of concrete. He is an Associate Editor of the Journal of Materials in Civil Engineering of the American Society of Civil Engineers. He is on the editorial board of the Journal of Cement and Concrete Composites (Elsevier). He is a life member of the Indian Concrete Institute. Prof. Subramaniam is currently the Director of the Center of Excellence in Sustainable Urban Development of the Ministry of Human Resource Development at IIT Hyderabad. He is the recipient of Excellence in teaching award at IIT Hyderabad in 2011 and 2015.</p>
                           <h5 style={videos}>Video link  - <a style={videos_link} href="https://youtu.be/kBoqI4Cf2qg">Click here</a></h5> 
                            </div>
                            </div>

                            
                            <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<h2 style={tittle}>Seminar on 'Metamaterails Towards Resilient Infrastructure'</h2>
<img src={arnab} style={img}></img>
<h3  style={speaker_name}> Dr. Arnab Banerjee</h3>
<h4 style={speaker_position}>Assistant Professor, Department of Civil Engineering, IIT Delhi</h4>
<h3 style={abstract}>Abstract:-</h3>
<p style={content}>Metamaterials refer to the class of artificial materials which exhibit unconventional extreme engineering properties such as negative mass, stiffness and Poisson's ratio. The understanding of their basic mechanics is pivotal for designing structures with unique desirable properties.
</p>
<h3 style={abstract}>About the Speaker:-</h3>
<p style={content}>Dr. Arnab Banerjee completed his PhD from the University of Auckland in 2018. He investigates the designing of novel structures and oscillators of mechanical metamaterial for vibration isolation, shock absorption, and for resilient infrastructures. Modulation of the elastic waves in the beam, frame, grid, and more complicated structures is one of the major areas of his research. Implementation of the concept of metamaterials towards resilient infrastructure development is the main aim of Dr. Banerjee's research. Dr. Banerjee has joined the Civil Engineering Department of IIT Delhi in May 2019 as Assistant Professor. Previously, he was at the Civil Engineering Department of IIT Jammu. Dr. Banerjee was awarded Newton International post-doctoral Fellowship from Royal Society London in Dec 2018. He received the Inspire faculty award from the Department of Science and Technology, India in July 2018. Dr. Banerjee is involved in two international and two national-funded research projects. He authored 24 SCI-indexed journal papers, 15 conference papers, and 2 book chapters. He actively reviews for more than 20 international journals. His research group, Mechanics of Metamaterials and Extreme Structures (MMES) comprises of two post-doctoral, nine doctoral candidates, and three Master's candidates.</p>
                           <h5 style={videos}>Video link  - <a style={videos_link} href="https://www.youtube.com/watch?v=S2GifPw5HJQ">Click here</a></h5> 
                            </div>
                            </div>


                               
                            <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<h2 style={tittle}>A webinar on 'High Strain Rate Testing of Geomaterials & Application in Blast Analysis'</h2>
<img src={tanusree} style={img}></img>
<h3  style={speaker_name}>Dr. Tanusree Chakraborty</h3>
<h4 style={speaker_position}>Professor, Department of Civil Engineering, IIT Delhi.</h4>
<h3 style={abstract}>Abstract:-</h3>
<p style={content}>Blast analysis of above and underground structure is the need of the day given the increase in terror attacks in the last two decades. In order to safeguard the infrastructure and save the lives of human beings and properties from extreme loading like blast, it is necessary to understand the response of above and underground structures subjected to blast loading through experimental modeling and numerical analyses. For this, in IIT Delhi, focussed research is being conducted on characterizing both geological and structural materials under high loading rate. The test data are used in finite element analyses of underground structures under blast loading and the results are studied for blast-resistant design guidelines of structures.
</p>
<h3 style={abstract}>About the Speaker:-</h3>
<p style={content}>Dr. Tanusree Chakraborty has completed her PhD from Purdue University, USA in the field of Geotechnical Engineering in the year 2009. She investigates several aspects of rock mechanics and her areas of research include blast and impact engineering, material characterization under high loading rate, energy geotechnical engineering, numerical modelling of boundary value problems, soil and rock plasticity and constitute modelling, soil structure interaction, underground constructions in soil and rock, and foundation engineering. Dr. Tanusree has worked at prestigious universities like Purdue University and Norwegian University of Science and Technology, before joining IIT Delhi. She has authored more than 55 journal papers, 55 conference papers, and has co-authored one book chapter. She is working in three research groups and is a part of the Geo-Dyn Laboratory of IIT Delhi, working on dynamic testing of materials including rock, soil, concrete and metal foams for understanding material behaviour under rate-dependent loading conditions.</p>
                          {/* <h5 style={videos}>Video link  - <a style={videos_link} href="https://www.youtube.com/watch?v=S2GifPw5HJQ">Click here</a></h5> */}
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










    </div>;
};

export default Seminars;