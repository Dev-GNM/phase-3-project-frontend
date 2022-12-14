import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Row from './Row';
import { cloneRequest, categoryComments } from './Clonerequest';
import NetBan from './NetBan';
import NavBar from './NavBar';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NetBan fetchUrl={cloneRequest.fetchNetflixOriginals} />
            <Row title="Released in the Past Year" fetchUrl={cloneRequest.fetchNetflixOriginals} categoryLink="/netflix_originals" categoryComment={categoryComments.netflixOriginalComments} isLargeRow />
            <Row title="POpular on Netflix" fetchUrl={cloneRequest.fetchTrending} categoryLink="/trending" categoryComment={categoryComments.trendingComments} />
            <Row title="Critically Acclaimed Films" fetchUrl={cloneRequest.fetchTopRated} categoryLink="/top_rated" categoryComment={categoryComments.topRatedComments} />
            <Row title="New Releases" fetchUrl={cloneRequest.fetchActionMovies} categoryLink="/action" categoryComment={categoryComments.actionComments} />
            <Row title="Action Movies" fetchUrl={cloneRequest.fetchComedyMovies} categoryLink="/comedy" categoryComment={categoryComments.comedyComments} />
            <Row title="Horror Movies" fetchUrl={cloneRequest.fetchHorrorMovies} categoryLink="/horror" categoryComment={categoryComments.horrorComments} />
            <Row title="Young Adult Movies" fetchUrl={cloneRequest.fetchfetchRomanceMovies} categoryLink="/romance" categoryComment={categoryComments.romanceComments} />
            <Row title="Documentaries" fetchUrl={cloneRequest.fetchDocumentaries} categoryLink="/documentaries" categoryComment={categoryComments.documentaryComments} />
          </Route>
          <Route exact path="/netflix_originals/:id">
            <MovieDetails category={categoryComments.netflixOriginalComments} />
          </Route>
          <Route exact path="/top_rated/:id">
            <MovieDetails category={categoryComments.topRatedComments} />
          </Route>
          <Route exact path="/romance/:id">
            <MovieDetails category={categoryComments.romanceComments} />
          </Route>
          <Route exact path="/trending/:id">
            <MovieDetails category={categoryComments.trendingComments} />
          </Route>
          <Route exact path="/comedy/:id">
            <MovieDetails category={categoryComments.comedyComments} />
          </Route>
          <Route exact path="/horror/:id">
            <MovieDetails category={categoryComments.horrorComments} />
          </Route>
          <Route exact path="/action/:id">
            <MovieDetails category={categoryComments.actionComments} />
          </Route>
          <Route exact path="/documentaries/:id">
            <MovieDetails category={categoryComments.documentaryComments} />
          </Route>

          <Route path="*">
            <h1 style={{ marginTop: "50px", backgroundColor: "white" }}>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;