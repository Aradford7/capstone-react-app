import React, { Component } from 'react'
import axios from 'axios'
//styling
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  


export default class ReactToMyReactApp extends Component {
    state = {
        reacts: null
    }
    componentDidMount(){
        axios.get('/reacts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    reacts: res.data
                })
            })
            .catch(err => console.log(err));
    }
    

    render() {
        let recentReactsMarkup = this.state.reacts ? 
            (this.state.reacts.map(react => <p>{react.body}</p>)
            ): <p>loading...</p>
        //to see if screams
        return (
            <div >
            
            <AutoGrid markup={recentReactsMarkup}/>
            </div>
        );
    }
}

const AutoGrid = ({markup}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Grid container spacing = {3}>
          <Grid item xs>
            <Paper className={classes.paper}>{markup}</Paper>
          </Grid>
          <Grid item sm = {4} xs = {12}>
            <Paper className={classes.paper}>Profile</Paper>
          </Grid >
        </Grid>
      </div>
    )
}
    



// export default ReactToMyReactApp;
