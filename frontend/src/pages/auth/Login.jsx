import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const Signuptype = [
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
    ];
    const handleLogin = async () => {
        try {
            const response = await axios.post('https://studentattendence-backendapi.vercel.app/api/login', { email, password });
            const { token } = response.data;

            // Store the token securely (e.g., using session storage or HTTP-only cookies)
            sessionStorage.setItem('token', token);

            alert("User has been logged in successfully");
            navigate('/private/student/create'); // Redirect to protected route
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Invalid email or password");
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    };

    useEffect(()=>{
        document.title=props.title
    },)

    return (
        <div className='div'>
            <Card sx={{ marginTop: 5 }}>
                <CardContent>
                    <Box>
                        <Typography variant='h3' component="div" sx={{ textAlign: 'center', margin: 5 }} >
                            Student Attendance System
                        </Typography>
                        <Typography variant='h3' component="div" sx={{ textAlign: 'center', margin: 2 }}>
                           Login
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
                    <Box>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <Button variant='contained' color="primary" onClick={handleLogin} sx={{ marginTop: 5 }} >
                            Submit
                        </Button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop: 5}}>
                    <div style={{marginRight:20}}><Link to="/signup" >Create An Account</Link></div>
                    <div><Link to="/">Home</Link></div>
                    </div>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
