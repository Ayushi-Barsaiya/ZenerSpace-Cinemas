import React, { useEffect, useState } from 'react'

function Data19() {
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
                   <h2>{`${posts[9].show.name}`}</h2>
                   <div> Genres: {posts[9].show.genres}</div>
                   <div> Status: {posts[9].show.status}</div>
                   <div> Runtime: {posts[9].show.runtime}</div>
                   <div> Time: {posts[9].show.schedule.time}</div>
                   <div> Days: {posts[9].show.schedule.days}</div>
                   <div> Ended: {posts[9].show.ended!==null?posts[9].show.ended:"null"}</div>
                    <div> Official Site: {posts[9].show.officialSite}</div>
                  <div> Rating: {posts[9].show.rating.average!==null?posts[9].show.rating.average:"null"}</div>
                   <div> Country: {posts[9].show.network.country.name}</div>
                    <div> Summary: {posts[9].show.summary}</div>
                   <div> IMDB: {posts[9].show.externals.imdb!==null?posts[9].show.externals.imdb:"null"}</div>
                 <div> Image: {posts[9].show.image.original}</div>
                 <div> Weight: {posts[9].show.weight}</div>
                 <div> Network: {posts[9].show.network.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data19  