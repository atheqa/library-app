import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './styles';
import { theme } from '../../styles';

export const Button = ({
  backgroundColor,
  borderColor,
  children,
  color,
  height,
  onClickEvent,
  width,
}) => (
  <BaseButton
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    height={height}
    onClick={() => onClickEvent()}
    width={width}
  >
    {children}
  </BaseButton>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  height: PropTypes.string,
  onClickEvent: PropTypes.func,
  width: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: theme.colors.dark,
  borderColor: theme.colors.paleGreen,
  color: theme.colors.light,
  onClickEvent: () => {},
  width: '100%',
  height: '40px',
};
