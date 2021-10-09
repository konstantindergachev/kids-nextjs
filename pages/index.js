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

import styles from '../styles/Home.module.css';

export default function Home(props) {
  console.log('props', props); //FIXME:
  return (
    <div className={styles.container}>
      <AppHead />
      <Header />
      <Welcome />
      <Features />
      <About />
      <Services />
      <Teachers />
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const response = await fetch('http://localhost:5000/tales');
    if (response.ok) {
      const data = await response.json();
      return {
        props: { data },
      };
    }
    return {
      props: {
        error: response,
      },
    };
  } catch (error) {
    console.log('catch error', error); //FIXME:
  }
}
