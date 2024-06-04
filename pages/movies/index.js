import axios from "axios";
import MovieItem from "@/components/movieitem";

export async function getStaticProps() {
    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
         }
    };
    
    const res = await axios.request(options);
    const movies = res.data;

    return {
        props: {
            movies
        }
    }
}

function Movies(props) {
    return <div className="container">
        <h1 className="text-center">Top 100 Movies</h1>
        {props.movies.map((movie) => <MovieItem movie={movie}></MovieItem>)}
    </div>;
}
export default Movies;