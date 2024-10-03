"use client"
import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleButtonClick = (value: string) => {
        setInput((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
            const evalResult = eval(input);
            setInput(String(evalResult));
        } catch {
        }
    };

    const clearInput = () => {
        setInput('');
    };

    return (
        <div style={{
            padding: '20px',
            maxWidth: '300px',
            margin: 'auto',
            border: '1px solid black', // Пиксельная граница
            borderRadius: '5px', // Закругленные углы (по желанию)
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)', // Легкая тень (по желанию)
        }}>
            <div>
                <input
                    type="text"
                    value={input}
                    readOnly
                    style={{ width: '100%', marginBottom: '10px' }}
                />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C', '/'].map((item) => (
                    <button
                        key={item}
                        onClick={
                            item === '=' ? calculateResult :
                                item === 'C' ? clearInput :
                                    () => handleButtonClick(item)
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
