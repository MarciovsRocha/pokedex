import { NaturePokeatlhonStatAffect } from "./naturepokeatlhonstataffect.model";

// type
export class NaturePokeatlhonStatAffectSets{
  constructor(
    public increase?: NaturePokeatlhonStatAffect[]
    , public decrease?: NaturePokeatlhonStatAffect[]
  ){}
}
