$(document).ready(function() {

  //get all li inside the ul and add click handlers
  $('ul.sidebar li').click(function(e) {
      //get the element clicked on
      var category = $(this)[0].id;

      //make API call for data
      $.getJSON( "api/data.json", function(data){

        var filteredArray = data.filter(function(item){
          if (item.category == category){
            return item;
          }
        });

        var questionOnly = filteredArray.map(function(item){
          return '<li><a href="#sec-' + item.idNum + '">' + item.question + '</a></li>';
        });

        var qAndA = filteredArray.map(function(item){
          return '<h3 id="sec-' + item.idNum + '">' + item.question + '</h3>' +
            '<p>' + item.answer + '</p>';
        });

        var questionHtml = questionOnly.join('');

        var qAndAHtml = qAndA.join('');

        $('#categoryHeading').html('<h1>' + category + '</h1>')
        $('#questionList').html(questionHtml);
        $('#qanda-content').html(qAndAHtml);

      });

  });


/* sicky side bar */

    $('#sidebar').affix({
        offset: {
            top: 235
        }
    });

    /* activate scrollspy menu */
    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });

    /* smooth scrolling sections */
    $(document).on("click", 'a[href*=#]:not([href=#])', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
        return false;
    });

// back to top button

    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


});
