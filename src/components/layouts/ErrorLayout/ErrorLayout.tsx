import React, { FC } from 'react';

interface Props {
  message?: string;
}

export const ErrorLayout: FC<Props> = ({ message }) => {
  return (
    <div className="App">
      <h1 className="ErrorTitle">{message || 'Sorry! Something went wrong...'}</h1>
    </div>
  );
};
