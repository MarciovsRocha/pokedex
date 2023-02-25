import { ContestComboDetail } from "./contestcombodetail.model";

// type
export class ContestCombosSet{
  constructor(
    public normal?: ContestComboDetail
    , public _super?: ContestComboDetail
  ){}
}
