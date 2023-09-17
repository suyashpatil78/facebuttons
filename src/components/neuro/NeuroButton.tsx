import React from "react";
import '../../index.css';
import { ButtonProps } from "../..";

const NeuromorphicButton = ({ text, width, padding, onClick }: ButtonProps) => {
    let styles: {width?: string; padding?: string; minWidth?: string} = {
        width: width ? `${width}px` : '',
        padding: padding ? `${padding}px` : '',
        minWidth: width ? 'fit-content' : ''
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