import Footer from "./Footer/Footer";
import Ticket from "./Ticket/Ticket";
import style from "./TicketList.module.scss";
import TopFilter from "./TopFilter/TopFilter";

const TicketList = () => {
  return (
    <div className={style.container}>
      <div>
        <TopFilter />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <Footer />
    </div>
  );
};
export default TicketList;
