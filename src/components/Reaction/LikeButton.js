import React, { Component } from 'react'
import MyButton from '../../Theme/MyButton'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

//Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
//Redux
import {connect} from 'react-redux';
import {likeReact, unlikeReact} from '../../redux/Actions/dataActions'

class LikeButton extends Component {
    likedReact = () => {
        if(this.props.user.likes && this.props.user.likes.find(
            like => like.reactId === this.props.reactId
            )
        )
        return true;
        else return false;
    };
    likeReact = () => {
        this.props.likeReact(this.props.reactId)
    }
    unlikeReact = () => {
        this.props.unlikeReact(this.props.reactId)
    }
    render() {
        const {authenticated} = this.props.user;
        const likeButton = !authenticated ? (
            <Link to = "/login">
                <MyButton tip = "Like">
                    <FavoriteBorder  color = "primary"/>
                </MyButton>
            </Link>
        ):this.likedReact() ? (
                <MyButton tip = "Unlike" onClick = {this.unlikeReact}>
                    <FavoriteIcon color = "primary"/>
                </MyButton>
            ):(
                <MyButton tip = "like" onClick = {this.likeReact}>
                    <FavoriteBorder color = "primary"/>
                </MyButton>
            );
        return likeButton;
    }
}

LikeButton.propTypes = {
    user: PropTypes.object.isRequired,
    reactId: PropTypes.string.isRequired,
    likeReact: PropTypes.func.isRequired,
    unlikeReact: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    likeReact,
    unlikeReact
}
export default connect(mapStateToProps, mapActionsToProps)(LikeButton)
