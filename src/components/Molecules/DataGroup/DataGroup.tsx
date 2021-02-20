import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DataGroup as DataGroupType } from 'services/groupDataAlphabetically';

interface Props {
  data: DataGroupType;
  path: string;
  exactPath?: boolean;
}

export const DataGroup: FC<Props> = ({ data, path, exactPath }) => {
  if (!data || data.children.length === 0) {
    return null;
  }

  return (
    <div className="dataGroup">
      <p className="dataGroupName">{data.group}</p>
      <ul className="dataGroupList">
        {data.children.map((x) => (
          <li key={x} className="dataGroupListItem">
            <Link
              to={{
                pathname: exactPath ? path : `${path}/${x}`,
                state: { item: x },
              }}
            >
              {x}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
