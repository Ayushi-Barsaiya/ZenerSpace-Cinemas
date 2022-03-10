import React, { useEffect, useState } from 'react'

function Data2() {
    const [posts, setPosts] = useState([])
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, []);
    return (
        <div>
            {posts.length > 0 &&
                <section id="container"><>
                    <div class="blockElements">
                        <h2>{`${posts[1].show.name}`}</h2>
                        <div> Genres: {posts[1].show.genres}</div>
                        <div> Status: {posts[1].show.status}</div>
                        <div> Runtime: {posts[1].show.runtime}</div>
                        <div> Time: {posts[1].show.schedule.time}</div>
                        <div> Days: {posts[1].show.schedule.days}</div>
                        <div> Ended: {posts[1].show.ended !== null ? posts[1].show.ended : "null"}</div>
                        <div> Official Site: {posts[1].show.officialSite}</div>
                        <div> Rating: {posts[1].show.rating.average}</div>
                        <div> Country: {posts[1].show.network.country.name}</div>
                        <div> Summary: {posts[1].show.summary}</div>
                        <div> IMDB: {posts[1].show.externals.imdb}</div>
                        <div> Image: {posts[1].show.image.original}</div>
                        <div> Weight: {posts[1].show.weight}</div>
                        <div> Network: {posts[1].show.network.name}</div>
                    </div>
                </>
                </section>}
        </div>
    )
}
export default Data2  