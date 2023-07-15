import { OrderSort } from "@/shared/types/OrderSort";
import { TypesSort } from "./typeSort";

export type State = {
  search: string;
  typeSort: TypesSort;
  orderSort: OrderSort;
};
