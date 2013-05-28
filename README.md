gotLoop()
=======

Sound Sample Application

A Web and Mobile Application that will allow user to share short sound samples, and to comment and vote on them.

#GotLoop

##Ideas

first drafts of the apps came while reading the [webaudio W3C APi](http://www.w3.org/TR/webaudio)

* extract a Loop from your pc or the cloud.

  * import from filesystem
  * import from soundclound/youtube api's

* edit, cut and export the loop to suit any need:

  * set start,
  * set end
  * set bpm

* assemble and organize Loops in Collections

  * organize by projects
  * assign tags

* assemble them in a drag & drop box ui where you can graphically link input and ouput of AudioNode.

  * create box
  * choose type
  * fill parameter
  * link two boxes
  * edit cable
  * mobe cable
  * move box

* Use a library of generator/effects/pattern like boxes to create a Song.


##Functionalities##

* Upload sound samples, directly from your mobile phone or looping pedal.
* Edit them, specify start and end point to make a perfect loop.
* Share loops on social networks  (Facebook, Twitter, Soundcloud)
* (optional) Follow other Loop makers on the site.
* (optional) Assemble sound samples in songs to publish elsewhere.

##Technologies##

OpenID auth system.
HTML5
 audio player/
 canvas/WebGL visual renderer
 WebAudio API : http://www.w3.org/TR/webaudio/
Node.js / Express / REST urls / JSON Api

##Modules##
 * gotloop/web : the gotloop.com website on appengine
 * gotloop/droid : android app

##How to Get involved?##

 * If you don't have one, create a github account and subscribe to this project.
 * Report bugs and evolutions
