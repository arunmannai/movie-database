import axios from "axios";
import Head from "next/head";
import MovieItem from "@/components/movieitem";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export async function getServerSideProps() {
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
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
    };
    const movies = props.movies.slice((page - 1) * 10, page * 10);
    return <>
        <Head>
            <title>Top 100 Movies</title>
            <meta name="description" content="Top 100 Movies" />
        </Head> 
        <div className="container">
            <h1 className="text-center">Top 100 Movies</h1>
            {movies.map((movie) => <MovieItem key={movie.id} movie={movie}></MovieItem>)}
        </div>
        <div className="text-center my-5">
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination variant="outlined" shape="rounded" count={10} page={page} onChange={handlePageChange} />
            </Stack>
        </div>
    </>;
}
export default Movies;