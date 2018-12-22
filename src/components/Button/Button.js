import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    theme: PropTypes.oneOf(['primary', 'secondary']),
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
  };

  static defaultProps = {
    className: undefined,
    disabled: false,
    fullWidth: false,
    onClick: undefined,
    tabIndex: 0,
    theme: 'primary',
    type: 'button',
  };

  render() {
    const {
      children,
      className,
      disabled,
      fullWidth,
      onClick,
      tabIndex,
      theme,
      type,
    } = this.props;

    return (
      <button
        className={classNames(styles.Button, className, styles[theme], {
          [styles.fullWidth]: fullWidth,
        })}
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabIndex}
        type={type}
      >
        {children}
      </button>
    );
  }
}

export default Button;
