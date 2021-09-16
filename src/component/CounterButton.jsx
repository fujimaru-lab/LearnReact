import React from 'react';
import css from '../css/CounterButton.module.css';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.stopPropagation();
    const { count, setCount } = this.props;
    setCount(count + 1);
  }

  render() {
    const { base, count } = this.props;

    return (
      <button
        onClick={this.handleOnClick}
      >
        <span className={css.button_text}>
          {`Base Number: ${base}`}
        </span>
        <br />
        <span className={css.button_text}>
          {`Click Count: ${count}`}
        </span>
      </button>
    );
  }
}

export default CounterButton;
