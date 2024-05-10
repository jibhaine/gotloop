import {
  randUser,
  randRecentDate,
  randParagraph,
  randNumber,
  randSentence,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomFactoryService {
  constructor() {}
  /**
   * returns a random user.
   */
  public randomUser() {
    const user = randUser();
    return {
      uuid: nanoid(),
      name: user.username,
      email: user.email,
      avatar: `https://i.pravatar.cc/${randNumber({ max: 200 })}`,
      description: randParagraph(),
    };
  }

  /**
   * returns a random comment.
   */
  public randomComment() {
    return {
      uuid: nanoid(),
      author: this.randomUser(),
      content: randParagraph(),
      createdAt: randRecentDate(),
    };
  }

  /**
   * returns a random loop.
   */
  public randomLoop() {
    const nbComments = Math.floor(randNumber({ max: 12 })),
      tempComments = [];
    for (let i = 0; i < nbComments; i++) {
      i++;
      tempComments.push(this.randomComment());
    }
    return {
      uuid: nanoid,
      name: randUser().username,
      title: randSentence(),
      description: randParagraph(),
      author: this.randomUser(),
      bpm: Math.floor(randNumber({ max: 192 })) + 42,
      comments: tempComments,
      loopCount: 0,
      createdAt: randRecentDate(),
    };
  }
}
