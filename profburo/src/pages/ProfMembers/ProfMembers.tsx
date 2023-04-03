import React, { FunctionComponent } from "react";
import MembersCard from "../../components/MembersCard/MembersCard";
import { members } from "../../constants/ProfMembers";

import "./ProfMembers.styles.css";

const ProfMembers: FunctionComponent = () => {
  const renderHeader = () => {
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header-ic">
              <img src="img/cat.svg" alt="" />
            </div>
            <h1 className="header-title">
              Склад профбюро
              <p>факультету математики та інформатики</p>
            </h1>
            <div className="header-ic">
              <img src="img/fmi.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderHeader()}
      <div className="container">
        {members.map((member) => (
          <MembersCard member={member} key={member.name} />
        ))}
      </div>
    </>
  );
};

export default ProfMembers;
