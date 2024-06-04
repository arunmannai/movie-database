import Image from "next/image";

function MovieItem(props) {

    return (
      <div className="d-flex">
        <div className="thumbnail">
          <Image src={props.movie.thumbnail} width={100} height={80}></Image>
        </div>
        <div className="p-2">
          <h3>{props.movie.rank}. {props.movie.title}</h3>
          <p>{props.movie.description}</p>
        </div>
      </div>
    );

}

export default MovieItem;