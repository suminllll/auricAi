import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  // 1. 쿠키에서 언어 설정 확인
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  // 2. 쿠키가 없으면 브라우저 언어 감지
  if (!locale) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      // accept-language 헤더에서 첫 번째 언어 추출
      const browserLang = acceptLanguage.split(',')[0].split('-')[0];
      locale = browserLang === 'ko' ? 'ko' : 'en';
    } else {
      locale = 'en'; // 기본값
    }
  }

  // 3. 지원하지 않는 언어면 영어로 설정
  if (!['en', 'ko'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
