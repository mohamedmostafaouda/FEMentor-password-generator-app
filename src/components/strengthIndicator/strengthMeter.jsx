import { Theme } from "../../styles/themeProperties";
import styles from './strengthIndicator.module.scss';
import { Text } from "../text/text";
export const StrengthMeter = ({ barsLevel }) => {
    let fillColor;
    let numberOfFilledBars = 0;
    let textDisplayed = barsLevel;
    const fillArray = Array(4).fill("transparent");

    switch (barsLevel) {
        case 3:
            fillColor = Theme.colors.neonGreen;
            numberOfFilledBars = 4;
            textDisplayed = 'Strong'
            break;
        case 2:
            fillColor = Theme.colors.yellow;
            numberOfFilledBars = 3;
            textDisplayed = 'Medium'
            break;
        case 1:
            fillColor = Theme.colors.orange;
            numberOfFilledBars = 2;
            textDisplayed = 'Weak'
            break;
        case 0:
            fillColor = Theme.colors.red;
            numberOfFilledBars = 1;
            textDisplayed = 'Too Weak!'
            break;
        default:
            fillColor = Theme.colors.red;
            numberOfFilledBars = 1;
            textDisplayed = 'Too Weak!'
            break;
    }


    fillArray.splice(0, numberOfFilledBars, ...Array(numberOfFilledBars).fill(fillColor));

    return (
        <div className={styles.barContainer}>
            <Text>{textDisplayed}</Text>
            {fillArray.map((fillColor, index) => {
                return (
                    <div
                        key={index}
                        className={styles.bar}
                        style={{
                            background: fillColor,
                            borderColor: fillColor === 'transparent' ? Theme.colors.almostWhite : fillColor
                        }}
                    >
                    </div>
                )
            })}
        </div>
    )
}