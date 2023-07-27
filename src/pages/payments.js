import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    display: "table",
    width: "100%",
    borderLeft: "1px solid #eee",
    borderRight: "1px solid #eee",
  },
  rowFirst: {
    fontWeight: "600",
    color: "#f8f7f1",
    display: "table-row",
    background: "#3b80aa",
    boxShadow:
      "0 1px 0 0 rgba(244, 249, 252, 0.392), inset 0 1px 4px 0 rgba(174, 107, 12, 0.314)",
    height: "40px",
    fontSize: "15px",
    fontFamily: "BukvarnayaMedium",
    color: "#ffffff",
    textShadow: "0.5px 0.866px 0 rgba(254, 253, 253, 0.231)",
    boxShadow:
      "0 1px 0 0 rgba(190, 195, 197, 0.392), inset 0 1px 4px 0 rgba(130, 107, 76, 0.7)",
    zIndex: "1",
    borderLeft: "1px solid #eee",
    borderRight: "1px solid #eee",
  },
  cell: {
    display: "table-cell",
    width: "100px",
    textAlign: "center",
    padding: "10px 0",
    verticalAlign: "middle",
    borderBottom: "1px solid #eee",
  },
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
const rowdata = [
  {
    user: "Sr.",
  },
  {
    user: "User",
  },
  {
    user: "Sum",
  },
  {
    user: "PS",
  },
  {
    user: "Purse",
  },
  {
    user: "Date",
  },
];
const Payments = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.dynamicheader}>
                <div className={classes.dynamicTitle}>Payments</div>
                </div>
    <div className={classes.table}>
      <div className={classes.tableHead}>
        <div className={classes.rowFirst}>
          {rowdata.map((e) => {
            return <div className={classes.cell}>{e.user}</div>;
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Payments;
