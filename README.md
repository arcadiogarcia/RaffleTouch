# RaffleTouch
##Introduction
This JavaScript Windows 8.1 app can be used for raffles, the user just touches the screen and he will be instantly notified whether he has won or no, according to the probability decided in the code.
 It is a very simple app and doesn't keep track of the number of prizes given, but has a nice UI and it is highly customizable. It is a touch-first app, but it also can be used with mouse and keyboard.

##Customizing
Those are the values you can easily customize:
  - probabilidad, in sorteo.js, indicates p(A) where A is winning a prize
  - strings, in sorteo.js, is an array of strings that holds the sentences shown:
    - strings[0] is shown while the user is waiting to know if he has won
    - strings[1] is shown when the user wins a prize
    - strings[2] is shown when the user does not win a prize
    - strings[3] is shown before the user presses the button
  - presets, in canvas.js, is an array of the words shown randomly in the background
  - bg.png is the background of the app
  - box.bg is the background of the button
  - msplogo.png is a logo shown behind the button but over the words
  - other values, such as the rate at which words appear, are also easy to customize, just have a look at the code comments
  

##Modifying/Porting
To start editing or package the app, just open PelucheMSP.sln with Visual Studio 2015.

If you want to port the app to other platform, just use the .html, .js, .css and .png files, and rewrite the paths, it shouldn't be difficult.

##Disclaimer
This app was originaly written to be used at the Microsoft Student Partners stand at the dotNetSpain2015 conference. The MSP logo is only shown as an example and belongs to Microsoft, don't use it without permission.

Dont be afraid to make a pull request with your improvements!
