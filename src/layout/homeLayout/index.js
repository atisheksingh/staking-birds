import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet, useLocation, useMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapLoop: {
    border: "0 solid #000",
    margin: "0 auto",
    paddingTop: "0",
    minHeight: "auto",
    position: "initial",
    zIndex: "50",
    background: "url(/images/tree-loop2.jpg) 1020px 33px repeat-y",
    backgroundSize: "97px auto",
    width: "1126px",
  },
  wrap: {
    border: "0 solid #000",
    margin: "0 auto",
    paddingTop: "100px",
    minHeight: "auto",
    position: "initial",
    zIndex: "51",
    height: "40rem",
    background: "url(/images/wrap-tree.png) 0 -10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1123px auto",
    width: "1126px",
  },
  wrapper: {
    width: "636px",
    float: "left",
    padding: "19px 0 0 0",
    marginBottom: "80px",
    border: "0 solid #000",
  },
  silvrbk: {
    border: "2px solid #ceae6a",
    background: "#fbf8ec",
    width: "607px",
    padding: "20px 30px",
    boxShadow: "0 2px 7px 2px rgba(0,0,0,.15)",
    borderRadius: "30px",
    margin: "13px 0px 0px 0px",
  },
  ribbon: {
    background: "url(/images/main-header-1.png) no-repeat",
    backgroundSize: "607px 73px",
    display: "inline-block",
    textAlign: "center",
    width: "607px",
    height: "73px",
    fontFamily: "Segoe Print",
    fontWeight: "800",
    fontSize: "21px",
    verticalAlign: "middle",
    lineHeight: "51px",
    textShadow: "1px 1px 2px #121558",
    color: "#ffffff !important",
    margin: "-62px 0 0 3px",
  },
  footer: {
    margin: "0 auto",
    width: "1119px",
    position: "relative",
    display: "block",
  },
  bottomTree: {
    lineHeight: "3",
    background: "url(/images/field.png) no-repeat 0 0",
    backgroundSize: "1124px 221.6px",
    width: "1118px",
    height: "221.6px",
  },
  clear: {
    clear: "both",
  },

}));

const MainLayout = ({ children }) => {
  const location = useLocation();
  const match = useMatch("/")
  const [show, setShow] = useState(location.pathname === "/");

  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapLoop}>
        <div className={classes.wrap}>
      
            <Header />
            <Sidebar />

            <div className={classes.wrapper}>
              <div className={classes.silvrbk}>
                {match && (
                  <div className={classes.ribbon}>Welcome to Coin Birds!</div>
                )}
                <Outlet>{children}</Outlet>
              </div>
            </div>
            <div className={classes.clear}></div>

            <div className={classes.footer}>
              <div className={classes.bottomTree}></div>
            </div>
          </div>
        </div>
    
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
