import Image from "next/image";
import { useRouter } from "next/router";

function MovieItem(props) {
  const router = useRouter();

  return (
    <div className="itemcontainer px-2 my-3" onClick={() => router.push(`/movies/${props.movie.id}`)}>
      <h3 className="text-center">{props.movie.rank}. {props.movie.title}</h3>
      <div  className="d-flex">
        <div className="thumbnail my-3 mx-2">
          <Image src={props.movie.image} width={100} height={80}></Image>
        </div>
        <div className="p-2">
          <p className="mb-0">{props.movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;