import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import Error from '@/shared/error';
import CustomLink from '@/shared/link';
import { useRecoilState } from 'recoil';
import { baseUsername } from '../../../store';

const UserNavbar = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const [{ username }, setUsername] = useRecoilState(baseUsername);

  const onExit = async () => {
    try {
      await fetch('http://localhost:3000/api/user/logout', { method: 'get' });
      router.push({ pathname: '/' });
      setUsername(() => ({ username: '' }));
    } catch (error) {
      setError(error?.data?.message || error?.data?.errors.message);
    }
  };

  return (
    <>
      <CustomLink pathname="/tales" title="сказки" />
      {error && <Error message={error} />}
      <Button title="выйти" onClick={onExit} />
      <span>{username}</span>
    </>
  );
};

export default UserNavbar;
