---
title: Perplexity
categories:
 - Natural Language Processing
author_profile: false
sidebar:
  nav: side
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_CHTML">
</script>

Perplexity is commonly used to evaluate language models.

## Definition and Calculation

First, we need to know

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
&\quad {\rm probability}\ p = \frac{1}{\rm choices}, \\
&\Leftrightarrow {\rm choices}\ c = \frac{1}{p}.
\end{align}
$$
</span>

Perplexity is the geometric mean of choices. $$N$$ is the number of data, $$c$$ is the number of choices.

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
\left( \prod_{i=1}^{N} c_i \right)^{\frac{1}{N}} &= \left( \prod_{i=1}^{N} \frac{1}{p_i} \right)^{\frac{1}{N}} \\[10pt]
&= \exp \left( \log \left( \prod_{i=1}^{N} \frac{1}{p_i} \right)^{\frac{1}{N}} \right) \\[10pt]
&= \exp \left( \dfrac{\sum_{i=1}^N -(\log p_i)}{N} \right) \\[10pt]
&= \exp \left( \frac{-{\rm loglik}}{N} \right)
\end{align}
$$
</span>

If perplexity becomes negative, you might need to take into account normalization constants. If you calculate the perplexity right after you initialize the model (randomly fill parameters), perplexity could be greater than the number of unique words in the corpus.

## Explanation
Ideally, we want to know $$p(w)$$, but we need to consider the complete data log-likelihood $$p(w,z)$$. So, we take

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
&\sum_z p(w,z) \approx \frac{1}{S} \sum_{s=1}^S p(w, z(s))
\end{align}
$$
</span>

$$S$$ is the number of simulation after enough number of iterations. $$z(s)$$ is the value of latent variable under $$s^{\rm th}$$ simulation. If we take the mean of perplexity, it could be an approximation of all possible $$z$$.


## Test Perplexity
$$
\begin{align}
p(\mathbf{w}^{\rm Test} | \mathbf{w}^{\rm Train}) = \int p(\mathbf{w}^{\rm Test} | \theta) p(\theta | \mathbf{w}^{\rm Train}) d\theta
\end{align}
$$


This is a weighted average by the trained parameters. In the following example, we consider three topics.

| Topics $$p(z)$$ | $$p(w\|z)$$ | $$p(w,z)$$  |
|----------------|------------|-----------|
| $$p(z=1)=0.5$$ | $$0.05$$   | $$0.025$$ |
| $$p(z=2)=0.2$$ | $$0.03$$   | $$0.006$$ |
| $$p(z=3)=0.1$$ | $$0.01$$   | $$0.001$$ |

We sum up $$p(w,z)$$.
