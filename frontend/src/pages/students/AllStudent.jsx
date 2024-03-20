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

const AllStudent = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = props.title;
        const fetchData = async () => {
            try {
                const result = await axios.get('https://studentattendence-backendapi.vercel.app/api/student/search');
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleAttendanceChange = async (id) => {
        try {
            // Toggle the attendance value based on the current state
            const updatedData = data.map(student =>
                student._id === id ? { ...student, attended: !student.attended } : student
            );
            setData(updatedData);

            await axios.post(`https://studentattendence-backendapi.vercel.app/api/student/attendence/${id}`);
            console.log('Attendance updated successfully');
        } catch (error) {
            console.error('Error updating attendance:', error);
        }
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className='div'>
            <TableContainer component={Paper}>
                <Box>
                    <Typography variant='h3' component="div">
                        Today Attendance {formattedDate}
                    </Typography>
                </Box>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Roll No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Section</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Gardian Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((student, index) => (
                            <TableRow key={student._id}>
                                <TableCell>{student.rollno}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.classes}</TableCell>
                                <TableCell>{student.section}</TableCell>
                                <TableCell>{student.phoneNumber}</TableCell>
                                <TableCell>{student.parentsName}</TableCell>
                                <TableCell>{student.address}</TableCell>
                                <TableCell>
                                    <input
                                        type="checkbox"
                                        checked={student.attended || false}
                                        onChange={() => handleAttendanceChange(student._id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllStudent;
