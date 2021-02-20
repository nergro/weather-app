import React, { FC } from 'react';
import { alphabet } from 'services/alphabet';
import { DataGroup } from 'components/Molecules/DataGroup/DataGroup';
import { GroupedData } from 'services/groupDataAlphabetically';

interface Props {
  title: string;
  data: GroupedData;
  path: string;
  exactPath?: boolean;
}

export const AlphabetizedList: FC<Props> = ({ title, data, path, exactPath }) => {
  return (
    <div className="alphabetizedListContainer">
      <h1>{title}</h1>
      <div className="alphabetizedList">
        {alphabet.map((letter) => (
          <DataGroup key={letter} data={data[letter]} path={path} exactPath={exactPath} />
        ))}
      </div>
    </div>
  );
};
