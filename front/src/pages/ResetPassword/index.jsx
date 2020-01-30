import React, { useState } from "react";
import Header from "./../../components/Header";
import Label from "../../components/Label";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import validate from "./../../utils/validate";
import apiResetPassword from "./../../api/apiResetPassword";

function ResetPassword() {
  const [login, setLogin] = useState("");
  const [loginValidationError, setLoginValidationError] = useState("");

  const [
    resetPasswordWarningMessage,
    setResetPasswordWarningMessage
  ] = useState("");
  const [resetWasSent, setResetWasSent] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    let validationResult = validateLogin(login);

    if (validationResult.isOk) {
      apiResetPassword(login).then(response => {
        
        if (response.success) {
          setResetPasswordWarningMessage("Пароль отправлен на email");
        } else {
          setResetPasswordWarningMessage("Пользователь не найден");
        }
        setResetWasSent(response.success);
      });
    }
  };

  const changeLogin = value => {
    setResetPasswordWarningMessage("");
    setLogin(value);
    validateLogin(value);
  };

  const validateLogin = value => {
    let validationResult = validate(value, {
      checkRequired: true,
      checkMaxLength: true,
      checkRegExp: true
    });
    
    if (validationResult.isOk) {
      setLoginValidationError("");
    } else if (!validationResult.requiredIsOk) {
      setLoginValidationError("Поле обязательно для заполнения");
    } else if (!validationResult.regExpIsOk) {
      setLoginValidationError("Укажите корректный логин");
    } else if (!validationResult.maxLengthIsOk) {
      setLoginValidationError("Значение должно быть не больше 12 символов");
    }
    return validationResult;
  };

  return (
    <div>
      <Header>Восстановить доступ</Header>
      <Label>Введите логин, указанный при регистрации</Label>
      <Input
        value={login}
        setValue={changeLogin}
        onValidate={validateLogin}
        validationErrorMessage={loginValidationError}
        type="text"
        maxLength="32"
      />
      {resetPasswordWarningMessage && <p>{resetPasswordWarningMessage}</p>}
      {(!resetPasswordWarningMessage || !resetWasSent) && (
        <Button onClick={handleClick}></Button>
      )}
    </div>
  );
}

export default ResetPassword;
