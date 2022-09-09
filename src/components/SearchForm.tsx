import { Button, TextField } from "@mui/material";
import { FunctionComponent } from "react";

interface SearchFormProps {
  onInputChange: (val: string) => void;
  onSubmit: () => void;
}

const SearchForm: FunctionComponent<SearchFormProps> = ({
  onInputChange,
  onSubmit,
}) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(evt) => onInputChange(evt.target.value)}
      />
      <Button variant="contained" onClick={onSubmit}>
        Search
      </Button>
    </>
  );
};

export default SearchForm;
