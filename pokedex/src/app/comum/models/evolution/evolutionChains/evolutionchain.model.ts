import { NamedAPIResource } from "../../utility";
import { ChainLink } from "./chainlink.model";

// endpoint {base_url}/evolution-chain/{id}
// type
export class EvolutionChain{
  constructor(
    public id?: number
    , public baby_trigger_item?: NamedAPIResource // Item
    , public chain?: ChainLink
  ){}
}
