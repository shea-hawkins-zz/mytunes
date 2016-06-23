// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    console.log(this.collection);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.html(this.collection.map(function(song) {
      var songEntry = new SongQueueEntryView({model: song}); 
      return songEntry.render();
    })
    );
  }

});
