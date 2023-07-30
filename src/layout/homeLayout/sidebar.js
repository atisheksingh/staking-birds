import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import contractServies from "../../service/contarctIntegartion"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  content: {
    width: "100%",
    marginTop: 0,
    paddingLeft: 0
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
  leftCl: {
    width: "275px",
    float: "left",
    border: "0 solid #000",
    marginLeft: "40px",
    paddingTop: "0",
  },
  inputdiv: {
    width: "242px",
    height: "243px",
    lineHeight: "27px",
    textAlign: "center",
    position: "relative",
    margin: "19px 0 14px -16px",
    padding: "0 10px",
    display: "inline-block",
    border: "3.4px solid #99742e66",
    borderRadius: "14px",
    boxShadow: "0 6px 14px -5px rgba(0,0,0,.1)",
    backgroundImage: "radial-gradient(#fff4d3,#ffecc3,#f0dcad,#dfb871ba)",
    "&::before": {
      background: "0 0",
      border: "2px solid #fbe1b1",
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "11px",
      pointerEvents: "none",
    },
  },
  divTitle: {
    margin: "-22px 0 14px 35px !important",
    fontSize: "13px",
    position: "relative",
    height: "36px",
    background: "url(/images/page-header.png) no-repeat",
    backgroundSize: "174px 36px",
    width: "174px",
    padding: "0",
    fontStyle: "normal",
    color: "#000",
    textShadow: "1px 1px 1px #aef744",
    fontWeight: 700,
  },
  inputFlex: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    border: "1px solid #8d8d8d",
    borderRadius: "2px",
    backgroundColor: "#e7e7e7",
    width: "237px",
    height: "24px",
    margin: "3px 0 0",
  },
  btn:{
        height: '27px !important',
        width: '191px !important',
        fontSize: '14px !important',
        margin: '16px 0 0 -3px !important',
        textTransform: 'none !important',
        lineHeight: '18px',
        outline: 'none',
        border: 'none',
        background: '#9ec339',
        padding: '4.5px 32px',
        textShadow: '1px 1px 1px #51613ad1, 1px 0 3px #5b8045',
        minWidth: '140px',
        fontFamily: 'tahoma',
        fontWeight: 700,
        borderRadius: '5px',
        position: 'relative',
        color: '#fff !important',
        cursor:"pointer"
  },
  radioContainer: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    marginBottom: "10px",
  },
  radioInput: {
    marginRight: "8px",
  },
  labelFont:{
    fontSize:"15px"
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const myStateWalletAddress = useSelector((state) => state.changeWalletAddrees);
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const stackFun = async () => { 
    console.log("Fun Call")
    if(selectedOption == 1){
      await contractServies.stakeToken(amount, myStateWalletAddress, 21) 
    }else if(selectedOption == 2){
      await contractServies.stakeToken(amount, myStateWalletAddress, 60) 
    }else if(selectedOption == 3){
      await contractServies.stakeToken(amount, myStateWalletAddress, 90) 
    }else if(selectedOption == 4){
      await contractServies.stakeToken(amount, myStateWalletAddress, 180) 
    }
  }

  // const handleSubmit = () => {
  //   // Handle form submission
  //   if (selectedOption !== null) {
  //     console.log("Selected Option:", selectedOption);
  //     // Submit the form data or perform any other actions
  //   }
  // };
  return (
    <>
      <div className={classes.content}>
        <div className={classes.leftCl}>
          <div className={classes.inputdiv}>
            <div className={classes.divTitle}>Staking</div>
            <div className={classes.inputFlex}>
              <label>Enter your Token Value</label>
              <input
                type="text"
                className={classes.input}
                onChange={(e) => setAmount(e.target.value)}
                onkeypress="return noenter()"
              />
            </div>
            <div style={{display:"flex",justifyContent: "center",
            gap: "10px", marginTop:"14px"}}>
            <div className={classes.radioContainer}>
              <input
                type="radio"
                className={classes.radioInput}
                id="option1"
                name="options"
                checked={selectedOption === 1}
                onChange={() => handleOptionChange(1)}
              />
              <label htmlFor="option1" className={classes.labelFont}>21 Days</label>
            </div>
            <div className={classes.radioContainer}>
              <input
                type="radio"
                className={classes.radioInput}
                id="option2"
                name="options"
                checked={selectedOption === 2}
                onChange={() => handleOptionChange(2)}
              />
              <label htmlFor="option2" className={classes.labelFont}>60 Days</label>
            </div>
            <div className={classes.radioContainer}>
              <input
                type="radio"
                className={classes.radioInput}
                id="option3"
                name="options"
                checked={selectedOption === 3}
                onChange={() => handleOptionChange(3)}
              />
              <label htmlFor="option3" className={classes.labelFont}>90 Days</label>
            </div>
            <div className={classes.radioContainer}>
              <input
                type="radio"
                className={classes.radioInput}
                id="option4"
                name="options"
                checked={selectedOption === 4}
                onChange={() => handleOptionChange(4)}
              />
              <label htmlFor="option4" className={classes.labelFont}>180 Days</label>
            </div>
            </div>
            <button className={classes.btn} onClick={() => { stackFun() }}>Stake</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
