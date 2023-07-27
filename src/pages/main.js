import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
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
  heading: {
    marginTop: "20px",
    paddingBottom: "0px",
    color: "#2d2d2d",
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableIntro: {
    margin: "-10px 0 9px 0px",
    border: "none",
    fontSize: "14px",
    "& td": {
      display: "table-cell",
      paddingTop: "10px",
      marginRight: "5px",
    },
  },
  introStepText: {
    width: "273px",
    fontSize: "1.195em",
    fontWeight: "600",
    color: "#4c4c4b",
    textShadow: "0px 0px 0px #efe9d3, 1px 1px 2px #f7f4eb",
    paddingLeft: "6px",
  },
  marginCenter: {
    margin: "0 auto !important",
  },
  seprator: {
    width: "50%",
    display: "table-cell",
    height: "5px",
    position: "relative",
    verticalAlign: "middle",
  },
  sepLine: {
    position: "relative",
    width: "100%",
    height: "5px",
    display: "block",
    background: "url(/images/separator.png) repeat-x",
    top: "1px",
  },
  startText: {
    fontFamily: "SegoePrintRegular, Arial",
    fontSize: "30px",
    fontWeight: "normal",
    color: "#617a32",
    display: "table-cell",
    whiteSpace: "pre",
    padding: "0 0.5em",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.intoHeader}>
        <h2 className={classes.heading}>
          Coin Birds with money withdrawal <br />
          Stable earnings with our affiliate program
        </h2>
      </div>
      <table className={classes.tableIntro}>
        <tbody>
          <tr>
            <td>
              <img src="/images/step-1.png" alt="" style={{ width: "125px" }} />
            </td>
            <td className={classes.introStepText}>
              <p>
                <span
                  style={{
                    color: "#f08300",
                  }}
                >
                  Buy Birds
                </span>
                , they will lay eggs for you
              </p>
            </td>
            <td>
              <img src="/images/step-2.png" alt="" style={{ width: "125px" }} />
            </td>
            <td className={classes.introStepText}>
              <p>
                Eggs will be stored in the&nbsp;
                <span
                  style={{
                    color: "#f08300",
                  }}
                >
                  warehouse
                </span>
                , collect them
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/step-3.png" alt="" style={{ width: "125px" }} />
            </td>
            <td className={classes.introStepText}>
              <p>
                <span
                  style={{
                    color: "#f08300",
                  }}
                >
                  Sell eggs
                </span>
                , and you will get gold
              </p>
            </td>
            <td>
              <img src="/images/step-4.png" alt="" style={{ width: "125px" }} />
            </td>
            <td className={classes.introStepText}>
              <p>
                Invite friends, exchange resources for &nbsp;
                <span
                  style={{
                    color: "#f08300",
                  }}
                >
                  real money
                </span>&nbsp;
                and buy more birds to get more income!
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.marginCenter}>
        <span className={classes.seprator}>
          <span className={classes.sepLine}></span>
        </span>
        <h4 className={classes.startText}>Start Right Now</h4>
        <span className={classes.seprator}>
          <span className={classes.sepLine}></span>
        </span>
      </div>
    </>
  );
};

export default Main;
