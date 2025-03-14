import "./App.css";
import SideFilter from "./components/SideFilter/SideFilter";
import TicketList from "./components/TicketList/TicketList";
import logo from "./assets/Logo.png";

function App() {
  return (
    <div className="main_container">
      <header className="header">
        <img src={logo} />
      </header>
      <main className="main">
        <SideFilter />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
