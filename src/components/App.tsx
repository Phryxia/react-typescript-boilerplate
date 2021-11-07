import React from 'react'
import classnames from 'classnames/bind'
import '@src/styles/global.css'
import styles from '@src/styles/test.module.css'

const cx = classnames.bind(styles)

export default function App() {
  return (
    <div className={cx('container')}>
      <h1>TEST</h1>
    </div>
  )
}
