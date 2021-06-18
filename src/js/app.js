App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
