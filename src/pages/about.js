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
  aboutTitle: {
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    fontWeight: "bold",
  },
  img: {
    float: "right",
    height: "10rem"
  }
}));
const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dynamicheader}>
        <div className={classes.dynamicTitle}>About</div>
      </div>
      <h2 className={classes.aboutTitle}>About</h2>
      <div>
        <img className={classes.img} src="/images/AboutBirds.png" />
        Why do people eat swiftlet nests?
        The appeal of edible bird's nest
        Swiftlet nests' immune-boosting properties were once a product of Chinese myth. In recent years, swiftlet farmers and food scientists have been investing in research to prove the nests' nutritional benefits.
        <br /><br /><br />
        Nutritional studies have shown the saliva to be mainly made up of protein, followed by carbohydrates. In Shanghai restaurants sell the “the caviar of the East,” as it is known, for hundreds of dollars a bowl.11
      </div>
    </>
  );
};

export default About;
