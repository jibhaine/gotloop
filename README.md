# GotLoop() - work in progress

<img src="assets/gotloop-icon.png" alt="GotLoop Logo" width="150" height="150" style="float:right"/> 

A collaborative sound looper.

A Web and Mobile Application that will allow user to share short looping sound samples, and to comment and like on them.

## Ideas / feature list

first drafts of the apps came while reading the [webaudio W3C APi](http://www.w3.org/TR/webaudio)

### Sound

* a Sound is the basic data shared accross the app.
* stored in the cloud as file / raw data

  * import from filesystem
  * import from soundclound/youtube api's
  * record directly from microphone

### Loop

* edit, cut and export the sound to make a loop
* a loop encapsulate a sound and add looping info.

  * set start,
  * set end
  * set bpm

### Song
* assemble and organize Loops in Songs

  * organize loops by projects
  * 

* assemble them in a drag & drop box ui where you can graphically link input and ouput of AudioNode.

  * create box
  * choose type
  * fill parameter
  * link two boxes
  * edit cable
  * move cable
  * move box

* Use a library of generator/effects/pattern like boxes to create a Song.


### Pattern

## Functionalities

* Upload sound samples, directly from your mobile phone or looping pedal.
* Edit them, specify start and end point to make a perfect loop.
* Share loops on social networks  (Facebook, Twitter, Soundcloud)
* (optional) Follow other Loop makers on the site.
* (optional) Assemble sound samples in songs to publish elsewhere.

##Technologies##

Angular / Firebase
OpenID auth system.
HTML5
 audio player/
 canvas/WebGL visual renderer
 WebAudio API : http://www.w3.org/TR/webaudio/
 

