import React from 'react'
import './app.css';
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
    <div className="test">
        <Button />
    </div>  
  )
}

export default View;