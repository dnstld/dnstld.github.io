import React from 'react';
import PropTypes from 'prop-types';
import iconPath from '../icons';

const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const Icon = ({ size, color, icon, className, style }) => {
  const styles = { ...defaultStyles, ...style };

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={`${size}px`}
      height={`${size}px`}
      className={className}
      style={styles}
    >
      <path fill={color} d={iconPath[icon]}/>
    </svg>
  )
}


Icon.defaultProps = {
  size: 24,
  color: 'var(--color-text)',
  className: '',
  style: {}
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;