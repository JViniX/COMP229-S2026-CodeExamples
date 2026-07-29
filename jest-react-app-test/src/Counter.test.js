import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";

import App from './App';
import Counter from './Counter';

// test block
test('increments counter', ()=>{

    // render the component on the Virtual DOM
    render(<App />);

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    //interect with those elements
    fireEvent.click(incrementBtn);

    //assert the expected result
    expect(counter).toHaveTextContent("1")

});
