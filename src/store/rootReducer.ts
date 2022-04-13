import { combineReducers } from "redux";
import theme from "./Theme.store";
import user from "./User.store";

export default combineReducers({
  theme,
  user,
});
