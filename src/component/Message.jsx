import React,{
  useState,
} from 'react';
import {
  message
} from '../constants/Message';
import css from '../css/Message.module.css';

const Message = () => {
  const [isDark, setisDark] = useState(false);

  const Msg = message.map(sentence => {
    const msgStyle = {};
    if (sentence.cat === 'en') {
      msgStyle.fontSize = '40px';
    } else if (sentence.cat === 'ja') {
      msgStyle.fontSize = '30px';
      msgStyle.color = '#ff6262';
    } else if (sentence.cat === 'person') {
      msgStyle.fontSize = '20px';
      msgStyle.fontStyle = 'oblique';
    }

    return (
      // style属性は実は非推奨
      <span style={msgStyle}>
        { sentence.str }
        <br />
      </span>
    )
  });

  const handleOnClick = (event) => {
    event.stopPropagation();
    setisDark(!isDark);
  };

  const buttonLabel = isDark ? 'Change To Light' : 'Change To Dark'; 

  return (
    <div className={isDark ? css.message_wrapper_dark : css.message_wrapper}>
      { Msg }
      <button
        className={css.color_change_button}
        onClick={handleOnClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default Message;