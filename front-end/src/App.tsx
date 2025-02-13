import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fil" element={<Feed />} />
          <Route path="connexion" element={<SignIn />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
