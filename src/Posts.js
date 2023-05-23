import "./post.css";
export default function Posts(props) {
  const { setRead, read, data, setNumber, number } = props;

  return (
    <div className={!data.read == false ? "postunread" : "postread"}>
      <div
        className="post"
        onClick={() => {
          setRead(!read);
          data.read = true;
          if (number == 0) {
            setNumber((prevNum) => prevNum - 0);
          } else {
            setNumber((prevNum) => prevNum - 1);
          }
        }}
      >
        <img src={data.author.img} alt="photo" />
        <p className="text">
          <span className="name">{data.author.name} </span>
          {data.text}
          <span className="message"> {data.msg}</span>
          {data.chess ? <span className="chess"> {data.chess}</span> : null}
          {data.read == false ? <span className="dot"></span> : null}
        </p>
      </div>
      <p className="time">{data.time}</p>
      {data.private ? <p className="private"> {data.private}</p> : null}
    </div>
  );
}
