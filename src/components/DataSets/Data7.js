import React, { useEffect, useState } from 'react'

function Data7() {
const [posts, setPosts] = useState([])
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, []);
    return (
        <div>
            <h1>Data7!</h1>
            {posts.length>0 &&
                <section id="container"><>
                <div class="blockElements">
                   <h2>{`${posts[6].show.name}`}</h2>
                   <div> Genres: {posts[6].show.genres}</div>
                   <div> Status: {posts[6].show.status}</div>
                   <div> Runtime: {posts[6].show.runtime}</div>
                   <div> Time: {posts[6].show.schedule.time}</div>
                   <div> Days: {posts[6].show.schedule.days}</div>
                   <div> Ended: {posts[6].show.ended!==null?posts[6].show.ended:"null"}</div>
                    <div> Official Site: {posts[6].show.officialSite}</div>
                  <div> Rating: {posts[6].show.rating.average!==null?posts[6].show.rating.average:"null"}</div>
                   <div> Country: {posts[6].show.network.country.name}</div>
                    <div> Summary: {posts[6].show.summary}</div>
                   <div> IMDB: {posts[6].show.externals.imdb!==null?posts[6].show.externals.imdb:"null"}</div>
                 <div> Image: {posts[6].show.image.original}</div>
                 <div> Weight: {posts[6].show.weight}</div>
                 <div> Network: {posts[6].show.network.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data7  