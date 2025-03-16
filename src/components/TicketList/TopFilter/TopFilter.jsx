import style from "./TopFilter.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {
  toggle_Сheap_true,
  toggle_Сheap_false,
  toggle_Fast_true,
  toggle_Fast_false,
  toggle_Optimal_true,
  toggle_Optimal_false,
} from "../../../redux/topFilterSlice";

const TopFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <button
        className={`${style.div_header_left} ${style.div_header}`}
        onClick={() => {
          dispatch(toggle_Сheap_true());
          dispatch(toggle_Fast_false());
          dispatch(toggle_Optimal_false());
        }}
      >
        <p>САМЫЙ ДЕШЕВЫЙ</p>
      </button>
      <button
        className={`${style.div_header_center} ${style.div_header}`}
        onClick={() => {
          dispatch(toggle_Сheap_false());
          dispatch(toggle_Fast_true());
          dispatch(toggle_Optimal_false());
        }}
      >
        <p>САМЫЙ БЫСТРЫЙ</p>
      </button>
      <button
        className={`${style.div_header_right} ${style.div_header}`}
        onClick={() => {
          dispatch(toggle_Сheap_false());
          dispatch(toggle_Fast_false());
          dispatch(toggle_Optimal_true());
        }}
      >
        <p>ОПТИМАЛЬНЫЙ</p>
      </button>
    </div>
  );
};
export default TopFilter;
