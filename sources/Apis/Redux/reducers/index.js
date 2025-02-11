import { combineReducers } from "@reduxjs/toolkit";

import homeReducers from "./homeReducers";

export * from "./homeReducers";

export default combineReducers({
	home: homeReducers,
});
