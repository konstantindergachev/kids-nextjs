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

export default function Home() {
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
