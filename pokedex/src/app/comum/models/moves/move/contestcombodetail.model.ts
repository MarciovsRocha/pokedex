import { NamedAPIResource } from "../../utility";

// type
export class ContestComboDetail{
  constructor(
    public use_before?: NamedAPIResource[] // Move
    , public use_after?: NamedAPIResource[] // Move
  ){}
}
