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
import NotFound from "./pages/NotFound.jsx";

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

  // progress bar
  const [progressBar, setProgressBar] = useState(0);

  // change progress bar
  const changeProgressBar = (page) => {
    const totalPage = 6;
    const percent = Math.round((page / totalPage) * 100);
    setProgressBar(percent);
  };

  return (
    <>
      <div
        className={`fixed z-10 top-0 bg-gradient-to-r from-firstColor to-secondColor h-3 transition-all duration-1000`}
        style={{ width: `${progressBar}%` }}
      ></div>
      <div
        className={`fixed z-30 top-full right-0 -translate-y-full bg-gradient-to-r from-firstColor to-secondColor h-3 transition-all duration-1000`}
        style={{ width: `${progressBar}%` }}
      ></div>
      <div className="flex pt-9">
        <div className="flex flex-col w-full p-6 pt-0 pb-12 xs:items-center">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <StartPage
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/groupname"
                element={
                  <GroupName
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/membername"
                element={
                  <MemberName
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/itemlist"
                element={
                  <ItemList
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/extracharge"
                element={
                  <ExtraCharge
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/linkboth"
                element={
                  <LinkBoth
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />
              <Route
                path="/result"
                element={
                  <Result
                    pageStatus={pageStatus}
                    changePageStatus={changePageStatus}
                    changeProgressBar={changeProgressBar}
                  />
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
