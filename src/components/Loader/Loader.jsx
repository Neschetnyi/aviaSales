import { Spin } from "antd";
import { useSelector } from "react-redux";
import style from "./Loader.module.scss";
import logo from "../../assets/Logo.png";

const Loader = () => {
  const progress = useSelector((state) => state.tickets.progress);
  const stop = useSelector((state) => state.tickets.stop);

  return (
    <div className={style.container}>
      <img src={logo} />
      {!stop && (
        <div>
          Обработано: {progress} билетов &nbsp;
          <Spin />
        </div>
      )}
      {stop && <h4>Обработано: получены все билеты</h4>}
    </div>
  );
};

export default Loader;
