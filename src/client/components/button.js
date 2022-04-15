
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';


const CustomButton = ({ text }) => {
  return <Button color="primary">{text}</Button>;
}

CustomButton.propTypes = {
  text: PropTypes.string,
};

CustomButton.defaultProps = {
  text: 'test',
};

export default CustomButton;