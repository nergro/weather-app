export interface StoreError {
  type: 'StoreError';
  message: string;
  code?: number;
}

export const newStoreError = (message: string, code: number): StoreError => ({
  type: 'StoreError',
  message,
  code,
});

export const isStoreError = (error: unknown): error is StoreError =>
  typeof error === 'object' && error !== null && (error as StoreError).type === 'StoreError';
