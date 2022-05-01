import React from 'react';
import chandrashekar from './images/achievements/chandrashekar.jpeg';
import vedashree from './images/achievements/Vedashree.jpg';
import iithlogo from './images/achievements/iithlogo.png';
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
        width: '140px',
        borderRadius: '8px',
        padding: '1px',
        color: 'white',

    };
    const card_deck = {
       
        marginTop: '60px',
       
        textDecoration: 'none',
        marginBottom: '40px'
    };
    const main_card={
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        border: 'none',

    }
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '40px'
    };
    
    const img = {
        
        height: '300px',

        };
const span={
    fontFamily: 'Gabriola',
    fontSize:'30px',
    color:'red'
}

    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}>Achievements</h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    {/*<div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>*/}




                        <div class="card-deck" style={card_deck}>
 
  <div class="card" style={main_card}>
    <img src={iithlogo} class="card-img-top" alt="..." style={img}/>
    <div class="card-body" style={main_card_body}>
      <h5 class="card-title">InterIIT Civil Conclave 2021</h5>
      <p class="card-text">IITH secured <span style={span}>4th rank</span> overall in InterIIT Civil Conclave 2021.
</p>
      
    </div>
  </div>
  <div class="card" style={main_card}>
    <img src={chandrashekar} class="card-img-top" alt="..." style={img}/>
    <div class="card-body" style={main_card_body}>
      <h5 class="card-title">PG Research Presentation</h5>
      <p class="card-text"> Chandra Shekhar Lakavath (CE19RESCH11007) <span style={span}>1st prize</span> in InterIIT Civil Conclave 2021. </p>
      
    </div>
  </div>
  <div class="card" style={main_card} >
    <img src={vedashree} class="card-img-top" alt="..." style={img}/>
    <div class="card-body" style={main_card_body}>
      <h5 class="card-title">UG Research Presentation</h5>
      <p class="card-text">Vedashree Chandewar (CE18BTECH11036) <span style={span}>2nd prize</span> in InterIIT Civil Conclave 2021. </p>
      
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
