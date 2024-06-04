import axios from "axios";
import Head from "next/head";
import SeriesItem from "@/components/seriesitem";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export async function getServerSideProps() {
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
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
    };
    const serieslist = props.serieslist.slice((page - 1) * 10, page * 10);
    return <>
        <Head>
            <title>Top 100 Series</title>
            <meta name="description" content="Top 100 Series" />
        </Head> 
        <div className="container">
            <h1 className="text-center">Top 100 Series</h1>
            {serieslist.map((series) => <SeriesItem key={series.id} series={series}></SeriesItem>)}
        </div>
        <div className="text-center my-5">
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination variant="outlined" shape="rounded" count={10} page={page} onChange={handlePageChange} />
            </Stack>
        </div>
    </>;
}
export default Series;