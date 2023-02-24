import { Name } from "./name.model";

export class EncounterMethod{
  constructor(
    public id?: number
    , public name?: string
    , public order?: number
    , public names?: Name[]
  ){}
}
