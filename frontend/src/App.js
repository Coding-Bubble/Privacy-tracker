import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryList from "./components/EntryList";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<EntryList />} />
          <Route path="add" element={<AddEntry />} />
          <Route path="edit/:id" element={<EditEntry />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
