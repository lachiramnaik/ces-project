import React from 'react';
import feild_1 from './images/site visits/feild-1.JPG';
import feild_2 from './images/site visits/feild-2.JPG';
import feild_3 from './images/site visits/feild-3.JPG';
const Site_Visits = () => {
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
        padding: '20px'
    };
    const img={
width:'100%',
marginTop:'15px'
    };
const content={
    marginTop:'50px',
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
                    <h1 style={about_heading_1}> Site visits </h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>

                        <div className='row'>
                        <div className="col-sm-4">

<img src={feild_1} style={img} />
</div>
<div className="col-sm-4">
<img src={feild_2} style={img}/>
</div>
<div className="col-sm-4">
<img src={feild_3} style={img}/>
</div>
</div>
<p style={content}>Final Year Undergraduate students of Civil Engineering Department visited the Biogas digester, Resource Recovery Park and Sewage Treatment Plant situated in IIT-H campus. Students learnt about anaerobic digestion, vermicomposting, waste segregation, wastewater treatment processes, and sludge management. Assistant Professors Dr. Debraj Bhattacharyya, Dr. Pritha Chatterjee, and Dr. Ambika Selvaraj accompanied the students and shared their valuable knowledge. Technical staff at the facilities enlightened the students with the practical intricacies of running Waste Management Facilities. The informative session was enjoyed by all the students as they created lasting memories with their professors and fellow students ahead of graduation.</p>

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

export default Site_Visits;