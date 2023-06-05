import { ReactElement } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GithubCorners } from 'react-gh-corners';

import Home from '@components/Home';
import MainLayout from '@layout/MainLayout';

const HomePage = () => {
  return (
    <div>
      <Home />

      <GithubCorners href='https://github.com/hunghg255/next-i18next-typesafe' />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
