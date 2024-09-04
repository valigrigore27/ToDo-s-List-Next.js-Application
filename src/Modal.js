import React from "react";
import AppStyles from "@styles/App.module.css";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#f5deb3",
  padding: "10px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .4)",
  zIndex: 1000,
};
export default function Modal({ open, children, onClose, onSubmit }) {
  if (!open) return null;
  else
    return (
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          {children}
          <div>
            <button className={AppStyles["button-submit"]} onClick={onSubmit}>
              Submit
            </button>
          </div>
          <button className={AppStyles["button-exit"]} onClick={onClose}>
            Exit
          </button>
        </div>
      </>
    );
}
