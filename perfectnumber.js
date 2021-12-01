/*
nstructions

Determine if a number is perfect, abundant, or deficient based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.

The Greek mathematician Nicomachus devised a classification scheme for positive integers, identifying each as belonging uniquely to the categories of perfect, abundant, or deficient based on their aliquot sum. The aliquot sum is defined as the sum of the factors of a number not including the number itself. For example, the aliquot sum of 15 is (1 + 3 + 5) = 9

    Perfect: aliquot sum = number
        6 is a perfect number because (1 + 2 + 3) = 6
        28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
    Abundant: aliquot sum > number
        12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
        24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
    Deficient: aliquot sum < number
        8 is a deficient number because (1 + 2 + 4) = 7
        Prime numbers are deficient

Implement a way to determine whether a given number is perfect. Depending on your language track, you may also need to implement a way to determine whether a given number is abundant or deficient.
*/
export const classify = (number) => {
    let reponse = ""
    let sum = 0;
    if(number <= 0){
      throw new Error("Classification is only possible for natural numbers.");
    } else {
      for(let i = 1;i <= number/2;i++){
           if(number%i === 0){
              sum += i;
            }
      }
      if(sum === number && sum !== 0){
          reponse = "perfect";
      } else if (sum > number){
           reponse = "abundant";
      } else reponse ="deficient"
    }  
    return reponse
  };

  /*
  import { classify } from './perfect-numbers';

        

          


        

          

describe('Exercise - Perfect Numbers', () => {

        

          

  describe('Invalid Inputs', () => {

        

          

    test('Zero is rejected (not a natural number)', () => {

        

          

      expect(() => classify(0)).toThrow(

        

          

        new Error('Classification is only possible for natural numbers.')

        

          

      );

        

          

    });

        

          


        

          

    xtest('Negative integer is rejected (not a natural number)', () => {

        

          

      expect(() => classify(-1)).toThrow(

        

          

        new Error('Classification is only possible for natural numbers.')

        

          

      );

        

          

    });

        

          

  });

        

          


        

          

  describe('Perfect Numbers', () => {

        

          

    xtest('Smallest perfect number is classified correctly', () => {

        

          

      expect(classify(6)).toEqual('perfect');

        

          

    });

        

          


        

          

    xtest('Medium perfect number is classified correctly', () => {

        

          

      expect(classify(28)).toEqual('perfect');

        

          

    });

        

          


        

          

    xtest('Large perfect number is classified correctly', () => {

        

          

      expect(classify(33550336)).toEqual('perfect');

        

          

    });

        

          

  });

        

          


        

          

  describe('Abundant Numbers', () => {

        

          

    xtest('Smallest abundant number is classified correctly', () => {

        

          

      expect(classify(12)).toEqual('abundant');

        

          

    });

        

          


        

          

    xtest('Medium abundant number is classified correctly', () => {

        

          

      expect(classify(30)).toEqual('abundant');

        

          

    });

        

          


        

          

    xtest('Large abundant number is classified correctly', () => {

        

          

      expect(classify(33550335)).toEqual('abundant');

        

          

    });

        

          

  });

        

          


        

          

  describe('Deficient Numbers', () => {

        

          

    xtest('Edge case (no factors other than itself) is classified correctly', () => {

        

          

      expect(classify(1)).toEqual('deficient');

        

          

    });

        

          


        

          

    xtest('Smallest prime deficient number is classified correctly', () => {

        

          

      expect(classify(2)).toEqual('deficient');

        

          

    });

        

          


        

          

    xtest('Smallest non-prime deficient number is classified correctly', () => {

        

          

      expect(classify(4)).toEqual('deficient');

        

          

    });

        

          


        

          

    xtest('Medium deficient number is classified correctly', () => {

        

          

      expect(classify(32)).toEqual('deficient');

        

          

    });

        

          


        

          

    xtest('Large deficient number is classified correctly', () => {

        

          

      expect(classify(33550337)).toEqual('deficient');

        

          

    });

        

          

  });

        

          

});

        

          
*/