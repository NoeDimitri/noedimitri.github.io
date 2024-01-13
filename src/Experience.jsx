import './App.css'
import React from "react";


class Experience extends React.Component{
    render() {
        
        return(
            <div className='Tab-Content'>
                Experience
                <ExperienceItem 
                    Name={"Full Stack Intern - CAE"} 
                    skills={["Typescript", "Angular", ".NET", "Python FastAPI"]}
                    Date={"May 2023 - December 2023"}>
                </ExperienceItem>
                <ExperienceItem 
                    Name={"Research Assistant - USF"} 
                    skills={["Python", "Natural Langauge Processing", "Web Scraping"]}
                    Date={"January 2023 - December 2023"}>
                </ExperienceItem>
                <ExperienceItem 
                    Name={"Software Engineer Intern - Epsilon Systems"} 
                    skills={["C++", "Atlassian Suite", "Agile"]}
                    Date={"May 2022 - August 2022"}>
                </ExperienceItem>
                <ExperienceItem 
                    Name={"Coding Coach - CoderSchool"} 
                    skills={["Lua", "Python", "Game Development"]}
                    Date={"October 2021 - May 2022"}>
                </ExperienceItem>
            </div>
        );
    }
}

function ExperienceItem({Name, Date, skills})
{
    return(
        <span className="square rounded-4 block_item">
            <div class="block_content">
                <div class="column_parent">
                    <div class="column_container">
                        {Name}
                    </div>
                    <div class="column_container" style={{justifyContent: "right"}}>
                        {Date}
                    </div>
                </div>
                <p>
                    Skills & Technologies: {skills.map(skill => <span>{skill}, </span>)}
                </p>
            </div>
        </span>
    );
}


export default Experience;