import React, { useEffect, useState } from 'react'

function Data5() {
    const [posts, setPosts] = useState([])
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, []);
    return (
        <div>
            <h1>Data5!</h1>
            {posts.length > 0 &&
                <section id="container"><>
                    <div class="blockElements">
                        <h2>{`${posts[4].show.name}`}</h2>
                        <div> Genres: {posts[4].show.genres}</div>
                        <div> Status: {posts[4].show.status}</div>
                        <div> Runtime: {posts[4].show.runtime}</div>
                        <div> Time: {posts[4].show.schedule.time}</div>
                        <div> Days: {posts[4].show.schedule.days}</div>
                        <div> Ended: {posts[4].show.ended !== null ? posts[4].show.ended : "null"}</div>
                        <div> Official Site: {posts[4].show.officialSite}</div>
                        <div> Rating: {posts[4].show.rating.average}</div>
                        <div> Country: {posts[4].show.network.country.name}</div>
                        <div> Summary: {posts[4].show.summary}</div>
                        <div> IMDB: {posts[4].show.externals.imdb !== null ? posts[4].show.externals.imdb : "null"}</div>
                        <div> Image: {posts[4].show.image.original}</div>
                        <div> Weight: {posts[4].show.weight}</div>
                        <div> Network: {posts[4].show.network.name}</div>
                    </div>
                </>
                </section>}
        </div>
    )
}
export default Data5  