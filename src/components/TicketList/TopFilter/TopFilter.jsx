import style from "./TopFilter.module.scss";
import React, { useState } from "react";
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

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    if (activeButton === buttonType) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonType);
    }

    if (buttonType === "cheap") {
      dispatch(toggle_Сheap_true());
      dispatch(toggle_Fast_false());
      dispatch(toggle_Optimal_false());
    } else if (buttonType === "fast") {
      dispatch(toggle_Сheap_false());
      dispatch(toggle_Fast_true());
      dispatch(toggle_Optimal_false());
    } else if (buttonType === "optimal") {
      dispatch(toggle_Сheap_false());
      dispatch(toggle_Fast_false());
      dispatch(toggle_Optimal_true());
    }
  };

  return (
    <div className={style.container}>
      <button
        className={`${style.div_header_left} ${style.div_header} ${
          activeButton === "cheap" ? style.active : ""
        }`}
        onClick={() => handleButtonClick("cheap")}
      >
        <p>САМЫЙ ДЕШЕВЫЙ</p>
      </button>
      <button
        className={`${style.div_header_center} ${style.div_header} ${
          activeButton === "fast" ? style.active : ""
        }`}
        onClick={() => handleButtonClick("fast")}
      >
        <p>САМЫЙ БЫСТРЫЙ</p>
      </button>
      <button
        className={`${style.div_header_right} ${style.div_header} ${
          activeButton === "optimal" ? style.active : ""
        }`}
        onClick={() => handleButtonClick("optimal")}
      >
        <p>ОПТИМАЛЬНЫЙ</p>
      </button>
    </div>
  );
};

export default TopFilter;
