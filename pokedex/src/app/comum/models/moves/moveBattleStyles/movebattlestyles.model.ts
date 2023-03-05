import { Name } from "../../utility";

// endpoint {base_url}/move-battle-style/{id or name}
// type
export class MoveBattleStyles{
  constructor(
    public id?: number
    , public name?: string
    , public names?: Name[]
  ){}
}
