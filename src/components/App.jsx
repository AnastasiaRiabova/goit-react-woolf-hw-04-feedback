import React, { useMemo, useState } from 'react';
import { FeedbackOptions } from './Feedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { CustomNotification } from './CustomNotification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = useMemo(
    () => Object.values(feedback).reduce((acc, curr) => acc + curr, 0),
    [feedback]
  );

  const positivePercentage = useMemo(
    () =>
      feedback.good === 0
        ? 0
        : Math.round((feedback.good / totalFeedback) * 100),
    [totalFeedback, feedback.good]
  );

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const feedbackOptions = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <CustomNotification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
