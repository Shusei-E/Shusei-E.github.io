---
title: Use tanh instead of exp in sigmoid function
categories:
 - Machine Learning
author_profile: true
---
If the data is large, we encounter overflow in sigmoid function.

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>



<span style="font-size:0.85em; line-height:0%">
$$
f(x) = \dfrac{1}{1 + e^{-ax}}  \ (a>0)
$$
</span>

A simple trick to avoid overflow is to use tanh.

<span style="font-size:0.85em; line-height:0%">
$$
\dfrac{1}{1+e^{-ax}}=\dfrac{1}{2}\dfrac{2e^{\frac{1}{2}ax}}{e^{\frac{1}{2}ax}+e^{-\frac{1}{2}ax}} 
=\dfrac{1}{2}(1+\tanh(\frac{1}{2}ax))
$$
</span>

In your code,
```python
y = 1 / (1 + numpy.exp(-x))
```
will become
```python
y = numpy.tanh(x * 0.5) * 0.5 + 0.5
```

<br>
[Reference 1](https://github.com/pfnet/chainer/pull/1047)  
[Reference 2](http://mathtrain.jp/sigmoid)
