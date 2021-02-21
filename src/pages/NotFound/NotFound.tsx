import { ErrorLayout } from 'components/layouts/ErrorLayout/ErrorLayout';
import React, { FC } from 'react';

export const NotFound: FC = () => {
  return <ErrorLayout message="This page does not exist" />;
};
