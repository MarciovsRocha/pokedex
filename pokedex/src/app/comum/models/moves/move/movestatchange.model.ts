import { NamedAPIResource } from "../../utility";

// type
export class MoveStatChange{
  constructor(
    public change?: number
    , public stat?: NamedAPIResource // Stat
  ){}
}
