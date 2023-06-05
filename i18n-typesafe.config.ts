import { defineConfig } from 'next-i18next-typesafe';

export default defineConfig({
  input: 'public/locales/en/**/*.json',
  output: 'src/i18n',
})
