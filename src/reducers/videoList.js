import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if ('CHANGE_VIDEO_LIST') {
    return action.videoList;
  } else {
    return state;
  }
};

export default videoListReducer;

//pass in previous state and action
//if action type matches (video list was changed)
  //set new state (set current video list to the new video list)
//else
  //return original state