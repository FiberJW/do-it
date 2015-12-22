(function() {
  var $button, Dream, shia;

  Dream = (function() {
    function Dream(name) {
      this.name = name;
    }

    Dream.prototype.motivation = [
      {
        text: "Do it"
      }, {
        text: "Just do it"
      }, {
        text: "Don't let your dreams be dreams"
      }, {
        text: "Yesterday you said tomorrow"
      }, {
        text: "So just do it"
      }, {
        text: "Make your dreams come true"
      }, {
        text: "Just do it"
      }, {
        text: "Some people dream of success"
      }, {
        text: "While you're gonna wake up and work hard at it"
      }, {
        text: "Nothing is impossible"
      }, {
        text: "You should get to the point"
      }, {
        text: "Where anyone else would quit"
      }, {
        text: "And you're not going to stop there"
      }, {
        text: "No, What are you waiting for?"
      }, {
        text: "Do it"
      }, {
        text: "Just do it"
      }, {
        text: "Yes you can"
      }, {
        text: "Just do it"
      }, {
        text: "If you're tired of starting over"
      }, {
        text: "Stop giving up"
      }
    ];

    Dream.prototype.currentIndex = 0;

    Dream.prototype.motivate = function(motivation) {
      var currentIndex, maxIndex, newText;
      maxIndex = motivation.length - 1;
      currentIndex = this.currentIndex;
      if (currentIndex !== maxIndex) {
        newText = motivation[currentIndex].text;
        this.currentIndex++;
        return newText;
      } else {
        newText = motivation[currentIndex].text;
        this.currentIndex = 0;
        return newText;
      }
    };

    return Dream;

  })();

  shia = new Dream();

  $('.motivation').text(shia.motivate(shia.motivation));

  $button = $('#do-it');

  $button.click(function() {
    return $('.motivation').text(shia.motivate(shia.motivation));
  });

}).call(this);
