import React from "react";
import Button from '@mui/material/Button';

function MUIButton({text, variant = 'contained', color = 'primary', size = 'medium', onClick, disabled = false, startIcon, endIcon, sx}){
    return(
       <Button 
         variant={variant}
         color={color}
         size={size}
         onClick={onClick}
         disabled={disabled}
         startIcon={startIcon}
         endIcon={endIcon}
         sx={sx}
       >
          {text}
       </Button>
    );
}

export default MUIButton;

