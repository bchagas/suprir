//= require jquery
//= require jquery-mask
//= require jquery_ujs
//= require turbolinks
//= require underscore

var SuprirVarejo = SuprirVarejo || {};

;(function(){
  SuprirVarejo.messages = function() {
    var closeButton = $("[data-type='close']"),
        item = closeButton.data("parent");

    $("body").on("click", closeButton, function(){
      closeButton.parent(item).remove();
    });
  };

  SuprirVarejo.maskedInputs = function() {
    var phoneInput = $("input[type='tel']");

    _.map(phoneInput, function(input) {
      $(input).mask("(99) 9999-9999?9");
    });
  };

  SuprirVarejo.dropdown = function() {
    var buttons = $("[data-type='drop']");

    _.map(buttons, function(button) {
      item = $(button).data("content");

      $(".user-navigation").on("click", button, function(event){
        $(button).next(item).toggle();
        $(button).toggleClass("open");
      });

    });
  };
})();
