export const setWalletAddrees = (walletAddress) => {
    return { 
        type: 'SET_WALLET_ADDRESS',
        walletAddress: walletAddress ? walletAddress : ""
    }
}