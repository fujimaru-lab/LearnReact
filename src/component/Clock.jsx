import React, {
  useState,
  useEffect,
} from 'react';
import css from '../css/Clock.module.css';

const Clock = () => {
  const [date, setdate] = useState(new Date());
  const [isLT, setisLT] = useState(true);

  const handleOnClick = (event) => {
    event.stopPropagation();
    setisLT(!isLT);
  };

  const buttonLabel = isLT ? 'Change To UTC' : 'Change To LT';

  useEffect(() => {
    setInterval(() => {
      setdate(new Date());
    }, 1000);
  });

  const timeString = (date) => {
    if (isLT) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      return `LT: ${day}/${month}/${year}T${hour}:${min}:${sec}`
    } else {
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;
      const day = date.getUTCDate();
      const hour = date.getUTCHours();
      const min = date.getUTCMinutes();
      const sec = date.getUTCSeconds();
      return `UTC: ${day}/${month}/${year}T${hour}:${min}:${sec}`
    }
  };

  return (
    <div className={css.clock_wrapper}>
      <span>{timeString(date)}</span>
      <br />
      <button
        className={css.change_button}
        onClick={handleOnClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Clock;