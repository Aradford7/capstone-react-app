import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DeleteReact from './DeleteReact'
import ReactDialog from './ReactDialog'
import LikeButton from './LikeButton'
//redux
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MyButton from '../../Theme/MyButton'
//DayJS npm i --save dayjs is smaller npm package instead of moment
import dayjs from 'dayjs' 
import relativeTime from 'dayjs/plugin/relativeTime'
//MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import {Card, CardContent,CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
//Icons
import ChatIcon from '@material-ui/icons/Chat';




const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
    },
    content: {
        padding: 25,
        objectFix: 'cover'
    },
}
class Reaction extends Component {
    
    render() {
        dayjs.extend(relativeTime)
        const {
            classes,
            react: {
                body, 
                createdAt, 
                userImage, 
                userHandle, 
                reactId, 
                likeCount,
                commentCount,
            },
            user: {
                authenticated, credentials: {username} }
            } = this.props;

       
            
            const deleteButton = authenticated && userHandle === username ? (
                <DeleteReact  reactId = {reactId}/>
            ):null
        return (
            <Card className = {classes.card}>
                <CardMedia 
                    image = {userImage}
                    title = "Profile Avatar"
                    className = {classes.image}/>
                        <CardContent className={classes.content}>
                            <Typography variant = "h5" color = "primary" component = {Link} to ={`/users/${userHandle}`}>{userHandle}</Typography>
                            
                            {deleteButton}
                            <Typography variant = "body2" color ="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                            
                            <Typography variant = "body1" >{body}</Typography>

                            <LikeButton reactId = {reactId}/>
                            <span>{likeCount} Reacts</span>

                            <MyButton tip = "comments">
                                <ChatIcon color = "primary"/>
                            </MyButton>
                                <span>{commentCount} Reactions </span>

                            <ReactDialog reactId = {reactId} userHandle = {userHandle}/>
                            
                        </CardContent>
            </Card>
        )
    }
}

React.propType = {
    user: PropTypes.object.isRequired,
    react:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired

}
const mapStateToProps =  state => ({
    user: state.user
})



export default connect(mapStateToProps)(withStyles(styles)(Reaction));
