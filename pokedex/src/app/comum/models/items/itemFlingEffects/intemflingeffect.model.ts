import { Effect, NamedAPIResource } from "../../utility";

// endpoint {base_ul}/item-fling-effect
// type
export class ItemFlingEffect{
  constructor(
    public id?: number
    , public name?: string
    , public effect_entries?: Effect[]
    , public items?: NamedAPIResource[] // Item
  ){
  }
}
