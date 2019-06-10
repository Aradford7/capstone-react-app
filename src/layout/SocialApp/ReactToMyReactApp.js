import React, { Component } from 'react'
import Reaction from '../../components/Reaction/Reaction'
import Profile from '../../components/Profile/Profile';
import PropTypes from 'prop-types'
//styling
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {getReacts} from '../../redux/Actions/dataActions';



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
  


class ReactToMyReactApp extends Component {
    componentDidMount(){
     this.props.getReacts();
    }
    render() {
        const {reacts, loading } =this.props.data;
        let recentReactsMarkup = !loading ? 
            (reacts.map((react) =>  <Reaction  key = {react.reactId} react={react}/>)
            ):(<p>loading...</p>);
        //to see if reacts show
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
          <Grid item sm = {8} xs = {12}>
            <Paper className={classes.paper}>{markup}</Paper>
          </Grid>
          <Grid item sm = {4} xs = {12}>
            <Paper className={classes.paper}>
              <Profile/>
            </Paper>
          </Grid >
        </Grid>
      </div>
    )
}

ReactToMyReactApp.propTypes = {
  getReacts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getReacts})(ReactToMyReactApp);


// export default ReactToMyReactApp;


//change date with dayjs instead of moment bc of file size!!!
