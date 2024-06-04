import Image from "next/image";
import { useRouter } from "next/router";

function SeriesItem(props) {
  const router = useRouter();

  return (
    <div className="itemcontainer px-2 my-3" onClick={() => router.push(`/series/${props.series.id}`)}>
      <h3 className="text-center">{props.series.rank}. {props.series.title} ({props.series.year})</h3>
      <div  className="d-flex">
        <div className="thumbnail my-3 mx-2">
          <Image src={props.series.image} width={100} height={80}></Image>
        </div>
        <div className="p-2">
          <p className="mb-0">{props.series.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SeriesItem;