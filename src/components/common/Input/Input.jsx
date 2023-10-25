import React from 'react';
import { tema } from "../../../style/theme"
import { StyleInput } from "../Input/input.styles";

const Input = ({ placeholder, hasError, isValid, required, name, type, value, onChange }) => {
    const variantes = {
        error: `2px solid ${tema.red400}`,
        valid: `2px solid ${tema.green400}`,
    };

    return (
        <StyleInput
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
        border: isValid ? variantes.valid : hasError ? variantes.error : "",
        }}
        required={required}
        placeholder={placeholder}
        
        />
    );
};

export default Input