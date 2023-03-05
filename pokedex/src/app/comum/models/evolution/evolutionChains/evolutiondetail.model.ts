import { NamedAPIResource } from "../../utility";

// type
export class EvolutionDetail{
  constructor(
    public item?: NamedAPIResource // Item
    , public trigger?: NamedAPIResource // EvolutionTrigger
    , public gender?: number
    , public held_item?: NamedAPIResource // Item
    , public known_move?: NamedAPIResource // Move
    , public known_move_type?: NamedAPIResource // Type
    , public location?: NamedAPIResource // Location
    , public min_level?: number
    , public min_happiness?: number
    , public min_beauty?: number
    , public min_affection?: number
    , public needs_overworld_rain?: boolean
    , public party_species?: NamedAPIResource // PokemonSpecies
    , public party_types?: NamedAPIResource // Type
    , public relative_physical_stats?: number
    , public time_of_day?: number
    , public trade_species?: NamedAPIResource // PokemonSpecies
    , public turn_upside_down?: boolean
  ){}
}
