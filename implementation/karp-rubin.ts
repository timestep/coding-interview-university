export const SearchSubString = (subStr: string, str: string): boolean => {
  if(subStr.length > str.length) return false;

  const _hash = (s: string) => s.split('').reduce((prev, curr) => prev += curr.charCodeAt(0), 0) * 2

  const subStrHash = _hash(subStr);
  const stringArray = str.split('');

  for (let idx = 0; idx < stringArray.length; idx++) {
    const windowArray = stringArray.slice(idx, idx + subStr.length)
    const windowHash = _hash(windowArray.join(''))
    if(subStrHash === windowHash) return true;
  }

  return false;
}