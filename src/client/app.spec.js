/** @jest-environment jsdom */
import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import App from './app'


describe('app.js: it should render app.js', () => {
  const  component = (
    <App />
  );
  it('Should render component default', () => {
    const wrapper = render(component);
    const { getByRole } = wrapper;
    expect(getByRole('heading', { name: 'React boilerplate' })).toBeInTheDocument();
  });
});