import React, { useEffect, useState } from 'react'

function Data6() {
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
                        <h2>{`${posts[5].show.name}`}</h2>
                        <div> Genres: {posts[5].show.genres}</div>
                        <div> Status: {posts[5].show.status}</div>
                        <div> Runtime: {posts[5].show.runtime !== null ? posts[5].show.runtime : "null"}</div>
                        <div> Time: {posts[5].show.schedule.time !== null || "" ? posts[5].show.schedule.time : "null"}</div>
                        <div> Days: {posts[5].show.schedule.days}</div>
                        <div> Ended: {posts[5].show.ended !== null ? posts[5].show.ended : "null"}</div>
                        <div> Official Site: {posts[5].show.officialSite !== null ? posts[5].show.officialSite : "null"}</div>
                        <div> Rating: {posts[5].show.rating.average !== null ? posts[5].show.rating.average : "null"}</div>
                        <div> Country: {posts[5].show.webChannel.country.name}</div>
                        <div> Summary: {posts[5].show.summary}</div>
                        <div> IMDB: {posts[5].show.externals.imdb}</div>
                        <div> Image: {posts[5].show.image.original}</div>
                        <div> Weight: {posts[5].show.weight}</div>
                        <div> Network: {posts[5].show.webChannel.name}</div>
                    </div>
                </>
                </section>}
        </div>
    )
}
export default Data6  