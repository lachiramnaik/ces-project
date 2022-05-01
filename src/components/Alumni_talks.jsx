import React from 'react';
//import venkat from './images/seminars/venkat.jpg';
import tarutal from './images/alumni talks/Tarutal.jpeg';
const Alumni_talks = () => {
    //css stylimg
    const about_color = {
        height: '350px',
        background: '#c31432',

        background: '-webkit-linear-gradient(to right, #240b36, #c31432)',

        background: 'linear-gradient(to right, #240b36, #c31432)'

    };
    const container_setting = {
        marginTop: '-250px',
      
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
        width: '130px',
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



    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}>Alumni Talks</h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<h2 style={tittle}>Autonomous Visio-based Condition Damage Assessment of Structures</h2>
<img src={tarutal} style={img}></img>
<h3  style={speaker_name}> Dr. Tarutal Ghosh Mondal</h3>
<h3 style={abstract}>Abstract:-</h3>
<p style={content}>The talk was delivered by our noted alumnus Dr. Tarutal Ghosh Mondal, Ph.D. from Purdue University, USA. He completed his M.Tech. in Structural Engineering from IIT Hyderabad in 2016 with a perfect 10 CGPA and President's Gold Medal. The enlightening presentation was attended by ~ 40 guests and faculty.</p>
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

export default Alumni_talks;