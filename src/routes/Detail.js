import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams(); // 사용자의 파라미터 값을 받아온다(movie id).
    const getMovie = async() => { // await 함수는 async 안에 있어야 한다.
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail</h1>;
}

export default Detail;