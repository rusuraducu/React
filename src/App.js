// import React from 'react';
// import './style.css';
// import MainComponent from './MainComponent.js';
// import { MyContextProvider } from './MyAppContext.js';

// export default function App() {
//   return (
//     <div>
//       <MyContextProvider>
//         <MainComponent title="Main Component" />
//       </MyContextProvider>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';


export default function App() {
  const delay = 5;

  
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return show ? (
    <div>show is true, {delay}seconds passed</div>
  ) : (
    <div>show is false, wait {delay}seconds</div>
  );
}
