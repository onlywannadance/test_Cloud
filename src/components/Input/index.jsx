import React, { useState } from 'react';

import styles from './Input.module.scss'

export const Input = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    
  }


  return (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <input
            type="text"
            placeholder="Type message"
            className={styles.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
      <div className={styles.buttons}>
        <button className={styles.attachBtn}> 
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#201F1E" fill-opacity="0.04"/>
            <path d="M10.8284 16.4853L16.4853 10.8284C17.6568 9.65688 19.5563 9.65688 20.7279 10.8284C21.8995 12 21.8995 13.8995 20.7279 15.0711L14.0104 21.7886C13.4246 22.3744 12.4749 22.3744 11.8891 21.7886C11.3033 21.2028 11.3033 20.2531 11.8891 19.6673L17.8995 13.6569C18.0947 13.4616 18.0947 13.145 17.8995 12.9498C17.7042 12.7545 17.3876 12.7545 17.1924 12.9498L11.182 18.9602C10.2056 19.9365 10.2056 21.5194 11.182 22.4957C12.1583 23.472 13.7412 23.472 14.7175 22.4957L21.435 15.7782C22.9971 14.2161 22.9971 11.6834 21.435 10.1213C19.8729 8.55924 17.3403 8.55924 15.7782 10.1213L10.1213 15.7782C9.92604 15.9735 9.92604 16.29 10.1213 16.4853C10.3166 16.6806 10.6331 16.6806 10.8284 16.4853Z" fill="#605E5C"/>
        </svg>
        </button>
        <button className={styles.sendBtn} onClick={sendMessage}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8164 10.1972L3.28515 11.4525C3.10876 11.4819 2.96149 11.6032 2.89894 11.7707L0.301044 18.7281C0.0523705 19.3676 0.721794 19.9776 1.33546 19.6708L19.3355 10.6708C19.8882 10.3944 19.8882 9.60554 19.3355 9.32915L1.33546 0.32915C0.721794 0.0223186 0.0523705 0.63236 0.301044 1.27181L2.89894 8.2292C2.96149 8.39672 3.10876 8.51809 3.28515 8.54749L10.8164 9.80269C10.9253 9.82085 10.9989 9.9239 10.9808 10.0329C10.9667 10.1171 10.9007 10.1832 10.8164 10.1972Z" fill="#407EC9"/>
            </svg>
        </button>
      </div>
    </div>
  );
};
