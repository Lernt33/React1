import React from 'react';
import './main.css';
import image from './image.jpg'
import {content} from "./consts";
export function Main() {
    return (
        <div className="main-container">
            <h1>Main Component</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <h2>Box 1</h2>
                    <p>{content}</p>
                </div>
                <div className="grid-item image-box">
                    <img src={image} alt="Placeholder 1" />
                </div>
                <div className="grid-item image-box">
                    <img src={image} alt="Placeholder 2" />
                </div>
                <div className="grid-item">
                    <h2>Box 2</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}