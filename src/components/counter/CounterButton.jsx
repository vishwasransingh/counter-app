import PropTypes from 'prop-types';

export default function CounterButton({by, incrementMethod}) {

    // function incrementCounterFunction() {
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction() {
    //     incrementMethod(-by);
    // }

    return(
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => incrementMethod(by)}>+{by}</button>
                <button className='counterButton' onClick={() => incrementMethod(-by)}>-{by}</button>
            </div>
        </div>
        )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by:1
}