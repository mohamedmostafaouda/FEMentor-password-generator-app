import styles from './paswordDisplay.module.scss';
import { Text } from '../text/text';
import { ReactComponent as CopyIcon } from '../../svg/icon-copy.svg';
import { Theme } from '../../styles/themeProperties';
import { useEffect, useState } from 'react';
import { isEmptyString } from '../../utils';

export const PasswordDisplay = ({ children }) => {
    const [showCopied, setShowCopied] = useState(false);
    const [copyClicked, setCopyClicked] = useState(false);

    useEffect(() => {
        navigator.clipboard.writeText(children).then(() => { }).catch(() => { });
        if (!showCopied) {
            return () => { }
        }

        const showCopyTime = setTimeout(() => {
            setShowCopied(false);
        }, 1200);

        return () => {
            clearTimeout(showCopyTime);
        };
    }, [copyClicked, showCopied, children]);

    return (
        <div onClick={() => { setShowCopied(true); setCopyClicked(!copyClicked) }} className={styles.container}>
            <div className={styles.passwordValueContainer}>
                <Text
                    size='large'
                    fontWeight='bold'
                    color={isEmptyString(children) ? '#54545B' : Theme.colors.almostWhite}>
                    {isEmptyString(children) ? 'P4$5W0rD!' : children}
                </Text>
            </div>

            <div className={styles.copyContainer}>
                {showCopied && <Text size='normal' fontWeight='bold' color={Theme.colors.neonGreen}>COPIED</Text>}
                <CopyIcon />
            </div>
        </div>
    )
}