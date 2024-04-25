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

  // Extra Charges
  const extraCharges = useSelector((state) => state.extraCharge.extraCharges);

  // Members and totalPayment
  const [newMembers, setNewMebers] = useState([]);

  // Calculate total payment func
  const calculateTotalPayment = () => {
    return members.map((member) => {
      let totalPayment = 0;
      const itemDetailPayment = [];
      const extraDetailPayment = [];

      member.items.forEach((item) => {
        const priceEach = item.totalPrice / item.quantity;
        const price = Math.ceil(priceEach * item.currentQuantity);

        totalPayment = totalPayment + price;
        itemDetailPayment.push({ id: item.id, name: item.name, price: price });
      });

      extraCharges.forEach((e) => {
        if (e.type.value == "evenly") {
          const price = Math.ceil(e.totalPrice / members.length);
          totalPayment = totalPayment + price;

          extraDetailPayment.push({ id: e.id, name: e.name, price: price });
        } else {
          const price = Math.ceil(totalPayment * (e.totalPrice / 100));
          totalPayment = totalPayment + price;

          extraDetailPayment.push({ id: e.id, name: e.name, price: price });
        }
      });

      return { ...member, totalPayment, itemDetailPayment, extraDetailPayment };
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
