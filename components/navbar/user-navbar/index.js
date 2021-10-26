import React from 'react';
import Button from '@/shared/button';
import CustomLink from '@/components/shared/link';

const UserNavbar = ({ username }) => {
  return (
    <>
      <CustomLink pathname={`/tales?username=${username}`} title="сказки" />
      <Button title="выйти" />
      <span>{username}</span>
    </>
  );
};

export default UserNavbar;
