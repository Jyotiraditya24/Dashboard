import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Hi</>}></Route>
        <Route path="/test" element={<>Hello</>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
