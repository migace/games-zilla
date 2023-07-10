import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import classes from "./select.module.css";

type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  label?: string;
  value?: string;
  dataCy?: string;
  onSelect?: (value: string) => void;
  disabled?: boolean;
};

export const Select = ({
  label,
  value,
  options,
  dataCy = "",
  disabled = false,
  onSelect,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value ?? options[0].value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;

    setSelectedValue(value);
    onSelect?.(value);
  };

  return (
    <div className={classes.wrapper}>
      {label && <label className={classes.label}>{label}</label>}
      <select
      data-cy={dataCy}
        className={classes.select}
        disabled={disabled}
        value={selectedValue}
        onChange={onChangeHandler}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FaAngleDown className={classes.icon} />
    </div>
  );
};
