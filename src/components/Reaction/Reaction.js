import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {likeReact, unlikeReact} from '../../redux/Actions/dataActions'
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



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
    likedReact = () => {
        if(this.props.user.likes && this.props.user.likes.find(
            like => like.reactId === this.props.react.reactId
            )
        )
        return true;
        else return false;
    };
    likeReact = () => {
        this.props.likeReact(this.props.react.reactId)
    }
    unlikeReact = () => {
        this.props.unlikeReact(this.props.react.reactId)
    }
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
                commentCount
            },
            user: {
                authenticated,
                credentials: {username}
            }
        } = this. props;

        const likeButton = !authenticated ? (
            <MyButton tip = "Like">
                <Link to = "/login">
                    <FavoriteBorder  color = "primary"/>
                </Link>
            </MyButton>
        ):(
            this.likedReact() ? (
                <MyButton tip = "Unlike" onClick = {this.unlikeReact}>
                    <FavoriteIcon color = "primary"/>
                </MyButton>
            ):(
                <MyButton tip = "like" onClick = {this.likeReact}>
                    <FavoriteBorder color = "primary"/>
                </MyButton>
            )
        )
        return (
            <Card className = {classes.card}>
                <CardMedia 
                    image = {userImage}
                    title = "Profile Avatar"
                    className = {classes.image}/>
                        <CardContent className={classes.content}>
                            <Typography variant = "h5" color = "primary" component = {Link} to ={`/users/${userHandle}`}>{userHandle}</Typography>
                            
                            
                            <Typography variant = "body2" color ="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                            
                            <Typography variant = "body1" >{body}</Typography>

                            {likeButton}
                            <span>{likeCount} Reacts</span>

                            <MyButton tip = "comments">
                                <ChatIcon color = "primary"/>
                                <span>{commentCount} Reactions </span>
                            </MyButton>
                            
                        </CardContent>
            </Card>
        )
    }
}

React.propType = {
    likeReact: PropTypes.func.isRequired,
    unlikeReact: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    react:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired

}
const mapStateToProps =  state => ({
    user: state.user
})

const mapActionsToProps = {
    likeReact,
    unlikeReact
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Reaction));
