import { Chance } from 'chance';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RandomFactoryService {
  constructor() { }
  /**
   * returns a random user.
   */
  public randomUser(chance = new Chance()) {
    return {
      uuid: chance.hash(),
      name: chance.name(),
      email: chance.email(),
      avatar: chance.avatar(),
      color: chance.color(),
      description: chance.sentence()
    };
  }

  /**
   * returns a random comment.
   */
  public randomComment(chance = new Chance()) {
    return {
      uuid: chance.hash(),
      author: this.randomUser(), content: chance.sentence(),
      createdAt: chance.date()
    };
  }

  /**
   * returns a random loop.
   */
  public randomLoop(chance = new Chance()) {
    const nbComments = chance.integer({min: 0, max: 12}),
      tempComments = [];
    for (let i = 0; i < nbComments; i++) {
      i++;
      tempComments.push(this.randomComment());
    }
    return {
      uuid: chance.hash() || v4(),
      name: chance.word(),
      author: this.randomUser(),
      bpm: chance.integer({min: 40, max: 192}),
      comments: tempComments,
      loopCount: 0,
      createdAt: chance.date(),
    };
  }
}
