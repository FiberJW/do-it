# Do it
# Just do it

# Don't let your dreams be dreams
# Yesterday you said tomorrow
# So just do it
# Make your dreams come true
# Just do it

# Some people dream of success
# While you're gonna wake up and work hard at it
# Nothing is impossible

# You should get to the point
# Where anyone else would quit
# And you're not going to stop there
# No, what are you waiting for?

# Do it
# Just do it
# Yes you can
# Just do it
# If you're tired of starting over
# Stop giving up

class Dream
  constructor: (@name) ->

  motivation: [
    {text: "Do it"}
    {text: "Just do it"}
    {text: "Don't let your dreams be dreams"}
    {text: "Yesterday you said tomorrow"}
    {text: "So just do it"}
    {text: "Make your dreams come true"}
    {text: "Just do it"}
    {text: "Some people dream of success"}
    {text: "While you're gonna wake up and work hard at it"}
    {text: "Nothing is impossible"}
    {text: "You should get to the point"}
    {text: "Where anyone else would quit"}
    {text: "And you're not going to stop there"}
    {text: "No, What are you waiting for?"}
    {text: "Do it"}
    {text: "Just do it"}
    {text: "Yes you can"}
    {text: "Just do it"}
    {text: "If you're tired of starting over"}
    {text: "Stop giving up"}
  ]

  currentIndex: 0

  motivate: (motivation) ->
    maxIndex = motivation.length - 1
    currentIndex = this.currentIndex
    unless currentIndex is maxIndex
      newText = motivation[currentIndex].text
      this.currentIndex++
      return newText
    else
      newText = motivation[currentIndex].text
      this.currentIndex = 0
      return newText
 

shia = new Dream()

$('.motivation').text(shia.motivate(shia.motivation))
$button = $('#do-it')

$button.click ->
  $('.motivation').text(shia.motivate(shia.motivation))