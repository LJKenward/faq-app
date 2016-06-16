/* activate sidebar */ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).ready(function() {

    var billingLink = $('#billingLink');
    var installationLink = $('#installationLink');
    var operationsLink = $('#operationsLink');
    var accountsLink = $('#accountsLink');

    var qandaContent = $('#qanda-content');

    billingLink.click(function (){
      var resultData = [
        { idNum: '0', question: 'is the world round', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '1', question: 'is the world flat', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '2', question: 'is the sky blue', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
      ]

      var htmlStringArray = resultData.map(function(item){
        return '<h3 id="sec' + item.idNum + '">' + item.question + '</h3><p>' + item.answer + '</p><hr>';
      });

      var joinedHTMLString = htmlStringArray.join('');
          qandaContent.html(joinedHTMLString);
    });

/* end billing function*/

/* start installation function*/

    installationLink.click(function (){
      var resultData = [
        { idNum: '0', question: 'How do I do it?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '1', question: 'Where can I fix it?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '2', question: 'When will it go live?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
      ]

      var htmlStringArray = resultData.map(function(item){
        return '<h3 id="sec' + item.idNum + '">' + item.question + '</h3><p>' + item.answer + '</p><hr>';
      });

      var joinedHTMLString = htmlStringArray.join('');

          qandaContent.html(joinedHTMLString);
    });

/* end installationLink function */

/* start Operations function*/

    operationsLink.click(function (){
      var resultData = [
        { idNum: '0', question: 'Should do I do it?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '1', question: 'Can I fix it?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '2', question: 'Where will it go live?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
      ]

      var htmlStringArray = resultData.map(function(item){
        return '<h3 id="sec' + item.idNum + '">' + item.question + '</h3><p>' + item.answer + '</p><hr>';
      });

      var joinedHTMLString = htmlStringArray.join('');

          qandaContent.html(joinedHTMLString);
    });

/* end operations function*/

/* start accountsLink function*/

    accountsLink.click(function (){
      var resultData = [
        { idNum: '0', question: 'How Do I delete?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '1', question: 'Update my image?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
        { idNum: '2', question: 'Change my username?', answer: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.'},
      ]

      var htmlStringArray = resultData.map(function(item){
        return '<h3 id="sec' + item.idNum + '">' + item.question + '</h3><p>' + item.answer + '</p><hr>';
      });

      var joinedHTMLString = htmlStringArray.join('');

          qandaContent.html(joinedHTMLString);
    });

/* end accountsLink function*/

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
