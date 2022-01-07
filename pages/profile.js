import { useState } from 'react';
import { parse } from 'cookie';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import Button from '@/shared/button';
import { notifyService } from '@/services';

const Profile = ({ profile }) => {
  const [userProfile, setUserProfile] = useState({
    gender: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (ev) => {
    setUserProfile((oldState) => ({ ...oldState, [ev.target.name]: ev.target.value }));
  };

  const handleSelectFile = (ev) => {
    const file = ev.target.files[0];
    const pattern = /image-*/;
    if (file && file.type.match(pattern)) {
      const reader = new FileReader();
      handleFileUpload(file);
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = async (file) => {
    const fileData = new FormData();
    fileData.append('file', file, file.name);

    try {
      const { success, message } = await notifyService.create({
        port: 5000,
        endpoint: 'profiles/upload',
        content: fileData,
      });
      if (success) {
        setMessage(message);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { success, message } = await notifyService.create({
        port: 3000,
        endpoint: 'api/profile',
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
            <div className="select__wrapper">
              <select name="gender" onChange={handleChange}>
                <option>ваш пол</option>
                <option value="мужчина">мужчина</option>
                <option value="женщина">женщина</option>
              </select>
            </div>
            <input type="file" name="photo" onChange={handleSelectFile} />
            <input
              type="text"
              name="phone"
              placeholder="ваш номер телефона"
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
