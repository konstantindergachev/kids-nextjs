import { useState } from 'react';
import { parse } from 'cookie';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import Button from '@/shared/button';

const Profile = ({ profile }) => {
  const [userProfile, setUserProfile] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (ev) => {
    setUserProfile((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { success, message } = await notifyService.create({
        port: 5000,
        endpoint: 'profile',
        content: userProfile,
      });
      if (success) {
        setMessage(message);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  if (profile.hasOwnProperty('error')) {
    return (
      <>
        <AppHead title="Профиль" />
        <BaseLayout>
          <section>
            <Error message={profile.error} />
          </section>
        </BaseLayout>
      </>
    );
  }
  return (
    <>
      <AppHead title="Профиль" />
      <BaseLayout>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstname"
              placeholder="ваше имя"
              value={userProfile.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="ваше фамилия"
              value={userProfile.lastname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="ваш email"
              value={userProfile.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="ваш мобильный"
              value={userProfile.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="ваш адрес"
              value={userProfile.address}
              onChange={handleChange}
            />
            {error && <Error message={error} />}
            {message && <Message message={message} />}
            <Button type="submit" title="отправиль" />
          </form>
        </section>
      </BaseLayout>
    </>
  );
};

export default Profile;

export async function getServerSideProps({ req, res }) {
  const cookies = parse(req.headers.cookie);

  console.log('cookies', cookies); //FIXME: remove me

  if (!cookies.kids) {
    const profile = {};
    profile.error = 'Ошибка';
    return {
      props: { profile },
    };
  }

  return {
    props: { profile: 'test' },
  };
}
