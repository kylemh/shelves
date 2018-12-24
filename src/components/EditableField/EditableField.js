import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';
import { ReactComponent as IconPencil } from '../../images/FontAwesomeIcons/pencil.svg';
import { ReactComponent as IconCheck } from '../../images/FontAwesomeIcons/check.svg';
import { ReactComponent as IconX } from '../../images/FontAwesomeIcons/x.svg';
import styles from './EditableField.module.scss';

export default class EditableField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    initialValue: PropTypes.string.isRequired,
    setValueCallback: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    setValueCallback: () => {},
    tag: 'span',
  };

  state = {
    isEditing: false,
    value: this.props.initialValue,
    valueCopy: this.props.initialValue,
  };

  setEditing = () => {
    const { value } = this.state;

    this.setState({ isEditing: true, valueCopy: value });
  };

  cancelEdit = () => {
    const { valueCopy } = this.state;

    this.setState({ isEditing: false, value: valueCopy });
  };

  saveEdit = () => {
    const { setValueCallback } = this.props;
    const { value } = this.state;

    this.setState({ isEditing: false, valueCopy: value }, () => setValueCallback(value));
  };

  onChange = event => {
    const { target } = event;
    this.setState({ value: target.value });
  };

  render() {
    const { className, tag: Tag } = this.props;
    const { isEditing, value } = this.state;

    return (
      <div className={classNames(styles.EditableField, className)}>
        {isEditing ? (
          <>
            <input value={value} onChange={this.onChange} className={styles.input} />

            <Button className={styles.button} onClick={this.saveEdit} type="submit">
              <ScreenReaderOnly>Save</ScreenReaderOnly>
              <IconCheck className={styles.icon} />
            </Button>

            <Button className={styles.button} onClick={this.cancelEdit} theme="secondary">
              <ScreenReaderOnly>Cancel</ScreenReaderOnly>
              <IconX className={styles.icon} />
            </Button>
          </>
        ) : (
          <>
            <Tag className={styles.value}>{value}</Tag>

            <Button className={styles.button} onClick={this.setEditing}>
              <ScreenReaderOnly>Edit</ScreenReaderOnly>
              <IconPencil className={styles.icon} />
            </Button>
          </>
        )}
      </div>
    );
  }
}
