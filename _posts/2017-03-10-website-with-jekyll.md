---
title: Create a website with Jekyll
categories:
 - Tips
author_profile: false
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
Jekyll and Github Pages are great tools to create a website. I used [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) template.

## Features

### Japanese
日本語でも書くことができる

### Equations
Write equations in LaTex Style. You need to add
```md
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```
or, this may faster
```md
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```
For example,
```latex
$$
\newcommand{\bx}{\mathbf{x}}
\newcommand{\btheta}{\boldsymbol{\theta}}
\newcommand{\bmu}{\boldsymbol{\mu}}
\newcommand{\bmu}{\boldsymbol{\mu}}
\newcommand{\balpha}{\boldsymbol{\alpha}}
\newcommand{\bz}{\mathbf{z}}
\begin{align}
  &\quad\quad p(\bx, \btheta, \bz, \bmu | \balpha, \mu_P, \sigma^2_P, \sigma^2)\\
  &= p(\bx | \bz, \bmu, \sigma^2) p(\btheta, \bz, \bmu | \balpha, \mu_P, \sigma^2_P, \sigma^2)\\
  &= p(\bx | \bz, \bmu, \sigma^2) p(\bz|\btheta)p(\btheta|\balpha)p(\bmu|\mu_P, \sigma^2_P)\\[3pt]
  &= \prod_{i=1}^{D} \left\{ p(x_i | \mu_{z_i}, \sigma^2) p(z_i|\btheta) \right\} \cdot p(\btheta|\balpha) \cdot \prod_{k=1}^{K} p(\mu_k | \mu_P, \sigma_P^2)
\end{align}
$$
```
becomes <br>
$$
\newcommand{\bx}{\mathbf{x}}
\newcommand{\btheta}{\boldsymbol{\theta}}
\newcommand{\bmu}{\boldsymbol{\mu}}
\newcommand{\bmu}{\boldsymbol{\mu}}
\newcommand{\balpha}{\boldsymbol{\alpha}}
\newcommand{\bz}{\mathbf{z}}
\begin{align}
  &\quad\quad p(\bx, \btheta, \bz, \bmu | \balpha, \mu_P, \sigma^2_P, \sigma^2)\\
  &= p(\bx | \bz, \bmu, \sigma^2) p(\btheta, \bz, \bmu | \balpha, \mu_P, \sigma^2_P, \sigma^2)\\
  &= p(\bx | \bz, \bmu, \sigma^2) p(\bz|\btheta)p(\btheta|\balpha)p(\bmu|\mu_P, \sigma^2_P)\\[3pt]
  &= \prod_{i=1}^{D} \left\{ p(x_i | \mu_{z_i}, \sigma^2) p(z_i|\btheta) \right\} \cdot p(\btheta|\balpha) \cdot \prod_{k=1}^{K} p(\mu_k | \mu_P, \sigma_P^2)
\end{align}
$$

## How-To
Check [this note](https://github.com/Shusei-E/Code_Tips/blob/master/Website/README.md).
