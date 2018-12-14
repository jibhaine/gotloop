# GotLoop() - work in progress

<img src="assets/gotloop-icon.png" alt="GotLoop Logo" width="150" height="150" style="float:right"/>

A collaborative sound looper.

A Web and Mobile Application that will allow user to share short looping sound samples, and to comment and like on them.

## Ideas / feature list

first drafts of the apps came when i wanted to  share jamman loops

then while reading the [webaudio W3C APi](http://www.w3.org/TR/webaudio)

and now this... fuck.

## Architecturics

| package | description |
| - | - |
| lib | data transfer objects and shared utils |
| api | rest api for backend |
| www | main site, angular universal app |
| e2e | test container, runs integration tests |

## Tech stuffics

- [Angular]()
- [Nest]()
- [tone]()
- [midi](https://galactic.ink/midi-js/)

## Datao Objectics

### Sound

* a Sound is the basic data shared accross the app.
* stored in the cloud as file / raw data

  * import from filesystem
  * import from soundclound/youtube api's
  * record directly from microphone

### Loop

* edit, cut and export the sound to make a loop
* a loop encapsulate a sound and add looping info.

  * set start time
  * set end time
  * set bpm
  * record
  * upload
  * get
  * delete

### Song

* assemble and organize Loops in Songs

  * organize loops by projects
  * make a song: time patterns+ pianoroll

* assemble them in a drag & drop box ui where you can graphically link input and ouput of AudioNode.

  * create box
  * choose type
  * fill parameter
  * link two boxes
  * edit cable
  * move cable
  * move box

* Use a library of generator/effects/pattern like boxes to create a Song.

### User

  * basic login auth
  * passportjs?


### Pattern

### SoundBox

drag and drop of boxes to connext ebaudio api nodes.

### Visualizer

loop renders

## Functionalitics

* Upload sound samples, directly from your mobile phone or looping pedal.
* Edit them, specify start and end point to make a perfect loop.
* Share loops on social networks  (Facebook, Twitter, Soundcloud)
* (optional) Follow other Loop makers on the site.
* (optional) Assemble sound samples in songs to publish elsewhere.

## Technologics

Angular / Nest.js / Typescript / tone.js / WebAudio API

HTML5
 audio player/
 canvas/WebGL visual renderer
 WebAudio API : http://www.w3.org/TR/webaudio/


## TODO listics

- [ ] Buld everything.
- [ ] Deploy app
- [ ] Finish sccs / pug html igration to angular components
- [ ] angularclass/hmr
- [ ] jest everywhere


