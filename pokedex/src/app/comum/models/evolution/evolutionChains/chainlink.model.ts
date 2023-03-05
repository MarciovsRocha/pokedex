import { NamedAPIResource } from "../../utility";
import { EvolutionDetail } from "./evolutiondetail.model";

// type
export class ChainLink{
  constructor(
    public is_baby?: boolean
    , public species?: NamedAPIResource // PokemonSpecies
    , public evolution_details?: EvolutionDetail[]
    , public evolves_to?: ChainLink[]
  ){}
}
