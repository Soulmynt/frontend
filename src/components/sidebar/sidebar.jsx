import React from "react";
import styles from "./sidebar.module.css";
import { BoldText } from "../boldText";
import logo from "../../img/plain_logo_black.png";
import { DashboardIcon } from "../../icons/DashboardIcon";
import { CreateIcon } from "../../icons/CreateIcon";
import { MyGroupsIcon } from "../../icons/MyGroupsIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { Button } from "../button";
import { Arrow } from "../../icons/Arrow";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

// import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getButtonVariant = (path) => {
    return isActive(path) ? "colorful" : "transparent";
  };

  const getIconColor = (path) => {
    return isActive(path) ? "#FFFFFF" : "#8F8F8F";
  };

  const {showMyGroupsDropdown, setShowMyGroupsDropdown} = useAuth();

  const toggleMyGroupsDropdown = () => {
    setShowMyGroupsDropdown(!showMyGroupsDropdown);
  };


  // const toggleCreateDropdown = () => {
  //   setShowCreate(!showCreate);
  // };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoTextContainer}>
        <img src={logo} alt="Description" className={styles.soulmyntLogo} />

        <div className={styles.boldTextContainer}>
          <div>
            <BoldText
              text={"Soulmynt"}
              containerWidth={"130px"}
              size={"26px"}
              weight={"300"}
            />
          </div>
        </div>
      </div>
      <div className={styles.verticalTab}>
        {/* DASHBOARD */}
        <Link to="/dashboard" className={styles.linkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/dashboard")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <DashboardIcon color={getIconColor("/dashboard")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Dashboard"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/dashboard")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link>
        {/* MY GROUPS */}
        <div className={styles.linkStyle} onClick={toggleMyGroupsDropdown}>
          <div className={styles.buttonContainer}>
            <Button variant="transparent" containerWidth={"150px"} containerHeight={"50px"}>
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  {/* Other icon for My Groups */}
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText text={"My Groups"} containerWidth={"150px"} size={"18px"} weight={"400"} textColor="#8F8F8F"/>
                </div>
                <div className={showMyGroupsDropdown ? styles.arrowUp : styles.arrowDown}>
                  <Arrow />
                </div>
              </div>
            </Button>
          </div>
        </div>

        {showMyGroupsDropdown && (
          <>
            {/* Challenges Subcategory */}
            <Link to="/managechallenges" className={styles.subLinkStyle}>
            <div className={styles.buttonContainer}>
              <Button
                variant={getButtonVariant("/managechallenges")}
                containerWidth={"150px"}
                containerHeight={"50px"}
              >
                <div className={styles.sidebarSectionsContainer}>
                  <div className={styles.sidebarIconsContainer}>
                    <MyGroupsIcon color={getIconColor("/managechallenges")} />
                  </div>
                  <div className={styles.sidebarTextContainer}>
                    <BoldText
                      text={"Manage Challenges"}
                      containerWidth={"150px"}
                      size={"18px"}
                      weight={"400"}
                      textColor={getIconColor("/managechallenges")}
                    />
                  </div>
                </div>
              </Button>
            </div>
          </Link>
            {/* Create Subcategory */}
            <Link to="/create" className={styles.subLinkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/create")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <CreateIcon color={getIconColor("/create")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Create"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/create")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link>
          </>
        )}

        
        
        {/* <Link to="/mygroups" className={styles.linkStyle}>
            <div className={styles.buttonContainer}>
              <Button
                variant={getButtonVariant("/mygroups")}
                containerWidth={"150px"}
                containerHeight={"50px"}
              >
                <div className={styles.sidebarSectionsContainer}>
                  <div className={styles.sidebarIconsContainer}>
                    <MyGroupsIcon color={getIconColor("/mygroups")} />
                  </div>
                  <div className={styles.sidebarTextContainer}>
                    <BoldText
                      text={"My Groups"}
                      containerWidth={"150px"}
                      size={"18px"}
                      weight={"400"}
                      textColor={getIconColor("/mygroups")}
                    />
                  </div>
                </div>
              </Button>
            </div>
          </Link> */}
          {/* <div className={styles.dropdownToggle} onClick={toggleCreateDropdown}>
            <Arrow />
          </div> */}

          {/* <div className={showCreate ? styles.arrowRight : styles.arrowDown}>
                <Arrow/>
          </div> */}
        {/* CREATE */}
        {/* <Link to="/create" className={styles.sublinkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/create")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <CreateIcon color={getIconColor("/create")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Create"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/create")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link> */}
        {/* {showCreate && (
            <Link to="/create" className={styles.subLinkStyle}>
              <div className={styles.subButtonContainer}>
                <Button
                  variant={getButtonVariant("/create")}
                  containerWidth={"150px"}
                  containerHeight={"50px"}
                >
                  <div className={styles.sidebarSubSectionsContainer}>
                    <div className={styles.sidebarIconsContainer}>
                      <CreateIcon color={getIconColor("/create")} />
                    </div>
                    <div className={styles.sidebarTextContainer}>
                      <BoldText
                        text={"Create"}
                        containerWidth={"150px"}
                        size={"18px"}
                        weight={"400"}
                        textColor={getIconColor("/create")}
                      />
                    </div>
                  </div>
                </Button>
              </div>
            </Link>
          )} */}
        {/* Explore */}
        <Link to="/explore" className={styles.linkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/explore")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <ExploreIcon color={getIconColor("/explore")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Explore"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/explore")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link>    
                
        {/* PROFILE */}
        <Link to="/profile" className={styles.linkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/profile")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <ProfileIcon color={getIconColor("/profile")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Profile"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/profile")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link>
        {/* SETTINGS */}
        {/* <Link to="/settings" className={styles.linkStyle}>
          <div className={styles.buttonContainer}>
            <Button
              variant={getButtonVariant("/settings")}
              containerWidth={"150px"}
              containerHeight={"50px"}
              onClick={() => {}}
            >
              <div className={styles.sidebarSectionsContainer}>
                <div className={styles.sidebarIconsContainer}>
                  <SettingsIcon color={getIconColor("/settings")} />
                </div>
                <div className={styles.sidebarTextContainer}>
                  <BoldText
                    text={"Settings"}
                    containerWidth={"150px"}
                    size={"18px"}
                    weight={"400"}
                    textColor={getIconColor("/settings")}
                  />
                </div>
              </div>
            </Button>
          </div>
        </Link> */}
        {/* <div className = {styles.sidebarSectionsContainer}>
                    <div className = {styles.sidebarIconsContainer}>
                        <SettingsIcon />
                    </div>
                    <div className={styles.sidebarTextContainer}>
                        <div>
                            <BoldText text={"Settings"} containerWidth={"150px"} size={"18px"} weight={"400"} textColor={"#8F8F8F"}/>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
