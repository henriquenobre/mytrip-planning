import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Feed from "./pages/Feed";
import NewTravel from "./pages/NewTravel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="Feed" element={<Feed />} />
        <Route path="NewTravel" element={<NewTravel />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
