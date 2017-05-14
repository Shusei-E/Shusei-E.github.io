---
title: Another view of Sigmoid function 
categories:
 - Machine Learning
author_profile: true
---

Sigmoid function (standard logistic function) is defined as

<span style="font-size:0.9em; line-height:0%">
$$
\begin{align}
\sigma (x) = \frac{1}{1 + e^{-x}}.
\end{align}
$$
</span>

Now, let's show $$ 1- \sigma (x) = \sigma(-x)$$.

<span style="font-size:0.9em; line-height:0%">
$$
\begin{align}
1 - \frac{1}{1 + e^{-x}} &= \frac{1 + e^{-x} - 1}{1 + e^{-x}}\\[10pt]
												 &= \frac{e^{-x} \cdot e^{x}}{(1 + e^{-x})e^{x}}\\[10pt]
												 &= \frac{1}{1 + e^{x}}
\end{align}
$$
</span>

<img src="/assets/images/posts/sigmoid_another_view.png" width="560">

Code for the figure:
```r
sigmoid <- function(x){
	return (1/(1+exp(-x)))
}
x <- as.matrix(seq(-6, 6, 0.01))
y <- apply(x, 2, sigmoid)
plot(x, y, type='l')
abline(v = 0)
lines(x=c(-2, 0), y=c(sigmoid(-2), sigmoid(-2)), lty=2,col=2,lwd=2)
lines(x=c(-2,-2), y=c(0, sigmoid(-2)), lty=2,col=2,lwd=2)
lines(x=c(2, 0), y=c(sigmoid(2), sigmoid(2)), lty=2,col=4,lwd=2)
lines(x=c(2,2), y=c(0, sigmoid(2)), lty=2,col=4,lwd=2)
text(-0.5, sigmoid(2), expression(sigma(2)))
text(1.25, sigmoid(-2), expression(sigma(-2)==1-sigma(2)))
```

Note:

<span style="font-size:0.9em; line-height:0%">
$$
\begin{align}
{\rm logit}(p) &= \log \left( \frac{p}{1-p} \right) = a \\[10pt]
{\rm logit}^{-1}(a) &= \frac{\exp (a)}{\exp (a) + 1} = p
\end{align}
$$
</span>
