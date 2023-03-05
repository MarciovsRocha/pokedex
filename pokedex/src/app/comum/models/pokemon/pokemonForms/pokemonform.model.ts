import { Name, NamedAPIResource } from "../../utility";
import { PokemonFormType } from "../pokemon/pokemonformtype.model";
import { PokemonFormSprites } from "./pokemonformsprites.model";

// endpoint {base_url}/pokemon-form/{id or name}
//type
export class PokemonForm{
  constructor(
    public id?: number
    , public name?: string
    , public order?: number
    , public form_order?: number
    , public is_default?: boolean
    , public is_battle_only?: boolean
    , public is_mega?: boolean
    , public form_name?: string
    , public pokemon?: NamedAPIResource // Pokemon
    , public types?: PokemonFormType[]
    , public sprites?: PokemonFormSprites
    , public version_group?: NamedAPIResource // VersionGroup
    , public names?: Name[]
    , public form_names?: Name[]
  ){}
}
