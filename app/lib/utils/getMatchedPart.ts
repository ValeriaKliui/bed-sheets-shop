export default function getMatchedPart(word: string, search: string) {
  const globalRegex = new RegExp(search, "g");

  globalRegex.test(word);

  const matchIndexStart = word.indexOf(search);
  const matchIndexFinish = globalRegex.lastIndex;

  return {
    startWord: word.slice(0, matchIndexStart),
    endWord: word.slice(matchIndexFinish),
    match: search,
  };
}
