import React from "react";
import MuiDialogActions from "@mui/material/DialogActions";
import PropTypes from "prop-types";

const DialogFooter = ({ children, ...props }) => {
  return (
    <MuiDialogActions sx={{ m: 0, p: 2 }} {...props}>
      {children}
    </MuiDialogActions>
  );
};

DialogFooter.propTypes = {
  children: PropTypes.node
};

export default DialogFooter;
