export { MODULE_NAME as MODULE_NAME_DELETE_MUSIC } from "./model/consts/moduleName";

export { deleteMusic } from "./model/services/deleteMusic";

export { actions as deleteMusicActions, reducer as deleteMusicReducer } from "./model/slice/slice";

export type { State as DeleteMusicState } from "./model/types/State";

export { DeleteMusicButton } from "../DeleteMusic/ui/DeleteMusicButton/DeleteMusicButton";
