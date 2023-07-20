import { State } from "@/app/providers/StoreProvider";

export const selectNext = ({articles} : State) => articles?.next || null