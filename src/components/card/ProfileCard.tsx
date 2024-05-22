import React from "react";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, title }) => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-card__image">
          <img src={imageSrc} alt={name} />
        </div>
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__title">{title}</p>
        <div className="profile-card__buttons">
          <button className="profile-card__button profile-card__button--primary">
            Add friend
          </button>
          <button className="profile-card__button profile-card__button--secondary">
            Message
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .profile-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 300px;
            margin: 10px;
            text-align: center;
          }
          .profile-card__image img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }
          .profile-card__name {
            margin-top: 10px;
            font-size: 1.5em;
            font-weight: bold;
            color: black;
          }
          .profile-card__title {
            margin-top: 5px;
            font-size: 1em;
            color: #555;
          }
          .profile-card__buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }
          .profile-card__button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .profile-card__button--primary {
            background-color: #007bff;
            color: #fff;
          }
          .profile-card__button--secondary {
            background-color: #fff;
            color: #007bff;
            border: 1px solid #007bff;
          }
        `}
      </style>
    </>
  );
};

export default ProfileCard;
