import React from "react";
import styles from './checkBox.module.scss';
import { Text } from "../text/text";

function Checkbox({ label, checked, onChange }) {
    return (
        <label className={styles.checkboxContainer}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    onChange(e.target.checked)
                }}
            />
            <Text size="medium" fontWeight="bold">{label}</Text>
        </label>
    );
}

export default Checkbox;