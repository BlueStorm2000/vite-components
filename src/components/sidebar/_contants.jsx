import {PATH} from "../../routes/path";
import {DISPLAY_NAME_MENU} from "../../constants";

export const SIDEBAR_MENU_ITEMS = [
  {
    id: 1,
    label: DISPLAY_NAME_MENU.OVERVIEW,
    path: PATH.HOME,
    // displayIcon: SIDEBAR_MENU_ICONS.overview,
    list: [],
  },
  {
    id: 2,
    label: DISPLAY_NAME_MENU.BUTTON,
    path: PATH.BUTTON,
    // displayIcon: SIDEBAR_MENU_ICONS.overview,
    list: [],
  },
  {
    id: 3,
    label: DISPLAY_NAME_MENU.DRAWER,
    path: PATH.DRAWER,
    // displayIcon: SIDEBAR_MENU_ICONS.overview,
    list: [],
  },
]