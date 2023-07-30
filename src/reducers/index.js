import { combineReducers } from "redux";
import changeWalletAddrees from "./walletAddress";

const rootReducer = combineReducers({
    changeWalletAddrees: changeWalletAddrees
});

export default rootReducer;                                                         