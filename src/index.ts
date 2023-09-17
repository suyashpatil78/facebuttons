import React from 'react';
import NeuroButton from './components/neuro/NeuroButton';
export interface ButtonProps {
    text: string;
    onClick: (e?: any) => void;
    width?: string;
    padding?: string;
}

export {NeuroButton};
