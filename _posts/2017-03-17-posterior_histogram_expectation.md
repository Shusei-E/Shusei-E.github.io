---
title: Why can we consider expectation in Gibbs Sampling
categories:
 - Machine Learning
author_profile: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

Suppose we are doing Gaussian Mixture (1D). The histogram of posterior distribution is (we choose a new $$z_i$$ from this histogram),

<span style="font-size:0.8em; line-height:0%">
$$
\newcommand{\balpha}{\boldsymbol{\alpha}}
\newcommand{\bz}{\mathbf{z}}
\newcommand{\cN}{\mathcal{N}}
\newcommand{\bx}{\mathbf{x}}
\newcommand{\btheta}{\boldsymbol{\theta}}
\begin{align}
&\qquad \int p(x_i | z_i=k, \mu_k, \sigma^2) p(\mu_k | \bx^{\backslash i}, \bz^{\backslash i}, \mu_P, \sigma^2_P, \sigma^2) d\mu_k \int p(z_i =k|\btheta) p(\btheta | \bz^{\backslash i},\balpha) d\btheta \\
&= \cN(x_i | \mu_{\rm New}, \sigma^2) \cdot \frac{n_k^{\backslash i} + \alpha_k}{\sum_{k=1}^{K} n_k^{\backslash i} + \alpha_k}
\end{align}
$$
</span>

Each integral shows posterior predictive distribution of $$x_i$$ and $$z_i$$, respectively. We can consider the expectation of $$\mu_k$$ for the first term instead of calculating everything. $$\mu_k$$ can take various values, but it follows Normal distribution. Enough amount of data makes the posterior distribution of $$\mu_k$$ sharp. The expectation can be a good approximation.

<span style="font-size:0.8em; line-height:0%">
$$
\newcommand{\balpha}{\boldsymbol{\alpha}}
\newcommand{\bz}{\mathbf{z}}
\newcommand{\cN}{\mathcal{N}}
\newcommand{\bx}{\mathbf{x}}
\newcommand{\btheta}{\boldsymbol{\theta}}
\begin{align}
  &\qquad p(x_i | z_i=k, {\mu_k}, \sigma^2) \int  p(\mu_k | \bx^{\backslash i}, \bz^{\backslash i}, \mu_P, \sigma^2_P, \sigma^2) d\mu_k\\
  &= p(x_i | z_i=k, \overline{\mu_k}, \sigma^2)
\end{align}
$$
</span>


Code can be found [here](https://github.com/Shusei-E/Code_Tips/tree/master/Algorithm/MCMC/Gibbs_Sampling/GMM1D).
