import React from 'react';

const Pm_sessions = () => {
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
        width: '120px',
        borderRadius: '8px',
        padding: '1px',
        color: 'white',

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
    const card_deck = {
       
        marginTop: '20px',
       
        textDecoration: 'none',
        marginBottom: '20px'
    };
    
    const main_card = {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginTop: '30px',
        border: 'none',
        textDecoration: 'none',
        marginBottom: '40px'
    };
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '20px'
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

        <div className='container-fluid' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}> PM Sessions  </h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>


                        <div className="card-deck" style={card_deck}>
  <div className="card" style={main_card} >
  
    <div className="card-body" style={main_card_body}>
    <h2 style={tittle}>PM Session - February Edition</h2>
    <p style={content}>Presentations of the Month (PM) session is a departmental activity in the form of seminars by 2-3 students from all specializations on the research themes they are working on. It is also a platform to get a quick insight into the type of research happening within the department and interact with presenters for any solutions to similar problems we address in our work.</p>
      
    </div>
  </div>
  <div className="card" style={main_card}>
   
    <div className="card-body" style={main_card_body}>
    <h2 style={tittle}>PM Session - March Edition</h2>
    <p style={content}>The March Edition was conducted on March 27th, where we had Jesna Fathima (Ph.D. Scholar) and Ajesh M Arjun (M.Tech Student) talk about their recent work on “A techno-economic assessment of nutrient recovery from wastewater using microalgae: Scenario in India” and “Bioflocculation: A statistical analysis” respectively.</p>
      
    </div>
  </div>
  <div className="card" style={main_card}>
   
    <div className="card-body" style={main_card_body}>
    <h2 style={tittle}>PM Session - June Edition</h2>
    <p style={content}>The June Edition' was conducted on 8th June to commemorate the Birth Anniversary of the Father Of Civil Engineering- John Smeaton. We had K Chiranjeevi Reddy (Research scholar) who talked about 'Alkali Activated Slag: Influence of activating solution composition' and Dhanush Sahasra (UG Final Year student) who presented on 'Modeling of Temperature Rise in Cement Hydration'. The event witnessed 35+ attendees.</p>
      
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










    </div>;
};

export default Pm_sessions;