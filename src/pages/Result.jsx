import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsTable from "../components/DetailsTable";
import NextBackButtons from "../components/NextBackButtons";
import ResultLists from "../components/ResultLists";

// Redux
import { groupActions } from "../store/group-slice";
import { memberActions } from "../store/member-slice";
import { itemActions } from "../store/item-slice";
import { extraChargeActions } from "../store/extraCharge-slice";

const Result = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  // change progress
  useEffect(() => {
    props.changeProgressBar(6);
  }, []);

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

    // Remove all data
    dispatch(groupActions.changeName(""));
    dispatch(memberActions.removeAllMembers());
    dispatch(itemActions.removeAllItems());
    dispatch(extraChargeActions.removeAllExtraCharges());

    // Remove all input data
    // Member
    dispatch(memberActions.changeName(""));
    // Items
    dispatch(itemActions.changeName(""));
    dispatch(itemActions.changeTotalPrice(0));
    dispatch(itemActions.changeQuantity(0));
    // Extra Charges
    dispatch(extraChargeActions.changeName(""));
    dispatch(extraChargeActions.changeTotalPrice(0));
    dispatch(extraChargeActions.changeType(""));
  };

  // Group
  const groupName = useSelector((state) => state.group.name);

  console.log(groupName);

  // Members
  const members = useSelector((state) => state.member.members);

  // Extra Charges
  const extraCharges = useSelector((state) => state.extraCharge.extraCharges);

  // Members and totalPayment
  const [newMembers, setNewMebers] = useState([]);

  // Detail Table
  const [showDetail, setShowDetail] = useState(false);
  const [detailTableItem, setDetailTableItem] = useState([
    {
      id: "",
      type: "",
      name: "",
      quantity: 0,
      price: 0,
      priceEach: 0,
    },
  ]);
  const [detailTableExtra, setDetailTableExtra] = useState([
    {
      id: "",
      type: "",
      name: "",
      quantity: 0,
      price: 0,
    },
  ]);

  // Calculate total payment func
  const calculateTotalPayment = () => {
    return members.map((member) => {
      let totalPayment = 0;
      const itemDetailPayment = [];
      const extraDetailPayment = [];

      member.items.forEach((item) => {
        const priceEach = Math.ceil(item.totalPrice / item.quantity);
        const price = Math.ceil(priceEach * item.currentQuantity);

        totalPayment = totalPayment + price;
        itemDetailPayment.push({
          id: item.id,
          name: item.name,
          quantity: item.currentQuantity,
          price: price,
          priceEach: priceEach,
        });
      });

      extraCharges.forEach((e) => {
        if (e.type.value == "evenly") {
          const price = Math.ceil(e.totalPrice / members.length);
          totalPayment = Math.ceil(totalPayment + price);

          extraDetailPayment.push({
            id: e.id,
            type: "extra-evenly",
            name: e.name,
            price: price,
          });
        } else {
          const price = Math.ceil(totalPayment * (e.totalPrice / 100));
          totalPayment = Math.ceil(totalPayment + price);

          extraDetailPayment.push({
            id: e.id,
            type: "extra-percent",
            name: e.name,
            price: price,
            percentage: e.totalPrice,
          });
        }
      });

      return { ...member, totalPayment, itemDetailPayment, extraDetailPayment };
    });
  };

  // Show Detail
  const changeShowDetail = (status, items, extras) => {
    setShowDetail(status);

    if (status) {
      setDetailTableItem(items);
      setDetailTableExtra(extras);
    }
  };

  // Show total payment
  useEffect(() => {
    setNewMebers(calculateTotalPayment());
  }, [members]);

  return (
    <>
      <DetailsTable
        showDetail={showDetail}
        changeShowDetail={changeShowDetail}
        items={detailTableItem}
        extras={detailTableExtra}
      />

      <div
        className={`flex flex-col ${
          showDetail ? "blur-sm" : "blur-none"
        } xs:w-4/5 md:w-3/4 lg:w-1/2`}
      >
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          <span className=" font-semibold">Result</span>
        </h1>
        <p className="mt-4 text-firstColor">
          Group Name : <span className="font-semibold">{groupName}</span>
        </p>

        <ResultLists members={newMembers} changeShowDetail={changeShowDetail} />

        <NextBackButtons next={"/"} back={"/linkboth"} nextLink={nextLink} />
      </div>
    </>
  );
};

export default Result;
