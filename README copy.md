# School Of Funk

## What is it?

In this repository you'll find a collection of exercises which improves you to use common array methods. 
The idea and the exercises are coming from Jafar Husain and can be found on this site: http://reactivex.io/learnrx/.
I updated the exercises to run as unit tests and modified the sample data to a more known domain.

Jafar Husain is Netflix's Cross-UI Team Technical Lead. He specializes in building application servers and user
interfaces using functional reactive programming. He's also an active member of TC39, the standards body responsible
for evolving the JavaScript language. He is a highly-rated speaker and authored interactive training software to help
developers learn about functional reactive programming. @jhusain

## What means Funk?

Well, it's just the abbrevation of functional. Why? Functional programming provides developers with the tools to
abstract common collection operations into reusable, composable building blocks. These operations you perform on
collections can be accomplished with five simple functions:

- map
- filter
- flatMap
- reduce `(1)`
- zip `(2)`

(1) The reduce() function used in the original exercises returns always an array, even if the result is a single value.
The native JS version of reduce() returns only an array if the initialValue is an array.

(2) Unfortunately, there is no native zip() function to creates an array of grouped elements arrays. 
We will use zipWith() from lodash which can be found here: https://lodash.com/docs/4.17.15#zipWith. 
So, why is there an exercise? It's just a new approach to think about how to group multiple arrays.

## How to prepare the exercises

1. `yarn`

## How to run the tests

1. `yarn test:watch` => runs all the tests in watch mode

2. `yarn test:select` => runs a single test. Just select a test description and hit F5 to run. Example: test("`this should be selected to run the test`") => {()}
