import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Feed from "./pages/Feed";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fil" element={<Feed />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
