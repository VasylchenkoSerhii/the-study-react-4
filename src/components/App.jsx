import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);

  const  onLeaveFeedback = e => {
    switch (e.target.innerText) {
      case "Good":
        setGood(prev => prev + 1);
        break;
      case "Neutral":
        setNeutral(prev => prev + 1);
        break;
      case "Bad":
        setbad(prev => prev + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    if (!total) {
            return 0;
        };
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <FeedbackOptions handleClick={onLeaveFeedback} />
      {totalFeedback ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        /> : <Notification message="There is no feedback" />}
    </div>
  );
};





// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  // onLeaveFeedback = propertyName => {
  //   this.setState(prevState => {
  //     const value = prevState[propertyName];
  //     return {
  //       [propertyName]: value + 1
  //     };
  //   });
  // };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback()
//     if (!total) {
//             return 0;
//         };
//     const result = (good / total) * 100;
//     return Number(result.toFixed(2));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <Box p={4}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback
//             ? <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={totalFeedback}
//                 positivePercentage={positivePercentage}
//               /> 
//             : <Notification message="There is no feedback" />}
//         </Section>
//       </Box>
//     );
//   }
// };
