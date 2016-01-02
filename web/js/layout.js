;(function(window, document, $){

  $.extend({

    appLayout : {

      initLayout: function() {
        var resizeTimer = null;
        function calculateMidHeight() {
          var $top = $('#app-top'),
            $nav = $('#app-nav'),
            $mid = $('#app-middle'),
            $bottom = $('#app-bottom');
          $mid.css('height', $('body').height() - $top.outerHeight() - $nav.outerHeight() - $bottom.outerHeight());
        }
        $(window).resize(function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function(){
            calculateMidHeight();
          }, 250);
        });
        calculateMidHeight();
      },

    }

  });

  $(document).ready(function(){
    $.appLayout.initLayout();
  });

})(window, document, jQuery)
