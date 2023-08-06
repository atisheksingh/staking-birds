import { combineReducers } from "redux";
import changeWalletAddrees from "./walletAddress";
import changeReferralCode from "./referralCode";

const rootReducer = combineReducers({
    changeWalletAddrees: changeWalletAddrees,
    changeReferralCode: changeReferralCode
});

export default rootReducer;                                                         