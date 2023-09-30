import React, {useState} from "react";
import styles from './exploreCommunitySmall.module.css';
import { Card } from "../card";
import { BoldText } from "../boldText";
import { Button } from "../button";

const ExploreCommunitySmall = () => {
  const [image, setImage] = useState(''); 
  const [title, setTitle] = useState('Description');

  // TODO: MIGHT NEED THIS FOR LATER
  // useEffect(() => {
  //   // Function to fetch data from your database
  //   const fetchData = async () => {
  //     try {
  //       // Replace this URL with the URL of your API endpoint
  //       const response = await fetch('https://api.example.com/community/data');
  //       const data = await response.json();

  //       // Set the state with the fetched data
  //       setImage(data.image); // Assuming the image URL is stored in data.image
  //       setTitle(data.title); // Assuming the title is stored in data.title
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   // Call the fetchData function
  //   fetchData();
  // }, []);
  return( 
    <div className= {styles.mainContainer}> 
        <Card containerWidth="350px" containerHeight="300px">
            <div className={styles.contentInsideCard}>
                <div className={styles.imagePlaceholder}>
                    {/* Conditionally render image if image URL exists */}
                    {image && <img src={image} alt={title} className={styles.image} />}
                </div>

                <div className={styles.topSpacing}>
                  <BoldText text={title} containerWidth={"250px"} size={"24px"} weight={"bold"} textColor="#000"/>
                </div>
                <div className={styles.topSpacing}>
                  <Button 
                      children="Details" 
                      containerWidth="150px"
                      variant="colorful"
                      //TODO: clicking this button should bring the user to the community description page
                  />
                </div>
            </div>




        </Card>
    </div>
  );
};


export default ExploreCommunitySmall;
