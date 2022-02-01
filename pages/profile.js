import { useState } from 'react';
import { parse } from 'cookie';
import BaseLayout from '@/layouts/base-layout';
import AppHead from '@/layouts/head';
import Error from '@/shared/error';
import Message from '@/components/shared/message';
import Button from '@/shared/button';
import Card from '@/shared/card';
import Image from 'next/image';
import { notifyService } from '@/services';

import { request } from '../config/axios';
import { api } from '@/constants';

import styles from './Profile.module.css';

const Profile = ({ profile }) => {
  const [userProfile, setUserProfile] = useState({
    firstname: '',
    lastname: '',
    email: '',
    id: '',
    gender: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [profileStatus, setProfileStatus] = useState(null);

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
        endpoint: `${process.env.NEXT_PUBLIC_API_URL}/profiles/upload`,
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
        endpoint: 'api/profile',
        content: { userProfile, profileStatus },
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

  const handleOpen = (profile) => () => {
    setIsOpen(!isOpen);
    setProfileStatus(!!profile.profile);
    setUserProfile({
      id: profile.profile?.id,
      gender: profile.profile?.gender,
      phone: profile.profile?.phone,
      address: profile.profile?.address,
      firstname: profile.firstname,
      lastname: profile.lastname,
      email: profile.email,
    });
  };

  const renderProfileForm = (profile) => {
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        {profile.profile && (
          <>
            <input
              type="text"
              name="firstname"
              placeholder="ваше новое имя"
              value={userProfile.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="ваша новая фамилия"
              value={userProfile.lastname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="ваш новый емайл"
              value={userProfile.email}
              onChange={handleChange}
            />
          </>
        )}
        <div className="select__wrapper">
          <select name="gender" onChange={handleChange}>
            {!userProfile.gender ? (
              <>
                <option>ваш пол</option>
                <option value="мужчина">мужчина</option>
                <option value="женщина">женщина</option>
              </>
            ) : (
              <option value={userProfile.gender}>{userProfile.gender}</option>
            )}
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
        <Button type="submit" title="отправить" />
      </form>
    );
  };

  return (
    <>
      <AppHead title="Профиль" />
      <BaseLayout>
        <section className={styles.section}>
          {isOpen && renderProfileForm(profile)}
          <Card classname={styles.background}>
            <h3 className={styles.title}>{profile.firstname}</h3>
            <h3 className={styles.title}>{profile.lastname}</h3>
            <h3 className={styles.title}>{profile.email}</h3>
            {profile.profile && (
              <>
                <h3 className={styles.title}>{profile.profile.gender}</h3>
                {profile.profile?.photo_url && (
                  <Image
                    src={profile.profile.photo_url}
                    alt={`${profile.firstname} ${profile.lastname}`}
                    className={styles.image}
                    width={250}
                    height={250}
                  />
                )}
                <h3 className={styles.title}>{profile.profile.phone}</h3>
                <h3 className={styles.title}>{profile.profile.address}</h3>
              </>
            )}
          </Card>

          <Button
            title={!profile.profile ? 'создать профиль' : 'редактировать профиль'}
            onClick={handleOpen(profile)}
          />
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
  try {
    const { user } = await request({
      method: 'get',
      url: `${api.url}/profiles`,
      headers: { Authorization: `Bearer ${cookies.kids}` },
    });

    return {
      props: { profile: user },
    };
  } catch (error) {
    const profile = {};
    profile.error = error.message;
    return {
      props: { profile },
    };
  }
}
