import React, { FunctionComponent } from "react";
import { Member } from "../../types/Member";
import "./MembersCard.styles.css";

interface MembersCardProps {
  member: Member;
}

const MembersCard: FunctionComponent<MembersCardProps> = ({ member }) => {
  return (
    <div className="main-card">
      <div className="main-card__inner">
        <div className="card-img">
          <img src={member.imgUrl} alt={member.name} />
        </div>
        <div className="card-descr">
          <h3 className="card-title">{member.staff}</h3>
          <div className="card-name">{member.name}</div>
          <div className="links">
            {member.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="social-img"
                target="_blank"
                rel="noreferrer"
              >
                <img src={link.imageUrl} alt={link.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
