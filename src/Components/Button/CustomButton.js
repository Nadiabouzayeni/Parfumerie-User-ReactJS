import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: '#6B8E23', // Olive Green
        color: 'white',
        '&:hover': {
          backgroundColor: '#556B2F', // Dark Olive Green on hover
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
