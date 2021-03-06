import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import {Button, Grid, TextField} from '@material-ui/core'

//redux
import {connect} from 'react-redux'
import {submitComment} from '../../redux/Actions/dataActions'

const styles = {
    
}
export class CommentForm extends Component {
    state = {
        body: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors) {
            this.setState({errors:nextProps.UI.errors});
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({body: ''})
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submitComment(this.props.reactId, {body: this.state.body});
    }
    render() {
        const {classes, authenticated}  = this.props;
        const errors =  this.state.errors;

        const commentFormMarkup = authenticated ? (
            <Grid item sm = {12} style = {{textAlign: 'center'}}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField
                        name = "body"
                        type = "text"
                        label = "Comment on react"
                        error = {errors.comment? true: false}
                        helperText = {errors.comment}
                        value = {this.state.body}
                        onChange = {this.handleChange}
                        fullWidth
                        className = {classes.textField}
                        />
                        <Button type = "submit"
                            variant = "contained"
                            color = "primary"
                            className = {classes.button}
                            >
                                Submit
                        </Button>
                    <hr className = {classes.visibleSeparator}/>
                </form>
            </Grid>
        ):null
        return commentFormMarkup;
    }
}


CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    react: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired,
}
const mapStateToProps = state => ({
    UI: state.UI,
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, {submitComment})(withStyles(styles)(CommentForm));
