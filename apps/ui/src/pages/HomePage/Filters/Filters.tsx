import { Select } from "@/components/Select/Select";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setPlatform, setSortBy } from "@/redux/features/gameFilters";

import classes from "./filters.module.css";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AutoComplete } from "../AutoComplete";

type FiltersProps = {
  disabled?: boolean;
};

export const Filters = ({ disabled = false }: FiltersProps) => {
  const { platform, sortBy } = useAppSelector((state) => state.gameFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <Select
        dataCy="platform-filter"
        label="Filter by Platform"
        value={platform}
        options={[
          { value: "", label: "All" },
          { value: "pc", label: "PC" },
          { value: "browser", label: "Browser" },
        ]}
        onSelect={(value) => dispatch(setPlatform(value))}
        disabled={disabled}
      />
      <AutoComplete label="Filter by Category" />
      <Select
        label="Sort by"
        value={sortBy}
        options={[
          { value: "", label: "None" },
          { value: "release-date", label: "Release Date" },
          { value: "alphabetical", label: "Alphabetical" },
          { value: "relevance", label: "Relevance" },
        ]}
        onSelect={(value) => dispatch(setSortBy(value))}
        disabled={disabled}
      />
    </div>
  );
};
