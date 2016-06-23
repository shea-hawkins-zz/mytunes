// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();  
      }
    }, this);
    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      if (this.at(0) === song && this.length > 1) {
        this.at(1).play();
      }
      this.remove(song);
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  }

});