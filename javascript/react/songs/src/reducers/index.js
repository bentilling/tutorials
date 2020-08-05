import {combineReducers} from 'redux'

const songListReducer = () => {
  return [
    {title:'Afterlife', length:'5:05'},
    {title:'Night', length:'4:55'},
    {title:'Another Day in Paradise', length:'3:51'},
  ]
}

const selectedSongReducer = (selected={}, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selected
}

export default combineReducers({
  songs: songListReducer,
  selected: selectedSongReducer
});

