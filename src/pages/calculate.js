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
  calcTitle: {
    fontSize: "14px",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
  incomeDiv: {
    lineHeight: "22px",
    padding: "0px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
    backgroundColor: "white",
    width: "572px",
  },
  table: {
    border: "none",
    fontSize: "14px",
    display: "table",
    borderCollapse: "separate",
    boxSizing: "border-box",
    textIndent: "initial",
    whiteSpace: "collapse",
    textWrap: "wrap",
    lineHeight: "normal",
    fontWeight: "normal",
    fontSize: "medium",
    fontStyle: "normal",
    color: "inherit",
    textAlign: "start",
    borderSpacing: "2px",
    borderColor: "gray",
    fontVariant: "normal",
  },
  th:{
    display: "table-cell",
    verticalAlign: "inherit",
    fontWeight: "bold",
    textAlign: "-internal-center",

  },
  birdImg: {
    width: "85px",
    verticalAlign: "middle",
  },
  input:{
    lineHeight: "22px",
    padding: "6px 7px",
    margin: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "32px!important",
    font: "500 13px tahoma",
    width: "120px",
    transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
    backgroundColor: "white",
  }
}));
const Calculate = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dynamicheader}>
        <div className={classes.dynamicTitle}>Calculate</div>
      </div>
      <center>
        <h2 className={classes.calcTitle}>
          Here you can calculate your income
        </h2>
      </center>
      <p className={classes.calcTitle}>
        Enter a number of birds to see how much gold they will bring you.
      </p>
      <p className={classes.calcTitle}>
        * Please note that your earnings will increase exponentially, if you buy
        new birds for earned gold.
      </p>
      <div className={classes.incomeDiv}>
        <center>
          <p className={classes.calcTitle}>
            Your income:{" "}
            <span style={{ fontWeight: "600", fontSize: "14px" }}>81.12</span>{" "}
            per 24 hours
          </p>
        </center>
      </div>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th className={classes.th}>
              <img src="/images/beige.png" alt="" className={classes.birdImg} />
            </th>
            <th className={classes.th}>
              <img src="/images/green.png" alt="" className={classes.birdImg} />
            </th>
            <th className={classes.th}>
              <img
                src="/images/yellow.png"
                alt=""
                className={classes.birdImg}
              />
            </th>
            <th className={classes.th}>
              <img src="/images/brown.png" alt="" className={classes.birdImg} />
            </th>
          </tr>
          <tr>
          <td> <input type="number" value="1" size="7" className={classes.input}/></td>
          <td> <input type="number" value="1" size="7" className={classes.input}/></td>
          <td> <input type="number" value="1" size="7" className={classes.input}/></td>
          <td> <input type="number" value="1" size="7" className={classes.input}/></td>
          </tr>
          <tr>
          <th className={classes.th}>
            <img src="/images/blue.png" alt="" className={classes.birdImg} />
          </th>
          <th className={classes.th}>
            <img src="/images/red.png" alt="" className={classes.birdImg} />
          </th>
          <th className={classes.th}>
            <img
              src="/images/king-bird.png"
              alt=""
              className={classes.birdImg}
            />
          </th>
          <th className={classes.th}>
            <img src="/images/super.jpg" alt="" className={classes.birdImg} />
          </th>
        </tr>
        <tr>
        <td> <input type="number" value="0" size="7" className={classes.input}/></td>
        <td> <input type="number" value="0" size="7" className={classes.input}/></td>
        <td> <input type="number" value="0" size="7" className={classes.input}/></td>
        <td> <input type="number" value="0" size="7" className={classes.input}/></td>

        </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calculate;
