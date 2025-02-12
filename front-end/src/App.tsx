import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
