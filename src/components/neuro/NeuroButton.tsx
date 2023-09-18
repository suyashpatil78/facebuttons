import React from "react";
import '../../index.css';
import { ButtonProps } from "../..";

const NeuromorphicButton = ({ text, width, padding, fontSize, onClick }: ButtonProps) => {
    let styles: { width?: string; padding?: string; minWidth?: string, fontSize?: string} = {
        width: width ? `${width}px` : 'auto',
        padding: padding ? `${padding}px` : '',
        minWidth: width ? 'fit-content' : '',
        fontSize: fontSize ? (parseFloat(fontSize) < 30 ? `${fontSize}px`: '30px') : '',
    };
    return (
        <button style={styles} onClick={onClick} className="custom-btn btn-1">
            <span>
                {text}
            </span>
        </button>
    )
};

export default NeuromorphicButton;