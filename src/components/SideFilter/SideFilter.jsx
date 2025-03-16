import style from "./SideFilter.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle_All,
  toggle_All_to_true,
  toggle_All_to_false,
  toggle_NoTransfers,
  toggle_OneTransfer,
  toggle_TwoTransfers,
  toggle_ThreeTransfers,
} from "../../redux/sideFilterSlice";
import { useEffect } from "react";

const SideFilter = () => {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.sideFilter.all);
  const noTransfers = useSelector((state) => state.sideFilter.noTransfers);
  const oneTransfer = useSelector((state) => state.sideFilter.oneTransfer);
  const twoTransfers = useSelector((state) => state.sideFilter.twoTransfers);
  const threeTransfers = useSelector(
    (state) => state.sideFilter.threeTransfers
  );

  useEffect(() => {
    console.log("somthing is changed");
    if (noTransfers && oneTransfer && twoTransfers && threeTransfers) {
      dispatch(toggle_All_to_true());
    } else {
      dispatch(toggle_All_to_false());
    }
  }, [noTransfers, oneTransfer, twoTransfers, threeTransfers]);

  useEffect(() => {
    if (all) {
      dispatch(toggle_All_to_true());
    }
  }, [all]);

  return (
    <div className={style.container}>
      <div className={style.div_header}>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <div className={style.div}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={all}
          onChange={() => {
            dispatch(toggle_All());
          }}
        />
        <span>Bce</span>
      </div>
      <div className={style.div}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={noTransfers}
          onChange={() => dispatch(toggle_NoTransfers())}
        />
        <span>Без пересадок</span>
      </div>
      <div className={style.div}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={oneTransfer}
          onChange={() => dispatch(toggle_OneTransfer())}
        />
        <span>1 пересадка</span>
      </div>
      <div className={style.div}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={twoTransfers}
          onChange={() => dispatch(toggle_TwoTransfers())}
        />
        <span>2 пересадки</span>
      </div>
      <div className={style.div}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={threeTransfers}
          onChange={() => dispatch(toggle_ThreeTransfers())}
        />
        <span>3 пересадки</span>
      </div>
    </div>
  );
};
export default SideFilter;
