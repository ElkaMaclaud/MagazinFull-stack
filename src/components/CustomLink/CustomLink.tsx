import React, { FC, ReactNode, useState, useEffect } from "react";
import { Link, useMatch, PathMatch } from "react-router-dom";
import classes from "./style/CustomLink.module.css";

const style = (isActive: PathMatch<string> | null) => {
  return isActive ? classes["btnActive"] : classes["button"];
};

const CustomLink: FC<{ children: ReactNode; activeChildren?: ReactNode; to: string;  props?: any }> = ({
  children,
  activeChildren,
  to,
  ...props
}) => {
  const match = useMatch(to);
  const [child, setChild] = useState<ReactNode>(children);
  useEffect(() => {
    if (activeChildren) {
      match ? setChild(activeChildren) : setChild(children)
    }
  }, [match, activeChildren, children])
  if (match) {
    return (
      <Link to={to} className={style(match)} {...props}>
        {child}
      </Link>
    );
  }
  return (
    <Link to={to} className={style(match)} {...props}>
      {child}
    </Link>
  );
};

export default CustomLink;
