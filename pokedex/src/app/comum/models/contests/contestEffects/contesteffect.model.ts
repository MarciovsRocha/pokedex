import { Effect } from "../../utility";

// endpoint {base_url}/contest-effect/{id}
// type
export class ContestEffect{
  constructor(
    public id?: number
    , public appeal?: number
    , public jam?: number
    , public effetc_entries?: Effect[]
  ){}
}
