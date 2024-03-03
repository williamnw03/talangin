// Pages
import StartPage from "./pages/StartPage.jsx";
import GroupName from "./pages/GroupName.jsx";
import MemberName from "./pages/MemberName.jsx";
import ItemList from "./pages/ItemList.jsx";
import ExtraCharge from "./pages/ExtraCharge.jsx";
import LinkBoth from "./pages/LinkBoth.jsx";
import Result from "./pages/Result.jsx";

function App() {
  return (
    <div className="min-h-screen flex mt-8">
      <div className="flex flex-col w-full p-6 xs:items-center">
        {/* <StartPage /> */}
        {/* <GroupName /> */}
        {/* <MemberName /> */}
        {/* <ItemList /> */}
        {/* <ExtraCharge /> */}
        {/* <LinkBoth /> */}
        <Result />
      </div>
    </div>
  );
}

export default App;
