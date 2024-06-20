import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { memberActions } from "../store/member-slice";

// Id Generate
import generateUniqueId from "generate-unique-id";

// Components
import Lists from "../components/Lists";
import NextBackButtons from "../components/NextBackButtons";
import { useNavigate } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";

const MemberName = (props) => {
  const navigation = useNavigate();

  // change progress
  useEffect(() => {
    props.changeProgressBar(2);
  }, []);

  // Check page status
  useEffect(() => {
    if (!props.pageStatus.memberName) {
      navigation("/groupName");
    }
  }, [props.pageStatus]);

  // generate id
  const id = generateUniqueId();

  const dispatch = useDispatch();

  // Member
  const memberName = useSelector((state) => state.member.name);
  // Member Template
  const memberTemp = useSelector((state) => state.member.temp);
  // Members
  const members = useSelector((state) => state.member.members);

  // change member
  const changeMember = (e) => {
    dispatch(memberActions.changeName(e.target.value));
  };

  // Add New Member
  const addMember = (name) => {
    if (name) {
      const member = { ...memberTemp };
      member.id = id;
      member.name = name;
      dispatch(memberActions.changeName(""));
      dispatch(memberActions.addMember(member));
    }
  };

  // Detech Enter Key
  const EnterKey = (e, name) => {
    if (e.key === "Enter") {
      addMember(name);
    }
  };

  // Remove Member
  const removeMember = (id) => {
    dispatch(memberActions.removeMember(id));

    // change status page
    if (members.length == 1) {
      props.changePageStatus("itemList", false);
    }
  };

  // next link
  const nextLink = (e) => {
    if (!members.length) {
      e.preventDefault();
      props.changePageStatus("itemList", false);
    } else {
      props.changePageStatus("itemList", true);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full xs:w-4/5 md:w-2/4 lg:w-2/5">
        <h1 className="text-3xl font-light text-center text-firstColor md:text-4xl">
          Write on your <span className=" font-semibold">Members</span>
        </h1>
        <div className="flex gap-2 mt-4 h-11 w-full">
          <input
            type="text"
            autoComplete="off"
            className="flex-1 bg-transparent text-firstColor border border-firstColor p-2 w-full rounded-lg focus:outline-none"
            onChange={changeMember}
            onKeyDown={(e) => EnterKey(e, memberName)}
            value={memberName}
          />
          <button
            className="flex justify-center items-center bg-firstColor text-offWhite text-3xl h-full aspect-square rounded-md opacity-85 hover:opacity-100 transition-opacity"
            onClick={() => addMember(memberName)}
          >
            <PlusLg />
          </button>
        </div>
        <Lists type="member-name" data={members} remove={removeMember} />
        <NextBackButtons
          next={"/itemlist"}
          back={"/groupname"}
          nextLink={nextLink}
        />
      </div>
    </>
  );
};

export default MemberName;
