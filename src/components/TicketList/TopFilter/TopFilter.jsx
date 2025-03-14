import style from "./TopFilter.module.scss";

const TopFilter = () => {
  return (
    <div className={style.container}>
      <div className={`${style.div_header_left} ${style.div_header}`}>
        <p>САМЫЙ ДЕШЕВЫЙ</p>
      </div>
      <div className={`${style.div_header_center} ${style.div_header}`}>
        <p>САМЫЙ БЫСТРЫЙ</p>
      </div>
      <div className={`${style.div_header_right} ${style.div_header}`}>
        <p>ОПТИМАЛЬНЫЙ</p>
      </div>
    </div>
  );
};
export default TopFilter;
