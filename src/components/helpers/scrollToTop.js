// import React, { useEffect, Fragment } from 'react';
// import { withRouter } from 'react-router-dom';
//
// function ScrollToTop({ history, children }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, [history]);
//
//   return <Fragment>{children}</Fragment>;
// }
//
// export default withRouter(ScrollToTop);
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  console.log('scrolling to top')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;
