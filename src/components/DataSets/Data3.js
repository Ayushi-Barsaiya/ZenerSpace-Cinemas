import React, { useEffect, useState } from 'react'

function Data3() {
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
                   <h2>{`${posts[2].show.name}`}</h2>
                   <div> Genres: {posts[2].show.genres}</div>
                   <div> Status: {posts[2].show.status}</div>
                   <div> Runtime: {posts[2].show.runtime!==null?posts[2].show.runtime:"null"}</div>
                   <div> Time: {posts[2].show.schedule.time!==null || "" ? posts[2].show.schedule.time:"null"}</div>
                   <div> Days: {posts[2].show.schedule.days!==null || "" ? posts[2].show.schedule.days:"null"}</div>
                   <div> Ended: {posts[2].show.ended!==null?posts[2].show.ended:"null"}</div>
                    <div> Official Site: {posts[2].show.officialSite}</div>
                  <div> Rating: {posts[2].show.rating.average}</div>
                   <div> Country: {posts[2].show.webChannel.country.name}</div>
                    <div> Summary: {posts[2].show.summary}</div>
                   <div> IMDB: {posts[2].show.externals.imdb}</div>
                 <div> Image: {posts[2].show.image.original}</div>
                 <div> Weight: {posts[2].show.weight}</div>
                 <div> webChannel: {posts[2].show.webChannel.name}</div>
</div>
  </>
            </section>}
        </div>
    )
}
export default Data3  