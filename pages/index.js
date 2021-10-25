import AppHead from '@/layouts/head';
import Welcome from '@/components/welcome';
import Features from '@/components/features';
import About from '@/components/about';
import Services from '@/components/services';
import Teachers from '@/components/teachers';
import Pricing from '@/components/pricing';
import Contacts from '@/components/contacts';
import BaseLayout from '@/layouts/base-layout';
import TopButton from '@/components/shared/top-button';

export default function Home() {
  return (
    <>
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
      <TopButton />
    </>
  );
}
