import axios from "axios";
import YoutubeVideo from "@/components/youtubevideo";
import Head from "next/head";

export async function getStaticProps(context) {
    const params = context.params;
    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/${params.id}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
         }
    };
    
    const res = await axios.request(options);
    const movie = res.data;

    return {
        props: {
            movie
        }
    }
}

export async function getStaticPaths() {
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
    const paths = movies.map((movie) => {
        return { params: { id: movie.id } }
    });
    return {
        paths,
        fallback: false
    }
}

function MovieDetails(props) {
    return <>
        <Head>
            <title>{props.movie.title}</title>
            <meta name="description" content={props.movie.description} />
        </Head>
        <div>
            <h1 className="text-center">{props.movie.rank}. {props.movie.title}</h1>
            <img className="banner" src={props.movie.big_image}></img>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th colspan="2">{props.movie.title}</th>
                        </tr>
                        <tr>
                            <td colspan="2">{props.movie.description}</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div className="text-center">
                                    <YoutubeVideo url={props.movie.trailer_embed_link}></YoutubeVideo>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Directors</th>
                            <td>{props.movie.director}</td>
                        </tr>
                        <tr>
                            <th>Writers</th>
                            <td>{props.movie.writers}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>{props.movie.genre}</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>{props.movie.rating}</td>
                        </tr>
                        <tr>
                            <th>Imdb Link</th>
                            <td><a href={props.movie.imdb_link} target="_blank">={props.movie.imdb_link}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}
export default MovieDetails;