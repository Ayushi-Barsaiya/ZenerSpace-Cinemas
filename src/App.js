
import { useEffect, useState } from 'react';
import './App.css';
import myImg1 from "./components/images/pic1.jpg"
import myImg2 from "./components/images/pic2.jpg"
import myImg3 from "./components/images/pic3.jpg"
import myImg4 from "./components/images/pic4.jpg"
import myImg5 from "./components/images/pic5.jpg"
import myImg6 from "./components/images/pic6.jpg"
import myImg7 from "./components/images/pic7.jpg"
import myImg8 from "./components/images/pic8.jpg"
import myImg9 from "./components/images/pic9.jpg"
import myImg10 from "./components/images/pic10.jpg"
import { Link } from 'react-router-dom';



function App() {

  const [posts, setPosts] = useState([])
  const url = 'https://api.tvmaze.com/search/shows?q=all';

  useEffect(() => {
    fetch(url).then(resp => resp.json())
      .then(resp => setPosts(resp))
  },[]);


  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      <header className="App-header">
        <h1>WELCOME TO ZENERSPACE CINEMAS!!</h1>
      </header>
      {console.log(posts)}

      <div class="container-fluid">
        <section id="container">

          <div>
            <img src={myImg1} alt="" />
            <a href={posts[0].show.url}>{`${posts[0].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto"><Link to="/Home">Show more details</Link></button>
          </div>
          <div>
            <img src={myImg2} alt="" />
            <a href={posts[1].show.url}>{`${posts[1].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg3} alt="" />
            <a href={posts[2].show.url}>{`${posts[2].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto"
            > Show more details
            </button>
          </div>
          <div>
            <img src={myImg4} alt="" />
            <a href={posts[3].show.url}>{`${posts[3].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg5} alt="" />
            <a href={posts[4].show.url}>{`${posts[4].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg6} alt="" />
            <a href={posts[5].show.url}>{`${posts[5].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg7} alt="" />
            <a href={posts[6].show.url}>{`${posts[6].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg8} alt="" />
            <a href={posts[7].show.url}>{`${posts[7].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg9} alt="" />
            <a href={posts[8].show.url}>{`${posts[8].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
          <div>
            <img src={myImg10} alt="" />
            <a href={posts[9].show.url}>{`${posts[9].show.name}`} </a>
            <button type="button" class="btn btn-danger btn-md mx-auto">Show more details</button>
          </div>
        </section>

      </div>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></script>

    </div>

  );
}

export default App;
