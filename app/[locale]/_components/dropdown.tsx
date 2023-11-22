import { ComponentProps, ForwardedRef, forwardRef, memo } from "react";

const Dropdown = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  (props: ComponentProps<'div'>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} {...props}>{props.children}</div>
    )
  }
);

Dropdown.displayName = 'Dropdown';

export default memo(Dropdown);