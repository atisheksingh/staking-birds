import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

import { tranferToken } from "../service/buyToken"
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  dynamicheader: {
    marginLeft: "150px",
  },
  dynamicTitle: {
    background: "url(/images/page-header2.png) no-repeat",
    backgroundSize: "228px 43px",
    textShadow: "1px 1px 1px #c7f245",
    textAlign: "center",
    fontWeight: "700",
    color: "#222",
    position: "absolute",
    margin: "-47px 0 0 28px",
    fontSize: "12px",
    width: "228px",
    height: "43px",
    lineHeight: "29px",
  },
  card: {
    background: "#aed145",
    width: "60%",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "17px",
    marginTop: "20px",
  },
  input: {
    background: "#fff",
    borderRadius: "7px"
  },
  heading: {
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
    marginTop: "0"
  },
  icon: {
    fontSize: "3rem",
    color: 'transparent',
    background: '-webkit-linear-gradient(#975e30, #6e4320)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
  btn: {
    padding: "10px 40px",
    background: "url(/images/tree-loop.jpg)",
    outline: "none",
    border: "unset",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "15px",
    marginTop: "50px",
    cursor: "pointer"
  }
}));
const Payments = () => {
  const classes = useStyles();
  const [usdcBnb, setUsdcBnb] = useState(0);
  const [swl, setSwl] = useState(0);
  const [bnb, setBnb] = useState(0);
  const [selectedOption, setSelectedOption] = useState('USDC');

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };

  const getBNBValue = () => {
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd", requestOptions)
      .then(response => response.json())
      .then(result => setBnb(result.binancecoin.usd))
      .catch(error => console.log('error', error));
  }

  const myStateWalletAddress = useSelector((state) => state.changeWalletAddrees);

  const buyTokens = async () => {
    await tranferToken(usdcBnb, myStateWalletAddress)
  }

  const updateTokenSWL = async (event) => {
    if(selectedOption === "BNB"){
      const value = (Number(bnb) / 100) * Number(event.target.value)
      setUsdcBnb(event.target.value);
      setSwl(value);
    }else{
      setUsdcBnb(event.target.value);
      setSwl(event.target.value);
    }
  }

  const updateTokenUSDCBNB = async (event) => {
    if(selectedOption === "BNB"){
      const value = (event.target.value * 100) / Number(bnb);
      setSwl(event.target.value);
      setUsdcBnb(value);
    }else{
      setUsdcBnb(event.target.value);
      setSwl(event.target.value);
    }
  }

  useEffect(() => {
    getBNBValue();
  }, [])

  return (
    <>
      <div className={classes.dynamicheader}>
        <div className={classes.dynamicTitle}>Payments</div>
      </div>
      <div>
        <div className={classes.card}>
          <h2 className={classes.heading}>buy swiftlet</h2>
          <div>
            <TextField
              type="number"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.input}
              onChange={updateTokenSWL}
              value={usdcBnb}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    
                    <Select
                      style={{ marginRight: "0" }}
                      disableUnderline
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <MenuItem value="USDC">USDC</MenuItem>
                      <MenuItem value="BNB">BNB</MenuItem>
                      {/* Add more menu items as needed */}
                    </Select>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.icon}>
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </div>
          <div>
            <TextField
              type="number"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.input}
              onChange={updateTokenUSDCBNB}
              value={swl}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    &nbsp;&nbsp;SWL
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {
            myStateWalletAddress ?
              <> <button type="button" className={classes.btn} onClick={() => buyTokens()}>Buy Now</button> </>
              :
              <> <button type="button" className={classes.btn} onClick={() => { document.getElementById("connectWalletBtn").click() }}>Connect Wallet</button> </>
          }
        </div>
      </div>
    </>
  );
};

export default Payments;
