import axios from "axios";
import Head from "next/head";
import SeriesItem from "@/components/seriesitem";

export async function getStaticProps() {
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

    return {
        props: {
            serieslist
        }
    }
}

function Series(props) {
    return <>
        <Head>
            <title>Top 100 Series</title>
            <meta name="description" content="Top 100 Series" />
        </Head> 
        <div className="container">
            <h1 className="text-center">Top 100 Series</h1>
            {props.serieslist.map((series) => <SeriesItem key={series.id} series={series}></SeriesItem>)}
        </div>
    </>;
}
export default Series;