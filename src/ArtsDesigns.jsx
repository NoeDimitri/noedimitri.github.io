import './App.css'
import React from "react";

// import goofy_art from './images/k.png'

class ArtDesigns extends React.Component{
    render() {
        return(
            <div className='Tab-Content'>
                Art and Designs I've made <br/>
                <div class="art_grid">
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                    <ArtItem></ArtItem>
                </div>
            </div>
        );
    }
}

function ArtItem({link})
{
    return(
        <div class="art_item">
            <img src="/fran.png" alt="pretty art!!"></img>
        </div>
    );
}

export default ArtDesigns;