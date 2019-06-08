import React, { Component } from 'react'
import axios from 'axios'
import AppIcon from '../../images/icon.png'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'//use prop types, way a built in method in react for type checking
//MUI 
import {Grid, Typography, TextField, Button, Container, Paper} from '@material-ui/core'


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
        margin: '10px auto 10px auto',
        width: 600,
    },
    button: {
        marginTop: 20,
        background: 'linear-gradient(45deg, #ff80ab 30%, #ff99bb 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',    
    },
    customError: {
        color: 'red'
    },
    login:{
        width: 800,
        height: 450,
        background:'#c786d3',
        padding: '0 10px',
        margin: '20px auto 20px auto'
    }
           
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
                this.props.history.push('/codey');
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
   
    render() {
        const {classes} = this.props;
        const {errors, loading} = this.state;
        return (
        <Container className = {classes.login}>
            <Grid container className = {classes.form}>
                <Grid item md />
                <Grid item md >
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

                        {errors.general && (
                            <Typography variant = "body2" className = {classes.customError}>
                                {errors.general}
                            </Typography>
                        )}

                     
                        <Button 
                            type = "submit" 
                            variant = "contained" 
                            className = {classes.button}>
                                LOGIN 
                        </Button>
                    </form>
                </Grid>
                <Grid item md />
            </Grid>
        </Container>
        
        )
    }
};


Login.propTypes = {
    classes: PropTypes.object.isRequired
}



export default withStyles(styles)(Login);
