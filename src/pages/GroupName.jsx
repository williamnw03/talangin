import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { groupActions } from "../store/group-slice";

const GroupName = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  // change progress
  useEffect(() => {
    props.changeProgressBar(1);
  }, []);

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.groupName) {
      navigation("/");
    }
  }, [props.pageStatus]);

  // Group Name
  const groupName = useSelector((state) => state.group.name);

  // change input group name
  const changeGroupName = (e) => {
    dispatch(groupActions.changeName(e.target.value));

    // change status page
    if (!e.target.value.length) {
      props.changePageStatus("memberName", false);
    }
  };

  // Detect Enter Key
  const EnterKey = (e) => {
    if (e.key === "Enter" && e.target.value != "") {
      props.changePageStatus("memberName", true);
      navigation("/membername");
    }

    if (e.key === "Enter" && e.target.value == "") {
      // Show Alert
      props.changeShowAlert("Fill the blank!");
    }
  };

  // next link
  const nextLink = (e) => {
    if (!groupName.length) {
      e.preventDefault();
      props.changePageStatus("memberName", false);
      // Show Alert
      props.changeShowAlert("Fill the blank!");
    } else {
      props.changePageStatus("memberName", true);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-light text-firstColor md:text-4xl">
        Write on your <span className="font-semibold">Group Name</span>
      </h1>
      <input
        type="text"
        autoComplete="off"
        className="bg-transparent text-firstColor border border-firstColor mt-4 p-2 w-full h-11 rounded-lg xs:w-4/5 md:w-2/4 lg:w-1/3 focus:outline-none"
        onChange={changeGroupName}
        onKeyDown={EnterKey}
        value={groupName}
      />
      <Link
        to="/membername"
        className="bg-firstColor text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-thirdColor transition-colors"
        onClick={nextLink}
      >
        Next
      </Link>
    </>
  );
};

export default GroupName;
