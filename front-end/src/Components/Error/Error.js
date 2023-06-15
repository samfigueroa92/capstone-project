import './Error.css';

const Error = () => {
  
  return (
    <div className="Error">
      <img
        src="https://www.iconpacks.net/icons/1/free-error-icon-905-thumb.png"
        alt="error-icon"
      />
      <div className="Error_content_header">Oops... something went wrong</div>
      <div className="Error_content_text">
        Error Message: Dummy Text
      </div>
    </div>
  );
};

export default Error;