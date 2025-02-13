import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignOut from './pages/SignOut';

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fil" element={<Feed />} />
          <Route path="connexion" element={<SignIn />} />
          <Route path="enregistrement" element={<SignOut />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
