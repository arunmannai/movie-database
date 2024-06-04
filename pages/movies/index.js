import axios from "axios";
import MovieItem from "@/components/movieitem";
import Head from "next/head";

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
    return <>
        <Head>
            <title>Top 100 Movies</title>
            <meta name="description" content="Top 100 Movies" />
        </Head> 
        <div className="container">
            <h1 className="text-center">Top 100 Movies</h1>
            {props.movies.map((movie) => <MovieItem key={movie.id} movie={movie}></MovieItem>)}
        </div>
    </>;
}
export default Movies;