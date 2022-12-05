import { FC, FormEvent } from 'react';
import {Box, Button, Divider, Grid, InputLabel, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {validateNameLength, validatePasswordLength} from "../../utils/validation/length";

import useInput from '../../hooks/input/use-input'
import {validateEmail} from "../../utils/validation/email";

const RegisterForm: FC = () => {

    const {
        text: name,
        shouldDisplayError: nameHasError,
        textChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        clearHandler: nameClearHandler
    } = useInput(validateNameLength);

    const {
        text: email,
        shouldDisplayError: emailHasError,
        textChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        clearHandler: emailClearHandler
    } = useInput(validateEmail);

    const {
        text: password,
        shouldDisplayError: passwordHasError,
        textChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        clearHandler: passwordClearHandler
    } = useInput(validatePasswordLength);

    const {
        text: confirmPassword,
        shouldDisplayError: confirmPasswordHasError,
        textChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        clearHandler: confirmPasswordClearHandler
    } = useInput(validatePasswordLength);

    const {
        text: phone,
        shouldDisplayError: phoneHasError,
        textChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        clearHandler: phoneClearHandler
    } = useInput(validateNameLength);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('click')
    }

    return (
        <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
            <form onSubmit={onSubmitHandler}>
                <Grid container direction={'column'} justifyContent={'flex-start'}>
                    <Typography variant={'h4'} component={'h1'}>
                        Create Account
                    </Typography>

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'email' }}>
                        Email
                    </InputLabel>
                    <TextField
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        error={emailHasError}
                        helperText={emailHasError ? 'Invalid your email' : ''}
                        type={'text'}
                        name={'email'}
                        id={'email'}
                        variant={'outlined'}
                        size={'small'}
                    />

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'password' }}>
                        Password
                    </InputLabel>
                    <TextField
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        error={passwordHasError}
                        helperText={passwordHasError ? 'Invalid your password' : ''}
                        type={'password'}
                        name={'password'}
                        id={'password'}
                        variant={'outlined'}
                        size={'small'}
                    />

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'confirmPassword' }}>
                        Confirm Password
                    </InputLabel>
                    <TextField
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordBlurHandler}
                        error={confirmPassword.length > 0 && password !== confirmPassword}
                        helperText={confirmPassword.length > 0 && password !== confirmPassword  ? 'Passwords must match' : ''}
                        type={'password'}
                        name={'confirmPassword'}
                        id={'confirmPassword'}
                        variant={'outlined'}
                        size={'small'}
                    />

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'name' }}>
                        Name
                    </InputLabel>
                    <TextField
                        value={name}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        error={nameHasError}
                        helperText={nameHasError ? 'Enter your name' : ''}
                        type={'text'}
                        name={'name'}
                        id={'name'}
                        variant={'outlined'}
                        size={'small'}
                    />

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', htmlFor: 'phone' }}>
                        Phone
                    </InputLabel>
                    <TextField
                        value={phone}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                        error={phoneHasError}
                        helperText={phoneHasError ? 'Enter your phone' : ''}
                        type={'text'}
                        name={'phone'}
                        id={'phone'}
                        variant={'outlined'}
                        size={'small'}
                    />

                    <Button variant={'contained'} style={{marginTop: '16px', height: '31px', backgroundColor: '#f0c14b', color: 'black', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none'}} type={'submit'}>Register</Button>
                </Grid>
            </form>

            <div style={{ marginTop: '30px'}}>
                <small>
                    <span>By creating an account, you agree to A-Apps</span>
                </small>
            </div>

            <div>
                <small>
                    <a href="#" style={{textDecoration: 'none'}}> {' '} Conditions fo use</a> and {' '}
                    <a href="#" style={{textDecoration: 'none'}}> {' '} Privacy polish</a>
                </small>
            </div>

            <Divider sx={{marginTop: '36px', marginBottom: '36px'}}/>


            <div>
                <small>
                    Already have an account?{' '}
                    <Link to={'/signin'} style={{textDecoration: 'none', color: '#0000ee'}}>Sign-in</Link>
                </small>
            </div>

        </Box>

    )
}

export default RegisterForm
