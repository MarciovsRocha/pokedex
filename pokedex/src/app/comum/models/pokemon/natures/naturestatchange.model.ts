import { NamedAPIResource } from "../../utility";

// type
export class NatureStatChange{
  constructor(
    public max_change?: number
    , public pokeathlon_stat?: NamedAPIResource // PokealthonStat
  ){}
}
