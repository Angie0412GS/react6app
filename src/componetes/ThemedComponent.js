import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    conteiner: {
      background: theme === "claro" ? "#fff" : "#000",
      color: theme === "claro" ? "#000" : "#fff",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.3s ease",
    },
    button: {
      background: theme === "claro" ? "#000" : "#fff",
      color: theme === "claro" ? "#fff" : "#000",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "20px",
      transition: "all 0.3s ease",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.conteiner}>
      <p style={styles.title}>El tema actual es: {theme}</p>
      <button style={styles.button} onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
};

export default ThemedComponent;
