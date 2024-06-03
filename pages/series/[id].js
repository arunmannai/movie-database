import { useRouter } from "next/router";

function SeriesDetails() {
    const router = useRouter();

    return <h1>Series ID: {router.query.id}</h1>
}
export default SeriesDetails;