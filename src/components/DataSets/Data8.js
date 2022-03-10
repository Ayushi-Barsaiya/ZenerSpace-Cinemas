import React, { useEffect, useState } from 'react'

function Data8() {
const [posts, setPosts] = useState([])
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, []);
    return (
        <div>
            {posts.length>0 &&
                <section id="container"><>
                <div class="blockElements">
                   <h2>{`${posts[7].show.name}`}</h2>
                   <div> Genres: {posts[7].show.genres}</div>
                   <div> Status: {posts[7].show.status}</div>
                   <div> Runtime: {posts[7].show.runtime}</div>
                   <div> Time: {posts[7].show.schedule.time}</div>
                   <div> Days: {posts[7].show.schedule.days}</div>
                   <div> Ended: {posts[7].show.ended!==null?posts[7].show.ended:"null"}</div>
                    <div> Official Site: {posts[7].show.officialSite}</div>
                  <div> Rating: {posts[7].show.rating.average!==null?posts[7].show.rating.average:"null"}</div>
                   <div> Country: {posts[7].show.network.country.name}</div>
                    <div> Summary: {posts[7].show.summary}</div>
                   <div> IMDB: {posts[7].show.externals.imdb}</div>
                 <div> Image: {posts[7].show.image.original}</div>
                 <div> Weight: {posts[7].show.weight}</div>
                 <div> Network: {posts[7].show.network.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data8  