import Footer from "./Footer/Footer";
import Ticket from "./Ticket/Ticket";
import style from "./TicketList.module.scss";
import TopFilter from "./TopFilter/TopFilter";
import { getId, fetchTickets } from "../../redux/ticketsDataSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const TicketList = () => {
  const dispatch = useDispatch();
  const shown = useSelector((state) => state.tickets.shown);
  const id = useSelector((state) => state.tickets.id);
  const stop = useSelector((state) => state.tickets.stop);
  const tickets = useSelector((state) => state.tickets.tickets);
  const stopRef = useRef(stop);

  useEffect(() => {
    stopRef.current = stop;
  }, [stop]);

  useEffect(() => {
    dispatch(getId());
  }, []);

  useEffect(() => {
    if (id !== "") {
      dispatch(fetchTickets());
      console.log("id получен");
      console.log("stop is", stop);
      console.log("tickets are", tickets);
      const fetchInterval = setInterval(() => {
        dispatch(fetchTickets());

        if (stopRef.current) {
          clearInterval(fetchInterval);
          console.log("Interval stopped");
        }
      }, 500);
    }
  }, [id]);

  const ticketsShown = [];
  if (tickets.length > 0) {
    for (let i = 0; i < shown; i++) {
      ticketsShown.push(tickets[i].carrier);
    }
  }

  return (
    <div className={style.container}>
      <div>
        <TopFilter />
        {ticketsShown}
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
