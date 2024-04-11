import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";
import context, { ThemeProvider } from "./utils/context";
import SearchVideoList from "./components/SearchVideoList/SearchvideoList";

function App() {
  const [sidebar, setSidebar]=useState(true);

  
  return (
    <div >
        <NavBar setSidebar={setSidebar}/>
        <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />}/>
            <Route path="/video/:categoryId/:videoId" element={<Video />}/>
            <Route path="/video/search" element={<SearchVideoList/>}/>
        </Routes>
    </div>
  );
}

export default App;
