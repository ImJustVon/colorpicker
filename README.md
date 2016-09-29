#Color Picker Game

On document load, append four (or more!) divs on to the DOM with jQuery, each colored with a different color. Each div needs to know which color it is. Prompt the player to pick one of the color blocks you created at random.

##Logic

-If the player clicks on the correct color block, give them a success message.

-Prompt the player to pick another block randomly and let them keep playing.

-If they pick the wrong color, let them know.

##Hard Mode

What if we want to add a new block (or remove one)? Did you hard-code your blocks into the HTML or logic? Change your code to make it easy to add or change the number and color of blocks shown. Hint: One way to do this is to use an array to store the colors and base all your code off of this array.

##Pro Mode

When the player clicks on the correct block, change the color of that block for an added visual cue. Then change it back after 2 seconds and resume the game. You'll need to use the built in setTimeout() function for the timing. This function waits a given amount of time and then calls a function you specify.

##Super Fun Mode

Add some jQuery effects or animations to your game! There are quite a few built in. See the Docs!
