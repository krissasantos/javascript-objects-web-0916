 // You can make literal syntax and 
 //with the Object constructorpwd
 var playlist = {honne: 'Warm On A Cold Night', chet_faker: 'Talk is Cheap'};

function updatePlaylist(playlist, artistName, songTitle) { 
  playlist[artistName] = songTitle
  return playlist

}

 
function removeFromPlaylist(playlist, artistName) { 
  // delete playlist.artistName;
  delete playlist[artistName]
  return playlist

}

// function updatePlaylist(playlist, the_beatles, 'Black Bird') { 
//   playlist[the_beatles] = 'Black Bird'
// }