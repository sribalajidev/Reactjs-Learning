import { useState } from "react";
import BasicPortal from './components/BasicPortal/BasicPortal';
import ModalPortal from './components/ModalPortal/ModalPortal';
import TooltipPortal from './components/TooltipPortal/TooltipPortal';
import NotificationPortal from './components/NotificationPortal/NotificationPortal';
import AdvancedPortalPOC from './components/AdvancedPortalPOC/AdvancedPortalPOC';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BasicPortal />
      <hr />
      <div style={{ padding: "50px" }}>
        <h2>Portal Modal Example</h2>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h3>Modal Content</h3>
          <p>This modal is rendered outside the root DOM node.</p>
        </ModalPortal>
      </div>
      <hr />
      <div style={{ padding: "50px" }}>
      <h2>Tooltip Portal Example</h2>
        <TooltipPortal text="This is a tooltip rendered via portal">
          Hover over me
        </TooltipPortal>
      </div>
      <hr />
      <div style={{ padding: "50px" }}>
        <NotificationPortal />
      </div>
      <hr />
      <div style={{ padding: "50px" }}>
        <AdvancedPortalPOC />
      </div>
    </>
  )
}

export default App
