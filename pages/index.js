import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import AppHead from '@/layouts/head';
import Welcome from '@/components/welcome';
import Features from '@/components/features';
import About from '@/components/about';
import Services from '@/components/services';
import Teachers from '@/components/teachers';
import Pricing from '@/components/pricing';
import Contacts from '@/components/contacts';
import BaseLayout from '@/layouts/base-layout';

import { request } from '../config/axios';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  console.log('props', props); //FIXME:
  return (
    <div className={styles.container}>
      <AppHead title="Главная" />
      <BaseLayout>
        <Welcome />
        <Features />
        <About />
        <Services />
        <Teachers />
        <Pricing />
        <Contacts />
      </BaseLayout>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { tales } = await request({ method: 'get', url: 'http://localhost:5000/tales' });
    return {
      props: { tales },
    };
  } catch (error) {
    console.log('catch error', error); //FIXME:
  }
}
