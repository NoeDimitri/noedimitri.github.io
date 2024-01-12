import './App.css'
import React from "react";


class Projects extends React.Component{
    render() {
        
        return(
            <div className='Tab-Content'>
                Projects
                <ExperienceItem 
                    Name={"Gloomhaven Webapp"} 
                    skills={["Angular", "ASP .NET", "Docker"]}
                    Date={"January 2023 - December 2023"}>
                </ExperienceItem>      
                <ExperienceItem 
                    Name={"Super Quick Quest"} 
                    skills={["Unity", "C#"]}
                    Date={"January 2023 - December 2023"}>
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


export default Projects;