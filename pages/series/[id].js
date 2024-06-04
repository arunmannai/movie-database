import axios from "axios";
import YoutubeVideo from "@/components/youtubevideo";
import Head from "next/head";

export async function getStaticProps(context) {
    const params = context.params;
    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/series/${params.id}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
         }
    };
    
    const res = await axios.request(options);
    const series = res.data;

    return {
        props: {
            series
        }
    }
}

export async function getStaticPaths() {
    const options = {
        method: 'GET',
        url: `https://${process.env.RAPID_API_HOST}/series`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
         }
    };
    
    const res = await axios.request(options);
    const serieslist = res.data;
    const paths = serieslist.map((series) => {
        return { params: { id: series.id } }
    });
    return {
        paths,
        fallback: false
    }
}

function SeriesDetails(props) {
    return <>
        <Head>
            <title>{props.series.title}</title>
            <meta name="description" content={props.series.description} />
        </Head>
        <div>
            <h1 className="text-center">{props.series.rank}. {props.series.title} ({props.series.year})</h1>
            <img className="banner" src={props.series.big_image}></img>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th colspan="2">{props.series.title} ({props.series.year})</th>
                        </tr>
                        <tr>
                            <td colspan="2">{props.series.description}</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div className="text-center">
                                    <YoutubeVideo url={props.series.trailer_embed_link}></YoutubeVideo>
                                </div>
                            </td>
                        </tr>
                         <tr>
                            <th className="text-end">Genre:</th>
                            <td>{props.series.genre.join(", ")}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Rating:</th>
                            <td>{props.series.rating}</td>
                        </tr>
                        <tr>
                            <th className="text-end">Imdb Link:</th>
                            <td><a href={props.series.imdb_link} target="_blank">{props.series.imdb_link}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
}
export default SeriesDetails;