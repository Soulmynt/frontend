import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = ({ isChecked, onCheckChange, labelComponent }) => {
    const handleCheckChange = (e) => {
        onCheckChange(e.target.checked);
    };

    return (
        <div className={styles.checkboxContainer}>
            <label className={styles.customCheckbox}>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={(e) => onCheckChange(e.target.checked)}
                    className={styles.hiddenCheckbox}
                />
                <span className={isChecked ? styles.checked : styles.unchecked}></span>
            </label>
            {labelComponent}
        </div>
    );
};

export default Checkbox;

