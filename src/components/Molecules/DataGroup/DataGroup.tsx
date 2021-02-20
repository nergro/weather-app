import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DataGroup as DataGroupType } from 'services/groupDataAlphabetically';

interface Props {
  data: DataGroupType;
  path: string;
}

export const DataGroup: FC<Props> = ({ data, path }) => {
  if (!data || data.children.length === 0) {
    return null;
  }

  return (
    <div className="dataGroup">
      <p className="dataGroupName">{data.group}</p>
      <ul className="dataGroupList">
        {data.children.map((x) => (
          <li key={x} className="dataGroupListItem">
            <Link to={`${path}/${x}`}>{x}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
