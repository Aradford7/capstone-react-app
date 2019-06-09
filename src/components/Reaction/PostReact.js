import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../Theme/MyButton'
//MUI stuff
import {Button, Dialog, DialogTitle, DialogContent, TextField, CircularProgress} from '@material-ui/core'
//redux
import {connect} from 'react-redux'
import {postReact} from '../../redux/Actions/dataActions'
//Icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

const styles = {
    submitButton:{
        position: 'relative',
        padding: '1px auto 1px auto'
    },
    progressSpinner: {
        position: 'absolute',
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
        top: '10%'
    },
}
class PostReact extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    };
    handleOpen = () => {
        this.setState({open:true})
    };
    handleClose = () => {
        this.setState({open:false})
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    render(){
        const {errors} = this.state;
        const {classes, UI: {loading}} = this.props;
        return(
            <Fragment>
                <MyButton onClick = {this.handleOpen} tip = "Post a React!">
                    <AddIcon color = "secondary"/>
                </MyButton>
                <Dialog
                    open = {this.state.open} 
                    onClose = {this.handleClose}
                    fullWidth
                    maxWidth = "sm"
                    >
                    <MyButton tip = "Close" onClick = {this.handleClose} tipClassName = {classes.closeButton}>
                        <CloseIcon/>
                    </MyButton>

                    <DialogTitle>
                        Post a new React
                    </DialogTitle>

                    <DialogContent>
                        <form onSubmit = {this.handleSumbit}>
                            <TextField
                                name = "body"
                                type = "text"
                                multiline
                                rows = "3"
                                placeholder = "Send Reacts to your friends!"
                                errors = {errors.body ? true: false}
                                className = {classes.textField}
                                onChange = {this.handleChange}
                                fullWidth/>

                            <Button type = "submit" variant = "contained" color = "primary"
                                className = {classes.submitButton} disabled = {loading}>
                                    SUBMIT 
                                    {loading && (
                                     <CircularProgress size = {30} className = {classes.progressSpinner}/>
                                    )}              
                            </Button>
                        </form>
                    </DialogContent>

                </Dialog>
            </Fragment>
        )
    }  
}

PostReact.propTypes = {
    postScream: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, {postReact})(withStyles(styles)(PostReact))

