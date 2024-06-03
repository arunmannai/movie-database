import { useRouter } from "next/router";

function MovieDetails() {
    const router = useRouter();

    return <h1>Movie ID: {router.query.id}</h1>
}
export default MovieDetails;