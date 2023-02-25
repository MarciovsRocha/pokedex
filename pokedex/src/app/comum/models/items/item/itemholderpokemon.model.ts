import { NamedAPIResource } from "../../utility";
import { ItemHolderPokemonVersionDetail } from "./itemholderpokemonversiondetail.model";

// type
export class ItemHolderPokemon{
  constructor(
    public pokemon?: NamedAPIResource // Pokemon
    , public version_details?: ItemHolderPokemonVersionDetail[]
  ){}
}
