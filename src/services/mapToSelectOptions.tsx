import { SelectOption } from 'types/SelectOption';

export const mapToSelectOptions = (items: string[]): SelectOption[] =>
  items.map((x) => ({ value: x, label: x }));
