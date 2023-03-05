import { Name } from "../../utility";
import { NaturePokeatlhonStatAffectSets } from "./naturepokeatlhonstataffectsets.model";

// endpoint {base_url}/pokeatlhon-stat/{id or name}
// type
export class PokeatlhonStat{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public affecting_natures?: NaturePokeatlhonStatAffectSets
  ){}
}
