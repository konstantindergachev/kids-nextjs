import React from 'react';
import Button from '@/shared/button';

const UserNavbar = ({ username }) => {
  return (
    <>
      <Button title="выйти" />
      <span>{username}</span>
    </>
  );
};

export default UserNavbar;
