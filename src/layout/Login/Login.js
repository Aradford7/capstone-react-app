import React, { Component } from 'react'
import AppIcon from '../../images/icon.png'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'//use prop types, way a built in method in react for type checking
//MUI 
import {Grid, Typography, TextField} from '@material-ui/core'
const styles = {
    form: {
        textAlign: 'center',

    },
    image: {
        margin: '20px auto 20px auto'
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
            errors: {} //arr for errors on form
        }
    }
    handleSubmit = (e) =>{
        console.log('test handlesubmit')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid container className = {classes.form}>
                <Grid item sm />
                <Grid item sm >
                    <img src = {AppIcon} alt= "capstone" classesName = {classes.image}/>
                    <Typography variant = "h2" className = {classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit = {this.handleSubmit}>
                        <TextField id = "email" name = "email" type = "email" label = "Email" className = {classes.textField}
                            value = {this.state.email} onChange = {this.handleChange} fullWidth/> 
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
