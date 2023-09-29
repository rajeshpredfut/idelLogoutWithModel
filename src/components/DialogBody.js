import React from "react";
import MuiDialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";

const DialogBody = ({ children, ...props }) => {
  return (
    <MuiDialogContent {...props} sx={{ px: 5, py: 4 }}>
      {children}
    </MuiDialogContent>
  );
};

DialogBody.propTypes = {
  children: PropTypes.node
};

export default DialogBody;
