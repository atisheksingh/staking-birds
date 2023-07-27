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
  rulesTitle: {
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    fontWeight: "bold",
  },
  rulesPara: {
    fontSize: "14px",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
}));

const rulesData = [
  {
    data: {
      para1:
        "When it comes to BirdnestcryptoNFTs in the realm of bird swiflet platform, determining the best ROI plan can vary depending on various factors such as market conditions, investor preferences, and platform goals. However, here are a few strategies that can potentially enhance the ROI for an NFTs on our platform:",
    },
    paraList: [
      {
        li: "1. Tokenizing High-Value swiflets: Select high-value swiflets with strong market demand and tokenize them into NFTs. This allows fractional ownership, enabling smaller investors to participate. By offering a diverse portfolio of properties, you can attract a broader investor base and potentially generate higher returns.",
      },
      {
        li: "2. Exclusive Access and Perks: Offer exclusive benefits and perks to NFT holders, such as priority access to new swiflet listings, discounted rates for swiflet, or special events. By creating a sense of scarcity and providing added value to NFT holders, you can increase demand and enhance the overall ROI.",
      },
      {
        li: "3. Revenue-Sharing Mechanism: Implement a revenue-sharing mechanism where a percentage of swiflet income or swifletnest sales goes back to NFT holders. This model aligns the interests of investors and the platform, ensuring that as the platform succeeds, the NFT holders benefit proportionately.",
      },
      {
        li: "4. Secondary Market Support: Facilitate a vibrant secondary market where NFT holders can trade their tokens. By providing liquidity and an active marketplace, you can create opportunities for investors to exit or trade their investments, which can attract more participants and contribute to the overall ROI.",
      },
      {
        li: "5. Community Engagement: Foster an engaged community by organizing events, webinars, or forums where NFT holders can network, share insights, and collaborate. Building a strong community around the platform can lead to increased interest, participation, and potential partnerships, ultimately impacting the ROI positively.",
      },
    ],
    para2:
      "Remember, investing in NFTs and swifletbrid nest involves risk, and market conditions can change rapidly. It's crucial to conduct thorough research, seek professional advice, and continuously adapt your strategies based on market dynamics to optimize ROI.",
  },
];

const Payments = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dynamicheader}>
        <div className={classes.dynamicTitle}>Rules</div>
      </div>
      <h2 className={classes.rulesTitle}>Rules</h2>
      {rulesData?.map((rule) => {
        return (
          <>
            <p className={classes.rulesPara}>{rule.data.para1}</p>
            <ul>
              {rule?.paraList?.map((para) => {
                return (
                  <li>
                    <p className={classes.rulesPara}>{para.li}</p>
                  </li>
                );
              })}
            </ul>
            <p className={classes.rulesPara}>{rule.para2}</p>
          </>
        );
      })}
    </>
  );
};

export default Payments;
