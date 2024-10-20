// router를 render한다.

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      {/* Routes router를 찾고, 찾으면 컴포넌트를 렌더링한다.
        * Routes 한 번에 하나의 Route만 렌더링한다. */}
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} /> {/* /id로 쓰면 그냥 텍스트로 인식하고, /:id로 쓰면 id를 변수로 인식한다. */}
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} /> {/* Home Route를 렌더링 */}
      </Routes>
    </Router>
  );
}
 
export default App;
