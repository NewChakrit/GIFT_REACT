import "./Message.css";

function Message() {
  return (
    <>
      <div className="time">3 s</div>
      <div className="main-message">
        <div className="profileCardImg messageImg">
          <img
            className="cardImg"
            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
            alt="profileImg"
          />
        </div>
        <div className="message ptag">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            possimus quisquam fugit delectus reprehenderit minus suscipit saepe
            velit. Porro, pariatur?
          </p>
        </div>
      </div>
      <div className="main-message own-message">
        <div className="profileCardImg messageImg">
          <img
            className="cardImg"
            src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
            alt="profileImg"
          />
        </div>
        <div className="message ownptag">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            possimus quisquam fugit delectus reprehenderit minus suscipit saepe
            velit. Porro, pariatur?
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
