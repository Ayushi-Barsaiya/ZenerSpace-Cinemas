import React, { useEffect, useState } from 'react'

function Data4() {
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
                   <h2>{`${posts[3].show.name}`}</h2>
                   <div> Genres: {posts[3].show.genres}</div>
                   <div> Status: {posts[3].show.status}</div>
                   <div> Runtime: {posts[3].show.runtime}</div>
                   <div> Time: {posts[3].show.schedule.time}</div>
                   <div> Days: {posts[3].show.schedule.days}</div>
                   <div> Ended: {posts[3].show.ended!==null?posts[3].show.ended:"null"}</div>
                    <div> Official Site: {posts[3].show.officialSite!==null?posts[3].show.officialSite:"null"}</div>
                  <div> Rating: {posts[3].show.rating.average!==null?posts[3].show.rating.average:"null"}</div>
                   <div> Country: {posts[3].show.network.country.name}</div>
                    <div> Summary: {posts[3].show.summary}</div>
                   <div> IMDB: {posts[3].show.externals.imdb}</div>
                 <div> Image: {posts[3].show.image.original}</div>
                 <div> Weight: {posts[3].show.weight}</div>
                 <div> Network: {posts[3].show.network.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data4  