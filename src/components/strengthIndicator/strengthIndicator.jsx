import { Text } from '../text/text';
import styles from './strengthIndicator.module.scss';
import { StrengthMeter } from './strengthMeter';

export const StrengthIndicator = ({ level }) => {
    return (
        <div className={styles.strengthIndicatorContainer}>
            <Text fontWeight="bold" fontColor="grey">STRENGTH</Text>
            <StrengthMeter barsLevel={level} />
        </div>
    )
}