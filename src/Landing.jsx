import './App.css'
import React from 'react'
import logo from './logo.svg'

class Landing extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <span style={{display: 'inline'}}>Hi! I'm <span class="Notable-text">Justin Delgado </span><br /></span>
                    A Computer Science Graduate who enjoys coding, talking about game design, and drawing! <br/> <br/>
                    Click the buttons above to learn more about me. 😊
                </header>
            </div>
        );
    }
}

export default Landing