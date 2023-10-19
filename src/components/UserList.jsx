import React, { useEffect, useState } from "react";
import "../assets/styles/list.css";
import Loader from "./Loader";
import dp from "../assets/img/download 2.png";

const UserList = ({ data, loading }) => {
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    data.forEach(async (index) => {
      const img = new Image();
      img.src = index.avatar;
      try {
        const response = await fetch(img.src, {
          method: "HEAD",
          redirect: "follow",
        });
        // console.log(index.profile.firstName);
        setImageLoaded((prevImageLoaded) => ({
          ...prevImageLoaded,
          [index.createdAt]: true,
        }));
      } catch {
        // console.log("error");
        setImageLoaded((prevImageLoaded) => ({
          ...prevImageLoaded,
          [index.createdAt]: false,
        }));
      }
    });
  }, [data]);

  return (
    <div>
      {loading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <div className="main">
          <div className="list-side">
            <div className="user-list">
              <h2 className="list-head">USERS LIST</h2>
              <ul className="list">
                {data.map((index) => {
                  return (
                    <li key={index.createdAt} className="list-item">
                      {imageLoaded[index.createdAt] ? (
                        <img
                          src={index.avatar}
                          alt="Image could not be fetched"
                        />
                      ) : (
                        <img src={dp} alt="default dp" />
                      )}
                      <div>
                        {index.profile.firstName} {index.profile.lastName}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="profile-side">Hello</div>
        </div>
      )}
    </div>
  );
};

export default UserList;
