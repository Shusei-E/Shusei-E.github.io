---
title: Softmax without Overflow 
categories:
 - Deep Learning
author_profile: false
---
Overflow problems are common in neural network-like structures.

<span style="font-size:0.85em; line-height:0%">
$$
S = \dfrac{e^{x - K}}{\sum_i e^{x - K}} 
$$
</span>

The result is inveriant even if we add/subtract constant $$K$$, because softmax function uses the sum of $$e$$ to normalize the result. We need to choose $$K$$. In the example below, $$K = \max (x)$$ is used, but any number should be fine.

```python
def softmax(x):
  exp_x = np.exp(x)
  return exp_x/np.sum(exp_x, axis=1, keepdims=True)
```
will become
```python
def softmax(x):
    e = np.exp(x - np.max(x))
    if e.ndim == 1:
        return e / np.sum(e, axis=0)
    else: # dim = 2
        return e / np.sum(e, axis=1, keepdims=True)
```
You may need to use this `e = np.exp(x - np.max(x, axis=1)[:, np.newaxis])`.

<br>
[Reference 1](http://rodresearch.blogspot.jp/2011/08/avoiding-overflow-problem-in-softmax.html)
