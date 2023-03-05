import { Name } from "../../utility";
import { PalParkEncounterSpecies } from "./palparkencounterspecies.model";

// endpoint {base_url}/pal-park-area/{id or name}
// type
export class PalParkArea{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
    , public pokemon_encounters?: PalParkEncounterSpecies[]
  ){}
}
