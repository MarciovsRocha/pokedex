import { NamedAPIResource } from "../../utility";

// type
export class NaturePokeatlhonStatAffect{
  constructor(
    public max_change?: number
    , public nature?: NamedAPIResource // Nature
  ){}
}
