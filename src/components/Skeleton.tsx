import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton: React.FC = () => {
  return (
    <>
      <div className="card-skeleton">
        <Skeleton height={200} width={200} />
        <div style={{ paddingLeft: "10px", width: "100%" }}>
          <Skeleton height={10} style={{ marginTop: "5px", width: "30%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "80%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "90%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "70%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "80%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "60%" }} />
          <Skeleton height={10} style={{ marginTop: "5px", width: "50%" }} />
        </div>
      </div>
      <style jsx>
        {`
          .card-skeleton {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 500px;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default CardSkeleton;
