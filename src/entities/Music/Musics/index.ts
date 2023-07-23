export { MODULE_NAME as MODULE_NAME_MUSICS } from "./model/consts/moduleName";

export { reducer as musicsReducer, actions as musicsActions } from "./model/slice/slice";

export { fetchMusics } from "./model/services/fetchMusics";

export type { State as MusicsState } from "./model/types/State";
