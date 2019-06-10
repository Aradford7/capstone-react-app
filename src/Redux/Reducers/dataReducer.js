import {
    SET_REACTS,
    LIKE_REACT,
    UNLIKE_REACT,
    LOADING_DATA,
    DELETE_REACT,
    POST_REACT,
    SET_REACT,
    // SUBMIT_COMMENT
  } from '../types';
  
  const initialState = {
    reacts: [],
    react: {},
    loading: false
  };

  export default function(state = initialState, action){
      switch(action.type){
          case LOADING_DATA:
              return{
                  ...state,
                  loading:true
              }
          case SET_REACTS:
              return{
                  ...state,
                  reacts: action.payload,
                  loading:false
              };
         case SET_REACT:
               return {
                  ...state,
                  react: action.payload
              };
          case LIKE_REACT:
          case UNLIKE_REACT:
              let index = state.reacts.findIndex((react) => react.reactId === action.payload.reactId);
              state.reacts[index] = action.payload;
              if(state.react.reactId === action.payload.reactId){
                  state.react = action.payload;
              }
              return {
                  ...state
              };
          case DELETE_REACT:
              let i = state.reacts.findIndex(react => react.reactId === action.payload);
              state.reacts.splice(i, 1);
              return {
                  ...state
              };
          case POST_REACT:
              return{
                  ...state,
                  reacts:[action.payload, ...state.reacts]
              };
          default:
              return state;
          
      }
  }