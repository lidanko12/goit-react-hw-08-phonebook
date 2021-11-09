import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring ,animated } from 'react-spring';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setPressed] = useState(false);
  const props = useSpring({
    from: {
      opacity :0 , transform : 'translate(-1000px, 0px)'
    },
    to: { opacity: 1, transform: 'translate(0px,0px)' },
    // delay:100,
    
  })


   const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
   const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
   const handleChangeName = (event) => {
    setName(event.target.value);
    };
    

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return toast.error('Please input name');
    if (!email) return toast.error('Please input email');
    if (!password) return toast.error('Please input password');
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
  
    <div style={{ overflow:'hidden'}}>
              <animated.div style={props}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2 },
                }}
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off">
        
                <FormControl variant="standard">
                    <InputLabel>Name</InputLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleChangeName} />
                </FormControl>
                    <FormControl variant="standard">
                    <InputLabel>Email</InputLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel>Password</InputLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={handleChangePassword} />
                </FormControl>
          <Button variant="contained" type="submit">Register</Button>
          
      </Box>
      </animated.div> 
      <ToastContainer transition={Zoom} autoClose={2000} />
  
      </div>
    
  );
}