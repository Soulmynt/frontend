import React, { useState } from "react";
import { Button } from "../button";
import "./roleSelect.css"; // Create and import your CSS file for additional styling

const RoleSelect = ({ onChange }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        onChange(role); // Call the onChange callback with the new role
    };

    return (
        <div className="role-selection-container">
        <Button
            variant={selectedRole === "manager" ? "colorful" : "gray"}
            onClick={() => handleRoleSelect("manager")}
            children="Community Manager"
        />
        <Button
            variant={selectedRole === "member" ? "colorful" : "gray"}
            onClick={() => handleRoleSelect("member")}
            children="Community Member"
        />
        </div>
    );
};

export default RoleSelect;