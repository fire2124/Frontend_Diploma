import React from "react";
import { SidePanel } from "./SidePanel";

export const Scafolding = React.memo(({ sidePanelContent, sidePanelTitle, children }) => {
    return <><SidePanel title={sidePanelTitle}>
      {sidePanelContent}
    </SidePanel>
      {children}
    </>
  })