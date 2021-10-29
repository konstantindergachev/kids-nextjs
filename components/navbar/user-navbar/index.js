import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/button';
import Error from '@/shared/error';
import CustomLink from '@/shared/link';

const UserNavbar = ({ username }) => {
  const [error, setError] = useState('');
  const router = useRouter();

  const onExit = async () => {
    try {
      await fetch('http://localhost:3000/api/user/logout', { method: 'get' });
      router.push({ pathname: '/' });
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
