import "./Unverified.css";

const Unverified = () => {
  return (
    <div className="Unverified">
      <img
        src="https://static-00.iconduck.com/assets.00/in-progress-icon-510x512-mw0pz22p.png"
        alt="pending-icon"
      />
      <div className="Unverified_content_header">Verification Pending</div>
      <div className="Unverified_content_text">
        Your documents are being reviewed. You will be notified when your
        application has been approved
      </div>
    </div>
  );
};

export default Unverified;
