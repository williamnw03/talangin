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
import { useState } from "react";

function App() {
  const [pageStatus, setPageStatus] = useState({
    groupName: false,
    memberName: false,
    itemList: false,
    extraCharge: false,
    linkBoth: false,
    result: false,
  });

  // Change page status
  const changePageStatus = (pageName, status) => {
    setPageStatus((prev) => {
      return { ...prev, [pageName]: status };
    });
  };

  return (
    <div className="min-h-screen flex mt-8">
      <div className="flex flex-col w-full p-6 xs:items-center">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<StartPage changePageStatus={changePageStatus} />}
            />
            <Route
              path="/groupname"
              element={
                <GroupName
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
            <Route
              path="/membername"
              element={
                <MemberName
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
            <Route
              path="/itemlist"
              element={
                <ItemList
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
            <Route
              path="/extracharge"
              element={
                <ExtraCharge
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
            <Route
              path="/linkboth"
              element={
                <LinkBoth
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
            <Route
              path="/result"
              element={
                <Result
                  pageStatus={pageStatus}
                  changePageStatus={changePageStatus}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
