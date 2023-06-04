import React from "react";

const AccordionContext = React.createContext<null | { expanded: boolean, disabled: boolean, toggle: (e: any) => void, disableGutters: boolean }>(null);

export default AccordionContext;