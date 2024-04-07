import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar]=useState(true);
  return (
    <div className="">
        <NavBar setSidebar={setSidebar} />
        <Routes>
            <Route path="/" element={<Home sidebar={sidebar} />}/>
            <Route path="/video/:categoryId/:videoId" element={<Video />}/>
        </Routes>
    </div>
  );
}

export default App;
