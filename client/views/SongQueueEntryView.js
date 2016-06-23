// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    this.template = _.template(`
      <li><%- title %></li>
    `);
    this.$el.on('click', () => {
      this.model.dequeue();
    });
  },
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
