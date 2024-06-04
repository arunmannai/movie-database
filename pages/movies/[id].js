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
            <h1 className="text-center">{props.movie.rank}. {props.movie.title} ({props.movie.year})</h1>
            <img className="banner" src={props.movie.big_image}></img>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th colSpan={2}>{props.movie.title} ({props.movie.year})</th>
                        </tr>
                        <tr>
                            <td colSpan={2}>{props.movie.description}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className="text-center">
                                    <YoutubeVideo url={props.movie.trailer_embed_link} title={props.movie.title}></YoutubeVideo>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-end">Directors:</th>
                            <td>{props.movie.director}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Writers:</th>
                            <td>{props.movie.writers}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Genre:</th>
                            <td>{props.movie.genre.join(", ")}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Rating:</th>
                            <td>{props.movie.rating}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Imdb Link:</th>
                            <td><a href={props.movie.imdb_link} target="_blank">{props.movie.imdb_link}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}
export default MovieDetails;