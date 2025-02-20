import { css } from "@emotion/react";
import styles from "@src/styles/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

const buttonStyle = (primary: boolean) => css`
  background-color: ${primary ? "#0070f3" : "#ff4081"};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${primary ? "#0056b3" : "#d63075"};
  }
`;

export const Button = ({ children, onClick, primary = false }: ButtonProps) => {
  return (
    <button
      css={buttonStyle(primary)}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
