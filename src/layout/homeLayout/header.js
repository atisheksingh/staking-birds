import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { setWalletAddrees, setReferralCode } from "../../actions/index";

import { collection, addDoc, serverTimestamp, getDocs} from 'firebase/firestore';
import { db } from '../../service/firebase.config';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
  },
  logo: {
    position: "absolute",
    width: "204px",
    height: "131px",
    margin: "-48px 0 0 74px",
    background: "url(/images/logo.png) 0 -10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "204px 131px",
  },
  hdMenu: {
    listStyleType: "none",
    float: "left",
    listStyle: "none",
    fontFamily: "tahoma",
    width: "100%",
    margin: "0 0 154px -16px",
    "& a": {
      textShadow: "1px 1px 1px #000, 1px 0 3px #000",
      fontSize: "13px",
      fontWeight: "700",
      color: "#ffebc9",
      textDecoration: "none",
      transition: "all 0.3s ease-out",
      padding: "3px",
      paddingLeft: "5px",
      paddingRight: "5px",
      background: "rgba(152,116,98,.21)",
      borderRadius: "5px",
    },
    "& li": {
      position: "absolute",
      display: "block",
      float: "left",
      margin: "0 15px 0 0",
      width: "134px",
      textAlign: "center",
      zIndex: "1",
    },
    "& li:nth-child(1)": {
      margin: "94px 16px 0 281px",
    },
    "& li:nth-child(2)": {
      margin: "104px 15px 0 398px",
    },
    "& li:nth-child(3)": {
      margin: "111px 15px 0 513px",
    },
    "& li:nth-child(4)": {
      margin: "96px 15px 0 628px",
    },
    "& li:nth-child(5)": {
      margin: "91px 15px 2px 751px",
    },
    "& li:nth-child(6)": {
      margin: "94px 15px 0 872px",
    },
  },
  Hbird: {
    zIndex: "-1",
    position: "absolute",
    width: "107px",
    height: "73px",
    margin: "-42px 0 0 12px",
    background: "url(/images/nest.png) no-repeat",
    backgroundSize: "107px 73px",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "70.4px",
      height: "92.8px",
      margin: "-54px 0 0 -30px",
      background: "url(/images/yellow.png) no-repeat",
      backgroundSize: "70.4px 92.8px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  Hbird2: {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "61.6px",
      height: "99.2px",
      margin: "-57px 0 0 -30px",
      background: "url(/images/brown.png) no-repeat",
      backgroundSize: "61.6px 99.2px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  Hbird3: {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "80px",
      height: "83.2px",
      margin: "-48px 0 0 -41px",
      background: "url(/images/green.png) no-repeat",
      backgroundSize: "80px 83.2px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  Hbird4: {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "70.4px",
      height: "80px",
      margin: "-48px 0 0 -41px",
      background: "url(/images/beige.png) no-repeat",
      backgroundSize: "70.4px 80px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  Hbird5: {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "79.2px",
      height: "83.2px",
      margin: "-57px 0 0 -35px",
      background: "url(/images/blue.png) no-repeat",
      backgroundSize: "79.2px 83.2px",
      transform: "scaleX(-1)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  Hbird6: {
    "&::before": {
      content: '""',
      position: "absolute",
      width: "96px",
      height: "116px",
      margin: "-77px 0 0 -54px",
      background: "url(/images/king-bird.png) no-repeat",
      backgroundSize: "96px 116px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "82.4px",
      height: "80px",
      margin: "24px 0 0 -41px",
      background: "url(/images/nest-cover.png) no-repeat",
      backgroundSize: "84.4px 29px",
    },
  },
  new: {
    background: "url(/images/new_icon.png) no-repeat",
    backgroundSize: "43px 23px",
    width: "49px",
    height: "36px",
    margin: "-57px 0 0 69px",
    zIndex: "0",
  },
  Btndiv: {
    position: "absolute",
    cursor: "pointer",
    margin: "-56px 0 0 982px",
  },
  walletbtn: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    borderRadius: "47px",
    border: "none",
    padding: "8px 16px",
    background: "#a2b300",
    color: "#fff",
    font: "700 14px arial",
    textShadow: "0 1px 2px rgba(0,0,0,.5)",
    boxShadow: "0 4px 1px -1px #5b6600",
    transition: "background-color .3s ease",
    zIndex: "5",
  },
}));

const Header = () => {
  const classes = useStyles();

  const myStateWalletAddress = useSelector((state) => state.changeWalletAddrees);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    checkUserInDB();
  }, [myStateWalletAddress]);

  function generateReferralCode(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referralCode += characters.charAt(randomIndex);
    }
    return referralCode;
  }

  const checkUserInDB = async () => {
    if(myStateWalletAddress){
      const collectionRef = collection(db, 'users');

      await getDocs(collectionRef).then(async (data) => {
        const result = data.docs.map((doc) => ({ ...doc.data() }));
        const isPresent = result.find(doc => doc.walletAddress === myStateWalletAddress)
        if(!isPresent){
          await addDoc(collectionRef, {
            walletAddress: myStateWalletAddress.toString(),
            referralCode: generateReferralCode(),
            redeemCount: 0,
            redeemUser: "",
            timestamp: serverTimestamp()
          });
        }else{
          dispatch(setReferralCode(isPresent.referralCode?.toString()))
        }
      })
    }else{
      dispatch(setReferralCode(""))
    }
  }

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(setWalletAddrees(accounts[0].toString()));
      } catch (err) {
        dispatch(setWalletAddrees(""));
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      dispatch(setWalletAddrees(""));
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          dispatch(setWalletAddrees(accounts[0].toString()));
        } else {
          dispatch(setWalletAddrees(""));
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        dispatch(setWalletAddrees(""));
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      dispatch(setWalletAddrees(""));
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        dispatch(setWalletAddrees(accounts[0]));
      });
    } else {
      /* MetaMask is not installed */
      dispatch(setWalletAddrees(""));
      console.log("Please install MetaMask");
    }
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}></div>
        <div className={classes.toolbar}>
          <div className={classes.Btndiv}>
            <button id='connectWalletBtn' className={classes.walletbtn} onClick={connectWallet} >
              {myStateWalletAddress && myStateWalletAddress.length > 0
                ? `${myStateWalletAddress.substring(
                  0,
                  6
                )}...${myStateWalletAddress.substring(38)}`
                : "Connect Wallet"}
            </button>
          </div>
        </div>
        <div className={classes.hdMenu}>
          <li>
            <div className={classes.Hbird}></div>
            <Link to="/">Main</Link>
          </li>
          <li>
            <div className={`${classes.Hbird} ${classes.Hbird2}`}></div>
            <Link to="/payments">Payments</Link>
            <div className={classes.new}></div>
          </li>
          <li>
            <div className={`${classes.Hbird} ${classes.Hbird3}`}></div>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <div className={`${classes.Hbird} ${classes.Hbird4}`}></div>
            <Link to="/about">About</Link>
          </li>
          <li>
            <div className={`${classes.Hbird} ${classes.Hbird5}`}></div>
            <Link to="/calculate">Calculate</Link>
          </li>
          <li>
            <div className={`${classes.Hbird} ${classes.Hbird6}`}></div>
            <Link to="/support">Support</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
