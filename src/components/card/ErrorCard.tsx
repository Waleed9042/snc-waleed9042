import React from "react";

interface ErrorCardProps {
  errorMessage: string;
  onRetry?: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ errorMessage, onRetry }) => {
  return (
    <>
      <div className="error-card">
        <div className="error-card__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="error-card__icon-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </div>
        <p className="error-card__message">{errorMessage}</p>
        {onRetry && (
          <button className="error-card__button" onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
      <style jsx>
        {`
          .error-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border: 1px solid #f8d7da;
            border-radius: 8px;
            background-color: #f8d7da;
            color: #721c24;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 300px;
            margin: 10px;
            text-align: center;
          }
          .error-card__icon {
            margin-bottom: 10px;
          }
          .error-card__icon-svg {
            width: 40px;
            height: 40px;
            color: #721c24;
          }
          .error-card__message {
            margin: 10px 0;
            font-size: 1em;
          }
          .error-card__button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #f5c6cb;
            color: #721c24;
            cursor: pointer;
          }
          .error-card__button:hover {
            background-color: #f1b0b7;
          }
        `}
      </style>
    </>
  );
};

export default ErrorCard;
