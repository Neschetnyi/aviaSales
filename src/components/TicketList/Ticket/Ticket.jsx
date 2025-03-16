import style from "./Ticket.module.scss";

const Ticket = (props) => {
  const { price, forward, backward, carrier } = props;

  const picUrl = `https://pics.avs.io/99/36/${carrier}.png`;
  //time convertions
  let dateForwardStarts = new Date(`${forward.date}`);
  let dateForwardStartsConverted = `${
    dateForwardStarts.getHours() < 10 ? "0" : ""
  }${dateForwardStarts.getHours()}:${
    dateForwardStarts.getMinutes() < 10 ? "0" : ""
  }${dateForwardStarts.getMinutes()}`;

  let dateForwardArrived = new Date(
    dateForwardStarts.getTime() + forward.duration * 1000 * 60
  );

  let dateForwardArrivedConverted = `${
    dateForwardArrived.getHours() < 10 ? "0" : ""
  }${dateForwardArrived.getHours()}:${
    dateForwardArrived.getMinutes() < 10 ? "0" : ""
  }${dateForwardArrived.getMinutes()}`;

  let timeInWayForward =
    dateForwardArrived.getTime() - dateForwardStarts.getTime();

  const hoursForward = Math.floor(timeInWayForward / (1000 * 60 * 60));
  const minutesForward = Math.floor(
    (timeInWayForward % (1000 * 60 * 60)) / (1000 * 60)
  );

  const formattedTimeForward = `${
    hoursForward < 10 ? "0" : ""
  }${hoursForward}ч ${minutesForward < 10 ? "0" : ""}${minutesForward}м`;
  // stops conversion
  const stopsForward = forward.stops.join(", ");
  //time convertions
  let datebackwardStarts = new Date(`${backward.date}`);
  let datebackwardStartsConverted = `${
    datebackwardStarts.getHours() < 10 ? "0" : ""
  }${datebackwardStarts.getHours()}:${
    datebackwardStarts.getMinutes() < 10 ? "0" : ""
  }${datebackwardStarts.getMinutes()}`;

  let datebackwardArrived = new Date(
    datebackwardStarts.getTime() + backward.duration * 1000 * 60
  );

  let datebackwardArrivedConverted = `${
    datebackwardArrived.getHours() < 10 ? "0" : ""
  }${datebackwardArrived.getHours()}:${
    datebackwardArrived.getMinutes() < 10 ? "0" : ""
  }${datebackwardArrived.getMinutes()}`;

  let timeInWaybackward =
    datebackwardArrived.getTime() - datebackwardStarts.getTime();

  const hoursbackward = Math.floor(timeInWaybackward / (1000 * 60 * 60));
  const minutesbackward = Math.floor(
    (timeInWayForward % (1000 * 60 * 60)) / (1000 * 60)
  );

  const formattedTimebackward = `${
    hoursbackward < 10 ? "0" : ""
  }${hoursbackward}ч ${minutesbackward < 10 ? "0" : ""}${minutesbackward}м`;
  // stops conversion
  const stopsbackward = backward.stops.join(", ");

  return (
    <div className={style.container}>
      <div className={style.prise_logo_container}>
        <div className={style.prise}>{price} р</div>
        <img className={style.line_logo} src={picUrl} />
      </div>
      {/*forward*/}
      <div className={style.onway_container}>
        <div>
          <div className={style.title}>
            {forward.origin}-{forward.destination}
          </div>
          <div className={style.details}>
            {dateForwardStartsConverted} – {dateForwardArrivedConverted}
          </div>
        </div>
        <div>
          <div className={style.title}>В ПУТИ</div>
          <div className={style.details}>{formattedTimeForward}</div>
        </div>
        <div>
          <div className={style.title}>
            {forward.stops.length === 0 ? null : `${forward.stops.length} `}
            {forward.stops.length > 1
              ? "ПЕРЕСАДКИ"
              : forward.stops.length > 0
              ? "ПЕРЕСАДКА"
              : "БЕЗ ПЕРЕСАДОК"}
          </div>
          <div className={style.details}>{stopsForward}</div>
        </div>
      </div>
      {/*backward*/}
      <div className={style.onway_container}>
        <div>
          <div className={style.title}>
            {backward.origin}-{backward.destination}
          </div>
          <div className={style.details}>
            {datebackwardStartsConverted} – {datebackwardArrivedConverted}
          </div>
        </div>
        <div>
          <div className={style.title}>В ПУТИ</div>
          <div className={style.details}>{formattedTimebackward}</div>
        </div>
        <div>
          <div className={style.title}>
            {backward.stops.length === 0 ? null : `${backward.stops.length} `}
            {backward.stops.length > 1
              ? "ПЕРЕСАДКИ"
              : backward.stops.length > 0
              ? "ПЕРЕСАДКА"
              : "БЕЗ ПЕРЕСАДОК"}
          </div>
          <div className={style.details}>{stopsbackward}</div>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
