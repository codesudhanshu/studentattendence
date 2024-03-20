import { Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

const StudentCreates = (props) => {
    const [name, setName] = useState('');
    const [parentsName, setParentsName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [classes, setClasses] = useState('');
    const [section, setSection] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        document.title = props.title;
    }, []);

    const form = [
        {
            type: 'text',
            placeholder: 'Student Name',
            value: name,
            changes: (value) => setName(value),
        },
        {
            type: 'text',
            placeholder: 'Guardian Name',
            value: parentsName,
            changes: (value) => setParentsName(value),
        },
        {
            type: 'email',
            placeholder: 'Email',
            value: email,
            changes: (value) => setEmail(value),
        },
        {
            type: 'text',
            placeholder: 'Phone Number',
            value: phoneNumber,
            changes: (value) => setPhoneNumber(value),
        },
        {
            type: 'text',
            placeholder: 'Class Name',
            value: classes,
            changes: (value) => setClasses(value),
        },
        {
            type: 'text',
            placeholder: 'Section Name',
            value: section,
            changes: (value) => setSection(value),
        },
        {
            type: 'text',
            placeholder: 'Address',
            value: address,
            changes: (value) => setAddress(value),
        },
        {
            type: 'text',
            placeholder: 'City',
            value: city,
            changes: (value) => setCity(value),
        },
    ];

    const handleStudent = async () => {
        // Validate form fields
        if (!name || !parentsName || !email || !phoneNumber || !classes || !section || !address || !city) {
            setValidationError('Please fill in all fields.');
            return;
        }

        setLoading(true);
        try {
            const result = await axios.post('https://studentattendence-backendapi.vercel.app/api/student/create', {
                name,
                email,
                phoneNumber,
                classes,
                section,
                address,
                city,
                parentsName,
            });
            console.log(result);
            setName('');
            setEmail('');
            setPhoneNumber('');
            setClasses('');
            setSection('');
            setAddress('');
            setCity('');
            setParentsName('');
            setLoading(false);
            setValidationError('');
            alert('Student has been successfully created');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setValidationError('');
            alert('Please verify all details and try again');
        }
    };

    return (
        <div className='div'>
            <Card sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', padding: 5 }}>
                <CardContent>
                    <Box>
                        <Typography variant='h3' component='div'>
                            Student Create Portal
                        </Typography>
                    </Box>
                    <Box>
                        {form.map((item, index) => (
                            <TextField
                                key={index}
                                type={item.type}
                                value={item.value}
                                onChange={(e) => item.changes(e.target.value)}
                                label={item.placeholder}
                                sx={{ margin: 2 }}
                                fullWidth
                                variant='outlined'
                                margin='dense'
                            />
                        ))}
                    </Box>
                    {validationError && (
                        <Typography variant='body2' color='error'>
                            {validationError}
                        </Typography>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {loading ? (
                            <CircularProgress sx={{ margin: 'auto' }} />
                        ) : (
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                sx={{ margin: 5 }}
                                onClick={handleStudent}
                            >
                                Submit
                            </Button>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default StudentCreates;
