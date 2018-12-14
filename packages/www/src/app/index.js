import './index.scss';
import * as angular from 'angular';
import {Chance} from 'chance';

class UserFactory {
  static randomUser(chance = new Chance()) {
    return {
      uuid: chance.hash(),
      name: chance.name(),
      email: chance.email(),
      avatar: chance.avatar(),
      color: chance.color(),
      description: chance.sentence()
    };
  }
}
class CommentFactory {
  static randomComment(chance = new Chance()) {
    return {
      uuid: chance.hash(),
      author: UserFactory.randomUser(), content: chance.sentence(),
      createdAt: chance.date()
    }
  }
}
class LoopFactory {
  static randomLoop(chance = new Chance()) {
    const nbComments = chance.integer({min: 0, max: 12}),
      tempComments = [];
    for (let i = 0; i < nbComments; i++) {
      i++;
      tempComments.push(CommentFactory.randomComment());
    }
    return {
      uuid: chance.hash(),
      name: chance.word(),
      author: UserFactory.randomUser(),
      bpm: chance.integer({min: 40, max: 192}),
      comments: tempComments,
      loopCount: 0,
      createdAt: chance.date(),
    }
  }
}
//controllers
class LoopsController {
  constructor($scope) {
    this.loops = [
      LoopFactory.randomLoop(new Chance()),
      LoopFactory.randomLoop(new Chance()),
      LoopFactory.randomLoop(new Chance()),
    ];
  }

  loadMoreLoops() {
    console.log('load more loops');
    this.loops.push(LoopFactory.randomLoop());
    this.loops.push(LoopFactory.randomLoop());
    this.loops.push(LoopFactory.randomLoop());
  }
}
class LoopPlayerController {
  constructor($scope) {

  }

  play() {
    //todo Webaudio play sample
  }

  pause() {
    //webaudio pause
  }

  like() {
    //todo call loopService.like()
  }

  comment() {
    //todo unfold comment form
  }
}

class LoopRecordController {
  constructor($scope) {
    this.rawData = [];
  }

  record() {

  }

  play() {

  }

  stop() {

  }

  upload() {

  }
}
/**
 * Loop upload manages file input, and loading sound file.
 */
class LoopUploadController {
  constructor($scope) {
    $scope.shown = false;
  }
}

class SearchController {
  constructor($scope) {

  }
}
class UserProfileController {
  constructor($scope) {

  }
}
class MessagesController {
  constructor($scope) {
    $scope.messages = [];
  }
}
//force first page
document.location.hash = 'loops';

const GotLoop = angular
  .module('gotLoop', [])
  .controller('SearchController', SearchController)
  .controller('LoopsController', LoopsController)
  .controller('LoopUploadController', LoopUploadController)
  .controller('LoopRecordController', LoopRecordController)
  .controller('MessagesController', MessagesController)
  .controller('UserProfileController', UserProfileController);
