import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'zh-cn',
    fallbackLng: 'zh-cn',
    resources: {
      'zh-cn': {
        translation: {
          "home": "首页",
          "contact": "联系我们",
          "loading": "加载中…",
          "upgrade": "升级会员",
          "vip_center": "会员中心"
        }
      }
    }
  });

export default i18n;