
import { useTranslation } from "next-i18next";
import { TFlatten } from "next-i18next-typesafe";

import { ICommon } from "./common";
import { IHome } from "./home";

type TNamespace = 'common' | 'home';

type TObj = {
  common: keyof TFlatten<ICommon>;
	home: keyof TFlatten<IHome>;
};

type TKey<T extends TNamespace> = TObj[T];

export const useI18n = () => {
  const { t: i18n } = useTranslation();

  function t<T1 extends TNamespace, T2 extends TKey<T1>>(ns: T1, key: T2) {
    return i18n(`${ns}:${key}`);
  }

  return { t };
}
