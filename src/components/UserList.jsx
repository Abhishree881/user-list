import React, { useEffect, useState } from "react";
import "../assets/styles/list.css";
import Loader from "./Loader";
import dp from "../assets/img/download 2.png";

const UserList = ({ data, loading }) => {
  console.log(loading);
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

  const [user, setUser] = useState({});
  const handleclick = (doc) => {
    setUser(doc);
  };

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
                    <li
                      key={index.createdAt}
                      className="list-item"
                      onClick={() => handleclick(index)}
                    >
                      {imageLoaded[index.createdAt] ? (
                        <img src={index.avatar} alt="personalised dp" />
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
          <div className="profile-side">
            <div className="profile">
              <h2 className="list-head">USER DETAILS</h2>
              <div className="user">
                {user?.profile !== undefined ? (
                  <>
                    <span className="image">
                      {imageLoaded[user.createdAt] ? (
                        <img
                          className="user-img"
                          src={user.avatar}
                          alt="personalised dp"
                        />
                      ) : (
                        <img className="user-img" src={dp} alt="default dp" />
                      )}
                    </span>
                    <span className="username">@{user.profile?.username}</span>
                    <span className="bio">{user?.Bio}</span>
                    <span className="name">
                      <span className="box-header">Full Name</span>
                      {user.profile?.firstName} {user.profile?.lastName}
                    </span>
                    <span className="job">
                      <span className="box-header">Job Titile</span>
                      {user.jobTitle}
                    </span>
                    <span className="email">
                      <span className="box-header">Email</span>
                      {user.profile?.email}
                    </span>
                  </>
                ) : (
                  <div>No data to display</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
