import { NamedAPIResource } from "../../utility";
import { PokemonType } from "./pokemontype.model";

// type
export class PokemonTypePast{
  constructor(
    public generation?: NamedAPIResource // Generation
    , public types?: PokemonType[]
  ){}
}
