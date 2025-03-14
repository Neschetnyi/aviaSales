import style from "./SideFilter.module.scss";

const SideFilter = () => {
  return (
    <aside className={style.container}>
      <div className={style.div_header}>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <div className={style.div}>
        <input className={style.checkbox} type="checkbox" />
        <span>Bce</span>
      </div>
      <div className={style.div}>
        <input className={style.checkbox} type="checkbox" />
        <span>Без пересадок</span>
      </div>
      <div className={style.div}>
        <input className={style.checkbox} type="checkbox" />
        <span>1 пересадка</span>
      </div>
      <div className={style.div}>
        <input className={style.checkbox} type="checkbox" />
        <span>2 пересадки</span>
      </div>
      <div className={style.div}>
        <input className={style.checkbox} type="checkbox" />
        <span>3 пересадки</span>
      </div>
    </aside>
  );
};
export default SideFilter;
