import { combineReducers } from 'redux';



const songsReducer = ()=>{
  return [
    { title : 'mama mia' , duration : '4:40'},
    { title : 'all start' , duration : '4:11'},
    { title : 'real wheel' , duration : '4:22'},
    { title : 'i want it' , duration : '4:33'}
  ]; 
};

const selectedSongReducer = (selectedSong = null,action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs : songsReducer,
  selectedSong : selectedSongReducer
});