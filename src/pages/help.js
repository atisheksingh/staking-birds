import React from "react";
import { makeStyles } from "@material-ui/core";

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
}));
const Help = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dynamicheader}>
        <div className={classes.dynamicTitle}>Help service</div>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        To apply for the technical support sign in, please!<br></br>
        Email: support@coin-birds.com
      </div>
    </>
  );
};

export default Help;
