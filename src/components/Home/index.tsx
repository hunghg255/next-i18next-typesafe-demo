
// import styles from './index.module.scss';

import { useI18n } from 'src/i18n';

function Home() {
  const { t } = useI18n();

  return (
    <>
      <h1 className='text-3xl font-bold underline bg'>{t('home', 'home.title')}</h1>
      <h1 className='text-3xl font-bold underline bg'>{t('home', 'home.desc')}</h1>
      <h1 className='text-3xl font-bold underline bg'>{t('home', 'col.col1')}</h1>
      <h1 className='text-3xl font-bold underline bg'>{t('common', 'header_title')}</h1>
      <div className='flex'>
        <div className='flex-none w-14 h-14'>01</div>
        <div className='flex-initial w-64 ...'>02</div>
        <div className='flex-initial w-32 ...'>03</div>
      </div>
    </>
  );
}

export default Home;
