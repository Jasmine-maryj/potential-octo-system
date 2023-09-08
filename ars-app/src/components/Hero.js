import React from 'react';

export default function Hero() {
    const imageStyle = {
        opacity: 0.5,
    };
    const textStyle = {
        marginTop: '95px', // Use camelCase notation and enclose the value in quotes
    };
    return (
        <div class="card">
            <img src="/HeaderImage-1.png" height={700} class="card-img" alt="AIRLINE RESERVATION SYSTEM" style={imageStyle}/>
                <div class="card-img-overlay">
                    <h1 class="card-title" style={textStyle}>WelCome To AIRLINE RESERVATION SYSTEM</h1>
                </div>
        </div>
    )
}