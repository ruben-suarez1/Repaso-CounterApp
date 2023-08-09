import { useState } from 'react';
import PropTypes from 'prop-types'
import './counterApp.css'

// eslint-disable-next-line react/prop-types
const CounterApp = ({ value }) => {

    const [counter, setCount] = useState(value);

    const counterAdd = () => {
        setCount(counter + 1)
    }
    const counterSbt = () => {
        setCount(counter - 1)
    }
    const reset = () => {
        setCount(value)
    }

    return (
        <div className="component">
            <div className="subcomponent">
                <p className="parrafo"> {counter} </p>
                <div className="counter">
                    <button className='buttonCounter' onClick={counterAdd}>
                        + 1
                    </button>
                    <button className='buttonCounter' onClick={counterSbt}>
                        - 1
                    </button>
                </div>
                <div className="counter">
                    <button className='buttonReset' onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    value: 4
}

export default CounterApp