import { Button, TextField } from "@mui/material";
import { FunctionComponent, KeyboardEvent } from "react";
import SendIcon from "~icons/mdi/send";

interface SearchFormProps {
  onInputChange: (val: string) => void;
  onSubmit: () => void;
}

const SearchForm: FunctionComponent<SearchFormProps> = ({
  onInputChange,
  onSubmit,
}) => {
  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  return (
    <>
      <TextField
        label="Which movie are you looking for?"
        variant="outlined"
        className="h-16 w-72"
        onChange={(evt) => onInputChange(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button className="h-14 " variant="contained" onClick={onSubmit}>
        <SendIcon className="h-7 w-auto" />
      </Button>
    </>
  );
};

export default SearchForm;
