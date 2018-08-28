var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  return {
    type: 'CHANGE_VIDEO_LIST',
    videoList: videos, //array
  }
});

export default changeVideoList;
