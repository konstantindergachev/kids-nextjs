import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import Error from '@/shared/error';
import CustomLink from '@/shared/link';
import { useRecoilState } from 'recoil';
import { baseUsername } from '../../../store';
import { request } from '../../../config/axios';

const UserNavbar = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const [{ username }, setUsername] = useRecoilState(baseUsername);

  const onExit = async () => {
    try {
      await request({
        method: 'get',
        url: 'http://localhost:3000/api/user/logout',
      });
      router.push({ pathname: '/' });
      setUsername(() => ({ username: '' }));
    } catch (error) {
      setError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <>
      <CustomLink pathname="/tales" title="сказки" />
      <CustomLink pathname="/profile" title="профиль" />
      {error && <Error message={error} />}
      <Button title="выйти" onClick={onExit} />
      <span>{username}</span>
    </>
  );
};

export default UserNavbar;
