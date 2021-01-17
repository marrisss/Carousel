import React from "react";
import { useQuery, gql } from "@apollo/client";

import classes from "./LeftSideBar.module.css";

import Playstore from "../../../assets/images/playstore.png";
import Appstore from "../../../assets/svg/Appstore.svg";

export const FEED_QUERY = gql`
  {
    getData {
      mainheader
      description
    }
  }
`;

const LeftSidebar = () => {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className={classes.LeftSideBar} data-test="leftSideBar">
      <div className={classes.BoldText} data-test="boldText">
        {data.getData.mainheader}
        {/* Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. */}
      </div>
      <div className={classes.LightText} data-test="lightText">
        {data.getData.description}
        {/* Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. */}
      </div>
      <div className={classes.Logos}>
        <img
          data-test="logo"
          className={classes.Appstore}
          src={Appstore}
          alt={"Playstore"}
        />
        <img
          data-test="logo"
          className={classes.Playstore}
          src={Playstore}
          alt={"Appstore"}
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
