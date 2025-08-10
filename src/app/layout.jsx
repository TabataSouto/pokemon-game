import React from "react";
import PropTypes from "prop-types";
import ApiProvider from "@/context/ApiProvider";
import GameProvider from "@/context/GameProvider";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body>
        <ApiProvider>
          <GameProvider>
            {children}
          </GameProvider>
        </ApiProvider>
      </body>
    </html>
  );
}

export default RootLayout;

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
