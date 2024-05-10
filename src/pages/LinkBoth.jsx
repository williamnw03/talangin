import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LinkLists from "../components/LinkLists";

import NextBackButtons from "../components/NextBackButtons";

const LinkBoth = (props) => {
  const navigation = useNavigate();

  // change progress
  useEffect(() => {
    props.changeProgressBar(5);
  }, []);

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.linkBoth) {
      navigation("/extraCharge");
    }
  }, [props.pageStatus]);

  // Items
  const items = useSelector((state) => state.item.items);

  // next link
  const nextLink = (e) => {
    const check = items.filter((item) => item.currentQuantity != 0);

    if (check.length) {
      e.preventDefault();
      props.changePageStatus("result", false);
    } else {
      props.changePageStatus("result", true);
    }
  };

  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          Link The <span className=" font-semibold">Items</span> &{" "}
          <span className=" font-semibold">Member</span>
        </h1>

        <LinkLists changePageStatus={props.changePageStatus} />
        <NextBackButtons
          next={"/result"}
          back={"/extracharge"}
          nextLink={nextLink}
        />
      </div>
    </>
  );
};

export default LinkBoth;
