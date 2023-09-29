import { Button, Dialog } from "@mui/material";
import DialogHeader from "./components/DialogHeader";
import DialogBody from "./components/DialogBody";
import DialogFooter from "./components/DialogFooter";
import { useIdleSession } from "./hooks/useIdleSession";
import { useRef, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [logoutTime, setLogoutTime] = useState();
  const intervalId = useRef();

  const onExpire = () => {
    setOpen(true);
    setLogoutTime(30);
    intervalId.current = setInterval(() => {
      setLogoutTime((t) => t - 1);
    }, 1000);
    setTimeout(handleLogout, 30 * 1000);
  };

  const handleRenewSession = () => {
    reset();
    setOpen(false);
    clearInterval(intervalId.current);
  };

  const handleLogout = () => {
    setOpen(false);
    window.alert("logout");
  };

  const IDLE_CONFIG = {
    timeout: 5000, // timeout duration in milliseconds
    onExpire // action to be taken when timeout is reached
  };

  const { reset } = useIdleSession(IDLE_CONFIG);

  return (
    <>
      <h1>HELLO WORLD</h1>
      <Dialog open={open}>
        <DialogHeader>
          You&#39;ve been idle for {IDLE_CONFIG.timeout / 1000} seconds
        </DialogHeader>

        <DialogBody>
          You&#39;ve been inactive for a while. To keep your session active,
          please click the button below. You have {logoutTime} seconds left.
        </DialogBody>
        <DialogFooter>
          <Button
            color="primary"
            variant="contained"
            onClick={handleRenewSession}
          >
            Keep Session Active
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default App;
