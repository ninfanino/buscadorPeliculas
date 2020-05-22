import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBack = () => (
    <Link
        className="button is-info"
        to="/"
    >
        Back to Home
    </Link>
)