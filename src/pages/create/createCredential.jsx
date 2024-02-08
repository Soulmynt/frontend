import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createCredential.module.css";
import { Card } from "../../components/card";
import { BoldText } from "../../components/boldText";
import { Button } from "../../components/button";
import { Textbox } from "../../components/textbox";
import { SketchPicker } from "react-color";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import { useAuth } from "../../hooks";
import { axiosCreateCredential } from "../../utils/axios";

const CreateCredentials = ({ currentCompanyId, onCredentialCreated }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [color, setColor] = useState("#fff");
  const { auth } = useAuth();
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
    ],
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFileChange = (e) => {
    // ! This function will handle submitting image to server or aws bucket and then getting the link back, but for now will just return empyty string
    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setSelectedImage(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
    setSelectedImage("");
  };

  const handleEditClick = () => {
    const fileInput = document.querySelector(`.${styles.fileInput}`);
    fileInput.click();
  };

  const extractText = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const handleCreateClick = async () => {
    // Example logic: Check if both name and description are filled
    if (editorContent) {
      const accessToken = auth.accessToken;
      const CredentialInfo = {
        title: title,
        tmageLink: selectedImage,
        color: color,
        text: extractText(editorContent),
      };

      try {
        let data = await axiosCreateCredential(
          accessToken,
          currentCompanyId,
          CredentialInfo
        );

        if (data.status == 200) {
          console.log("This should hit if Successful:");
          //   navigate('.', { state: { key: Date.now() } });;
          onCredentialCreated();
        }
      } catch (error) {
        console.log(error);
      }
      // ... other logic
    } else {
      console.log("Please fill out all required fields.");
    }
  };

  return (
    <div className={styles.createCredentialContainer}>
      <Card
        positionType="fixed"
        containerWidth="800px"
        containerHeight="900px"
      />

      <div className={styles.leftFrame}>
        <BoldText
          text={"Fill color"}
          containerWidth={"250px"}
          size={"15px"}
          textColor="#8F8F8F"
        />
        <SketchPicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
        />
        <div className={styles.textEditorTextContainer}>
          <BoldText
            text={"Text Editor"}
            containerWidth={"250px"}
            size={"15px"}
            textColor="#8F8F8F"
          />
        </div>

        <div id="toolbar" className={styles.toolbar}>
          {/* Font and Size */}
          <select className="ql-font"></select>
          <select className="ql-size"></select>

          {/* Basic Formatting */}
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>

          {/* Alignment */}
          <button className="ql-align" value=""></button>
          <button className="ql-align" value="center"></button>
          <button className="ql-align" value="right"></button>
          <button className="ql-align" value="justify"></button>

          {/* Lists */}
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>

          {/* Color and Background */}
          <select className="ql-color"></select>
          <select className="ql-background"></select>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.rightFrame}>
        <div className={styles.sbtBorder} style={{ "--dynamic-color": color }}>
          <div
            className={styles.backgroundFiller}
            style={{ backgroundColor: color }}
          ></div>
          <div
            className={styles.profilePicContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className={styles.profileImage}
              />
            ) : (
              <Card
                containerWidth={"350px"}
                containerHeight={"350px"}
                backgroundColor="#D9D9D9"
              />
            )}
            {isHovered && (
              <Button
                children="Edit"
                onClick={handleEditClick}
                containerWidth="100px"
                variant="colorful"
                className={styles.buttonInsideCircle}
              />
            )}
            <input
              type="file"
              className={styles.fileInput}
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.marginBottom}>
            <Textbox
              text={"Title"}
              variant="white-black-border"
              // value={title}
              onChange={(e) => setTitle(e.target.value)}
              containerWidth={"378px"}
            />
          </div>
          <div className={styles.textEditor}>
            <ReactQuill
              theme="snow"
              value={editorContent}
              onChange={setEditorContent}
              modules={{ toolbar: { container: "#toolbar" } }}
            />
          </div>
        </div>
        <div className={styles.noteText}>
          <BoldText
            text={"Note: Click and drag to reposition elements"}
            containerWidth={"250px"}
            size={"15px"}
            textColor="#8F8F8F"
          />
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.createButton}>
            <Button
              children={"Create!"}
              variant="colorful-button"
              containerWidth={"100px"}
              disabled={!editorContent}
              onClick={handleCreateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCredentials;
