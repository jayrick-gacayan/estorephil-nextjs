import { ReactNode, forwardRef } from "react";

type AccordionType = {
  children: ReactNode;
  open: boolean;
}

const Accordion = forwardRef(({ children, open }: AccordionType, ref) => {
  return (
    <div className="border border-tertiary-dark">
      {children}
    </div>
  )
})

Accordion.displayName = 'Accordion';
export default Accordion;