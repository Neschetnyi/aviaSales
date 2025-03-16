import "./App.scss";
import SideFilter from "./components/SideFilter/SideFilter";
import TicketList from "./components/TicketList/TicketList";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="main_container">
      <header className="header">
        <Loader />
      </header>
      <main className="main">
        <SideFilter />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
