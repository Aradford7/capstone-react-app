import React, { Component } from 'react'
import axios from 'axios'
//styling
import Grid from '@material-ui/core/Grid'

class ReactToMyReactApp extends Component {
    componentDidMount(){
        state = {
            reacts: null
        }
        axios.get('/reacts')
            .then(res => {

            })
    }
    render() {
        return (
            <Grid container spacing = {16}>
                <Grid item sm ={8} xs = {12}>
                    <p>Content...</p>
                </Grid>
                <Grid item sm ={8} xs = {12}>
                    <p>Profile...</p>
                </Grid>
            </Grid>
        );
    }
}

export default ReactToMyReactApp;
