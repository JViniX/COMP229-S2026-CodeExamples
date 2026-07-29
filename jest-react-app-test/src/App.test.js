import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';

test('renders Learn more link', ()=>{

    render(<App />);
    const linkElement = screen.getByText('Learn more');
    expect(linkElement).toBeInTheDocument();
});