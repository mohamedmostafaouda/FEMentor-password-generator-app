import { Button } from "./components/button/button";
import { Slider } from "./components/characterLengthSlider/characterLengthSlider";
import Checkbox from "./components/checkBox/checkBox";
import { PasswordDisplay } from "./components/passwordDisplay/passwordDisplay";
import { StrengthIndicator } from "./components/strengthIndicator/strengthIndicator";
import styles from './app.module.scss';
import { useState } from "react";
import { calculatePasswordStrength, generatePassword } from "./utils";

const initialState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
};

function App() {
  const [selectedAttributes, setSelectedAttributes] = useState(initialState);
  const [charCount, setCharCount] = useState(16);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleCheckBoxOnChange = (stateKey) => {
    return (newValue) => {
      setSelectedAttributes({
        ...selectedAttributes,
        [stateKey]: newValue
      })
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <PasswordDisplay>{generatedPassword}</PasswordDisplay>
        <div className={styles.formPropertiesContainer}>
          <Slider onChange={setCharCount} value={charCount} />
          <Checkbox onChange={handleCheckBoxOnChange('uppercase')} label={'Include Uppercase Letters'} />
          <Checkbox onChange={handleCheckBoxOnChange('lowercase')} label={'Include Lowercase Letters'} />
          <Checkbox onChange={handleCheckBoxOnChange('numbers')} label={'Include Numbers'} />
          <Checkbox onChange={handleCheckBoxOnChange('symbols')} label={'Include Symbols'} />
          <StrengthIndicator level={calculatePasswordStrength(selectedAttributes, charCount)} />
          <Button onClick={() => { setGeneratedPassword(generatePassword(selectedAttributes, charCount)) }}>Generate</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
