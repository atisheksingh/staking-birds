const initialState = "";

const changeWalletAddrees = (state = initialState, action) => {
    switch (action.type) {

        case "SET_WALLET_ADDRESS": return action.walletAddress;
        default: return state;
    }
}

export default changeWalletAddrees;