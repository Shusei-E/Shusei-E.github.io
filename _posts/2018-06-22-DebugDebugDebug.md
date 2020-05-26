---
title: Debug, Debug, Debug
categories:
 - Tips
author_profile: false
---

We would like to minimize bugs when we write code. If we encounter errors, we know something is going wrong, but some serious bugs don't stop the code.

## Bug??
* Values go wrong even if you are sure that you implemented the code correctly

## Write a debug function
* Write a debug function and try the code with a tiny data
* Make sure all counters work well
* Debug functions need to test:
  * Each file (class)
  * Entire code (can the program give you a desirable output?)
  * Test codes are important because you will forget what you've done if your project get longer
* Test with both small and large test datasets

## Coding
* Break your function into small parts and make sure each component works fine.
* Introduce a linting tool: [ALE](https://github.com/w0rp/ale) in Vim
* Be careful especially when you copy and paste a part of code

## Write a documentation
* R: [devtools](https://github.com/Shusei-E/Code_Tips/blob/master/R/devtools.md)
* Python: [Sphinx](https://github.com/Shusei-E/Code_Tips/tree/master/Python)
* C++: Doxygen

## Rewrite
Do not hesitate to rewrite the entire code. Rewriting takes shorter time than debugging unorganized code (which could be infinite).

## Case Studies

### Number order and text order
When I read text files, the order was `text_1`, `text_10`, `text_101`, `text_102`. However, in a csv file that stores covariates, the order was `text_1`, `text_2`, `text_3`. There was a mismatch.

### Reduce the number of member variables
* In C++, defining `int` and `double` as member variables slows down the code.
