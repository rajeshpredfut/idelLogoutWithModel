import { useEffect, useCallback, useRef } from "react";

/**
 * https://stackoverflow.com/questions/75140966/issue-with-idle-time-using-reactjs-and-javascript
 */

const isLoggedIn = true;

export const useIdleSession = ({ timeout, onExpire }) => {
  const timerId = useRef();

  //function to handle user activity
  const handleUserActivity = useCallback(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(onExpire, timeout);
  }, [onExpire, timeout]);

  useEffect(() => {
    if (isLoggedIn) {
      // Listen for user activity
      document.addEventListener("mousemove", handleUserActivity, {
        passive: true
      });
      document.addEventListener("mousedown", handleUserActivity);
      document.addEventListener("keydown", handleUserActivity);
      document.addEventListener("touchstart", handleUserActivity);

      handleUserActivity();

      return () => {
        document.removeEventListener("mousemove", handleUserActivity, {
          passive: true
        });
        document.removeEventListener("mousedown", handleUserActivity);
        document.removeEventListener("keydown", handleUserActivity);
        document.removeEventListener("touchstart", handleUserActivity);
      };
    }
  }, [handleUserActivity]);

  useEffect(() => {
    return () => {
      clearTimeout(timerId.current);
    };
  }, []);

  return { reset: handleUserActivity };
};
