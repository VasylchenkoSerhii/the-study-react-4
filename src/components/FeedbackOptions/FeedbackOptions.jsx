import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({handleClick}) {
  return (
    <div className={css.wrapperBtn}>
          <button className={css.feedbackBtn} type="button" onClick={handleClick}>Good</button>
          <button className={css.feedbackBtn} type="button" onClick={handleClick}>Neutral</button>
          <button className={css.feedbackBtn} type="button" onClick={handleClick}>Bad</button>
    </div>
  )
}
