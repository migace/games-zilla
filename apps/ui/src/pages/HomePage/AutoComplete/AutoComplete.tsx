import { useGetCategoriesQuery } from "@/services/games";
import Select, { Options } from "react-select";
import { useMemo } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setCategories } from "@/redux/features/gameFilters";

import classes from "./autocomplete.module.css";
import { useAppSelector } from "@/hooks/useAppSelector";

type Option = {
  value: string;
  label: string;
};

type AutoCompleteProps = {
  label?: string;
};

export const AutoComplete = ({ label }: AutoCompleteProps) => {
  const { data: categories } = useGetCategoriesQuery();
  const { categories: selectedCategories } = useAppSelector(
    (state) => state.gameFilters
  );
  const dispatch = useAppDispatch();

  const options = useMemo(
    () =>
      categories?.map((category) => ({
        value: category,
        label: category.toLocaleUpperCase(),
      })),
    [categories]
  );

  const value = useMemo(
    () => selectedCategories.map((category) => ({
      value: category,
      label: category.toLocaleUpperCase(),
    })),
    [selectedCategories]
  );

  const selectChangeHandler = (selectedOption: Options<Option>) => {
    dispatch(setCategories(selectedOption.map((option) => option.value)));
  };

  return (
    <div className={classes.wrapper}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={classes.selectWrapper}>
        <Select
          isMulti
          value={value}
          options={options}
          onChange={selectChangeHandler}
        />
      </div>
    </div>
  );
};
