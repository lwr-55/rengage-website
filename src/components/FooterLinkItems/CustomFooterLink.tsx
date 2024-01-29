import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useNavbarMobileSidebar, } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default () => {

  const {siteConfig, siteMetadata} = useDocusaurusContext();
  const mobileSidebar = useNavbarMobileSidebar();
  console.log('useIsBrowser()', useIsBrowser(), mobileSidebar)
  console.log('11111', siteConfig, siteMetadata)

  return (
    <div className="col footer__col footer_logo_box">
      <div className={styles.footer_logo}>
        <img src='/img/logo.svg' />
      </div>
      <div className={clsx('footer__items', styles.footer_logo_des)}>
        Start exploring the exciting features of our application!
      </div>
      <div className={clsx('footer__items', styles.footer_logo_btn)}>
        <button className='button button--primary'>Explore Platform</button>
      </div>
    </div>
  )
}