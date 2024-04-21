import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NextBackButtons from "../components/NextBackButtons";
import ResultLists from "../components/ResultLists";

const Result = (props) => {
  const navigation = useNavigate();

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.result) {
      navigation("/linkBoth");
    }
  }, [props.pageStatus]);

  // next link
  const nextLink = (e) => {
    props.changePageStatus("groupName", false);
    props.changePageStatus("memberName", false);
    props.changePageStatus("itemList", false);
    props.changePageStatus("extraCharge", false);
    props.changePageStatus("linkBoth", false);
    props.changePageStatus("result", false);
  };

  // Members
  const members = useSelector((state) => state.member.members);
  console.log(members);

  // Extra Charges
  const extraCharges = useSelector((state) => state.extraCharge.extraCharges);

  // Members and totalPayment
  const [newMembers, setNewMebers] = useState([]);

  // Calculate total payment func
  const calculateTotalPayment = () => {
    return members.map((member) => {
      let totalPayment = 0;

      member.items.forEach((item) => {
        const priceEach = item.totalPrice / item.quantity;
        const price = priceEach * item.currentQuantity;

        totalPayment = Math.ceil(totalPayment + price);
      });

      extraCharges.forEach((e) => {
        if (e.type.value == "evenly") {
          const cost = e.totalPrice / members.length;
          totalPayment = totalPayment + cost;
        } else {
          const cost = totalPayment * (e.totalPrice / 100);
          totalPayment = totalPayment + cost;
        }
      });

      return { ...member, totalPayment };
    });
  };

  // Show total payment
  useEffect(() => {
    setNewMebers(calculateTotalPayment());
  }, [members]);

  console.log(newMembers);
  return (
    <>
      <div className="flex flex-col xs:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          <span className=" font-semibold">Result</span>
        </h1>
        <p className="mt-4 text-firstColor">
          Group Name : <span className="font-semibold">Power Rangers</span>
        </p>

        <ResultLists members={newMembers} />

        <NextBackButtons next={"/"} back={"/linkboth"} nextLink={nextLink} />
      </div>
    </>
  );
};

export default Result;
