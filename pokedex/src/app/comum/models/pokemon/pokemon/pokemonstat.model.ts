import { NamedAPIResource } from "../../utility";

// type
export class PokemonStat{
  constructor(
    public stat?: NamedAPIResource // Stat
    , public effotr?: number
    , public base_stat?: number
  ){}
}
