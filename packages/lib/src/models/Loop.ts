import { JsonProperty } from "json-typescript-mapper";

export class Loop {
  @JsonProperty("title")
  title: string;
  @JsonProperty("desc")
  description: string;
  @JsonProperty("bpm")
  bpm: number;
  @JsonProperty("dur")
  duration: number;
  @JsonProperty("tags")
  tags: string[];
  @JsonProperty("com")
  isCommentable: boolean;
  @JsonProperty("shar")
  isSharable: boolean;
  @JsonProperty("dat")
  creationDate: number;
}

export function loopFactory(): Loop {
  return {
    title: "",
    description: "",
    bpm: 123,
    duration: 0.0,
    tags: [],
    isCommentable: true,
    isSharable: true,
    creationDate: Date.now(),
  };
}

export default Loop;
