import { useState } from "react";
import './Counter.css'

export function Counter () {

    const [value, setValue] = useState(0);
    const [countAdjustment, setCountAdjustment] = useState(1);

    const countPositive = () => {
        setValue(value+countAdjustment)
    }
    const countNegative = () => {
        setValue(value-countAdjustment)
    }
    const resetCount = () => {
        setValue(0)
    }

    return(
        <>
            <title>Counter App</title>

            
            
            <section className="counter-section">
                <div className="counter-container">
                    
                    <div className="counter-box">
                        <h2>🎯 Counter App</h2>
                        <div className=
                            {
                                `counter-value-counter ${value === 0 ? 'count-zero' : value > 0 ? 'count-positive' : 'count-negative'}`
                                
                            }>
                            {value}
                        </div>
                    </div>
                    <div className="counter-buttons-container">
                        <div className="counter-buttons">
                            <button className='positive' onClick={countPositive}>+{countAdjustment}</button>
                            <button className='negative' onClick={countNegative}>-{countAdjustment}</button>
                        </div>
                        <button className="reset" onClick={resetCount}>Reset</button>
                        <p>Count is 
                            {
                                value === 0 ? ' at zero' : value > 0 ? ' positive' : ' negative'
                            }
                        </p>
                    </div>

                    <div className="counter-adjustment-container">
                        <p>Adjust Step Size</p>
                        <input type="number" name='adjustment' min='1' max='100' placeholder={countAdjustment} onChange={(event) => {
                            setCountAdjustment(Number(event.target.value))
                        }}/>
                        <div className="counter-instructions">
                            <h5>How This Works</h5>
                            <ul>
                                <li>useState hook tracks the count value</li>
                                <li>onClick handlers update the state</li>
                                <li>Conditional CSS classes style based on count</li>
                                <li>Component re-renders when state changes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}