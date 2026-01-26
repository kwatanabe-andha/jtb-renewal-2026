export const AREA_TAG_CATEGORY_ID = 9
export const KEYWORD_TAG_CATEGORY_ID = 10
export const STATIC_API_CNT = '3'

export const SITE_URL = {
  home: 'https://www.tourism.jp/',
  login: '/login/',
  signup: '/signup/',
  contact: '/contact/',
}

export const CONTENT_MAP: { [key: string]: { jp: string, en: string, url: string } } = {
  'insights': { jp: 'コラム', en: 'COLUMNS', url: '/insights/' },
  'reports': { jp: '調査・レポート', en: 'Reports', url: '/research-reports/' },
  'expertise': { jp: '専門領域', en: 'Expertise', url: '/expertise/' },
}

export const TOPICS_GROUP_ID: { [key: string]: string } = {
  '9': 'expertise',
  '10': 'research-reports',
  '13': 'insights',
}

export const COLORS = {
  bg: '#f3f3f3',
  white: '#fff',
  black: '#000',
  lightBlack: '#111',
  gray: '#777777',
  yellow: '#FCF068',
  pink: '#FC948D',
  c01: '#294B75',
  c02: '#4591CB',
  c03: '#1F5AA3',
}