import { JsonProperty } from "json-typescript-mapper";

export class Loop {
  @JsonProperty()
  title: string;
  @JsonProperty()
  description: string;
  @JsonProperty()
  bpm: number;
  @JsonProperty()
  duration: number;
  @JsonProperty()
  tags: string[];
  @JsonProperty()
  isCommentable: boolean;
  @JsonProperty()
  isSharable: boolean;
  @JsonProperty()
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
