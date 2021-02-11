import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label } from './styles';

export const TextInput = ({ labelText, onChangeEvent, type, value, width }) => (
  <InputContainer width={width}>
    {labelText.length < 1 ? null : (
      <Label htmlFor={labelText}>{labelText}</Label>
    )}
    <Input
      id={labelText}
      type={type}
      onChange={(ev) => onChangeEvent(ev)}
      value={value}
    />
  </InputContainer>
);

/* setting the proptypes */
TextInput.propTypes = {
  labelText: PropTypes.string,
  onChangeEvent: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
};

/* default values */

TextInput.defaultProps = {
  labelText: '',
  onChangeEvent: () => {},
  type: 'text',
  value: '',
  width: '60%',
};
