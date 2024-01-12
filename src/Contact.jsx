import React from "react";

import linkedIn_icon from './images/white_linked_in.png'
import email_icon from './images/email.png'

class Contact extends React.Component{
    render() {
        
        return(
            <div class="Tab-Content">
                Contact me here! <br></br>
                <div style={{display:"block"}}>
                    <span style={{display: 'inline', margin: "1rem"}}>
                        <img src={email_icon} style={{width:"3rem", height:"3rem", margin:"1rem"}} alt='email icon'/>
                        <a href="justindelgado326@gmail.com">justindelgado326@gmail.com</a><br></br>
                    </span>
                    <span style={{display: 'inline'}}>
                        <img src={linkedIn_icon} style={{width:"3rem", height:"3rem", margin:"1rem"}} alt='linkedIn Logo'/>
                        <a href="https://www.linkedin.com/in/justind4/">linkedin.com/justind4</a>
                    </span>
                </div>

            </div>
        );

    }
}

export default Contact;