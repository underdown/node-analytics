var socket = io();
var vm = new Vue({
  el: '#app',
  data: {
    pages: {},
    referrers: {},
    activeUsers: 0,
    userAgents: {},
    browserNames: {},
    osNames: {}
  },
  created: function() {
    socket.on('updated-stats', function(data) {
      this.pages = data.pages;
      this.referrers = data.referrers;
      this.activeUsers = data.activeUsers;
      this.userAgents = data.userAgents;
      this.browserNames = data.browserNames;
      this.osNames = data.osNames;
    }.bind(this));
  }
});