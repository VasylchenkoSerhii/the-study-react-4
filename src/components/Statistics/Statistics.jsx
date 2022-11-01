import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <div className={css.wrapperVote}>
          <span className={css.vote}>
              Good: <span className={css.voteAccent}>{good}</span>
          </span>
          <span className={css.vote}>
              Neutral: <span className={css.voteAccent}>{neutral}</span>
          </span>
          <span className={css.vote}
          >Bad: <span className={css.voteAccent}>{bad}</span>
          </span>
          <span className={css.vote}>
              Total: <span className={css.voteAccent}>{total}</span>
          </span>
          <span className={css.vote}>
              Positive feedback: <span className={css.voteAccent}>{positivePercentage} %</span>
          </span>
    </div>
  )
}
