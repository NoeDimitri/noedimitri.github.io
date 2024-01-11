import './App.css'
import React from 'react'
import { Link } from 'react-router-dom';


class Landing extends React.Component{
    render() {
        return (
            <header className="Tab-Content">
                <span style={{display: 'inline'}}>Hi! I'm <span class="Notable-text">Justin Delgado </span></span>
                <span style={{display: 'inline'}}>A Computer Science Graduate who enjoys coding, talking about game design, and <Link to="/arts-designs">drawing</Link>!</span>
                <br/>
                Click the buttons above to learn more about me. 😊
            </header>
        );
    }
}

export default Landing