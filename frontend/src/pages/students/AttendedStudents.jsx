import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Box, Typography, CircularProgress } from '@mui/material';
import '../../App.css'

const AttendedStudents = (props) => {
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    useEffect(() => {
        document.title = props.title;

        const fetchData = async () => {
            if (!selectedDate) {
                // No need to fetch if date is not selected
                return;
            }

            setLoading(true);
            try {
                // Convert the selected date to YYYY-MM-DD format
                const formattedDate = new Date(selectedDate).toISOString().slice(0, 10);
                const result = await axios.get(`http://localhost:8080/api/student/filter?date=${formattedDate}`);
                setData(result.data);
                setError('');
            } catch (error) {
                // console.error('Error fetching data:', error);
                setError('No Records Found');
            }
            setLoading(false);
        };

        fetchData(); // Fetch data on component mount

        // Cleanup function
        return () => {
            setData([]);
            setError('');
        };
    }, [selectedDate, props.title]);

    return (
        <div className='div'>
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant='h3' component="div">
                    All Students Attended Details
                </Typography>
                <input type="date" value={selectedDate} onChange={handleDateChange} className='input' />
            </Box>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography variant="body1" color="error">{error}</Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Roll No</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Class</TableCell>
                                <TableCell>Section</TableCell>
                                <TableCell>Attendance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((student) => (
                                <TableRow key={student._id}>
                                    <TableCell>{student.rollno}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.classes}</TableCell>
                                    <TableCell>{student.section}</TableCell>
                                    <TableCell>Present</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default AttendedStudents;
