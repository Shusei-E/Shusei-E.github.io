---
title: Faster Log Gamma Calculation
categories:
 - Machine Learning
author_profile: false
classes: wide
---

We sometimes encounter the calculation of 

<span style="font-size:1.0em; line-height:0%">
$$
\newcommand{\Ga}{\Gamma}
\begin{align}
\log \frac{\Ga (\alpha + n)}{\Ga (\alpha)}.
\end{align}
$$
</span>

If $$n$$ is small, there is a faster calculation. We use the property of Gamma function, $$\Gamma(x+1) = x \Gamma (x)$$.

<span style="font-size:1.0em; line-height:0%">
$$
\newcommand{\Ga}{\Gamma}
\begin{align}
&\quad \log \frac{\Ga (\alpha + n)}{\Ga (\alpha)} \\
&= \log \frac{(\alpha + n - 1) \Ga (\alpha + n - 1)}{\Ga (\alpha)} \\
&= \log \frac{(\alpha + n -1) (\alpha + n -2) \Ga (\alpha + n -2) }{\Ga (\alpha)} \\
&= \log \frac{(\alpha + n -1) (\alpha + n -2) \cdots (\alpha) \Ga (\alpha)}{\Ga (\alpha)} \\
&= \log (\alpha + n -1) (\alpha + n -2) \cdots (\alpha)\\
&= \log \prod_{m=1}^{n} (\alpha + n - m)
\end{align}
$$
</span>


Example code in Cython:
```py
cdef extern from "math.h":
   double log (double x)
   double lgamma (double x)

cdef double gammaln_sum(np.ndarray[ftype_t, ndim=1] array1,
                        np.ndarray[ftype_t, ndim=1] array2):
    # (special.gammaln( alpha_s + n_s_temp ) - special.gammaln( alpha_s )).sum()
    cdef double value = 0.0
    cdef int i
    cdef int n = array1.shape[0] # length of array
    cdef int m

    for i in range(n):
        if array2[i] < 18:
            # low frequency words
            for m in range(int(array2[i])):
                value += log(array1[i] + m)
        else:
            value += lgamma(array1[i]) - lgamma(array2[i])

    return value
```

In C++:
```cpp
double CstmCpp::calc_loglik_doc_second_term(int &doc_id, int &word_id, SparseVector<int> &n_k_doc){
  // compute_second_term_of_log_probability_document
  
  double alpha_k = calc_alpha_word_given_doc(doc_id, word_id);
  int n_k_w = n_k_doc.coeffRef(word_id); // get_word_count_in_doc()

  if(n_k_w > 18){
    return lgamma(alpha_k + n_k_w) - lgamma(alpha_k);
  }else{
    double temp = 0.0;
    for(int i=0; i<n_k_w; i++){
      temp += log(alpha_k + i); 
    }
    return temp;
  }
}
```

