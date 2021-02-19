export interface DataGroup {
  group: string;
  children: string[];
}

export type GroupedData = Record<string, DataGroup>;

export const groupDataAlphabetically = (data: string[]): GroupedData =>
  data.reduce((acc: GroupedData, value) => {
    const group = value[0];

    if (!acc[group]) {
      acc[group] = { group, children: [value] };
    } else {
      acc[group].children.push(value);
    }
    return acc;
  }, {});
