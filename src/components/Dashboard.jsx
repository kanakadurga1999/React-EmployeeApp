
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div >
      <h1 style={{ textAlign: 'center' }}>Employee Dashboard</h1>
      {employees.map((employee) => (
        <Card key={employee.id} sx={{ minWidth: 275, margin: '10px 0',  backgroundColor: 'black', color: 'white', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div"sx={{ color: '#FFA500'  }}>
              {employee.name}
            </Typography>
            <Typography sx={{ mb: 1.5 ,color:'gray'}} >
              ID: {employee.id}
            </Typography>
            <Typography variant="body2">{employee.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
