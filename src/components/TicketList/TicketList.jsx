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

  const noTransfers = useSelector((state) => state.sideFilter.noTransfers);
  const oneTransfer = useSelector((state) => state.sideFilter.oneTransfer);
  const twoTransfers = useSelector((state) => state.sideFilter.twoTransfers);
  const threeTransfers = useSelector(
    (state) => state.sideFilter.threeTransfers
  );
  const cheap = useSelector((store) => store.topFilter.cheap);
  const fast = useSelector((store) => store.topFilter.fast);
  const optimal = useSelector((store) => store.topFilter.optimal);

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

  const transfersToFilter = [];

  if (noTransfers) {
    transfersToFilter.push(0);
  }
  if (oneTransfer) {
    transfersToFilter.push(1);
  }
  if (twoTransfers) {
    transfersToFilter.push(2);
  }
  if (threeTransfers) {
    transfersToFilter.push(3);
  }

  console.log("transfersToFilter", transfersToFilter);

  const filteredTickets = tickets.filter((ticket) =>
    transfersToFilter.includes(ticket.segments[0].stops.length)
  );

  console.log("filteredTickets", filteredTickets);

  let ticketsShown = filteredTickets;

  if (cheap) {
    const minValue = Math.min(...filteredTickets.map((ticket) => ticket.price));
    console.log("minValue", minValue);
    ticketsShown = filteredTickets.filter(
      (ticket) => ticket.price === minValue
    );
  }

  if (fast) {
    const minValue1 = Math.min(
      ...filteredTickets.map((ticket) => ticket.segments[0].duration)
    );
    const minValue2 = Math.min(
      ...filteredTickets.map((ticket) => ticket.segments[1].duration)
    );
    console.log("minValue", minValue1, minValue2);
    ticketsShown = filteredTickets.filter(
      (ticket) =>
        ticket.segments[0].duration === minValue1 ||
        ticket.segments[1].duration === minValue2
    );
  }

  if (optimal) {
    const arithmeticAverageCost =
      filteredTickets.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber.price;
      }, 0) / filteredTickets.length;

    const arithmeticAverageTime1 =
      filteredTickets.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber.segments[0].duration;
      }, 0) / filteredTickets.length;

    const arithmeticAverageTime2 =
      filteredTickets.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber.segments[1].duration;
      }, 0) / filteredTickets.length;

    ticketsShown = filteredTickets.filter(
      (ticket) =>
        (ticket.segments[0].duration < arithmeticAverageTime1 + 100 &&
          ticket.segments[0].duration > arithmeticAverageTime1 - 100) ||
        (ticket.segments[1].duration < arithmeticAverageTime2 + 100 &&
          ticket.segments[1].duration > arithmeticAverageTime2 + 100 &&
          ticket.price < arithmeticAverageCost + 3000 &&
          ticket.price > arithmeticAverageCost - 3000)
    );
  }

  console.log("ticketsShown", ticketsShown);

  let filteredTicketsShown = [];

  if (ticketsShown.length > 0) {
    for (let i = 0; i < shown; i++) {
      filteredTicketsShown.push(ticketsShown[i]);
    }
  }

  const lastfilteredTicketsShown = filteredTicketsShown.filter(
    (item) => item !== undefined
  );

  console.log("filteredTicketsShown", filteredTicketsShown);
  console.log("lastfilteredTicketsShown", lastfilteredTicketsShown);

  console.log("shown", shown);

  return (
    <div className={style.container}>
      <div>
        <TopFilter />
        {lastfilteredTicketsShown.length === 0 ? (
          <div className={style.alert}>
            Рейсов, подходящих под заданные фильтры, не найдено
          </div>
        ) : (
          lastfilteredTicketsShown.map((ticket, index) => {
            return (
              <Ticket
                key={index}
                price={ticket.price}
                carrier={ticket.carrier}
                forward={ticket.segments[0]}
                backward={ticket.segments[1]}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};
export default TicketList;
