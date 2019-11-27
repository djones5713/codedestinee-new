import React, { Component } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import AboutBlur from './AboutBlur';
import './About.css';


class About extends Component{
    constructor(props){
    super(props) 
    this.state = {
        title: "Destiny Jones",
        subtitle: "Full Stack Developer"
    }
}

render(){
    return (
        <div className='About-container Body'>
            <Navbar />
            <div className='Header'>
                <div className='AboutContent'>

                    <h1 className='About-title'>{this.state.title}</h1>
                    <h6 className='About-subtitle'><strong>{this.state.subtitle}</strong></h6>
                    <a className='About-subtitle-a' href='https://docs.google.com/document/d/18BqY5ERrVg1jd8HQG5ShE0JkOxDFxcst7Gqpi7aMzcc/edit?usp=sharing'> Resume</a>
                </div>
            </div>
            <div className='Home-BottomContent'>
              <AboutBlur />
            </div>
            <Footer />
        </div>
    )
}
}

export default About