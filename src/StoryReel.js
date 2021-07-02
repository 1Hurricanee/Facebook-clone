import React from 'react';
import "./StoryReel.css";
import Story from "./Story"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://images7.alphacoders.com/717/717081.png"
                profileSrc="https://i.pinimg.com/originals/42/ba/ba/42baba4a5bc4e28e7ffc29845b47305a.jpg"
                title="1Hurricane"
            />
            <Story 
                image="https://pbs.twimg.com/media/EsRhKY0UYAEX3nW?format=jpg&name=large"
                profileSrc="https://wallpapercave.com/wp/wp8012093.jpg"
                title="1Darkness"
            />
            <Story 
                image="https://images.hdqwalls.com/download/tiger-glowing-eyes-rc-1280x2120.jpg"
                profileSrc="https://wallpapercave.com/wp/wp4960801.jpg"
                title="1Tiger"
            />
        </div>
    )
}

export default StoryReel
