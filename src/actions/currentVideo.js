var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  return {
    type: 'SET_CURRENT_VIDEO',
    video: video, //object
  }
};

export default changeVideo;
