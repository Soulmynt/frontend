import React from 'react';
import styles from './leaderboard.module.css';
import { BoldText } from '../boldText';
import { Link } from 'react-router-dom';

// LeaderboardItem component with an additional 'isMe' prop for special styling
const LeaderboardItem = ({ rank, name, points, isMe }) => {
    // Apply a different style if the item is "me"
    const itemStyle = isMe ? `${styles.leaderboardItem} ${styles.highlight}` : styles.leaderboardItem;
  
    return (
      // Wrap the entire return content with Link
      <Link to={`/explore?username=${name}`} style={{ textDecoration: 'none' }}>
        <div className={itemStyle} style={{ color: 'inherit', cursor: 'pointer' }}> {/* Add cursor style for better UX */}
          <div className={styles.rank}>
            <BoldText 
              text={rank}
              size="15px"
              weight="bold"
              textColor="white"        
            />
          </div>
          <div className={styles.info}>
            <BoldText 
                text={name}
                size="15px"
                weight="bold"
                textColor="white"        
            />
            <BoldText 
                text={`${points} points`}
                size="15px"
                weight="bold"
                textColor="white"        
            />
          </div>
        </div>
      </Link>
    );
  };

const Leaderboard = ({ users, myHandle }) => {
  // Filter out admins
  const nonAdmins = users.filter(user => !user.admin);

  // Sort by points in descending order
  nonAdmins.sort((a, b) => b.RewardPoints - a.RewardPoints);

  // Find "me" in the list
  const myIndex = nonAdmins.findIndex(user => user.handle === myHandle);
  let myUser = null;
  
  if (myIndex !== -1) {
    // Extract "me" from the list
    myUser = { ...nonAdmins[myIndex], rank: myIndex + 1 };
  }

  return (
    <>
      {myUser && (
        // Render "me" at the top, highlighted with extra space below
        <div className={styles.spacerAfterMe}>
          <LeaderboardItem
            key={myUser.handle}
            rank={myUser.rank}
            name={myUser.handle}
            points={myUser.RewardPoints}
            isMe={true}
          />
        </div>
      )}
      {nonAdmins.map((user, index) => (
        // Render the rest of the users, highlight "me" if encountered again in the list
        <LeaderboardItem
          key={user.handle}
          rank={index + 1}
          name={user.handle}
          points={user.RewardPoints}
          isMe={user.handle === myHandle}
        />
      ))}
    </>
  );
};


export default Leaderboard;