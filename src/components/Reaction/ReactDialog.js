import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../Theme/MyButton';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';
import LikeButton from './LikeButton'
import Comments from './Comments'
import CommentForm from './CommentForm'
//Mui
import { Dialog, DialogContent, CircularProgress, Grid, Typography} from '@material-ui/core'
//Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';

//Redux stuff
import {connect} from 'react-redux';
import {getReact, clearErrors} from '../../redux/Actions/dataActions';

const styles = {
    invisibleSeparator: {
        border: 'none',
        margin: 4
    },
    visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid cyan',
        marginBottom:20
    },
    profileImage: {
        maxWidth: 200,
        height: 200,
        borderRadius: '50%',
        objectFit : 'cover'
    },
    dialogContent: {
        padding: 20
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    // expandButton: {
    //     position: 'absolute',
    //     left: '90%'
    // }
    spinnerDiv: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    }
}

class ReactDialog extends Component {
   state = {
       open: false
   }
   handleOpen = () => {
       this.setState({open:true});
       this.props.getReact(this.props.reactId);
   }
   handleClose = () => {
    this.setState({open:false});
    this.props.clearErrors();
   }
   render(){
       const {
           classes, 
           react: {
               reactId, 
               body, 
               createdAt, 
               likeCount, 
               commentCount, 
               userImage, 
               userHandle, 
               comments
           
           }, 
            UI: {loading}
        } = this.props
        
        const dialogMarkup = loading ? (
            <div className = {classes.spinnerDiv}>
                  <CircularProgress size = {200} thickness = {2}/>
            </div>
        ):(
            <Grid container spacing = {16}>
                <Grid item sm = {5}>
                    <img src = {userImage} alt ="Profile" className = {classes.profileImage}/>
                </Grid>
                <Grid item sm = {7}>
                    <Typography
                        component = {Link}
                        color = "primary"
                        variant = "h5"
                        to = {`/users/${userHandle}`}> @{userHandle}
                    </Typography>
                    <hr className = {classes.invisibleSeparator}/>
                    <Typography
                        variant = "body2" color = "textSecondary">
                            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                    </Typography>
                    <hr className = {classes.invisibleSeparator}/>
                    <Typography variant = "body1">{body}</Typography>

                    <LikeButton reactId = {reactId}/>
                    <span>{likeCount} Reacts</span>

                    <MyButton tip = "comments">
                        <ChatIcon color = "primary"/>
                    </MyButton>
                    <span>{commentCount} Reactions </span>
                </Grid>
                <hr className = {classes.visibleSeparator}/>
                <CommentForm reactId = {reactId}/>
                <Comments comments = {comments}/>
            </Grid>
        )
        return(
            <Fragment>
                <MyButton onClick = {this.handleOpen} tip ="Expand" tipClassName = {classes.expandButton}>
                    <UnfoldMore/>
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

                    <DialogContent className = {classes.dialogContent}>
                        {dialogMarkup}
                    </DialogContent>

                </Dialog>
            </Fragment>
        )
   }
}

ReactDialog.propTypes = {
    getReact: PropTypes.func.isRequired,
    reactId: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    react: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    react: state.data.react,
    UI: state.UI

})

const mapActionsToProps = {
    getReact,
    clearErrors
};
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ReactDialog));
