import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import AppIcon from '../../images/icon.png'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'//use prop types, way a built in method in react for type checking
//MUI 
import {Grid, Typography, TextField, Button} from '@material-ui/core'


const styles = {
    form: {
        textAlign: 'center',

    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle: {
        margin: '10px auto 10px auto',
        textAlign: 'center',
    },
    textField: {
        margin: '10px auto 10px auto'
    },
};


class Login extends Component {
    //handle forms by control component use state or get references
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            loading: false, //when press login button show spinner (cold start cuz fb)
            errors: {}, //arr for errors on form
            redirect: false
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            loading:true
        });
        const userData ={
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/login' , userData)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
        
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    };
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/codey' />
        }
    };
    render() {
        const {classes} = this.props;
        const {errors, loading} = this.state;
        return (
            <Grid container className = {classes.form}>
                <Grid item sm />
                <Grid item sm >
                    <img src = {AppIcon} alt= "capstone" classesName = {classes.image}/>
                    <Typography variant = "h2" className = {classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit = {this.handleSubmit}>
                        <TextField 
                        id = "email" 
                        name = "email" 
                        type = "email" 
                        label = "Email" 
                        helpText = {errors.email}
                        errors = {errors.email ? true : false}
                        className = {classes.textField}
                        value = {this.state.email} 
                        onChange = {this.handleChange} 
                        fullWidth/> 

                         <TextField 
                         id = "password" 
                         name = "password" 
                         type = "password" 
                         label = "Password" 
                         helpText = {errors.password}
                         errors = {errors.password ? true : false}
                         className = {classes.textField}
                         value = {this.state.password} 
                         onChange = {this.handleChange} 
                         fullWidth/> 
                        
                        {this.renderRedirect()}
                        <Button 
                            onClick={this.setRedirect}
                            type = "submit" 
                            variant = "contained" 
                            color = "primary" 
                            className = {classes.button}>
                                LOGIN 
                        </Button>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
};


Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login);
