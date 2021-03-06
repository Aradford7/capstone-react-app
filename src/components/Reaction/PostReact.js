import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../Theme/MyButton'
//MUI stuff
import {Button, Dialog, DialogTitle, DialogContent, TextField, CircularProgress} from '@material-ui/core'
//redux
import {connect} from 'react-redux'
import {postReact, clearErrors} from '../../redux/Actions/dataActions'
//Icons
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

const styles = {
    submitButton:{
        position: 'relative',
        padding: '1px auto 1px auto',
        float: 'right',
        marginTop: 10
    },
    progressSpinner: {
        position: 'absolute',
    },
    closeButton: {
        position: 'absolute',
        left: '91%',
        top: '6%'
    },
}
class PostReact extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({body: '', open: false, errors: {} });
        }
    }
    handleOpen = () => {
        this.setState({open:true})
    };
    handleClose = () => {
        this.props.clearErrors();
        this.setState({open:false, errors:{}})
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postReact({body: this.state.body});
    }
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
                        <form onSubmit = {this.handleSubmit}>
                            <TextField
                                name = "body"
                                type = "text"
                                label = "Send a Reaction!"
                                multiline
                                rows = "3"
                                placeholder = "Send Reactions to your friends!"
                                error = {errors.body ? true: false}
                                helperText = {errors.body}
                                className = {classes.textField}
                                onChange = {this.handleChange}
                                fullWidth/>
                            <br/>   <br/>
                            <Button type = "submit" variant = "contained" color = "secondary"
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
    postReact: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, {postReact , clearErrors})(withStyles(styles)(PostReact))

