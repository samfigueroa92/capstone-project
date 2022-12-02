//Bootstrap
import Card from "react-bootstrap/Card";

//Dependencies
import { Link } from "react-router-dom";

//CSS Imports
import "./RequestCard.css";

const RequestCard = ({ request }) => {
  return (
    <div className="req-card">
      <Link className="link" to={`/requests/${request.id}`}>
        <Card className="card-img">
          <img src={request.image ? request.image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAVFBMVEXu7u5mZmbz8/NZWVlcXFy8vLzU1NSXl5eioqKysrL19fV/f3/x8fFjY2NeXl7Nzc3j4+NqamrKysqMjIx3d3eGhobp6ene3t5TU1Nubm6wsLCPj49E04CSAAACxUlEQVR4nO3b63KiQBRFYWwIJoSbYnQyef/3HPCCIt1OMraTOjtr/VSk+vMolypNkh+U++4F/NfQ6oZWN7S6odUNrW5odUOrG1rd0OqGVje0uqHVDa1uaHVDqxta3dDqhlY3tLqh1Q2tbmh1Q6sbWt3Q6oZWN7S6odUNrW5odUOrG1rd0OqGVje0uqHVDa1uaHVDq9sDtKWLVfSlxd9j2TzFqo29tge8f89plsao/pWXsdcWeX+Dtn5dxug9M6FNX4oYvaZGtDH2ivbe0N65R7T/ENp7+25tf5kZIOlpS5e//F4nXpScttxt0rrOVo1vezVt2dbVoq9KGw9LTVu87bE9d+F5gZq2zRbHsvXcJaYtm1Fbe16hps1/kjbZjlqfy7bWtdePFsv6eJTaFPPtTWtdk65nD7/vuVW1EzsD9dgqW1+NsEyWWZalb61PZVjr9sff+XSLbdO0/itlu9p+ssfz6uwLWoZEZrVuPLN6vruhrGrPWO90x6bHKqPaS2zP9d7wDJt11eRoZVM7xQan67r+huiSa1J7jQ1Mt8cO90IXXIvaOXbgzqa7x065BrU+rGe6RXe6hjxz7Wn92BnXnbA9d3XimtOGsFfc4oy9mK41rWvqAHbCdd1ks9N0jWnDk51wi+7qPTlybWlvTfaC6z5mmx24prS3JztyZ5MduZa0Lr892QO38Ez2xDWkdfnfJnvg+rF7rh1t8YnJDtVV6JlqlVjRPn1qsrerNhsb2vojOLKvcBc2fkEU/nx+LSPaOFi0964t8v7QokVrU5tmcbLw++Rkl8dqG3tpj/gXRRmr6CvjPyO6odUNrW5odUOrG1rd0OqGVje0uqHVDa1uaHVDqxta3dDqhlY3tLqh1Q2tbmh1Q6sbWt3Q6oZWN7S6odUNrW5odUOrG1rd0OqGVje0uqHVDa1uaHVDqxta3dDqhlY39wcAlyz4wLPLJwAAAABJRU5ErkJggg=="} />
          <Card.Body>
            <Card.Title> {<h4>{request.title ? request.title : "Request's Title" }</h4>} </Card.Title>
            <Card.Text className="card-text">{<h4>{request.req_date}</h4>}</Card.Text>
            <Card.Text className="card-bottom">
              <h4 className="assignment">
                {request.assigned ? "Assigned" : "Pending"}
              </h4>
              <h4 className="time">
                <i className="fa-regular fa-clock clock"></i>
                {request.time}
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default RequestCard;
