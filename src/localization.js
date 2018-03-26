import STRINGS from './lang/en';

export default function l(a, b, ...c) {
  if (STRINGS.hasOwnProperty(a) && STRINGS[a].hasOwnProperty(b)) {
    return STRINGS[a][b];
  } else {
    return 'localization entry missing, pls fix';
  }
}