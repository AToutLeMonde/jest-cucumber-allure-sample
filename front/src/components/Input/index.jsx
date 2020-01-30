import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 0rem;
  width: 100%;
`;

const Field = styled.input`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;

const WarningMessage = styled.div`
  margin-top: 0.2rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #ff0000;
`;

function Input({
  value,
  type,
  maxLength,
  validationErrorMessage,
  setValue,
  onValidate
}) {
    

  const handleChange = e => {
    setValue(e.target.value);
    onValidate(e.target.value);
  };

  const handleBlur = e => onValidate(e.target.value);
  
  return (
    <Container>
      <Field
        maxLength={maxLength}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      ></Field>

      {validationErrorMessage && <WarningMessage>{validationErrorMessage}</WarningMessage>}
    </Container>
  );
}

export default Input;
