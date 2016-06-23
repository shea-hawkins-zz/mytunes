// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.loadSongs()
  },
  loadSongs: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET', 
      success: response => this.populateSongs(response)
    });
  },
  populateSongs: function(response) {
    console.log(response.results);
  }
});