import styles from './characterLengthSlider.module.scss';
import { useEffect, useRef } from 'react';
import { Text } from '../text/text';
import { Theme } from '../../styles/themeProperties';

const MAX_SLIDER_RANGE = 32;
const MIN_SLIDER_RANGE = 8;

export const Slider = ({ onChange, value }) => {
    const sliderRef = useRef(null);

    const handleSliderLowerback = (newValue) => {
        const value = (newValue - MIN_SLIDER_RANGE) / (MAX_SLIDER_RANGE - MIN_SLIDER_RANGE) * 100;
        sliderRef.current.style.background = `linear-gradient(to right, ${Theme.colors.neonGreen} 0%,  ${Theme.colors.neonGreen} ${value}%, ${Theme.colors.veryDarkGrey} ${value}%, ${Theme.colors.veryDarkGrey} 100%)`;
    }

    function handleInput(event) {
        onChange?.(event.target.value);
    }


    useEffect(() => {
        handleSliderLowerback(value)
    }, [value])

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.characterLengthContainer}>
                <Text fontWeight='bold'>Character Length</Text>
                <Text fontWeight='bold' size='large' color={Theme.colors.neonGreen}>{value}</Text>
            </div>
            <input
                ref={sliderRef}
                className={styles.slider}
                type="range"
                min={MIN_SLIDER_RANGE}
                max={MAX_SLIDER_RANGE}
                value={value}
                onInput={handleInput}
            />
        </div>
    );
}