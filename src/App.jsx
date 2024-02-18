// Pages
import StartPage from "./pages/StartPage.jsx";
import GroupName from "./pages/GroupName.jsx";
import MemberName from "./pages/MemberName.jsx";
import ItemList from "./pages/ItemList.jsx";
import ExtraCharge from "./pages/ExtraCharge.jsx";
import LinkBoth from "./pages/LinkBoth.jsx";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col w-full p-6 xs:items-center">
        {/* <ExtraCharge /> */}
        {/* <StartPage /> */}
        {/* <GroupName /> */}
        {/* <MemberName /> */}
        {/* <ItemList /> */}
        {/* <ExtraCharge/> */}
        <LinkBoth />
      </div>
    </div>
  );
}

export default App;
