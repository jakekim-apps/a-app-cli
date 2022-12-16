import { FC, FormEvent } from 'react';
import {Box, Button, Divider, Grid, InputLabel, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import useInput from "../../hooks/input/use-input";
import {validatePasswordLength} from "../../utils/validation/length";
import {validateEmail} from "../../utils/validation/email";
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth";
import {authService} from "../../services/auth.service";

const SigninForm: FC = () => {

    const {
        text: email,
        shouldDisplayError: emailHasError,
        textChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        clearHandler: emailClearHandler,
    } = useInput(validateEmail)

    const {
        text: password,
        shouldDisplayError: passwordHasError,
        textChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        clearHandler: passwordClearHandler,
    } = useInput(validatePasswordLength);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitHandler = async () => {
        try {
            if (
                emailHasError ||
                passwordHasError
            )
                return;

            if (
                email.length === 0 ||
                password.length === 0
            )
                return;

            await dispatch(login({email, password}));
            navigate('/dashboard')
        } catch (e) {
            console.log(e, 'loginError')
        }
    }

    return (
        <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
                <Grid container direction={'column'} justifyContent={'flex-start'}>
                    <Typography variant={'h4'} component={'h1'}>
                        Sign-In
                    </Typography>

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'email' }}>
                        Email
                    </InputLabel>
                    <TextField
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        error={emailHasError}
                        helperText={emailHasError ? 'Enter your email' : ''}
                        type='email'
                        name='email'
                        id='email'
                        variant='outlined'
                        size='small'
                    />

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'password' }}>
                        Password
                    </InputLabel>
                    <TextField
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        error={passwordHasError}
                        helperText={passwordHasError ? 'Minimum 6 characters required' : ''}
                        type='password'
                        name='password'
                        id='password'
                        variant='outlined'
                        size='small'
                        placeholder='Minimum 6 characters required'
                    />

                    <Button variant={'contained'} style={{marginTop: '16px', height: '31px', backgroundColor: '#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}} type={'submit'}
                        onClick={onSubmitHandler}
                    >
                        Sign-In
                    </Button>
                </Grid>

            <div style={{ marginTop: '30px'}}>
                <small>
                    <span>By continuing, you agree to A-Apps</span>
                </small>
            </div>

            <div>
                <small>
                    <a href="#" style={{textDecoration: 'none'}}> {' '} Conditions fo use</a> and {' '}
                    <a href="#" style={{textDecoration: 'none'}}> {' '} Privacy polish</a>
                </small>
            </div>

            <Divider sx={{marginTop: '36px', marginBottom: '36px'}}>
                <small style={{ color: '#767676'}}> New to A-Apps?</small>
            </Divider>
            <Link
                to={'/register'}
                style={{ textDecoration: 'none', color: '#0000ee' }}
            >
                <Button variant={'contained'} style={{width: '100%', marginTop: '12px', height: '31px', color: 'black', backgroundColor: '#f1f1f1', textTransform: 'none'}}>Register</Button>
            </Link>
        </Box>
    )
}

export default SigninForm
