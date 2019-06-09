import React, { Component, Fragment } from 'react';
//redux
import {connect} from 'react-redux'
import {deleteReact} from '../../redux/Actions/dataActions'
import PropTypes from 'prop-types'
import MyButton from '../../Theme/MyButton'
//MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import {Button, Dialog, DialogTitle, DialogActions} from '@material-ui/core'
import DeleteOutline from '@material-ui/icons/DeleteOutline'

const styles = {
    
}
class DeleteReact extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({open:true});
    }
    handleClose = () => {
        this.setState({open:false});
    }
    deleteReact = () => {
        this.props.deleteReact(this.props.reactId)
        this.setState({open:false});
    }
    render() {
        const {classes}  = this.props;
        return (
        <Fragment>
            <MyButton tip = "Delete React" onClick = {this.handleOpen} btnClassName = {classes.deleteButton}>
                <DeleteOutline color = "secondary"/>
            </MyButton>

            <Dialog
                open = {this.state.open}
                onClose = {this.handleClose}
                fullWidth
                maxWidth = "sm"
                >
                    <DialogTitle>
                        Are you sure you want to delete this reaction?
                    </DialogTitle>

                    <DialogActions>
                        <Button onClick = {this.handleClose} color = "primary">
                            Cancel
                        </Button>
                        <Button onClick = {this.deleteReact} color = "secondary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>

        </Fragment>
        )    
    }
}

DeleteReact.propTypes = {
    deleteReact: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    reactId: PropTypes.string.isRequired
}

export default connect(null, {deleteReact})(withStyles(styles)(DeleteReact));
