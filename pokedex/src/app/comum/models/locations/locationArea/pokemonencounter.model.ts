import { Pokemon } from "../../pokemon.model";
import { VersionEncounterDetail } from "../../utility";

export class PokemonEncounter{
  constructor(
    public pokemon?: Pokemon
    , public version_details?: VersionEncounterDetail[]
  ){}
}
