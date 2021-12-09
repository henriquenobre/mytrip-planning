import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="Feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
