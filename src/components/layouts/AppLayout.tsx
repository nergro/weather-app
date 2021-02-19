import { Header } from 'components/Molecules/Header/Header';
import React, { FC } from 'react';

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
};
