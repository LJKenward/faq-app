/* activate sidebar */ 
$(document).ready(function() {

    var billingLink = $('#billingLink');
    var rightContent = $('#right-content');

    billingLink.click(function (){
      var resultData = [
        {question: 'is the world round', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        {question: 'is the world flat', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        {question: 'is the sky blue', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'}
      ]

      var htmlStringArray = resultData.map(function(item){
        return '<h3>Question:' + item.question + '</h3><p>Answer:' + item.answer + '</p>';
      });

      var joinedHTMLString = htmlStringArray.join('');
          rightContent.html(joinedHTMLString);
    });

  //Read specific content from local JSON file and display it

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
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});


/* ajax call for listing questions */

$(function() {

    var $questions = $('#questions');

    function listQuestions(question) {
        $questions.append('<li><a href="#sec' + question.id + '">' + question.question + '</a></li>');
    }

    $.ajax({
        type: 'GET',
        url: '/api/data.json',
        success: function(questions) {
            // console.log('success', data);
            $.each(questions, function(i, question) {
                listQuestions(question);
            });
        }
    });

});

/* end ajax call */
