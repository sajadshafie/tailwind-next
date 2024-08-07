import { default as NextLink } from "next/link";
import { Props } from "./type";
export default function Link(props: Props) {
  const { children, ...restProps } = props;
  return (
    <NextLink data-testid="link-core" {...restProps}>
      {children}
    </NextLink>
  );
}
