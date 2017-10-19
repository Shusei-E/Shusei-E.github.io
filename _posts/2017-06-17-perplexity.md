---
title: Perplexity
categories:
 - Machine Learning
author_profile: true
---

Perplexity is commonly used to evaluate language models.

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

If perplexity becomes negative, you might need to take into account normalization constants.
