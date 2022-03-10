import React, { useEffect, useState } from 'react'

function Data1() {
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
                        <h2>{`${posts[0].show.name}`}</h2>
                        <div> Genres: {posts[0].show.genres}</div>
                        <div> Status: {posts[0].show.status}</div>
                        <div> Runtime: {posts[0].show.runtime}</div>
                        <div> Time: {posts[0].show.schedule.time}</div>
                        <div> Days: {posts[0].show.schedule.days}</div>
                        <div> Ended: {posts[0].show.ended !== null ? posts[0].show.ended : "null"}</div>
                        <div> Official Site: {posts[0].show.officialSite}</div>
                        <div> Rating: {posts[0].show.rating.average}</div>
                        <div> Country: {posts[0].show.network.country.name}</div>
                        <div> Summary: {posts[0].show.summary}</div>
                        <div> IMDB: {posts[0].show.externals.imdb}</div>
                        <div> Image: {posts[0].show.image.original}</div>
                        <div> Weight: {posts[0].show.weight}</div>
                        <div> Network: {posts[0].show.network.name}</div>
                    </div>
                </>
                </section>}
        </div>
    )
}
export default Data1  