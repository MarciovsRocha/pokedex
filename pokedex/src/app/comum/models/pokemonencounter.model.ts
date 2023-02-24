import { Pokemon } from "./pokemon.model";
import { VersionEncounterDetail } from "./versionencounterdetail.model";

export class PokemonEncounter{
  constructor(
    public pokemon?: Pokemon
    , public version_details?: VersionEncounterDetail
  ){}
}
