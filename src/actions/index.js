//named export
export const selectSong = song => {
  // type is force payload is optional
  return {
    type : 'SONG_SELECTED',
    payload : song
  };
};

