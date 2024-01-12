import './App.css'
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
    <div class="art_item"><Image src={design.src} rounded /> </div>
)   



class ArtDesigns extends React.Component{
    render() {
        return(
            <div className='Tab-Content'>
                Art <br/>
                    <ArtItem link="images/fran.png"></ArtItem>
                    <ArtItem link="/logo512.png"></ArtItem>
                Designs
                <div class="art_grid">
                    {designItems}
                </div>
            </div>
        );
    }
}

function ArtItem({link})
{
    return(
        <Image class="art-item" src={link} rounded />
    );
}

export default ArtDesigns;