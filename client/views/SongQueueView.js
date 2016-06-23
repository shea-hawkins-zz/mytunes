// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('change', this.render, this);
  },

  render: function() {
    this.$el.html(this.collection.map(function(song) {
      var songEntry = new SongQueueEntryView({model: song}); 
      return songEntry.render();
    })
    );
  }

});
