/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Button.module.css";

import { ButtonPropType } from "../../../types/components/button";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonPropType
> = (props) => {
  const {
    children,
    variant = "default",
    disableShadow = false,
    disabled = false,
    size = "md",
    color = "default",
    className,
    startIcon,
    endIcon,
  } = props;
  console.log("variant: ", variant);
  console.log("disabled: ", disabled);
  console.log("props: ", { ...props });

  const hocus = (variant: string, color: string) => {
    let selectedClass: string = "";
    if (variant === "default") {
      switch (color) {
        case "default":
          selectedClass = `${styles["bg-def"]} ${
            disabled ? "" : styles["hocus-def"]
          }`;
          break;
        case "primary":
          selectedClass = `text-white ${styles["bg-primary"]} ${
            disabled ? "" : styles["hocus-primary"]
          }`;
          break;
        case "secondary":
          selectedClass = `text-white ${styles["bg-secondary"]} ${
            disabled ? "" : styles["hocus-secondary"]
          }`;
          break;
        case "danger":
          selectedClass = `text-white ${styles["bg-danger"]} ${
            disabled ? "" : styles["hocus-danger"]
          }`;
          break;
        default:
          break;
      }
    } else if (variant === "outline") {
      switch (color) {
        case "default":
          selectedClass = `${styles["text-def"]} ${styles["border-def"]} ${
            disabled ? "" : styles["hocus-o-def"]
          }`;
          break;
        case "primary":
          selectedClass = `${styles["text-primary"]} ${
            styles["border-primary"]
          } ${disabled ? "" : styles["hocus-o-primary"]}`;
          break;
        case "secondary":
          selectedClass = `${styles["text-secondary"]} ${
            styles["border-secondary"]
          } ${disabled ? "" : styles["hocus-o-secondary"]}`;
          break;
        case "danger":
          selectedClass = `${styles["text-danger"]} ${
            styles["border-danger"]
          } ${disabled ? "" : styles["hocus-o-danger"]}`;
          break;
        default:
          break;
      }
    } else if (variant === "text") {
      switch (color) {
        case "default":
          selectedClass = `${styles["text-def"]} ${
            disabled ? "" : styles["hocus-t-def"]
          }`;
          break;
        case "primary":
          selectedClass = `${styles["text-primary"]} ${
            disabled ? "" : styles["hocus-t-primary"]
          }`;
          break;
        case "secondary":
          selectedClass = `${styles["text-secondary"]} ${
            disabled ? "" : styles["hocus-t-secondary"]
          }`;
          break;
        case "danger":
          selectedClass = `${styles["text-danger"]} ${
            disabled ? "" : styles["hocus-t-danger"]
          }`;
          break;
        default:
          break;
      }
    }
    return selectedClass;
  };

  const btnClass = `${
    variant === "text"
      ? styles.text
      : variant === "outline"
      ? styles.outline
      : styles.def
  } ${
    size === "sm"
      ? styles["size-sm"]
      : size === "lg"
      ? styles["size-lg"]
      : styles["size-md"]
  } ${
    disableShadow || variant !== "default" ? "" : styles["btn-shadow"]
  } ${hocus(variant, color)}`;

  // return (
  //   <>
  //     <button
  //       className={`${btnClass} ${className} flex items-center gap-2`}
  //       disabled={disabled}
  //       onClick={() => console.log("clicked")}
  //     >
  //       {startIcon && <span className="material-icons">{startIcon}</span>}
  //       {children}
  //       {endIcon && <span className="material-icons">{endIcon}</span>}
  //     </button>
  //   </>
  // );
  return React.createElement(
    "button",
    {
      ...props,
      className: `${btnClass} ${className} flex items-center gap-2`,
      disabled: disabled,
      onClick: () => console.log("clicked"),
    },
    startIcon && <span className="material-icons">{startIcon}</span>,
    children,
    endIcon && <span className="material-icons">{endIcon}</span>
  );
};

export default Button;
