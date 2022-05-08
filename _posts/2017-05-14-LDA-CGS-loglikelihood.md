---
title: Log Likelihood of LDA in CGS
categories:
 - Natural Language Processing
author_profile: false
sidebar:
  nav: side
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_CHTML">
</script>

Log likelihood of Latent Dirichlet in Collapsed Gibbs Sampling.

We want to calculate

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
p(\mathbf{w} | \boldsymbol{\alpha}, \boldsymbol{\beta}) = \sum_{\mathbf{z}} \int  \underbrace{p(w_{d,i} | \boldsymbol{\phi})}_{\phi_{k,v}} p(\boldsymbol{\phi} | \boldsymbol{\beta}) d \boldsymbol{\phi} \int  \underbrace{p(z_{d,i} | \boldsymbol{\theta})}_{\theta_{d,k}} p(\theta_{d,k} | \boldsymbol{\alpha}) d \boldsymbol{\theta}.
\end{align}
$$
</span>

Recall (49) and (50) in [Minka, T. (2000). Estimating a Dirichlet distribution](https://tminka.github.io/papers/dirichlet/minka-dirichlet.pdf). $$\boldsymbol{\alpha}$$ is a Dirichlet parameter and $$\mathbf{p}$$ is drawn. Then a $$\mathbf{x}$$ is drawn from a multinomial with probability vector $$\mathbf{p}$$. $$n_k$$ is the number of times the outcome is $$k$$.

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
p(\mathbf{x} | \boldsymbol{\alpha}) &= \int_{\mathbf{p}} p(\mathbf{x} | \mathbf{p} ) p(\mathbf{p} | \boldsymbol{\alpha}) d\mathbf{p} \\[10pt]
&= \frac{\Gamma(\sum_k \alpha_k) }{\Gamma(\sum_k n_k + \alpha_k)} \prod_k \frac{\Gamma(n_k + \alpha_k)}{\Gamma(\alpha_k)} \\[12pt]
n_k &= \sum_j \delta(x_j = k)
\end{align}
$$
</span>

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
p(\mathbf{w} | \boldsymbol{\alpha}, \boldsymbol{\beta}) &= \prod_k \left[ \frac{\Gamma(\sum_v \beta_v) }{\Gamma(\sum_v n_{k,v} + \beta_v)} \prod_v \frac{\Gamma(n_{k,v} + \beta_v)}{\Gamma(\beta_v)} \right] \\[10pt] 
&\qquad \times \prod_d \left[ \frac{\Gamma(\sum_k \alpha_k) }{\Gamma(\sum_k n_{d,k} + \alpha_k)} \prod_k \frac{\Gamma(n_{d,k} + \alpha_k)}{\Gamma(\alpha_k)} \right]
\end{align}
$$
</span>

Now we take log so that we get log likelihood.

Code for C++:
```cpp
double llik(DATA_STRUCT *data, Parameters *parameters){
  int V = parameters -> V; // number of unique words
  int M = parameters -> M; // number of documents

  double polyaw = 0.0;
  for(int k=0; k<K; k++){
    double nw = parameters -> Nkv.row(k).sum();
    polyaw += lgamma(V*beta) - lgamma(V*beta + nw);

    for(int v=0; v<V; v++){
      polyaw += lgamma( (parameters -> Nkv(k,v)) + beta) - lgamma(beta);
    }
  }

  double polyad = 0.0;
  for(int d=0; d<M; d++){
    double nd = parameters -> Ndk.row(d).sum();
    polyad += lgamma( K*alpha ) - lgamma(K*alpha + nd);

    for(int k=0; k<K; k++){
      polyad += lgamma( (parameters -> Ndk(d,k)) + alpha ) - lgamma(alpha);
    }
  }

  double llik = polyad + polyaw;
  return llik;
}
```

We need to use Polya distribution, because in LDA model,

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
p(z_1, z_2, \cdots, z_N | \alpha) \neq \prod_{n=1}^N p(z_n | \alpha)
\end{align}
$$
</span>

More specifically if we observe two or more $$z$$, they are not independent each other.

<span style="font-size:1.0em; line-height:0%">
$$
\begin{align}
p(z_1, z_2 | \alpha) = p(z_2 | z_1, \alpha) p(z_1 | \alpha)
\end{align}
$$
</span>

In language, if we observe a certain topic (or a word) in a document, it is likely that we observe the same topic (word) again in the document (Polya's Urn).
