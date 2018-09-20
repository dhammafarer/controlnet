declare type Lang = 'es'| 'en' | 'zh'

declare type setLang = (lang: Lang) => void

declare interface Theme {
  base?: string,
  accent?: string,
  white?: string,
  gray?: string,
  black?: string,
}

declare interface Item {
  to: string
  label: {
    [key: string]: string
    es: string
    en: string
    zh: string
  }
}

declare type Size = 'small' | 'medium' | 'large';
