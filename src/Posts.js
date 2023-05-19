import "./post.css";
export default function Posts({ data }) {
  return (
    <div>
      <div className="post">
        <img src={data.author.img} alt="photo" />
        <p className="text">
          <span className="name">{data.author.name} </span>
          {data.text}
          <span className="message"> {data.msg}</span>
          {data.chess ? <span className="chess"> {data.chess}</span> : null}
          {data.private ? <div className="private"> {data.private}</div> : null}
          <br /> <span className="time">{data.time}</span>
        </p>
      </div>
    </div>
  );
}
