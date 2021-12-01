/*
Instructions

Given a phrase, count the occurrences of each word in that phrase.

For the purposes of this exercise you can expect that a word will always be one of:

    A number composed of one or more ASCII digits (ie "0" or "1234") OR
    A simple word composed of one or more ASCII letters (ie "a" or "they") OR
    A contraction of two simple words joined by a single apostrophe (ie "it's" or "they're")

When counting words you can assume the following rules:

    The count is case insensitive (ie "You", "you", and "YOU" are 3 uses of the same word)
    The count is unordered; the tests will ignore how words and counts are ordered
    Other than the apostrophe in a contraction all forms of punctuation are ignored
    The words can be separated by any form of whitespace (ie "\t", "\n", " ")

For example, for the phrase "That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled. the count would be:

that's: 1
the: 2
password: 2
123: 1
cried: 1
special: 1
agent: 1
so: 1
i: 1
fled: 1


*/
/*
\w+ gets all the word characters together (an easy way to deal with all the words that aren't contractions)
 ' looks for apostrophes that follow word characters (so eliminates beginning single quotes)
\w+ makes sure the apostrophe has any number of word characters that follow it (so this technically works for
 words like y'all)
? says the stuff in parentheses is optional as not all words are contractions
/g matches the whole string
*/
export const countWords = phrase => phrase
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});

  /*Tests
  import { countWords } from './word-count';

        

          


        

          

describe('countWords', () => {

        

          

  test('count one word', () => {

        

          

    const expectedCounts = { word: 1 };

        

          

    expect(countWords('word')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('count one of each word', () => {

        

          

    const expectedCounts = { one: 1, of: 1, each: 1 };

        

          

    expect(countWords('one of each')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('multiple occurrences of a word', () => {

        

          

    const expectedCounts = {

        

          

      one: 1,

        

          

      fish: 4,

        

          

      two: 1,

        

          

      red: 1,

        

          

      blue: 1,

        

          

    };

        

          

    expect(countWords('one fish two fish red fish blue fish')).toEqual(

        

          

      expectedCounts

        

          

    );

        

          

  });

        

          


        

          

  xtest('handles cramped lists', () => {

        

          

    const expectedCounts = {

        

          

      one: 1,

        

          

      two: 1,

        

          

      three: 1,

        

          

    };

        

          

    expect(countWords('one,two,three')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('handles expanded lists', () => {

        

          

    const expectedCounts = {

        

          

      one: 1,

        

          

      two: 1,

        

          

      three: 1,

        

          

    };

        

          

    expect(countWords('one,\ntwo,\nthree')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('ignore punctuation', () => {

        

          

    const expectedCounts = {

        

          

      car: 1,

        

          

      carpet: 1,

        

          

      as: 1,

        

          

      java: 1,

        

          

      javascript: 1,

        

          

    };

        

          

    expect(countWords('car: carpet as java: javascript!!&@$%^&')).toEqual(

        

          

      expectedCounts

        

          

    );

        

          

  });

        

          


        

          

  xtest('include numbers', () => {

        

          

    const expectedCounts = {

        

          

      testing: 2,

        

          

      1: 1,

        

          

      2: 1,

        

          

    };

        

          

    expect(countWords('testing, 1, 2 testing')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('normalize case', () => {

        

          

    const expectedCounts = {

        

          

      go: 3,

        

          

      stop: 2,

        

          

    };

        

          

    expect(countWords('go Go GO Stop stop')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('with apostrophes', () => {

        

          

    const expectedCounts = {

        

          

      first: 1,

        

          

      "don't": 2,

        

          

      laugh: 1,

        

          

      then: 1,

        

          

      cry: 1,

        

          

    };

        

          

    expect(countWords("First: don't laugh. Then: don't cry.")).toEqual(

        

          

      expectedCounts

        

          

    );

        

          

  });

        

          


        

          

  xtest('with quotations', () => {

        

          

    const expectedCounts = {

        

          

      joe: 1,

        

          

      "can't": 1,

        

          

      tell: 1,

        

          

      between: 1,

        

          

      large: 2,

        

          

      and: 1,

        

          

    };

        

          

    expect(countWords("Joe can't tell between 'large' and large.")).toEqual(

        

          

      expectedCounts

        

          

    );

        

          

  });

        

          


        

          

  xtest('substrings from the beginning', () => {

        

          

    const expectedCounts = {

        

          

      joe: 1,

        

          

      "can't": 1,

        

          

      tell: 1,

        

          

      between: 1,

        

          

      app: 1,

        

          

      apple: 1,

        

          

      and: 1,

        

          

      a: 1,

        

          

    };

        

          

    expect(countWords("Joe can't tell between app, apple and a.")).toEqual(

        

          

      expectedCounts

        

          

    );

        

          

  });

        

          


        

          

  xtest('multiple spaces not detected as a word', () => {

        

          

    const expectedCounts = {

        

          

      multiple: 1,

        

          

      whitespaces: 1,

        

          

    };

        

          

    expect(countWords(' multiple   whitespaces')).toEqual(expectedCounts);

        

          

  });

        

          


        

          

  xtest('alternating word separators not detected as a word', () => {

        

          

    const expectedCounts = {

        

          

      one: 1,

        

          

      two: 1,

        

          

      three: 1,

        

          

    };

        

          

    expect(countWords(",\n,one,\n ,two \n 'three'")).toEqual(expectedCounts);

        

          

  });

        

          

});

        

          
*/