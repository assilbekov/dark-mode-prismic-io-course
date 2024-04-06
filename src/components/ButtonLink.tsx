import Link, { LinkProps } from "next/link";

interface ButtonLinkProps extends LinkProps {
  className: string;
  children: React.ReactNode;
}

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link className={props.className} href={props.className}>
      ButtonLink
    </Link>
  );
}
