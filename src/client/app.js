import React from 'react'
import PropTypes from 'prop-types'
import './app.scss';
import axios from 'axios';

// components
import Button from './components/button.js'

const fetchData = async () => {
  const response = await axios.get('/api/coinbase/currencies');
  console.log(response);
}

const View = () => {

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
        <h1>React boilerplate</h1>
        <Button />
    </div>  
  )
}

export default View;