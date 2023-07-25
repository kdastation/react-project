export { DragDropMusics } from "./ui/DragDropMusics/DragDropMusics";

export { MODULE_NAME as MODULE_NAME_CHANGE_ORDER_MUSICS } from "./model/consts/moduleName";

export { changeOrderMusic } from "./model/services/changeOrderMusic";

export {
  actions as changeOrderMusicActions,
  reducer as changeOrderMusicReducer,
} from "./model/slice/slice";

export type { State as ChangeOrderMusicState } from "./model/types/State";
