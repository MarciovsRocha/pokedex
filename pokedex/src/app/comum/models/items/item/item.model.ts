import { APIResource, GenerationGameIndex, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect, VersionGroupFlavorText } from "../../utility";
import { ItemHolderPokemon } from "./itemholderpokemon.model";
import { ItemSprites } from "./itemsprites.model";

// endpoint {base_url}/item/{id or name}
// type
export class Item{
  constructor(
    public id?: number
    , public name?: string
    , public cost?: number
    , public fling_power?: number
    , public fling_effect?: NamedAPIResource // ItemEffect
    , public attributes?: NamedAPIResource[] // ItemAttribute
    , public category?: NamedAPIResource // ItemCategory
    , public effect_entries?: VerboseEffect[]
    , public flavor_text_entries?: VersionGroupFlavorText[]
    , public game_indices?: GenerationGameIndex[]
    , public names?: Name[]
    , public sprites?: ItemSprites
    , public held_by_pokemon?: ItemHolderPokemon[]
    , public baby_trigger_for?: APIResource // EvolutionChain
    , public machines?: MachineVersionDetail[]
  ){}
}
