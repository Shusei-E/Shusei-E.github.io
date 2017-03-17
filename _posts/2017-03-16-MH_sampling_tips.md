---
title: Metropolis-Hastings Sampling Tips 
categories:
 - Machine Learning
author_profile: true
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

You may wonder why $$\log f(x) - {\rm exprand}(1)$$ is the same as $$u \sim {\rm Uniform}(0, f(x))$$.

$$
\begin{align}
&\qquad \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) > r\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) > \log r\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) - \log r > 0\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) - {\rm exprand}(1) > 0,
\end{align}
$$
<br><br>
because

$$
\begin{align}
r \sim {\rm Uniform}(0,1)\\
\exp(1) \sim - \log r
\end{align}
$$

You may find ["Non-Uniform Random Variate Generation"](http://www.nrbook.com/devroye/) useful for sampling.
