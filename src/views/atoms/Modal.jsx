import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
    return createPortal(<>{children}</>, document.body);
};