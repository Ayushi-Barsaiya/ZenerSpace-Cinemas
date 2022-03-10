import React, { useEffect, useState } from 'react'

function Data9() {
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
                   <h2>{`${posts[8].show.name}`}</h2>
                   <div> Genres: {posts[8].show.genres}</div>
                   <div> Status: {posts[8].show.status}</div>
                   <div> Runtime: {posts[8].show.runtime}</div>
                   <div> Time: {posts[8].show.schedule.time}</div>
                   <div> Days: {posts[8].show.schedule.days}</div>
                   <div> Ended: {posts[8].show.ended!==null?posts[8].show.ended:"null"}</div>
                    <div> Official Site: {posts[8].show.officialSite}</div>
                  <div> Rating: {posts[8].show.rating.average}</div>
                   <div> Country: {posts[8].show.network.country.name}</div>
                    <div> Summary: {posts[8].show.summary}</div>
                   <div> IMDB: {posts[8].show.externals.imdb}</div>
                 <div> Image: {posts[8].show.image.original}</div>
                 <div> Weight: {posts[8].show.weight}</div>
                 <div> Network: {posts[8].show.network.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data9  