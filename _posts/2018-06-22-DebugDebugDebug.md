---
title: Debug, Debug, Debug
categories:
 - Tips
author_profile: true
---

We would like to minimize bugs when we write code. If we encounter errors, we know something is going wrong, but some serious bugs don't stop the code.

## Bug??
* Values go wrong even if you are sure that you implemented the code correctly

## Write a debug function
* Write a debug function and try the code with a tiny data
* Make sure all counters work well

## Coding
* Break your function into small parts and make sure each component works fine.
* Introduce a linting tool: [ALE](https://github.com/w0rp/ale) in Vim

## Write a documentation
* R: [devtools](https://github.com/Shusei-E/Code_Tips/blob/master/R/devtools.md)
* Python: [Sphinx](https://github.com/Shusei-E/Code_Tips/tree/master/Python)
* C++: Doxygen
