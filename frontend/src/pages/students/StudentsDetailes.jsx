import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Box, Typography } from '@mui/material';
import '../../App.css'

const StudentDetailes = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = props.title;
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8080/api/student/search');
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className='div'>
            <TableContainer component={Paper} sx={{padding:5}}>
                    <Box>
                        <Typography variant='h3' component="div">
                            All Registerd Students Detailes {formattedDate}
                        </Typography>
                    </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Roll No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gardian Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>PhoneNumber</TableCell>
                            <TableCell>Address</TableCell>   
                            <TableCell>City</TableCell>    
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((student, index) => (
                            <TableRow key={student._id}>
                                <TableCell>{student.rollno}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.parentsName}</TableCell>
                                <TableCell>{student.classes}</TableCell>
                                <TableCell>{student.section}</TableCell>
                                <TableCell>{student.phoneNumber}</TableCell>
                                <TableCell>{student.address}</TableCell>
                                <TableCell>{student.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StudentDetailes;
