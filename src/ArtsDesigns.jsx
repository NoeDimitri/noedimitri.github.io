import './App.css'
import './test.css'
import React from "react";
import Image from 'react-bootstrap/Image';

// import goofy_art from './images/k.png'

const designs = [
    {
        id: 0,
        src: "/images/gamejam.png"},
    {
        id: 1,
        src: "/images/research_roadmap.png"},
    {
        id: 2,
        src: "/images/showcase.png"},    
    {
        id: 3,
        src: "/images/discord_bot.png"},
]

const designItems = designs.map(design => 
    <ArtItem link={design.src} />
)   


class ArtDesigns extends React.Component{
    render() {
        return(
            <div className='Art-Content'>
                <b>Art</b>
                <div id ="image-track">
                    <ArtItem link="/images/fran.png"></ArtItem>
                    <ArtItem link="/images/fran.png"></ArtItem>
                    <ArtItem link="/images/fran.png"></ArtItem>
                    <ArtItem link="/images/fran.png"></ArtItem>
                    <ArtItem link="/images/fran.png"></ArtItem>
                </div>
                <b>Designs</b>
                <p>I've made several flyers for the various clubs I've helped lead. Here are some of the designs that I'm proud of!</p>
                <div id="image-track">
                    {designItems}
                </div>
            </div>
        );
    }
}

function ArtItem({link})
{
    return(
        <Image 
            id = "image"
            style={{
                width:"40vmin", 
                height:"40vmin", 
                objectFit:"cover", 
                objectPosition:"center"}} 
            draggable="false"
            src={link} rounded>
        </Image>          
    ); 
}

export default ArtDesigns;