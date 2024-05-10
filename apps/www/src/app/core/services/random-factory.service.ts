import {
  randUser,
  randRecentDate,
  randParagraph,
  randNumber,
  randSentence,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { Injectable } from '@angular/core';
import { CommentModel, LoopModel } from '@gotloop/api-model';

@Injectable({
  providedIn: 'root',
})
export class RandomFactoryService {
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
  public randomComment(): CommentModel {
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
  public randomLoop(): LoopModel {
    const nbComments = Math.floor(randNumber({ max: 12 })),
      tempComments = [];
    for (let i = 0; i < nbComments; i++) {
      i++;
      tempComments.push(this.randomComment());
    }
    return {
      id: nanoid(),
      title: randSentence(),
      description: randParagraph(),
      author: this.randomUser(),
      bpm: Math.floor(randNumber({ max: 192 })) + 42,
      comments: tempComments,
      count: 0,
      duration: randNumber({ max: 12 }),
      isCommentable: true,
      creationDate: randRecentDate(),
    };
  }
}
