import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [currentCompanyInfo, setCurrentCompanyInfo] = useState({});
  const [showMyGroupsDropdown, setShowMyGroupsDropdown] = useState(false);
 
  return (
    <AuthContext.Provider value={{ auth, setAuth, userInfo, setUserInfo, showMyGroupsDropdown, setShowMyGroupsDropdown, currentCompanyInfo, setCurrentCompanyInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
