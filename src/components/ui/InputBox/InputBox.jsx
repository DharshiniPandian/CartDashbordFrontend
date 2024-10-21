import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function InputBox({ id, label, variant = 'outlined', value, onChange, type, isSearch,fullWidth = 'false', sx ,size}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      type={type}
      size={size}
      fullWidth={fullWidth}
      sx={sx}
      placeholder={isSearch ? 'Search' : ''}
      InputProps={{
        startAdornment: isSearch ? (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ) : null,
      }}
    />
  );
}

export default InputBox;
