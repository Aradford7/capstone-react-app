import {
    SET_REACTS,
    LOADING_DATA,
    LIKE_REACT,
    UNLIKE_REACT,
    DELETE_REACT,
    //SET_ERRORS,
    // POST_REACTS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_REACT,
    STOP_LOADING_UI,
    // SUBMIT_COMMENT
  } from '../types';

  import axios from 'axios';
  
  // Get all reacts
  export const getReacts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/reacts')
      .then((res) => {
        dispatch({
          type: SET_REACTS,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_REACTS,
          payload: []
        });
      });
  };
  //show 1 react
  export const getReact = (reactId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/react/${reactId}`)
      .then((res) => {
        dispatch({
          type: SET_REACT,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  // Post a react
//   export const postReact = (newReact) => (dispatch) => {
//     dispatch({ type: LOADING_UI });
//     axios
//       .post('/react', newReact)
//       .then((res) => {
//         dispatch({
//           type: POST_React,
//           payload: res.data
//         });
//         dispatch(clearErrors());
//       })
//       .catch((err) => {
//         dispatch({
//           type: SET_ERRORS,
//           payload: err.response.data
//         });
//       });
//   };
  // Like a React
  export const likeReact = (reactId) => (dispatch) => {
    axios
      .get(`/react/${reactId}/like`)
      .then((res) => {
        dispatch({
          type: LIKE_REACT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  // Unlike a react
  export const unlikeReact = (reactId) => (dispatch) => {
    axios
      .get(`/react/${reactId}/unlike`)
      .then((res) => {
        dispatch({
          type: UNLIKE_REACT,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  // Submit a comment
//   export const submitComment = (reactId, commentData) => (dispatch) => {
//     axios
//       .post(`/react/${reactId}/comment`, commentData)
//       .then((res) => {
//         dispatch({
//           type: SUBMIT_COMMENT,
//           payload: res.data
//         });
//         dispatch(clearErrors());
//       })
//       .catch((err) => {
//         dispatch({
//           type: SET_ERRORS,
//           payload: err.response.data
//         });
//       });
//   };

//delete a react!
  export const deleteReact = (reactId) => (dispatch) => {
    axios
      .delete(`/react/${reactId}`)
      .then(() => {
        dispatch({ type: DELETE_REACT, payload: reactId });
      })
      .catch((err) => console.log(err));
      console.log(dispatch)
  };
  
  export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_REACTS,
          payload: res.data.reacts
        });
      })
      .catch(() => {
        dispatch({
          type: SET_REACTS,
          payload: null
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };