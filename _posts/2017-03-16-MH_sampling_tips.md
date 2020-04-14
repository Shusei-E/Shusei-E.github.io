---
title: Metropolis-Hastings Sampling Tips 
categories:
 - Machine Learning
author_profile: false
---
You may wonder why $$\log f(x) - {\rm exprand}(1)$$ is the same as $$u \sim {\rm Uniform}(0, f(x))$$.

<span style="font-size:0.8em; line-height:0%">
$$
\begin{align}
&\qquad \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) > r\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) > \log r\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) - \log r > 0\\
& \Leftrightarrow \log \min \left( 1, \frac{p(x|\theta^{'})}{p(x|\theta)} \right) + {\rm exprand}(1) > 0,
\end{align}
$$
</span>
<br><br>
because

<span style="font-size:0.8em; line-height:0%">
$$
\begin{align}
r &\sim {\rm Uniform}(0,1)\\
\exp(1) &= - \log r
\end{align}
$$
</span>

<img src="/assets/images/posts/rexp10000.png" width="450">
<img src="/assets/images/posts/logrunif10000.png" width="450">

**Added on 13/May/2017:**<br>
$$u \sim {\rm Uniform}(0, f(x))$$ is the same as

<span style="font-size:0.9em; line-height:0%">
$$
\begin{align}
u &= r f(x)\\
r &\sim {\rm Uniform}(0,1)
\end{align}
$$
</span>

Hence,

<span style="font-size:0.9em; line-height:0%">
$$
\begin{align}
u &= r f(x)\\
\Longleftrightarrow &\quad \\
\log u &= \log r + \log f(x)\\
	&= \log ({\rm randunif}(0,1)) + \log f(x)\\
	&= - {\rm exprand}(\ ) + \log f(x)
\end{align}
$$
</span>


You may find ["Non-Uniform Random Variate Generation"](http://www.nrbook.com/devroye/) useful for sampling.
