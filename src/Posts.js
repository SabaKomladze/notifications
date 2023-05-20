import "./post.css";
export default function Posts({ data }) {
  return (
    <div>
      <div className="post">
        <img src={data.author.img} alt="photo" />
        <div className="text">
          <span className="name">{data.author.name} </span>
          {data.text}
          <span className="message"> {data.msg}</span>
          {data.chess ? <span className="chess"> {data.chess}</span> : null}
          {data.private ? <p className="private"> {data.private}</p> : null}
          <br /> <span className="time">{data.time}</span>
        </div>
      </div>
    </div>
  );
}
