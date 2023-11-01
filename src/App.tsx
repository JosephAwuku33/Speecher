import Header from "./page_components/Header";
import MainPage from "./page_components/MainPage";
import Sidebar from "./page_components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex-col flex">
        <Header />
        <MainPage/>
      </div>
    </div>
  );
}

export default App;
