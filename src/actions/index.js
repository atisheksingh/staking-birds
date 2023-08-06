export const setWalletAddrees = (walletAddress) => {
    return { 
        type: 'SET_WALLET_ADDRESS',
        walletAddress: walletAddress ? walletAddress : ""
    }
}

export const setReferralCode = (code) => {
    return { 
        type: 'SET_REFERRAL_CODE',
        code: code ? code : ""
    }
}