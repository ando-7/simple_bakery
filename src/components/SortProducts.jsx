import { React, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortProducts({sortValue, setSortValue}) {

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          sx={{ backgroundColor: "whitesmoke", borderRadius: "7px", width: "10em" }}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sortValue}
          placeholder='Sort'
          onChange={handleChange}
          >
          <MenuItem value={0}>Default Sorting</MenuItem>
          <MenuItem value={10}>Name A - z</MenuItem>
          <MenuItem value={20}>Name Z - a</MenuItem>
          <MenuItem value={30}>Price ascending</MenuItem>
          <MenuItem value={40}>Price descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
