// Pages
import StartPage from "./pages/StartPage.jsx";
import GroupName from "./pages/GroupName.jsx";
import MemberName from "./pages/MemberName.jsx";
import ItemList from "./pages/ItemList.jsx";
import ExtraCharge from "./pages/ExtraCharge.jsx";
import LinkBoth from "./pages/LinkBoth.jsx";
import Result from "./pages/Result.jsx";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex mt-8">
      <div className="flex flex-col w-full p-6 xs:items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/groupname" element={<GroupName />} />
            <Route path="/membername" element={<MemberName />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/extracharge" element={<ExtraCharge />} />
            <Route path="/linkboth" element={<LinkBoth />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
