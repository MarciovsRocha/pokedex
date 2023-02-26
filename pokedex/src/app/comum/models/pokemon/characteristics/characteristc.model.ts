// endpoint {base_url}/characteristic/{id}
// type
export class Characteristc{
  constructor(
    public id?: number
    , public gene_modulo?: number
    , public possible_values?: number[]
  ){}
}
