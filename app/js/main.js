$(function(){

   
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
    $('.menu__btn').toggleClass("menu__btn-on");
  });


  $('.news_content-tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.news_content-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.news_content-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

    $('.matches__inner .tab-right').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.matches__inner').find('.tab-item-right').removeClass('active-tab-right').hide();
        $('.matches__inner .matches__disciplines').find('.tab-right').removeClass('active-right');
        $(this).addClass('active-right');
        $('#'+id).addClass('active-tab-right').fadeIn();
        return false;
      });
    
      $('.streams__inner .stream__discipline').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.streams__inner').find('.stream__content-item').removeClass('active-stream-tab').hide();
          $('.streams__inner .streams__disciplines').find('.stream__discipline').removeClass('active-stream');
          $(this).addClass('active-stream');
          $('#'+id).addClass('active-stream-tab').fadeIn();
          return false;
        });



        $('.load-more-ongoing').click(function() {
          $('.events-content-box-ongoing').slideToggle();
          if ($('.load-more-ongoing').text() == "show less") {
            $(this).text("show more")
          } else {
            $(this).text("show less")
          }
        });

        $('.load-more-upcoming').click(function() {
          $('.events-content-box-upcoming').slideToggle();
          if ($('.load-more-upcoming').text() == "show less") {
            $(this).text("show more")
          } else {
            $(this).text("show less")
          }
        });

        $('.load-more-past-events').click(function() {
          $('.events-content-box-past-events').slideToggle();
          if ($('.load-more-past-events').text() == "show less") {
            $(this).text("show more")
          } else {
            $(this).text("show less")
          }
        });
      

        

});