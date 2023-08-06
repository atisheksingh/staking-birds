const initialState = "";

const changeReferralCode = (state = initialState, action) => {
    switch (action.type) {
        case "SET_REFERRAL_CODE": return action.code;
        default: return state;
    }
}

export default changeReferralCode;