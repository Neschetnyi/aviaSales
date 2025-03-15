import style from "./Ticket.module.scss";
import s7Logo from "../../../assets/S7Logo.png";
const Ticket = () => {
  return (
    <div className={style.container}>
      <div className={style.prise_logo_container}>
        <div className={style.prise}>13 000 р</div>
        <img className={style.line_logo} src={s7Logo} />
      </div>
      <div className={style.onway_container}>
        <div>
          <div className={style.title}>MOW-HKT</div>
          <div className={style.details}>10:45 – 08:00</div>
        </div>
        <div>
          <div className={style.title}>В ПУТИ</div>
          <div className={style.details}>21ч 15м</div>
        </div>
        <div>
          <div className={style.title}>2 ПЕРЕСАДКИ</div>
          <div className={style.details}>HKG, JNB</div>
        </div>
      </div>
      <div className={style.onway_container}>
        <div>
          <div className={style.title}>MOW-HKT</div>
          <div className={style.details}>10:45 – 08:00</div>
        </div>
        <div>
          <div className={style.title}>В ПУТИ</div>
          <div className={style.details}>21ч 15м</div>
        </div>
        <div>
          <div className={style.title}>2 ПЕРЕСАДКИ</div>
          <div className={style.details}>HKG, JNB</div>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
