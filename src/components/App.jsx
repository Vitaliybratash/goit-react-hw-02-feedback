import { Component } from 'react';
import { FeedbackOptions } from './Counter/FeedbackOptions';
import { Section } from './Counter/Section';
import { Statistics } from './Counter/Statistics';
import { Notification } from './Counter/Notification'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = el => {
    this.setState({ [el]: this.state[el] + 1 });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
