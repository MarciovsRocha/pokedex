import { NamedAPIResource } from "../../utility";

// type
export class AwesomeName{
  constructor(
    public awesome_name?: string
    , public language?: NamedAPIResource // Language
  ){}
}
