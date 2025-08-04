import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { handleSearch } from "../handlers/handlers";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box >
      <TextField
        variant='outlined'
        placeholder='Search' 
        sx={{
          width: "15em",
          mb: "1em",
          mx: "1em",
          backgroundColor: "whitesmoke",
          borderRadius: "7px",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(searchTerm, products, setFilteredProducts);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={() => handleSearch(searchTerm, products, setFilteredProducts )} edge='end'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchField;
