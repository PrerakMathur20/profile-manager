import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, contactnumber, link } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>Phone: {contactnumber}</div>
        <div>Email: <a href={"mailto:" + email}>{email}</a></div>
        <div>Link: <a href={link}> Click Here</a></div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "1vh" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
