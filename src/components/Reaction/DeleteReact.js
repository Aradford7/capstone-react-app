import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MyButton from '../../Theme/MyButton';

// MUI Stuff
import {Dialog, DialogTitle, DialogActions, Button }from '@material-ui/core';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';
import { deleteReact } from '../../redux/Actions/dataActions';

const styles = {
  deleteButton: {
    position: 'absolute',
    left: '60%',
    top: '30%'
  }
};

class DeleteReact extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteReact = () => {
    this.props.deleteReact(this.props.reactId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>

        <MyButton
          tip="Delete React"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure reeeally ...you want to delete this React ?
          </DialogTitle>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            <Button onClick={this.deleteReact} color="secondary">
              Delete
            </Button>
          </DialogActions>

        </Dialog>
      </Fragment>
    );
  }
}

DeleteReact.propTypes = {
  deleteReact: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  reactId: PropTypes.string.isRequired
};

export default connect(
  null, 
  { deleteReact })(withStyles(styles)(DeleteReact));