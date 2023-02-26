import { Name, NamedAPIResource, VerboseEffect } from "../../utility";
import { AbilityEffectChange } from "./abilityeffectchange.model";
import { AbilityFlavorText } from "./abilityflavortext.model";
import { AbilityPokemon } from "./abilitypokemon.model";

// endpoint {base_url}/ability/{id or name}
// type
export class Abilities{
  constructor(
    public id?: number
    , public name?: string
    , public is_main_series?: boolean
    , public generation?: NamedAPIResource // Generation
    , public names?: Name[]
    , public effect_entries?: VerboseEffect[]
    , public effect_changes?: AbilityEffectChange[]
    , public flavor_text_entries?: AbilityFlavorText[]
    , public pokemon?: AbilityPokemon[]
  ){}
}
