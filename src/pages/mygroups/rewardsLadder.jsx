import React, { useState, useMemo } from 'react';
import styles from "./manageCommunity.module.css"
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { Textbox } from '../../components/textbox';
import { Checkbox } from '../../components/checkbox';
import { Table } from '../../components/table';
import { Searchbar } from "../../components/searchbar";



const RewardsLadder = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const table1Data = [
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@XYZ", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@XYZ", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
    ];

    const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    };

    const filteredData = useMemo(() => {
    return table1Data.filter(
        (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }, [searchTerm]);

    return (
        <div className={styles.manageCommunityContainer}>
            

            <Card positionType='relative' containerWidth='800px' containerHeight='2100px'>
                <div className = {styles.manageCommunityText}>
                    <BoldText text={"Manage Community"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <Searchbar
                    text="Search Members"
                    containerWidth="93.5%"
                    onSearchChange={handleSearchChange}
                    />
                    </div>

                    <div className={styles.generalSpacing}>
                    {filteredData.length > 0 ? (
                    <Table
                    itemsPerPage={10}
                    columns={[" ", "Username", "Name", "Points", "Membership", "ID"]}
                    data={filteredData}
                    width="97%"
                    height="auto"
                    />
                    ) : (
                    <p>No results found</p> // You can style this message as needed
                    )}
                </div>
            </Card>
            
            
            

        </div>

    )
    
    
};


export default RewardsLadder;
