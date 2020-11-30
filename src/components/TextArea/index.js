import React from 'react';

function TextArea(label, value, name, onChange) {
    return(
        <div>
            <label>
                {label}:
                <textarea
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default TextArea;