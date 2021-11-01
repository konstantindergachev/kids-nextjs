import { atom, selector } from 'recoil';

export const baseUsername = atom({
  key: 'baseUsername',
  default: { username: '' },
});

export const selectUsername = selector({
  key: 'selectUsername',
  get: ({ get }) => {
    const { username } = get(baseUsername);
    return username;
  },
});
