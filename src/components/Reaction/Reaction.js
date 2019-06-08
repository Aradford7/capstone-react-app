import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//DayJS npm i --save dayjs is smaller npm package instead of moment
import dayjs from 'dayjs' 
import relativeTime from 'dayjs/plugin/relativeTime'
//MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import {Card, CardContent,CardMedia} from '@material-ui/core';

import Typography from '@material-ui/core/Typography'


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
                commentCount}} = this. props
                console.log(createdAt)
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
                        </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Reaction);
