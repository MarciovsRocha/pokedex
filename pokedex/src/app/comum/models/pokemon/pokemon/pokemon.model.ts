import { NamedAPIResource, VersionGameIndex } from "../../utility";
import { PokemonAbility } from "./pokemonability.model";
import { PokemonHeldItem } from "./pokemonhelditem.model";
import { PokemonMove } from "./pokemonmove.model";
import { PokemonSprites } from "./pokemonsprites.model";
import { PokemonStat } from "./pokemonstat.model";
import { PokemonType } from "./pokemontype.model";
import { PokemonTypePast } from "./pokemontypepast.model";

// endpoint {base_url}/pokemon/{id or name}
//type
export class Pokemon{
  constructor(
    public id?: number
    , public name?: string
    , public base_experience?: number
    , public height?: number
    , public is_default?: boolean
    , public order?: number
    , public weight?: number
    , public abilities?: PokemonAbility[]
    , public forms?: NamedAPIResource[] // PokemonForm
    , public game_indices?: VersionGameIndex[]
    , public held_items?: PokemonHeldItem[]
    , public location_area_encounters?: string
    , public moves?: PokemonMove[]
    , public past_types?: PokemonTypePast[]
    , public sprites?: PokemonSprites
    , public species?: NamedAPIResource[] // PokemonSpecies
    , public stats?: PokemonStat[]
    , public types?: PokemonType[]
  ){}
}
