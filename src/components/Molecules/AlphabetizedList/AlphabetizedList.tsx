import React, { FC } from 'react';
import { alphabet } from 'services/alphabet';
import { DataGroup } from 'components/Molecules/DataGroup/DataGroup';
import { GroupedData } from 'services/groupDataAlphabetically';

interface Props {
  title: string;
  data: GroupedData;
  path: string;
}

export const AlphabetizedList: FC<Props> = ({ title, data, path }) => {
  return (
    <div className="alphabetizedListContainer">
      <h1>{title}</h1>
      <div className="alphabetizedList">
        {alphabet.map((letter, i) => (
          <DataGroup key={letter + i} data={data[letter]} path={path} />
        ))}
      </div>
    </div>
  );
};
