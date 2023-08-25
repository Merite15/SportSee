import React from 'react';
import './style.scss';

interface ErrorProps {
    error: {
        name: string;
        message: string;
    };
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className="error-container">
            <p>{error.name}</p>
            <p>{error.message}</p>
        </div>
    );
};