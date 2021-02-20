import React, { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div className="spinner__dots">
        <div className="spinner__dots--big">
          <div className="spinner__dots--small"></div>
        </div>
      </div>
    </div>
  );
};
