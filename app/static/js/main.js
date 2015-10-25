/*jslint browser:true*/
/*globals $*/

try{Typekit.load();}catch(e){}

var csrftoken = $('meta[name=csrf-token]').attr('content');

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) &&
        !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

$(document).ready(function () {
  // Keep track of mailto: links as connections
  $("a[href^=mailto]").click(function (evt) {
    var connectTo = $(this).data('connect-to');
    if (connectTo) {
      $.post('/email', {
        'emails': connectTo.split(',')
      });
    }
  });

  $('form[data-submit-on-change]').change(function() {
    this.submit();
  });

  // Ensure the name of our active tab on our horizontally-scrollabar
  // tab bars is visible.
  $('.b-contextual-nav').each(function() {
    var active = $('li.active', this);
    var offset = active.offset();
    if (!offset) return;
    if (offset.left > window.innerWidth - 100) {
      $(this).scrollLeft(offset.left);
    }
  });
});
