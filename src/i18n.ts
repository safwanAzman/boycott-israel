import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'my'] as const;
const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && locales.includes(requested as (typeof locales)[number])
      ? requested
      : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});