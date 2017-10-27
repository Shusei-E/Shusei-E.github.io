---
title: Perplexity
categories:
 - Machine Learning
author_profile: true
---

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
