import './App.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const technology = [
    {id: 0,
    name: "angular"},
    {id: 1,
    name: "react"},
    {id: 2,
    name: "docker"},
    {id: 3,
    name: "godot"},
    {id: 4,
    name: "github"},
    {id: 5,
    name: "unity"},
    // {id: 6,
    // name: "asp .NET Core"}
];

const languages = [
    {id: 0,
    name: "python"},
    {id: 1,
    name: "C++"},
    {id: 2,
    name: "C#"},
    {id: 3,
    name: "typescript"},
    {id: 4,
    name: "SQL"}
];

const technology_items = technology.map(tech => <div class="column_item square rounded-4">{tech.name}</div>);
const language_items = languages.map(language => <div class="column_item square rounded-4">{language.name}</div>);


<div class="column_item square rounded-4">
github
</div>

class About extends React.Component{
    render() {
        return(
            <div className='Tab-Content'>
                about me!
                <span className="square rounded-4 Dialog-Box">
                    <p className="Dialog-Content">
                        <b>Education</b>&nbsp; | &nbsp;<br></br>
                        <ul>
                            <li>Bachelors in Computer Science</li>
                            <li>University of South Florida</li>
                            <li>3.99 GPA, Summa Cum Laude</li>
                        </ul>
                    </p>
                <div class="column_parent">
                    <div class="column_container">
                        <div class="column_title">
                            <b>Languages</b>
                        </div>
                        {language_items}
                    </div>
                    <div class="column_container">
                        <div class="column_title">
                            <b>Technologies</b>
                        </div>
                        {technology_items}
                    </div>
                </div>
                
                </span>
            </div>
        );

    }
}

export default About;