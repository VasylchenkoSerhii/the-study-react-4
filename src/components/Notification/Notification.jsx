import React from 'react';
import css from './Notification.module.css'

export default function Notification({message}) {
  return (
    <div className={css.wrapperMessage}>
          <p className={css.message}>{message}</p>
    </div>
  )
}
