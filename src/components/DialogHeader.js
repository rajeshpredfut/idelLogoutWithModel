import React from "react";
import MuiDialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const DialogHeader = ({ children, onClose, ...props }) => {
  return (
    <MuiDialogTitle
      disableTypography
      sx={{
        margin: 0,
        padding: "20px",
        backgroundColor: "primary.main",
        zIndex: "888"
      }}
      {...props}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white"
        }}
      >
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white"
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

DialogHeader.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default DialogHeader;
