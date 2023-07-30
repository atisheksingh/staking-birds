import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  btn:{
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
  const [usdc, setUsdc] = useState(0);
  const [swl, setSwl] = useState(0);

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
              onChange={(e) => { setUsdc(e.target.value); setSwl(e.target.value); }}
              value={usdc}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    USDC
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.icon}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </div>
          <div>
            <TextField
              type="number"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.input}
              onChange={(e) => { setUsdc(e.target.value); setSwl(e.target.value); }}
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
          <button type="button" className={classes.btn}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Payments;
