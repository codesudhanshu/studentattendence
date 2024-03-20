import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        document.title=props.title
    },)

    const Signuptype = [
        {
            type: "text",
            placeholder: "Enter Name",
            value: name,
            changes: (value) => setName(value)
        },
        {
            type: "email",
            placeholder: "Enter Email",
            value: email,
            changes: (value) => setEmail(value)
        },
        {
            type: "password",
            placeholder: "Enter Password",
            value: password,
            changes: (value) => setPassword(value)
        },
        {
            type: "password",
            placeholder: "Confirm Password",
            value: cpassword,
            changes: (value) => setCpassword(value)
        }
    ];

    const handleSignup = async () => {
        try {
            if (password !== cpassword) {
                alert("Password and Confirm Password do not match");
                return;
            }

            // Add more validation logic here (e.g., password strength, email validation)

            const response = await axios.post('https://studentattendence-backendapi.vercel.app/api/signup', { name, email, password, cpassword });
            const { token } = response.data;

            // Store the token securely (e.g., using session storage or HTTP-only cookies)
            localStorage.setItem('token', token);

            alert("User has been registered successfully");
            navigate('/private/student/create'); // Redirect to protected route or display confirmation
        } catch (error) {
            alert("Please provide correct information");
        }
    };

    return (
        <div className='div'>
            <Card sx={{ marginTop: 5}}>
                <CardContent>
                    <Box>
                        <Typography variant='h3' component="div" sx={{ textAlign: 'center', margin: 5 }} >
                            Student Attendance System
                        </Typography>
                        <Typography variant='h3' component="div" sx={{ textAlign: 'center', margin: 2 }}>
                            Signup
                        </Typography>
                    </Box>
                    <Box>
                        {
                            Signuptype.map((item, index) =>
                            <div key={index} style={{ marginBottom: '10px', display:'flex',justifyContent:'center', alignItems:'center' }}>
                            <TextField
                                type={item.type}
                                value={item.value}
                                onChange={(e) => item.changes(e.target.value)}
                                label={item.placeholder}
                                variant="outlined"
                                margin='dense'
                                style={{ width: '50%' }}
                            />
                        </div>                     
                            )
                        }
                    </Box>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <Button variant='contained' color="primary" onClick={handleSignup} sx={{ marginTop: 5 }} >
                            Submit
                        </Button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop: 5}}>
                    <div style={{marginRight:20}}><Link to="/login" >Already Have An Account</Link></div>
                    <div><Link to="/">Home</Link></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;
