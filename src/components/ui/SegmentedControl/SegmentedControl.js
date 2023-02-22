import classNames from 'classnames';
import styles from './SegmentedControl.module.css';



const SegmentedControl = ({
  options,
  value,
  name,
  label,
  buttonStyle,
  onChange,
  size = 'sm'
}) => {
  const getId = (option) => name + option.value;

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.description}>{label}</span>}
      <div className={styles.optionWrapper}>
        {options.map((option) => {
          const isActive = option.value === value;
          return (
            <button
              key={getId(option)}
              style={buttonStyle}
              className={classNames(
                styles.labelWrapper,
                styles['labelWrapper--' + size],
                {
                  [styles.labelWrapperActive]: isActive
                }
              )}
              onClick={() => !isActive && onChange(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentedControl;
