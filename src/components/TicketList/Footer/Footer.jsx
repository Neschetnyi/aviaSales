import style from "./Footer.module.scss";
import { useDispatch } from "react-redux";
import { add_Five } from "../../../redux/ticketsDataSlice";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={style.footer_button}
      onClick={() => dispatch(add_Five())}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  );
};
export default Footer;
