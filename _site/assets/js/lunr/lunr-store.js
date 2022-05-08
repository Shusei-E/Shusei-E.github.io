var store = [{
        "title": "Setting Environment (MacOS)",
        "excerpt":"       On This Page     1. Homebrew           R           2. Manual Install           XCode       RStudio       Python           3. Tex           Install Ghostscript       Download MacTex       Install       Update TexLive       Set Japanse Fonts           4. Set TexShop           Update           5. pip   6. R Packages           RStan           7. Chrome Extension        1. Homebrew  R     brew upgrade xxx   2. Manual Install  XCode     From AppStore   RStudio     From website   Python     $ brew install pyenv   Update bash_profile:  vi ~/.bash_profile  In bash_profile,  export PYENV_ROOT=\"/usr/local/var/pyenv\" export PYENV_VIRTUALENV_DISABLE_PROMPT=1 if which pyenv &gt; /dev/null; then eval \"$(pyenv init -)\"; fi if which pyenv-virtualenv-init &gt; /dev/null; then eval \"$(pyenv virtualenv-init -)\"; fi  Do not forget to source ~/.bash_profile after editing!!   Then, you can install python:     $ pyenv install 3.5.2   If error occures, try xcode-select --install and install again   $ brew install pyenv-virtualenv   Usage of pyenv-virtualenv            It’s easier to use virtualenv than pyenv to use multiuple versions of Python       Make a new environment: $ pyenv virtualenv 3.5.2 NAME       Activate the environment: $ pyenv activate NAME or source activate NAME       Deactivate the environment: $ pyenv deactivate       Delete the environment:　$ pyenv uninstall NAME       List Current Environments: $ pyenv versions           3. Tex  Reference   Install Ghostscript  brew install ghostscript   Download MacTex  https://tug.org/mactex/mactex-download.html   Install  Do not forget to select custom install and clear the checkbox for Ghostscript   Update TexLive  sudo tlmgr update --self --all   If there is an error, relaunch Terminal.   Set Japanse Fonts  Enter the following commands line by line.  cd /usr/local/texlive/2016/texmf-dist/scripts/cjk-gs-integrate sudo perl cjk-gs-integrate.pl --link-texmf --force sudo mktexlsr sudo kanji-config-updmap-sys hiragino-elcapitan-pron   4. Set TexShop     Update Software   TexShop » Preferences » Source » Set Default Values » pTeX (ptex2pdf)   Update  sudo tlmgr update --self --all   5. pip  pip install jupyter pandas matplotlib beautifulsoup4   6. R Packages  RStan     install.packages('rstan', dependencies=T)   7. Chrome Extension  Change Tab Size   ","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/setmac/",
        "teaser":null},{
        "title": "Create a website with Jekyll",
        "excerpt":"  Jekyll and Github Pages are great tools to create a website. I used minimal-mistakes template.   Features   Japanese  日本語でも書くことができる   Equations  Write equations in LaTex Style. You need to add  &lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML\" type=\"text/javascript\"&gt;&lt;/script&gt;  or, this may faster  &lt;script type=\"text/javascript\" async   src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML\"&gt; &lt;/script&gt;  For example,  $$ \\newcommand{\\bx}{\\mathbf{x}} \\newcommand{\\btheta}{\\boldsymbol{\\theta}} \\newcommand{\\bmu}{\\boldsymbol{\\mu}} \\newcommand{\\bmu}{\\boldsymbol{\\mu}} \\newcommand{\\balpha}{\\boldsymbol{\\alpha}} \\newcommand{\\bz}{\\mathbf{z}} \\begin{align}   &amp;\\quad\\quad p(\\bx, \\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\   &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\   &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\bz|\\btheta)p(\\btheta|\\balpha)p(\\bmu|\\mu_P, \\sigma^2_P)\\\\[3pt]   &amp;= \\prod_{i=1}^{D} \\left\\{ p(x_i | \\mu_{z_i}, \\sigma^2) p(z_i|\\btheta) \\right\\} \\cdot p(\\btheta|\\balpha) \\cdot \\prod_{k=1}^{K} p(\\mu_k | \\mu_P, \\sigma_P^2) \\end{align} $$  becomes   \\(\\newcommand{\\bx}{\\mathbf{x}} \\newcommand{\\btheta}{\\boldsymbol{\\theta}} \\newcommand{\\bmu}{\\boldsymbol{\\mu}} \\newcommand{\\bmu}{\\boldsymbol{\\mu}} \\newcommand{\\balpha}{\\boldsymbol{\\alpha}} \\newcommand{\\bz}{\\mathbf{z}} \\begin{align}   &amp;\\quad\\quad p(\\bx, \\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\   &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\   &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\bz|\\btheta)p(\\btheta|\\balpha)p(\\bmu|\\mu_P, \\sigma^2_P)\\\\[3pt]   &amp;= \\prod_{i=1}^{D} \\left\\{ p(x_i | \\mu_{z_i}, \\sigma^2) p(z_i|\\btheta) \\right\\} \\cdot p(\\btheta|\\balpha) \\cdot \\prod_{k=1}^{K} p(\\mu_k | \\mu_P, \\sigma_P^2) \\end{align}\\)   How-To  Check this note.  ","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/website-with-jekyll/",
        "teaser":null},{
        "title": "Variational Bayes Derivation of Latent Dirichlet Allocation",
        "excerpt":"This is not a smoothed LDA. The model is Beli, Ng, and Jordan (2003) Figure 1.  You can find another useful derivation note.    ","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/lda-variational-bayes/",
        "teaser":null},{
        "title": "Metropolis-Hastings Sampling Tips",
        "excerpt":"  You may wonder why \\(\\log f(x) - {\\rm exprand}(1)\\) is the same as \\(u \\sim {\\rm Uniform}(0, f(x))\\).    \\(\\begin{align} &amp;\\qquad \\min \\left( 1, \\frac{p(x|\\theta^{'})}{p(x|\\theta)} \\right) &gt; r\\\\ &amp; \\Leftrightarrow \\log \\min \\left( 1, \\frac{p(x|\\theta^{'})}{p(x|\\theta)} \\right) &gt; \\log r\\\\ &amp; \\Leftrightarrow \\log \\min \\left( 1, \\frac{p(x|\\theta^{'})}{p(x|\\theta)} \\right) - \\log r &gt; 0\\\\ &amp; \\Leftrightarrow \\log \\min \\left( 1, \\frac{p(x|\\theta^{'})}{p(x|\\theta)} \\right) + {\\rm exprand}(1) &gt; 0, \\end{align}\\)     because    \\(\\begin{align} r &amp;\\sim {\\rm Uniform}(0,1)\\\\ \\exp(1) &amp;= - \\log r \\end{align}\\)        Added on 13/May/2017:  \\(u \\sim {\\rm Uniform}(0, f(x))\\) is the same as    \\(\\begin{align} u &amp;= r f(x)\\\\ r &amp;\\sim {\\rm Uniform}(0,1) \\end{align}\\)    Hence,    \\(\\begin{align} u &amp;= r f(x)\\\\ \\Longleftrightarrow &amp;\\quad \\\\ \\log u &amp;= \\log r + \\log f(x)\\\\ \t&amp;= \\log ({\\rm randunif}(0,1)) + \\log f(x)\\\\ \t&amp;= - {\\rm exprand}(\\ ) + \\log f(x) \\end{align}\\)    You may find “Non-Uniform Random Variate Generation” useful for sampling.  ","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/MH_sampling_tips/",
        "teaser":null},{
        "title": "Why can we consider expectation in Gibbs Sampling",
        "excerpt":"  Suppose we are doing Gaussian Mixture (1D). The histogram of posterior distribution is (we choose a new \\(z_i\\) from this histogram),    \\(\\newcommand{\\balpha}{\\boldsymbol{\\alpha}} \\newcommand{\\bz}{\\mathbf{z}} \\newcommand{\\cN}{\\mathcal{N}} \\newcommand{\\bx}{\\mathbf{x}} \\newcommand{\\btheta}{\\boldsymbol{\\theta}} \\begin{align} &amp;\\qquad \\int p(x_i | z_i=k, \\mu_k, \\sigma^2) p(\\mu_k | \\bx^{\\backslash i}, \\bz^{\\backslash i}, \\mu_P, \\sigma^2_P, \\sigma^2) d\\mu_k \\int p(z_i =k|\\btheta) p(\\btheta | \\bz^{\\backslash i},\\balpha) d\\btheta \\\\ &amp;= \\cN(x_i | \\mu_{\\rm New}, \\sigma^2) \\cdot \\frac{n_k^{\\backslash i} + \\alpha_k}{\\sum_{k=1}^{K} n_k^{\\backslash i} + \\alpha_k} \\end{align}\\)    Each integral shows posterior predictive distribution of \\(x_i\\) and \\(z_i\\), respectively. We can consider the expectation of \\(\\mu_k\\) for the first term instead of calculating everything. \\(\\mu_k\\) can take various values, but it follows Normal distribution. Enough amount of data makes the posterior distribution of \\(\\mu_k\\) sharp. The expectation can be a good approximation.    \\(\\newcommand{\\balpha}{\\boldsymbol{\\alpha}} \\newcommand{\\bz}{\\mathbf{z}} \\newcommand{\\cN}{\\mathcal{N}} \\newcommand{\\bx}{\\mathbf{x}} \\newcommand{\\btheta}{\\boldsymbol{\\theta}} \\begin{align}   &amp;\\qquad p(x_i | z_i=k, {\\mu_k}, \\sigma^2) \\int  p(\\mu_k | \\bx^{\\backslash i}, \\bz^{\\backslash i}, \\mu_P, \\sigma^2_P, \\sigma^2) d\\mu_k\\\\   &amp;= p(x_i | z_i=k, \\overline{\\mu_k}, \\sigma^2) \\end{align}\\)    Code can be found here.  ","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/posterior_histogram_expectation/",
        "teaser":null},{
        "title": "Use tanh instead of exp in sigmoid function",
        "excerpt":"  If the data is large, we encounter overflow in sigmoid function.    \\(f(x) = \\dfrac{1}{1 + e^{-ax}}  \\ (a&gt;0)\\)    A simple trick to avoid overflow is to use tanh.    \\(\\dfrac{1}{1+e^{-ax}}=\\dfrac{1}{2}\\dfrac{2e^{\\frac{1}{2}ax}}{e^{\\frac{1}{2}ax}+e^{-\\frac{1}{2}ax}}  =\\dfrac{1}{2}(1+\\tanh(\\frac{1}{2}ax))\\)    In your code,  y = 1 / (1 + numpy.exp(-x))  will become  y = numpy.tanh(x * 0.5) * 0.5 + 0.5     Reference 1  Reference 2  ","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/sigmoid_tanh/",
        "teaser":null},{
        "title": "Softmax without Overflow",
        "excerpt":"  Overflow problems are common in neural network-like structures.    \\(S = \\dfrac{e^{x - K}}{\\sum_i e^{x - K}}\\)    The result is inveriant even if we add/subtract constant \\(K\\), because softmax function uses the sum of \\(e\\) to normalize the result. We need to choose \\(K\\). In the example below, \\(K = \\max (x)\\) is used, but any number should be fine.   def softmax(x):   exp_x = np.exp(x)   return exp_x/np.sum(exp_x, axis=1, keepdims=True)  will become  def softmax(x):     e = np.exp(x - np.max(x))     if e.ndim == 1:         return e / np.sum(e, axis=0)     else: # dim = 2         return e / np.sum(e, axis=1, keepdims=True)  You may need to use this e = np.exp(x - np.max(x, axis=1)[:, np.newaxis]).     Reference 1  ","categories": ["Deep Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/deep%20learning/softmax_without_overflow/",
        "teaser":null},{
        "title": "Another view of Sigmoid function",
        "excerpt":"  Sigmoid function (standard logistic function) is defined as    \\(\\begin{align} \\sigma (x) = \\frac{1}{1 + e^{-x}}. \\end{align}\\)    Now, let’s show \\(1- \\sigma (x) = \\sigma(-x)\\).    \\(\\begin{align} 1 - \\frac{1}{1 + e^{-x}} &amp;= \\frac{1 + e^{-x} - 1}{1 + e^{-x}}\\\\[10pt] \t\t\t\t\t\t\t\t\t\t\t\t &amp;= \\frac{e^{-x} \\cdot e^{x}}{(1 + e^{-x})e^{x}}\\\\[10pt] \t\t\t\t\t\t\t\t\t\t\t\t &amp;= \\frac{1}{1 + e^{x}} \\end{align}\\)       Code for the figure:  sigmoid &lt;- function(x){ \treturn (1/(1+exp(-x))) } x &lt;- as.matrix(seq(-6, 6, 0.01)) y &lt;- apply(x, 2, sigmoid) plot(x, y, type='l') abline(v = 0) lines(x=c(-2, 0), y=c(sigmoid(-2), sigmoid(-2)), lty=2,col=2,lwd=2) lines(x=c(-2,-2), y=c(0, sigmoid(-2)), lty=2,col=2,lwd=2) lines(x=c(2, 0), y=c(sigmoid(2), sigmoid(2)), lty=2,col=4,lwd=2) lines(x=c(2,2), y=c(0, sigmoid(2)), lty=2,col=4,lwd=2) text(-0.5, sigmoid(2), expression(sigma(2))) text(1.25, sigmoid(-2), expression(sigma(-2)==1-sigma(2)))   Note:    \\(\\begin{align} {\\rm logit}(p) &amp;= \\log \\left( \\frac{p}{1-p} \\right) = a \\\\[10pt] {\\rm logit}^{-1}(a) &amp;= \\frac{\\exp (a)}{\\exp (a) + 1} = \\frac{e^a \\cdot e^{-a}}{(e^a + 1) \\cdot e^{-a}} = \\frac{1}{1 + e^{-a}} = p \\end{align}\\)   ","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/another-view-of-sigmoid/",
        "teaser":null},{
        "title": "Log Likelihood of LDA in CGS",
        "excerpt":"  Log likelihood of Latent Dirichlet in Collapsed Gibbs Sampling.   We want to calculate    \\(\\begin{align} p(\\mathbf{w} | \\boldsymbol{\\alpha}, \\boldsymbol{\\beta}) = \\sum_{\\mathbf{z}} \\int  \\underbrace{p(w_{d,i} | \\boldsymbol{\\phi})}_{\\phi_{k,v}} p(\\boldsymbol{\\phi} | \\boldsymbol{\\beta}) d \\boldsymbol{\\phi} \\int  \\underbrace{p(z_{d,i} | \\boldsymbol{\\theta})}_{\\theta_{d,k}} p(\\theta_{d,k} | \\boldsymbol{\\alpha}) d \\boldsymbol{\\theta}. \\end{align}\\)    Recall (49) and (50) in Minka, T. (2000). Estimating a Dirichlet distribution. \\(\\boldsymbol{\\alpha}\\) is a Dirichlet parameter and \\(\\mathbf{p}\\) is drawn. Then a \\(\\mathbf{x}\\) is drawn from a multinomial with probability vector \\(\\mathbf{p}\\). \\(n_k\\) is the number of times the outcome is \\(k\\).    \\(\\begin{align} p(\\mathbf{x} | \\boldsymbol{\\alpha}) &amp;= \\int_{\\mathbf{p}} p(\\mathbf{x} | \\mathbf{p} ) p(\\mathbf{p} | \\boldsymbol{\\alpha}) d\\mathbf{p} \\\\[10pt] &amp;= \\frac{\\Gamma(\\sum_k \\alpha_k) }{\\Gamma(\\sum_k n_k + \\alpha_k)} \\prod_k \\frac{\\Gamma(n_k + \\alpha_k)}{\\Gamma(\\alpha_k)} \\\\[12pt] n_k &amp;= \\sum_j \\delta(x_j = k) \\end{align}\\)     \\(\\begin{align} p(\\mathbf{w} | \\boldsymbol{\\alpha}, \\boldsymbol{\\beta}) &amp;= \\prod_k \\left[ \\frac{\\Gamma(\\sum_v \\beta_v) }{\\Gamma(\\sum_v n_{k,v} + \\beta_v)} \\prod_v \\frac{\\Gamma(n_{k,v} + \\beta_v)}{\\Gamma(\\beta_v)} \\right] \\\\[10pt]  &amp;\\qquad \\times \\prod_d \\left[ \\frac{\\Gamma(\\sum_k \\alpha_k) }{\\Gamma(\\sum_k n_{d,k} + \\alpha_k)} \\prod_k \\frac{\\Gamma(n_{d,k} + \\alpha_k)}{\\Gamma(\\alpha_k)} \\right] \\end{align}\\)    Now we take log so that we get log likelihood.   Code for C++:  double llik(DATA_STRUCT *data, Parameters *parameters){   int V = parameters -&gt; V; // number of unique words   int M = parameters -&gt; M; // number of documents    double polyaw = 0.0;   for(int k=0; k&lt;K; k++){     double nw = parameters -&gt; Nkv.row(k).sum();     polyaw += lgamma(V*beta) - lgamma(V*beta + nw);      for(int v=0; v&lt;V; v++){       polyaw += lgamma( (parameters -&gt; Nkv(k,v)) + beta) - lgamma(beta);     }   }    double polyad = 0.0;   for(int d=0; d&lt;M; d++){     double nd = parameters -&gt; Ndk.row(d).sum();     polyad += lgamma( K*alpha ) - lgamma(K*alpha + nd);      for(int k=0; k&lt;K; k++){       polyad += lgamma( (parameters -&gt; Ndk(d,k)) + alpha ) - lgamma(alpha);     }   }    double llik = polyad + polyaw;   return llik; }   We need to use Polya distribution, because in LDA model,    \\(\\begin{align} p(z_1, z_2, \\cdots, z_N | \\alpha) \\neq \\prod_{n=1}^N p(z_n | \\alpha) \\end{align}\\)    More specifically if we observe two or more \\(z\\), they are not independent each other.    \\(\\begin{align} p(z_1, z_2 | \\alpha) = p(z_2 | z_1, \\alpha) p(z_1 | \\alpha) \\end{align}\\)    In language, if we observe a certain topic (or a word) in a document, it is likely that we observe the same topic (word) again in the document (Polya’s Urn).  ","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/LDA-CGS-loglikelihood/",
        "teaser":null},{
        "title": "Perplexity",
        "excerpt":"  Perplexity is commonly used to evaluate language models.   Definition and Calculation   First, we need to know    \\(\\begin{align} &amp;\\quad {\\rm probability}\\ p = \\frac{1}{\\rm choices}, \\\\ &amp;\\Leftrightarrow {\\rm choices}\\ c = \\frac{1}{p}. \\end{align}\\)    Perplexity is the geometric mean of choices. \\(N\\) is the number of data, \\(c\\) is the number of choices.    \\(\\begin{align} \\left( \\prod_{i=1}^{N} c_i \\right)^{\\frac{1}{N}} &amp;= \\left( \\prod_{i=1}^{N} \\frac{1}{p_i} \\right)^{\\frac{1}{N}} \\\\[10pt] &amp;= \\exp \\left( \\log \\left( \\prod_{i=1}^{N} \\frac{1}{p_i} \\right)^{\\frac{1}{N}} \\right) \\\\[10pt] &amp;= \\exp \\left( \\dfrac{\\sum_{i=1}^N -(\\log p_i)}{N} \\right) \\\\[10pt] &amp;= \\exp \\left( \\frac{-{\\rm loglik}}{N} \\right) \\end{align}\\)    If perplexity becomes negative, you might need to take into account normalization constants. If you calculate the perplexity right after you initialize the model (randomly fill parameters), perplexity could be greater than the number of unique words in the corpus.   Explanation  Ideally, we want to know \\(p(w)\\), but we need to consider the complete data log-likelihood \\(p(w,z)\\). So, we take    \\(\\begin{align} &amp;\\sum_z p(w,z) \\approx \\frac{1}{S} \\sum_{s=1}^S p(w, z(s)) \\end{align}\\)    \\(S\\) is the number of simulation after enough number of iterations. \\(z(s)\\) is the value of latent variable under \\(s^{\\rm th}\\) simulation. If we take the mean of perplexity, it could be an approximation of all possible \\(z\\).   Test Perplexity  \\(\\begin{align} p(\\mathbf{w}^{\\rm Test} | \\mathbf{w}^{\\rm Train}) = \\int p(\\mathbf{w}^{\\rm Test} | \\theta) p(\\theta | \\mathbf{w}^{\\rm Train}) d\\theta \\end{align}\\)   This is a weighted average by the trained parameters. In the following example, we consider three topics.                  Topics \\(p(z)\\)       \\(p(w|z)\\)       \\(p(w,z)\\)                       \\(p(z=1)=0.5\\)       \\(0.05\\)       \\(0.025\\)                 \\(p(z=2)=0.2\\)       \\(0.03\\)       \\(0.006\\)                 \\(p(z=3)=0.1\\)       \\(0.01\\)       \\(0.001\\)           We sum up \\(p(w,z)\\).  ","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/perplexity/",
        "teaser":null},{
        "title": "Bayesian Multiple Regression",
        "excerpt":"  We can replace normal multiple regression with Bayesian Multiple Regression.   Model and Data  First, we need to create simulation data. Let’s consider this model:    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\newcommand{\\Ga}{\\rm Gamma} \\begin{align} y_i &amp;\\sim \\Normal(\\beta_0 + \\beta_1 x_{1i} + \\beta_2 x_{2i},\\  1/ \\tau ) \\\\ \\beta_0 &amp;\\sim \\Normal (\\mu_0,\\ 1/ \\tau_0 ) \\\\ \\beta_1 &amp;\\sim \\Normal (\\mu_1,\\ 1/ \\tau_1 ) \\\\ \\beta_2 &amp;\\sim \\Normal (\\mu_2,\\ 1/ \\tau_2 )\\\\ \\tau &amp;\\sim \\Ga (\\alpha, \\beta) \\end{align}\\)    Generate data with R:   num_data &lt;- 1000 N &lt;- num_data  age &lt;- rnorm(num_data, mean=50, sd=15) income &lt;- rnorm(num_data, mean=500, sd=100) # using Normal might be wrong, but just for simulation data data &lt;- data.frame(age, income) covariates &lt;- as.matrix(data[,c(\"age\", \"income\")])   ## Muliple Regression true_beta0 &lt;- 1.5 true_beta1 &lt;- 2.8 true_beta2 &lt;- -1.2 tau_true &lt;- 1 betaX &lt;- c(true_beta1, true_beta2) data$Y &lt;- true_beta0 + covariates %*% betaX + rnorm(num_data, sd=1/sqrt(tau_true))   Likelihood function  Likelihood function is simple:    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} \\mathcal{L} = \\prod_{i=1}^N \\Normal(\\beta_0 + \\beta_1 x_{1i} + \\beta_2 x_{2i},\\  1/ \\tau ) \\end{align}\\)    Update Equations   Update for \\(\\beta_0\\) (intercept)    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} &amp;p(\\beta_0 | \\beta_1,\\beta_2, \\tau, y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta)\\\\ &amp;\\propto p(\\beta_0 , \\beta_1,\\beta_2, \\tau, y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta)\\\\ &amp;= p(y|\\beta_0,\\beta_1,\\beta_2,\\tau,x)\\ p(\\beta_0|\\mu_0,\\tau_0)\\ p(\\beta_1|\\mu_1,\\tau_1)\\ p(\\beta_2|\\mu_2,\\tau_2)\\ p(x) \\\\ &amp;\\propto p(y|\\beta_0, \\beta_1, \\beta_2, \\tau, x)\\ p(\\beta_0 | \\mu_0, \\tau_0)\\\\ &amp;= \\Normal(\\mu_0,\\ 1/\\tau_0)\\ \\prod_{i=1}^N (\\beta_0 + \\beta_1 x_{1i} + \\beta_2 x_{2i},\\  1/ \\tau) \\\\[10pt] &amp;= -\\frac{1}{2} \\log \\left(2 \\pi \\cdot \\frac{1}{\\tau_0} \\right) - \\frac{\\tau_0 (\\beta_0 - \\mu_0)^2}{2} + \\sum_{i=1}^{N} - \\left( \\frac{1}{2} \\log \\left(2 \\pi \\cdot \\frac{1}{\\tau} \\right) + \\frac{\\tau(y_i - \\beta_0 - \\beta_1 x_{1i} - \\beta_2 x_{2i})^2}{2} \\right)\\\\ &amp;\\propto  - \\frac{\\tau_0 (\\beta_0 - \\mu_0)^2}{2} - \\frac{\\tau}{2} \\sum_{i=1}^N (y_i - \\beta_0 - \\beta_1 x_{1i} - \\beta_2 x_{2i})^2  \\ \\ \\ \\cdots\\cdots (1) \\end{align}\\)    Note that  \\(p(y|\\beta_0, \\beta_1, \\beta_2, \\tau, x)\\) and \\(p(\\beta_0 | \\mu_0, \\tau_0)\\) are Normal distribution, so we can rewrite them. Also, log Normal PDF is important in deriving.    \\(\\begin{align} -\\frac{1}{2} \\log (2 \\pi \\sigma^2) - \\frac{(x - \\mu)^2}{2 \\sigma^2} = -\\frac{1}{2} \\log \\left( \\frac{2 \\pi}{\\tau} \\right) - \\frac{\\tau(x - \\mu)^2}{2} \\end{align}\\)    Another important and useful property of Normal distribution is that, when we focus on \\(x\\),    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} &amp;{\\rm if}\\ \\  x \\sim \\Normal(u,\\ 1/t),\\\\ &amp;-\\frac{t}{2} (x - u)^2 \\propto - \\frac{t}{2} x^2 + tux  \\ \\ \\ \\cdots\\cdots (2) \\end{align}\\)    Also, remember \\((x + y + z + w)^2 = (y + (x + z + w))^2\\). Now, let’s resume (1).    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} (1) &amp;\\propto - \\frac{\\tau_0}{2} \\beta_0^2 + \\tau_0 \\mu_0 \\beta_0 - \\frac{\\tau}{2} \\sum_{i=1}^N \\left(\\beta_0^2 - 2 \\beta_0 (y_i - \\beta_1 x_{1i} - \\beta_2 x_{2i})  \\right)  \\ \\ \\ \\cdots\\cdots (3) \\\\ &amp;= - \\frac{\\tau_0}{2} \\beta_0^2 + \\tau_0 \\mu_0 \\beta_0 - \\frac{\\tau}{2} N \\beta_0^2 + \\tau \\sum_{i=i}^N \\beta_0 (y_i - \\beta_1 x_{1i} - \\beta_2 x_{2i}) \\\\ &amp;= \\left( - \\frac{\\tau_0 + \\tau N}{2} \\right) \\beta_0^2 + \\left( \\tau_0 + \\tau N   \\right) \\left(  \\frac{\\tau_0}{\\tau_0 + \\tau N}  \\right) \\mu_0 \\beta_0 + \\left( \\tau_0 + \\tau N  \\right) \\left( \\frac{\\tau}{\\tau_0 + \\tau N} \\right) \\beta_0 \\sum_{i=1}^N (y_i - \\beta_1 x_{1i} - \\beta_2 x_{2i})\\\\ &amp;= \\left( - \\frac{\\tau_0 + \\tau N}{2} \\right) \\beta_0^2 + (\\tau_0 + \\tau N)  \\cdot \\left( \\frac{\\tau_0 \\mu_0 + \\tau \\sum_N (y_i - \\beta_1 x_{1i} - \\beta_2 x_{2i})}{\\tau_0 + \\tau N} \\right) \\cdot \\beta_0 \\end{align}\\)    By comparing the last equation with (2), we can say    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} p(\\beta_0 | \\beta_1,\\beta_2, \\tau, y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta) \\sim \\Normal \\left( \\frac{\\tau_0 \\mu_0 + \\tau \\sum_N (y_i - \\beta_1 x_{1i} - \\beta_2 x_{2i})}{\\tau_0 + \\tau N} ,\\  1/(\\tau_0 + \\tau N) \\right) \\end{align}\\)    # beta_0 sample_beta_0 &lt;- function(y, x1, x2, beta_1, beta_2, tau, mu_0, tau_0){   precision &lt;- tau_0 + tau * N   mu &lt;- tau_0 * mu_0 + tau * sum(y - (beta_1 * x1) - (beta_2 * x2))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }   Update for \\(\\beta_1\\) (coefficient)   Derivation is quite similar until (1). We have slightly different form for (3) because we now focus on \\(\\beta_1\\).    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} &amp;p(\\beta_1 | \\beta_0,\\beta_2, \\tau, y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta)\\\\ &amp;\\propto - \\frac{\\tau_1}{2} \\beta_1^2 + \\tau_1 \\mu_1 \\beta_1 - \\frac{\\tau}{2} \\sum_{i=1}^N \\left( \\beta_1^2 x_{1i}^2 - 2 \\beta_1 x_{1i}^2 (y_i - \\beta_0 - \\beta_2 x_{2i})  \\right) \\\\ &amp;= \\left( - \\frac{\\tau_1 + \\tau \\sum_N x_{i1}^2}{2}    \\right) \\beta_1^2 + \\tau_1 \\mu_1 \\beta_1 + \\tau \\sum_{i=1}^2 \\left( \\beta_1 x_{i1} (y_i - \\beta_0 - \\beta_2 x_{2i}) \\right) \\\\ &amp;= \\left( - \\frac{\\tau_1 + \\tau \\sum_N x_{i1}^2}{2}    \\right) \\beta_1^2 + \\left[ \\tau_1 \\mu_1 + \\tau \\sum_{i=1}^N x_{1i} (y_i - \\beta_0 - \\beta_2 x_{2i})  \\right] \\beta_1\\\\ &amp;= \\left( - \\frac{\\tau_1 + \\tau \\sum_N x_{i1}^2}{2}    \\right) \\beta_1^2 + (\\tau_1 + \\tau \\sum_N x_{i1}^2) \\frac{ \\tau_1 \\mu_1 + \\tau \\sum_{i=1}^N x_{1i} (y_i - \\beta_0 - \\beta_2 x_{2i})  }{\\tau_1 + \\tau \\sum_N x_{i1}^2} \\beta_1 \\end{align}\\)    Now, we get    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} p(\\beta_1 | \\beta_0,\\beta_2, \\tau, y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta) \\sim \\Normal \\left( \\frac{\\tau_1 \\mu_1 + \\tau \\sum_N x_{1i} (y_i - \\beta_0 - \\beta_2 x_{2i})}{\\tau_1 + \\tau \\sum_N x_{1i}^2} ,\\  1/(\\tau_1 + \\tau \\sum_N x_{1i}^2) \\right) \\end{align}\\)    # beta_1 sample_beta_1 &lt;- function(y, x1, x2, beta_0, beta_2, tau, mu_1, tau_1){   precision &lt;- tau_1 + tau * sum(x1*x1)   mu &lt;- tau_1 * mu_1 + tau * sum(x1 * (y - beta_0 - beta_2 * x2))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }   We can get the similar equation for \\(\\beta_2\\).   # beta_2 sample_beta_2 &lt;- function(y, x1, x2, beta_0, beta_1, tau, mu_2, tau_2){   precision &lt;- tau_2 + tau * sum(x2*x2)   mu &lt;- tau_2 * mu_2 + tau * sum(x2 * (y - beta_0 - beta_1 * x1))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }   Update for \\(\\tau\\) (precision)   Let’s recall log PDF of Gamma distribution:    \\(\\begin{align} \\log \\frac{\\beta^\\alpha}{\\Gamma (\\alpha)} + (\\alpha-1) \\log x - \\beta x \\propto (\\alpha - 1) \\log x - \\beta x \\end{align}\\)    We can get updat equation:    \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} &amp;p( \\tau | \\beta_0, \\beta_1, \\beta_2,  y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta) \\\\ &amp;\\propto p(y | \\beta_0, \\beta_1, \\beta_2, \\tau, x) p(\\tau | \\alpha, \\beta)\\\\ &amp;= \\sum_{i=1}^N - \\left( \\frac{1}{2} \\log \\left(2 \\pi \\cdot \\frac{1}{\\tau} \\right) + \\frac{\\tau}{2} (y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2 \\right)  + (\\alpha - 1) \\log \\tau - \\beta \\tau\\\\ &amp;= \\sum_{i=1}^N - \\left( \\frac{1}{2} \\left(\\log 2 + \\log \\pi + \\log \\frac{1}{\\tau} \\right) + \\frac{\\tau}{2} (y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2 \\right)  + (\\alpha - 1) \\log \\tau - \\beta \\tau\\\\ &amp;\\propto \\sum_{i=1}^N - \\left( \\frac{1}{2} \\left(\\log \\frac{1}{\\tau} \\right) + \\frac{\\tau}{2} (y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2 \\right)  + (\\alpha - 1) \\log \\tau - \\beta \\tau\\\\ &amp;= - \\frac{N}{2} \\log \\frac{1}{\\tau} - \\frac{\\tau}{2}  \\sum_{i=1}^N (y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2 + (\\alpha - 1) \\log \\tau - \\beta \\tau\\\\ &amp;= \\frac{N}{2} \\log \\tau - \\frac{\\tau}{2}  \\sum_{i=1}^N (y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2 + (\\alpha - 1) \\log \\tau - \\beta \\tau\\\\ &amp;= \\left( \\alpha + \\frac{N}{2} - 1 \\right) \\log \\tau - \\left( \\beta + \\sum_{i=1}^N \\frac{(y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2}{2}  \\right) \\tau \\end{align}\\)    So, we get  \\(\\newcommand{\\Normal}{\\mathcal{N}} \\begin{align} &amp;p( \\tau | \\beta_0, \\beta_1, \\beta_2,  y, x, \\mu_0,\\mu_1,\\mu_2 \\tau_0,\\tau_1,\\tau_2,\\alpha,\\beta) \\sim {\\rm Gamma} \\left(\\alpha + \\frac{N}{2} , \\  \\beta + \\sum_{i=1}^N \\frac{(y_i - \\beta_0 - \\beta_{1} x_{1i} - \\beta_2 x_{2i})^2}{2} \\right) \\end{align}\\)    # tau sample_tau &lt;- function(y, x1, x2, beta_0, beta_1, beta_2, alpha, beta){   alpha_new &lt;- alpha + N/2   resid &lt;- y - beta_0 - (beta_1 * x1) - (beta_2 * x2)   beta_new &lt;- beta + sum(resid*resid) / 2   value &lt;- rgamma(1, shape=alpha_new, rate=beta_new)     # alpha = shape, beta = 1/rate in rgamma() }   Sampling  iter_num &lt;- 15000  # Prepare storages beta_0 &lt;- rep(NA, iter_num) beta_1 &lt;- rep(NA, iter_num) beta_2 &lt;- rep(NA, iter_num) tau &lt;- rep(NA, iter_num)  # Initialization beta_0[1] &lt;- 0 beta_1[1] &lt;- 1 beta_2[1] &lt;- 2 tau[1] &lt;- 2 # Run for(i in 1:(iter_num-1)){   beta_0[i+1] &lt;- sample_beta_0(data$Y, data$age, data$income, beta_1[i], beta_2[i], tau[i], 0, 0.01)   beta_1[i+1] &lt;- sample_beta_1(data$Y, data$age, data$income, beta_0[i+1], beta_2[i], tau[i], 0, 0.01)   beta_2[i+1] &lt;- sample_beta_2(data$Y, data$age, data$income, beta_0[i+1], beta_1[i], tau[i], 0, 0.01)   tau[i+1] &lt;- sample_tau(data$Y, data$age, data$income, beta_0[i+1], beta_1[i+1], beta_2[i+1], alpha=2, beta=1) }   Result         Code   # Set working directory setwd(\"/Users/Study/Analysis/\")  # Load library library(tidyverse) ############################################### # Bayesian Linear Regression (Gibbs Sampling) # ############################################### iter_num &lt;- 15000 burn_in_num &lt;- 12000  #################### # Create fake data # #################### num_data &lt;- 1000 N &lt;- num_data  age &lt;- rnorm(num_data, mean=50, sd=15) income &lt;- rnorm(num_data, mean=500, sd=100) data &lt;- data.frame(age, income) covariates &lt;- as.matrix(data[,c(\"age\", \"income\")])   ## Multiple Regression true_beta0 &lt;- 1.5 true_beta1 &lt;- 2.8 true_beta2 &lt;- -1.2 tau_true &lt;- 1 betaX &lt;- c(true_beta1, true_beta2) data$Y &lt;- true_beta0 + covariates %*% betaX + rnorm(num_data, sd=1/sqrt(tau_true))   ## Check with package res_lm &lt;- lm(Y ~ age + income, data) summary(res_lm)  ############# # Inference # ############# sample_beta_0 &lt;- function(y, x1, x2, beta_1, beta_2, tau, mu_0, tau_0){   precision &lt;- tau_0 + tau * N   mu &lt;- tau_0 * mu_0 + tau * sum(y - (beta_1 * x1) - (beta_2 * x2))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }   sample_beta_1 &lt;- function(y, x1, x2, beta_0, beta_2, tau, mu_1, tau_1){   precision &lt;- tau_1 + tau * sum(x1*x1)   mu &lt;- tau_1 * mu_1 + tau * sum(x1 * (y - beta_0 - beta_2 * x2))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }  sample_beta_2 &lt;- function(y, x1, x2, beta_0, beta_1, tau, mu_2, tau_2){   precision &lt;- tau_2 + tau * sum(x2*x2)   mu &lt;- tau_2 * mu_2 + tau * sum(x2 * (y - beta_0 - beta_1 * x1))   mu &lt;- mu / precision   value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))   return(value) }  sample_tau &lt;- function(y, x1, x2, beta_0, beta_1, beta_2, alpha, beta){   alpha_new &lt;- alpha + N/2   resid &lt;- y - beta_0 - (beta_1 * x1) - (beta_2 * x2)   beta_new &lt;- beta + sum(resid*resid) / 2   value &lt;- rgamma(1, shape=alpha_new, rate=beta_new)     # alpha = shape, beta = 1/rate }  # Prepare storages beta_0 &lt;- rep(NA, iter_num) beta_1 &lt;- rep(NA, iter_num) beta_2 &lt;- rep(NA, iter_num) tau &lt;- rep(NA, iter_num)  # Initialization beta_0[1] &lt;- 0 beta_1[1] &lt;- 1 beta_2[1] &lt;- 2 tau[1] &lt;- 2 # Run for(i in 1:(iter_num-1)){   beta_0[i+1] &lt;- sample_beta_0(data$Y, data$age, data$income, beta_1[i], beta_2[i], tau[i], 0, 0.01)   beta_1[i+1] &lt;- sample_beta_1(data$Y, data$age, data$income, beta_0[i+1], beta_2[i], tau[i], 0, 0.01)   beta_2[i+1] &lt;- sample_beta_2(data$Y, data$age, data$income, beta_0[i+1], beta_1[i], tau[i], 0, 0.01)   tau[i+1] &lt;- sample_tau(data$Y, data$age, data$income, beta_0[i+1], beta_1[i+1], beta_2[i+1], alpha=2, beta=1) }   # Make Figure make_figure &lt;- function(params, true_values, params_names, burn_in=2000, slice=5){   num_params &lt;- length(params)    tidy_params &lt;- list()   for(i in 1:num_params){     temp &lt;- data.frame(value=params[[i]])     temp$parameter &lt;- params_names[i]     temp$iter &lt;- 1:nrow(temp)      temp &lt;- temp[burn_in:nrow(temp) ,]     slice_index &lt;- seq(1, nrow(temp), slice)# slice data     temp &lt;- temp[slice_index, ]     tidy_params[[i]] &lt;- temp   }   tidy_params &lt;- do.call(rbind.data.frame, tidy_params)    true &lt;- data.frame(     parameter = params_names,     value = true_values     )    param &lt;- ggplot(data=tidy_params, aes(x=iter, y=value, group=parameter, color=parameter)) +        geom_line() +        geom_point(size=0.3) +       facet_wrap(~parameter, ncol=2, scales = \"free\") +       geom_hline(data = true, aes(yintercept = value), size=0.7) +       theme_bw() +       theme(legend.position=\"none\")    param_density &lt;- ggplot(data=tidy_params, aes(x=value, color=parameter, fill=parameter)) +     geom_density(stat = \"density\", position = \"identity\",alpha=0.6) +      facet_wrap(~parameter, ncol=2, scales = \"free\") +     geom_vline(data = true, aes(xintercept = value), size=0.7) +     theme_bw() +     theme(legend.position=\"none\")    return(list(param, param_density))  }  params &lt;- list(beta_0, beta_1, beta_2, tau) true_values &lt;- c(true_beta0, true_beta1, true_beta2, tau_true) params_names &lt;- c(\"beta_0\", \"beta_1\", \"beta_2\", \"tau\") gs_res3 &lt;- make_figure(params, true_values, params_names, burn_in=burn_in_num, slice=5) gs_res3[[1]] gs_res3[[2]] saveRDS(gs_res3,\"figure.obj\") saveRDS(data,\"data.obj\") ggsave(\"trace.png\", gs_res3[[1]], width=7, height=5) ggsave(\"hist.png\", gs_res3[[2]], width=7, height=6)   ","categories": ["Bayesian Analysis"],
        "tags": [],
        "url": "https://shusei-e.github.io/bayesian%20analysis/BayesianMultipleRegression/",
        "teaser":null},{
        "title": "Faster Log Gamma Calculation",
        "excerpt":"  We sometimes encounter the calculation of    \\(\\newcommand{\\Ga}{\\Gamma} \\begin{align} \\log \\frac{\\Ga (\\alpha + n)}{\\Ga (\\alpha)}. \\end{align}\\)    If \\(n\\) is small, there is a faster calculation. We use the property of Gamma function, \\(\\Gamma(x+1) = x \\Gamma (x)\\).    \\(\\newcommand{\\Ga}{\\Gamma} \\begin{align} &amp;\\quad \\log \\frac{\\Ga (\\alpha + n)}{\\Ga (\\alpha)} \\\\ &amp;= \\log \\frac{(\\alpha + n - 1) \\Ga (\\alpha + n - 1)}{\\Ga (\\alpha)} \\\\ &amp;= \\log \\frac{(\\alpha + n -1) (\\alpha + n -2) \\Ga (\\alpha + n -2) }{\\Ga (\\alpha)} \\\\ &amp;= \\log \\frac{(\\alpha + n -1) (\\alpha + n -2) \\cdots (\\alpha) \\Ga (\\alpha)}{\\Ga (\\alpha)} \\\\ &amp;= \\log (\\alpha + n -1) (\\alpha + n -2) \\cdots (\\alpha)\\\\ &amp;= \\log \\prod_{m=1}^{n} (\\alpha + n - m) \\end{align}\\)    Example code in Cython:  cdef extern from \"math.h\":    double log (double x)    double lgamma (double x)  cdef double gammaln_sum(np.ndarray[ftype_t, ndim=1] array1,                         np.ndarray[ftype_t, ndim=1] array2):     # (special.gammaln( alpha_s + n_s_temp ) - special.gammaln( alpha_s )).sum()     cdef double value = 0.0     cdef int i     cdef int n = array1.shape[0] # length of array     cdef int m      for i in range(n):         if array2[i] &lt; 18:             # low frequency words             for m in range(int(array2[i])):                 value += log(array1[i] + m)         else:             value += lgamma(array1[i]) - lgamma(array2[i])      return value   In C++:  double CstmCpp::calc_loglik_doc_second_term(int &amp;doc_id, int &amp;word_id, SparseVector&lt;int&gt; &amp;n_k_doc){   // compute_second_term_of_log_probability_document      double alpha_k = calc_alpha_word_given_doc(doc_id, word_id);   int n_k_w = n_k_doc.coeffRef(word_id); // get_word_count_in_doc()    if(n_k_w &gt; 18){     return lgamma(alpha_k + n_k_w) - lgamma(alpha_k);   }else{     double temp = 0.0;     for(int i=0; i&lt;n_k_w; i++){       temp += log(alpha_k + i);      }     return temp;   } }   ","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/FasterLogGamma/",
        "teaser":null},{
        "title": "Debug, Debug, Debug",
        "excerpt":"We would like to minimize bugs when we write code. If we encounter errors, we know something is going wrong, but some serious bugs don’t stop the code.   Bug??     Values go wrong even if you are sure that you implemented the code correctly   Write a debug function     Write a debug function and try the code with a tiny data   Make sure all counters work well   Debug functions need to test:            Each file (class)       Entire code (can the program give you a desirable output?)       Test codes are important because you will forget what you’ve done if your project get longer           Test with both small and large test datasets   Coding     Break your function into small parts and make sure each component works fine.   Introduce a linting tool: ALE in Vim   Be careful especially when you copy and paste a part of code   Write a documentation     R: devtools   Python: Sphinx   C++: Doxygen   Rewrite  Do not hesitate to rewrite the entire code. Rewriting takes shorter time than debugging unorganized code (which could be infinite).   Case Studies   Number order and text order  When I read text files, the order was text_1, text_10, text_101, text_102. However, in a csv file that stores covariates, the order was text_1, text_2, text_3. There was a mismatch.   Reduce the number of member variables     In C++, defining int and double as member variables slows down the code.  ","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/DebugDebugDebug/",
        "teaser":null},{
        "title": "アメリカに引っ越す",
        "excerpt":"出発まで   ビザ     F1ビザの場合、I-20が届いてからすぐに手続きを始めた方が良い            6月の頭はそれなりに空いている           書類の作成には相当時間がかかるので、その時間も考慮する必要がある            写真をアップロードするセクションがあるが、結局使われるのは大使館に持参する写真なので、アップロードする方は最悪規定に沿っていなくても大丈夫       銀行の残高証明書も持って行ったが、大学から奨学金などがもらえる場合は不要だったかもしれない           I-20は毎回の入国時に必要になるので、大切に保管・携帯   住民票     税金などを考えるのなら、国外転出すべき   一時帰国の際の健康保険は、日本の滞在先(ホテルなどではなく)があれば住民票を戻すことで可能            保険料は月極め、月末に住民票があるかで計算される       住民票は住所があるところでしか作れないので、友人宅での「同居人」の扱いも検討する       その場合必要な書類が変わって来るので注意           年金     住民票あり+大学休学: 両親を代理人として学生免除の申請   住民票あり+大学退学: 源泉徴収票を元に日本での所得を計算して所得による免除   住民票なし: 任意加入できる、免除などはない   マイナンバー     番号自体は残る   荷物を送る     郵便局のEMSが(それなりに)安くて早い(東海岸で税関に止まらなければ5日程度)            品目を書かないといけないので、どの箱に何が入っているかをメモしておく       万が一紛失された際に備えるならば、差出人は自分自身じゃない方が手続きしやすい(らしい)       船便にするともっと安いけど無くなることもあるとか           到着後   I-20の登録     International Officeに持って行ってサインをもらう   SIMカードの入手     SIMフリーの携帯があればAT&amp;Tなどでプリペイド式のカードをすぐ入手できる   銀行口座の開設     Bank of AmericaはI-20とパスポートだけで開設できた   一定金額口座($1500-)にあればクレジットカードの発行もできるとのこと            日本からの送金にはTransferWiseが便利       念のためにキャッシュパスポートも準備しておくと、いざという時に送金に使える           Overdraftに注意   クレジットカードは色々と面倒            Credit card historyに影響するので支払いは滞りなく行いたい           クレジットカードの支払いを自動化            銀行によってはワンクリックでできるらしいが、Bank of Americaの場合は設定が必要だった       まず初回のclosing dataを迎えるのを待つ       Bill Pay Centerから適当な額でクレジットカードに対して支払いを行う       Payment Centerに支払い先の一覧が出てくる (先ほどの支払いはキャンセルしてもOK)       eBillsが届いていたら、eBillsから支払いを設定することができる (届いていなければ電話する)           家具などの入手     Amazonでも色々手に入る   ベッド            Twin: 日本のシングルぐらいのサイズ           照明            家によっては天井に照明がない           税     F-1ビザで、大学からstipendをもらっている場合は、Individual Taxpayer Identification Numbersが必要なので、Form W-7を作成する   RAとかで働くのなら、Social Security Numberが必要になる   大学のOfficeに書類を提出したりと手続きが必要            ITINが届いたら、GLACIERというシステムの情報の更新と書類の再提出が必要になる           運転免許証     州によって違う   書類の準備            住所の証明 (Bank statementが一番簡単だけど、ない場合は大学からの学費の請求書など)       SSN Denial Letter: オフィスに行かないともらえない       Passport、I-20など           試験の準備をする            このサイトに練習問題があるので解く       17時にRMV Officeが閉まるのなら、15時ギリギリになると再受験させてもらえなくなるので注意       問題はランダムに表示されるので、難しい回と簡単な回があるらしい           路上試験を受ける            自動車学校を経由すると、予約の代行をしてくれるので便利       日本にない試験科目(3-point-turn)があるので、練習が多少は必要           国際免許証     住むなら、各州で運転免許証を取らないといけないが、一応日本からも持参した   免許更新センターなどで入手可能   Social Security Number     RAなどとして働くなら必要   雇用する機関(〇〇センターなど)からレターをもらい、それをInternational Officeに持って行き更にレターをもらう  ","categories": ["日本語記事"],
        "tags": [],
        "url": "https://shusei-e.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%A8%98%E4%BA%8B/MovingToUS/",
        "teaser":null},{
        "title": "Yet another expression of Bernoulli distribution",
        "excerpt":"  The probability mass function of Bernoulli distribution is    \\(\\begin{align} f(k) = p^k (1-p)^{1-k}. \\end{align}\\)    If we take the proportion of it,    \\(\\begin{align} f(k) \\propto \\frac{f(k)}{f(0)} = \\frac{p^k (1-p)^{1-k}}{(1-p)} = \\left( \\frac{p}{1-p}  \\right)^k. \\end{align}\\)    Note that \\(f(0)\\) works here as a constant.   ","categories": ["Statistics"],
        "tags": [],
        "url": "https://shusei-e.github.io/statistics/Bernoulli/",
        "teaser":null}]
