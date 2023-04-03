import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="Header-wrapper">
           <div className="big-box"></div>
           <span>Blog name</span>
           <div className="small-box-wrapper">
               <div className="small-box"></div>
               <div className="small-box"></div>
               <div className="small-box"></div>
               <div className="small-box"></div>
               <div className="small-box"></div>
           </div>
       </div>
      </header>
      <div className="banner">
          <span>Full-width banner image</span>
      </div>
      <div className="content-wrapper">
          <div className="blog">
              <span>Blog</span>
              <div className="blog_item"></div>
              <div className="blog_item"></div>
              <div className="blog_item"></div>
              <div className="blog_item"></div>
          </div>
          <div className="news">
              <span>News</span>
              <div className="news_item"></div>
              <div className="news_item"></div>
              <div className="news_item"></div>
          </div>
      </div>

    </div>
  );
}

export default App;
