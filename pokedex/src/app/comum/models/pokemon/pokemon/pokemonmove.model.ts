import { NamedAPIResource } from "../../utility";
import { PokemonMoveVersion } from "./pokemonmoveversion.model";

// type
export class PokemonMove{
  constructor(
    public move?: NamedAPIResource // Move
    , public version_group_details?: PokemonMoveVersion[]
  ){}
}
