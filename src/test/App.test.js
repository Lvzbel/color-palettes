// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../src/App';

const add = (a, b) => a + b;

it("renders without crashing", () => {
  const result = add(5, 5);
  expect(result).toBe(10);
});
