import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error">
      <img
        src="https://www.iconpacks.net/icons/1/free-error-icon-905-thumb.png"
        alt="error-icon"
      />
      <div className="Error_content_header">
        {error ? (
          <>
            <div className="Error_content_text">
              Error Message: `${error.message}`
            </div>
          </>
        ) : (
          "Page Not Found"
        )}
      </div>
    </div>
  );
};

export default Error;
