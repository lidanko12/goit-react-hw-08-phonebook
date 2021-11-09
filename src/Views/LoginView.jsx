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
import { useSpring,animated } from 'react-spring';


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const props = useSpring({
    from: {
      opacity :0 , transform : 'translate(-1000px,0px)'
    },
    to: { opacity: 0.8, transform: 'translate(0px,0px)', },
    delay:50,
    
  })

  
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
   const handleChangePassword = (event) => {
    setPassword(event.target.value);
    };
    

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) return toast.error('Please input email !!!');
    if (!password) return toast.error('Please input password !!!');

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div style={{ overflow:'hidden'}}>
       <animated.div style={props}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5 },
                }}
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off">
                <FormControl variant='filled'>
                    <InputLabel>Email</InputLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required/>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel>Password</InputLabel>
                    <Input
                        
                        type="password"
                        value={password}
                        onChange={handleChangePassword} />
                </FormControl>
                <Button variant="contained" type="submit" size="medium">Log in</Button>
      </Box>
      </animated.div>
      <ToastContainer transition={Zoom} autoClose={2000} />
        </div>
    )
}
