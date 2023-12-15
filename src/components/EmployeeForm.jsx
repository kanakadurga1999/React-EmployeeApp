
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const EmployeeForm = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>Employee Form</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          
        />
        <TextField
          label="Designation"
          variant="outlined"
          margin="normal"
          fullWidth
          
        />
        <TextField
          label="Location"
          variant="outlined"
          margin="normal"
          fullWidth
          
        />
        <TextField
          label="Salary"
          variant="outlined"
          margin="normal"
          fullWidth
          
        />
        <Button
          type="submit"
          variant="contained"
          
          startIcon={<PersonAddIcon />}
          sx={{
            color:"#FFA500",
            mt: 4,
            backgroundColor: 'black', 
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
