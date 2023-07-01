import styles from './button.module.scss';
import { Text } from '../text/text';
import { ReactComponent as ArrowRightIcon } from '../../svg/icon-arrow-right.svg';

export const Button = ({ onClick, children }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <Text fontWeight='bold' size='medium'>{children}</Text>
            <ArrowRightIcon />
        </button>
    )
}