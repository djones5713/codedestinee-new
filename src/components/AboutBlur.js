import React, {Component} from 'react';
import './AboutBlur.scss';


class AboutBlur extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
   
render(){
    return(
        <div>
        <div className='skills'>
        


                <div className="container">
                    <div className="card">
                    <div className="card_color" id="color-one">
                        <h3 className='skills-subtitle' >Software <br/> Engineer</h3>
                    </div>
                    
                        
                        <div className="card__content">
                           
                                <div className="card_info">
                                   <p> Software engineer is a major passion of mine. While I am a proficient full stack developer, my expertise are in building
                                        out the user interface on web and mobile applications. </p>
                                </div>
                           
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                    <div className="card_color" id="color-two">
                        <h3 className='skills-subtitle'>Application<br/> Design </h3>
                    </div>
                    
                        
                        <div className="card__content">
                                <div className="card_info">
                                   <p>Every website starts with a great web design. Working with tools such as Adobe Photoshop and Adobe XD allows me to create uniquely compelling site surely to grab attention. </p>
                               </div>
                           
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="card">
                    <div className="card_color" id="color-three" >
                        <h3 className='skills-subtitle' id="3">Technology <br/> & Tools</h3>
                    </div>
                    
                        
                        <div className="card__content">
                           
                                <div className="card_info">
                                 <p>There are alot of tools on the market to help lanuch applications. Some technologies I use include VisualStudios,
                                    Postman, Docker, GitHub and Digital Ocean </p>

                                </div>
                           
                        </div>
                    </div>
                </div>
        
        



           
          
        </div>

        <div className="aboutblur-fill">

        </div>
        </div>
    )
}
}

export default AboutBlur;