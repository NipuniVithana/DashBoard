import React from 'react';
 
import profileImage1 from '../assets/img3.jpg'; 
import profileImage2 from '../assets/img4.jpg'; 
import profileImage3 from '../assets/img4.jpg'; 

const activities = [
  {
    user: "Kushantha Charuka",
    action: "created",
    task: "Contract #00124 need John Beige's signature",
    time: "Sep 16, 2022 at 11:30 AM",
    image: profileImage1
  },
  {
    user: "Lorem ipsum",
    action: "created",
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque",
    time: "Sep 16, 2022 at 11:45 AM",
    image: profileImage2
  },
  {
    user: "Lorem ipsum",
    action: "created",
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque",
    time: "Sep 16, 2022 at 11:45 AM",
    image: profileImage3
  },

];

const Activityfeed = () => {
  return (
    <div className="activity-feed">
      <h2 className="activity-feed-title">Activity Feed</h2>
      <ul className="activity-feed-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-feed-item">
            <div className="activity-feed-content">
              <img src={activity.image} alt="Profile" className="profile-image1" />
              <p>
              <strong>{activity.user}</strong> {activity.action}{", "}
               {activity.task}
            </p>
              </div>
            
            
            <span className="activity-feed-time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activityfeed;
