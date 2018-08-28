import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if ('SET_CURRENT_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

//pass in previous state and action
//if action type matches (video was changed)
  //set new state (set current video to the new video)
//else
  //return original state
export default currentVideoReducer;
