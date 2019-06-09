import React, { Component } from 'react'

//MUI
import {Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

const styles = {
    form: {
        textAlign: 'center',
        color: 'white'

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
        color: 'white'
    },
    button: {
        marginTop: 20,
        background: 'linear-gradient(45deg, #ff80ab 30%, #ff99bb 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '10px auto 10px auto',    
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10,
    },
    signup:{
        maxWidth: 800,
        height: 630,
        background:'#c786d3',
    },
    progress: {
        position: 'absolute',
        color: '#F8E71C'
    }
}

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button 
                    type = "submit" 
                    variant = "contained" 
                    href = "/signup"
                    className = {classes.button}
                    >
                    SIGN UP
                </Button>
            </div>
        )
    }
}



export default withStyles(styles)(Home);
