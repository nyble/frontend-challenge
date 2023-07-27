import React from "react";
import {  StyledLogoutButton } from "./styles/LogoutButton";

type LogoutButtonProps = {
  onLogout: () => void;
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return <StyledLogoutButton onClick={onLogout}>Logout</StyledLogoutButton>;
};

export default LogoutButton;
