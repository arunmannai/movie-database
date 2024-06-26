import Head from "next/head";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-5 bg-primary text-white text-center">
          <h1>Top 100 Movies and Series</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="text-center itemcontainer category m-3 py-5" onClick={() => router.push('/movies')}>
              <h3>Movies</h3>
              <p>Click here to view top 100 movies</p>
            </div>
            <div className="text-center itemcontainer category m-3 py-5" onClick={() => router.push('/series')}>
              <h3>Series</h3>
              <p>Click here to view top 100 series</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="text-center">Pick any one to continue...</div>
          </div>
        </div>
      </main>
    </>
  );
}
