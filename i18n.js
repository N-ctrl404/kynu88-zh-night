import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      loading: '加载中...',
      selectRegion: '选择地区',
      // 可根据需要添加更多中文翻译
    }
  },
  vi: {
    translation: {
      loading: 'Đang tải...',
      selectRegion: 'Chọn khu vực',
      // 可根据需要添加更多越南语翻译
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认中文
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;