import React from 'react';

export const Text = ({ children, size = 'medium', color, fontWeight = 'normal' }) => {
    let fontSize;

    switch (size) {
        case 'normal':
            fontSize = '1.8rem';
            break;
        case 'medium':
            fontSize = '2.4rem';
            break;
        case 'large':
            fontSize = '3.2rem';
            break;
        default:
            fontSize = '1.8rem';
    }

    return <span style={{ fontSize, color, fontWeight }}>{children}</span>;
};
