import { ChangeEvent } from "react";

import classes from "./input.module.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  dataCy?: string;
};

export const Input = ({ placeholder, value, icon, dataCy, onChange }: InputProps) => {  
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    onChange?.(inputValue);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputWrapper}>
        <input
          data-cy={dataCy}
          className={classes.input}
          placeholder={placeholder}
          value={value}
          onChange={changeEventHandler}
        />
        {icon && <span className={classes.icon}>{icon}</span>}
      </div>
    </div>
  );
};
