import PropTypes from 'prop-types';
export const FeedbackOptions = ({options,onLeaveFeedback})=> {
    return (
        <>
        {options.map((el) => {
          return (<button key={el} type="button" onClick={onLeaveFeedback.bind(this,el)}>{el}</button>)
        })}
        </>
    )
}
FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired,
}