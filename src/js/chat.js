$(function () {

  $('.chat-form').on('submit', function (e) {
    e.preventDefault();

    // Get our data from our form
    var data = {
      name: $('input[name=name]').val(),
      message: $('input[name=message]').val()
    };

    // Send our data to our API
    $.ajax({
      url: '/api/messages',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8'
    }).done(function (result) {
      console.log(result);
      alert(data);
    });

  });

});
