import './App.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component{
    render() {
        
        return(
            <div className='App-header'>
                about me
                <span className="square rounded-4 Dialog-Box">
                    <p className="Dialog-Content">
                        <b>Education</b>&nbsp; | &nbsp;<br></br>
                        <ul>
                            <li>Bachelors in Computer Science</li>
                            <li>University of South Florida</li>
                            <li>3.99 GPA, Summa Cum Laude</li>
                        </ul>
                    </p>
                
                </span>
            </div>
        );

    }
}

export default About;