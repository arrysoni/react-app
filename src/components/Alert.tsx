import { ReactNode } from "react";

interface Props {
  children: ReactNode; // This allows for the child of any type!!!
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
