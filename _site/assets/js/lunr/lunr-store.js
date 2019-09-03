var store = [{
        "title": "Setting Environment (MacOS)",
        "excerpt":"     On This Page  1. Homebrew          R        2. Manual Install          XCode      RStudio      Python        3. Tex          Install Ghostscript      Download MacTex      Install      Update TexLive      Set Japanse Fonts        4. Set TexShop          Update        5. pip  6. R Packages          RStan        7. Chrome Extension  1. HomebrewR  brew upgrade xxx2. Manual InstallXCode  From AppStoreRStudio  From websitePython  $ brew install pyenvUpdate bash_profile:vi ~/.bash_profileIn bash_profile,export PYENV_ROOT=\"/usr/local/var/pyenv\"export PYENV_VIRTUALENV_DISABLE_PROMPT=1if which pyenv &gt; /dev/null; then eval \"$(pyenv init -)\"; fiif which pyenv-virtualenv-init &gt; /dev/null; then eval \"$(pyenv virtualenv-init -)\"; fiDo not forget to source ~/.bash_profile after editing!!Then, you can install python:  $ pyenv install 3.5.2  If error occures, try xcode-select --install and install again  $ brew install pyenv-virtualenv  Usage of pyenv-virtualenv          It’s easier to use virtualenv than pyenv to use multiuple versions of Python      Make a new environment: $ pyenv virtualenv 3.5.2 NAME      Activate the environment: $ pyenv activate NAME or source activate NAME      Deactivate the environment: $ pyenv deactivate      Delete the environment:　$ pyenv uninstall NAME      List Current Environments: $ pyenv versions      3. TexReferenceInstall Ghostscriptbrew install ghostscriptDownload MacTexhttps://tug.org/mactex/mactex-download.htmlInstallDo not forget to select custom install and clear the checkbox for GhostscriptUpdate TexLivesudo tlmgr update --self --all If there is an error, relaunch Terminal.Set Japanse FontsEnter the following commands line by line.cd /usr/local/texlive/2016/texmf-dist/scripts/cjk-gs-integratesudo perl cjk-gs-integrate.pl --link-texmf --forcesudo mktexlsrsudo kanji-config-updmap-sys hiragino-elcapitan-pron4. Set TexShop  Update Software  TexShop » Preferences » Source » Set Default Values » pTeX (ptex2pdf)Updatesudo tlmgr update --self --all5. pippip install jupyter pandas matplotlib beautifulsoup46. R PackagesRStan  install.packages('rstan', dependencies=T)7. Chrome ExtensionChange Tab Size","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/setmac/",
        "teaser":null},{
        "title": "Create a website with Jekyll",
        "excerpt":"Jekyll and Github Pages are great tools to create a website. I used minimal-mistakes template.FeaturesJapanese日本語でも書くことができるEquationsWrite equations in LaTex Style. You need to add&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML\" type=\"text/javascript\"&gt;&lt;/script&gt;or, this may faster&lt;script type=\"text/javascript\" async  src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML\"&gt;&lt;/script&gt;For example,$$\\newcommand{\\bx}{\\mathbf{x}}\\newcommand{\\btheta}{\\boldsymbol{\\theta}}\\newcommand{\\bmu}{\\boldsymbol{\\mu}}\\newcommand{\\bmu}{\\boldsymbol{\\mu}}\\newcommand{\\balpha}{\\boldsymbol{\\alpha}}\\newcommand{\\bz}{\\mathbf{z}}\\begin{align}  &amp;\\quad\\quad p(\\bx, \\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\  &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\btheta, \\bz, \\bmu | \\balpha, \\mu_P, \\sigma^2_P, \\sigma^2)\\\\  &amp;= p(\\bx | \\bz, \\bmu, \\sigma^2) p(\\bz|\\btheta)p(\\btheta|\\balpha)p(\\bmu|\\mu_P, \\sigma^2_P)\\\\[3pt]  &amp;= \\prod_{i=1}^{D} \\left\\{ p(x_i | \\mu_{z_i}, \\sigma^2) p(z_i|\\btheta) \\right\\} \\cdot p(\\btheta|\\balpha) \\cdot \\prod_{k=1}^{K} p(\\mu_k | \\mu_P, \\sigma_P^2)\\end{align}$$becomes How-ToCheck this note.","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/website-with-jekyll/",
        "teaser":null},{
        "title": "Variational Bayes Derivation of Latent Dirichlet Allocation",
        "excerpt":"This is not a smoothed LDA. The model is Beli, Ng, and Jordan (2003) Figure 1.You can find another useful derivation note.","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/lda-variational-bayes/",
        "teaser":null},{
        "title": "Metropolis-Hastings Sampling Tips",
        "excerpt":"You may wonder why  is the same as .becauseAdded on 13/May/2017: is the same asHence,You may find “Non-Uniform Random Variate Generation” useful for sampling.","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/MH_sampling_tips/",
        "teaser":null},{
        "title": "Why can we consider expectation in Gibbs Sampling",
        "excerpt":"Suppose we are doing Gaussian Mixture (1D). The histogram of posterior distribution is (we choose a new  from this histogram),Each integral shows posterior predictive distribution of  and , respectively. We can consider the expectation of  for the first term instead of calculating everything.  can take various values, but it follows Normal distribution. Enough amount of data makes the posterior distribution of  sharp. The expectation can be a good approximation.Code can be found here.","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/posterior_histogram_expectation/",
        "teaser":null},{
        "title": "Use tanh instead of exp in sigmoid function",
        "excerpt":"If the data is large, we encounter overflow in sigmoid function.A simple trick to avoid overflow is to use tanh.In your code,y = 1 / (1 + numpy.exp(-x))will becomey = numpy.tanh(x * 0.5) * 0.5 + 0.5Reference 1Reference 2","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/sigmoid_tanh/",
        "teaser":null},{
        "title": "Softmax without Overflow",
        "excerpt":"Overflow problems are common in neural network-like structures.The result is inveriant even if we add/subtract constant , because softmax function uses the sum of  to normalize the result. We need to choose . In the example below,  is used, but any number should be fine.def softmax(x):  exp_x = np.exp(x)  return exp_x/np.sum(exp_x, axis=1, keepdims=True)will becomedef softmax(x):    e = np.exp(x - np.max(x))    if e.ndim == 1:        return e / np.sum(e, axis=0)    else: # dim = 2        return e / np.sum(e, axis=1, keepdims=True)You may need to use this e = np.exp(x - np.max(x, axis=1)[:, np.newaxis]).Reference 1","categories": ["Deep Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/deep%20learning/softmax_without_overflow/",
        "teaser":null},{
        "title": "Another view of Sigmoid function",
        "excerpt":"Sigmoid function (standard logistic function) is defined asNow, let’s show .Code for the figure:sigmoid &lt;- function(x){\treturn (1/(1+exp(-x)))}x &lt;- as.matrix(seq(-6, 6, 0.01))y &lt;- apply(x, 2, sigmoid)plot(x, y, type='l')abline(v = 0)lines(x=c(-2, 0), y=c(sigmoid(-2), sigmoid(-2)), lty=2,col=2,lwd=2)lines(x=c(-2,-2), y=c(0, sigmoid(-2)), lty=2,col=2,lwd=2)lines(x=c(2, 0), y=c(sigmoid(2), sigmoid(2)), lty=2,col=4,lwd=2)lines(x=c(2,2), y=c(0, sigmoid(2)), lty=2,col=4,lwd=2)text(-0.5, sigmoid(2), expression(sigma(2)))text(1.25, sigmoid(-2), expression(sigma(-2)==1-sigma(2)))Note:","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/another-view-of-sigmoid/",
        "teaser":null},{
        "title": "Log Likelihood of LDA in CGS",
        "excerpt":"Log likelihood of Latent Dirichlet in Collapsed Gibbs Sampling.We want to calculateRecall (49) and (50) in Minka, T. (2000). Estimating a Dirichlet distribution.  is a Dirichlet parameter and  is drawn. Then a  is drawn from a multinomial with probability vector .  is the number of times the outcome is .Now we take log so that we get log likelihood.Code for C++:double llik(DATA_STRUCT *data, Parameters *parameters){  int V = parameters -&gt; V; // number of unique words  int M = parameters -&gt; M; // number of documents  double polyaw = 0.0;  for(int k=0; k&lt;K; k++){    double nw = parameters -&gt; Nkv.row(k).sum();    polyaw += lgamma(V*beta) - lgamma(V*beta + nw);    for(int v=0; v&lt;V; v++){      polyaw += lgamma( (parameters -&gt; Nkv(k,v)) + beta) - lgamma(beta);    }  }  double polyad = 0.0;  for(int d=0; d&lt;M; d++){    double nd = parameters -&gt; Ndk.row(d).sum();    polyad += lgamma( K*alpha ) - lgamma(K*alpha + nd);    for(int k=0; k&lt;K; k++){      polyad += lgamma( (parameters -&gt; Ndk(d,k)) + alpha ) - lgamma(alpha);    }  }  double llik = polyad + polyaw;  return llik;}We need to use Polya distribution, because in LDA model,More specifically if we observe two or more , they are not independent each other.In language, if we observe a certain topic (or a word) in a document, it is likely that we observe the same topic (word) again in the document (Polya’s Urn).","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/LDA-CGS-loglikelihood/",
        "teaser":null},{
        "title": "Perplexity",
        "excerpt":"Perplexity is commonly used to evaluate language models.Definition and CalculationFirst, we need to knowPerplexity is the geometric mean of choices.  is the number of data,  is the number of choices.If perplexity becomes negative, you might need to take into account normalization constants. If you calculate the perplexity right after you initialize the model (randomly fill parameters), perplexity could be greater than the number of unique words in the corpus.ExplanationIdeally, we want to know , but we need to consider the complete data log-likelihood . So, we take is the number of simulation after enough number of iterations.  is the value of latent variable under  simulation. If we take the mean of perplexity, it could be an approximation of all possible .Test PerplexityThis is a weighted average by the trained parameters. In the following example, we consider three topics.            Topics                                                                                                     We sum up .","categories": ["Natural Language Processing"],
        "tags": [],
        "url": "https://shusei-e.github.io/natural%20language%20processing/perplexity/",
        "teaser":null},{
        "title": "Bayesian Multiple Regression",
        "excerpt":"We can replace normal multiple regression with Bayesian Multiple Regression.Model and DataFirst, we need to create simulation data. Let’s consider this model:Generate data with R:num_data &lt;- 1000N &lt;- num_dataage &lt;- rnorm(num_data, mean=50, sd=15)income &lt;- rnorm(num_data, mean=500, sd=100) # using Normal might be wrong, but just for simulation datadata &lt;- data.frame(age, income)covariates &lt;- as.matrix(data[,c(\"age\", \"income\")])## Muliple Regressiontrue_beta0 &lt;- 1.5true_beta1 &lt;- 2.8true_beta2 &lt;- -1.2tau_true &lt;- 1betaX &lt;- c(true_beta1, true_beta2)data$Y &lt;- true_beta0 + covariates %*% betaX + rnorm(num_data, sd=1/sqrt(tau_true))Likelihood functionLikelihood function is simple:Update EquationsUpdate for  (intercept)Note that  and  are Normal distribution, so we can rewrite them. Also, log Normal PDF is important in deriving.Another important and useful property of Normal distribution is that, when we focus on ,Also, remember . Now, let’s resume (1).By comparing the last equation with (2), we can say# beta_0sample_beta_0 &lt;- function(y, x1, x2, beta_1, beta_2, tau, mu_0, tau_0){  precision &lt;- tau_0 + tau * N  mu &lt;- tau_0 * mu_0 + tau * sum(y - (beta_1 * x1) - (beta_2 * x2))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}Update for  (coefficient)Derivation is quite similar until (1). We have slightly different form for (3) because we now focus on .Now, we get# beta_1sample_beta_1 &lt;- function(y, x1, x2, beta_0, beta_2, tau, mu_1, tau_1){  precision &lt;- tau_1 + tau * sum(x1*x1)  mu &lt;- tau_1 * mu_1 + tau * sum(x1 * (y - beta_0 - beta_2 * x2))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}We can get the similar equation for .# beta_2sample_beta_2 &lt;- function(y, x1, x2, beta_0, beta_1, tau, mu_2, tau_2){  precision &lt;- tau_2 + tau * sum(x2*x2)  mu &lt;- tau_2 * mu_2 + tau * sum(x2 * (y - beta_0 - beta_1 * x1))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}Update for  (precision)Let’s recall log PDF of Gamma distribution:We can get updat equation:So, we get# tausample_tau &lt;- function(y, x1, x2, beta_0, beta_1, beta_2, alpha, beta){  alpha_new &lt;- alpha + N/2  resid &lt;- y - beta_0 - (beta_1 * x1) - (beta_2 * x2)  beta_new &lt;- beta + sum(resid*resid) / 2  value &lt;- rgamma(1, shape=alpha_new, rate=beta_new)    # alpha = shape, beta = 1/rate in rgamma()}Samplingiter_num &lt;- 15000# Prepare storagesbeta_0 &lt;- rep(NA, iter_num)beta_1 &lt;- rep(NA, iter_num)beta_2 &lt;- rep(NA, iter_num)tau &lt;- rep(NA, iter_num)# Initializationbeta_0[1] &lt;- 0beta_1[1] &lt;- 1beta_2[1] &lt;- 2tau[1] &lt;- 2# Runfor(i in 1:(iter_num-1)){  beta_0[i+1] &lt;- sample_beta_0(data$Y, data$age, data$income, beta_1[i], beta_2[i], tau[i], 0, 0.01)  beta_1[i+1] &lt;- sample_beta_1(data$Y, data$age, data$income, beta_0[i+1], beta_2[i], tau[i], 0, 0.01)  beta_2[i+1] &lt;- sample_beta_2(data$Y, data$age, data$income, beta_0[i+1], beta_1[i], tau[i], 0, 0.01)  tau[i+1] &lt;- sample_tau(data$Y, data$age, data$income, beta_0[i+1], beta_1[i+1], beta_2[i+1], alpha=2, beta=1)}ResultCode# Set working directorysetwd(\"/Users/Study/Analysis/\")# Load librarylibrary(tidyverse)################################################ Bayesian Linear Regression (Gibbs Sampling) ################################################iter_num &lt;- 15000burn_in_num &lt;- 12000##################### Create fake data #####################num_data &lt;- 1000N &lt;- num_dataage &lt;- rnorm(num_data, mean=50, sd=15)income &lt;- rnorm(num_data, mean=500, sd=100)data &lt;- data.frame(age, income)covariates &lt;- as.matrix(data[,c(\"age\", \"income\")])## Multiple Regressiontrue_beta0 &lt;- 1.5true_beta1 &lt;- 2.8true_beta2 &lt;- -1.2tau_true &lt;- 1betaX &lt;- c(true_beta1, true_beta2)data$Y &lt;- true_beta0 + covariates %*% betaX + rnorm(num_data, sd=1/sqrt(tau_true))## Check with packageres_lm &lt;- lm(Y ~ age + income, data)summary(res_lm)############## Inference ##############sample_beta_0 &lt;- function(y, x1, x2, beta_1, beta_2, tau, mu_0, tau_0){  precision &lt;- tau_0 + tau * N  mu &lt;- tau_0 * mu_0 + tau * sum(y - (beta_1 * x1) - (beta_2 * x2))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}sample_beta_1 &lt;- function(y, x1, x2, beta_0, beta_2, tau, mu_1, tau_1){  precision &lt;- tau_1 + tau * sum(x1*x1)  mu &lt;- tau_1 * mu_1 + tau * sum(x1 * (y - beta_0 - beta_2 * x2))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}sample_beta_2 &lt;- function(y, x1, x2, beta_0, beta_1, tau, mu_2, tau_2){  precision &lt;- tau_2 + tau * sum(x2*x2)  mu &lt;- tau_2 * mu_2 + tau * sum(x2 * (y - beta_0 - beta_1 * x1))  mu &lt;- mu / precision  value &lt;- rnorm(1, mean=mu, sd=1/sqrt(precision))  return(value)}sample_tau &lt;- function(y, x1, x2, beta_0, beta_1, beta_2, alpha, beta){  alpha_new &lt;- alpha + N/2  resid &lt;- y - beta_0 - (beta_1 * x1) - (beta_2 * x2)  beta_new &lt;- beta + sum(resid*resid) / 2  value &lt;- rgamma(1, shape=alpha_new, rate=beta_new)    # alpha = shape, beta = 1/rate}# Prepare storagesbeta_0 &lt;- rep(NA, iter_num)beta_1 &lt;- rep(NA, iter_num)beta_2 &lt;- rep(NA, iter_num)tau &lt;- rep(NA, iter_num)# Initializationbeta_0[1] &lt;- 0beta_1[1] &lt;- 1beta_2[1] &lt;- 2tau[1] &lt;- 2# Runfor(i in 1:(iter_num-1)){  beta_0[i+1] &lt;- sample_beta_0(data$Y, data$age, data$income, beta_1[i], beta_2[i], tau[i], 0, 0.01)  beta_1[i+1] &lt;- sample_beta_1(data$Y, data$age, data$income, beta_0[i+1], beta_2[i], tau[i], 0, 0.01)  beta_2[i+1] &lt;- sample_beta_2(data$Y, data$age, data$income, beta_0[i+1], beta_1[i], tau[i], 0, 0.01)  tau[i+1] &lt;- sample_tau(data$Y, data$age, data$income, beta_0[i+1], beta_1[i+1], beta_2[i+1], alpha=2, beta=1)}# Make Figuremake_figure &lt;- function(params, true_values, params_names, burn_in=2000, slice=5){  num_params &lt;- length(params)  tidy_params &lt;- list()  for(i in 1:num_params){    temp &lt;- data.frame(value=params[[i]])    temp$parameter &lt;- params_names[i]    temp$iter &lt;- 1:nrow(temp)    temp &lt;- temp[burn_in:nrow(temp) ,]    slice_index &lt;- seq(1, nrow(temp), slice)# slice data    temp &lt;- temp[slice_index, ]    tidy_params[[i]] &lt;- temp  }  tidy_params &lt;- do.call(rbind.data.frame, tidy_params)  true &lt;- data.frame(    parameter = params_names,    value = true_values    )  param &lt;- ggplot(data=tidy_params, aes(x=iter, y=value, group=parameter, color=parameter)) +       geom_line() +       geom_point(size=0.3) +      facet_wrap(~parameter, ncol=2, scales = \"free\") +      geom_hline(data = true, aes(yintercept = value), size=0.7) +      theme_bw() +      theme(legend.position=\"none\")  param_density &lt;- ggplot(data=tidy_params, aes(x=value, color=parameter, fill=parameter)) +    geom_density(stat = \"density\", position = \"identity\",alpha=0.6) +     facet_wrap(~parameter, ncol=2, scales = \"free\") +    geom_vline(data = true, aes(xintercept = value), size=0.7) +    theme_bw() +    theme(legend.position=\"none\")  return(list(param, param_density))}params &lt;- list(beta_0, beta_1, beta_2, tau)true_values &lt;- c(true_beta0, true_beta1, true_beta2, tau_true)params_names &lt;- c(\"beta_0\", \"beta_1\", \"beta_2\", \"tau\")gs_res3 &lt;- make_figure(params, true_values, params_names, burn_in=burn_in_num, slice=5)gs_res3[[1]]gs_res3[[2]]saveRDS(gs_res3,\"figure.obj\")saveRDS(data,\"data.obj\")ggsave(\"trace.png\", gs_res3[[1]], width=7, height=5)ggsave(\"hist.png\", gs_res3[[2]], width=7, height=6)","categories": ["Bayesian Analysis"],
        "tags": [],
        "url": "https://shusei-e.github.io/bayesian%20analysis/BayesianMultipleRegression/",
        "teaser":null},{
        "title": "Faster Log Gamma Calculation",
        "excerpt":"We sometimes encounter the calculation ofIf  is small, there is a faster calculation. We use the property of Gamma function, .Example code in Cython:cdef extern from \"math.h\":   double log (double x)   double lgamma (double x)cdef double gammaln_sum(np.ndarray[ftype_t, ndim=1] array1,                        np.ndarray[ftype_t, ndim=1] array2):    # (special.gammaln( alpha_s + n_s_temp ) - special.gammaln( alpha_s )).sum()    cdef double value = 0.0    cdef int i    cdef int n = array1.shape[0] # length of array    cdef int m    for i in range(n):        if array2[i] &lt; 18:            # low frequency words            for m in range(int(array2[i])):                value += log(array1[i] + m)        else:            value += lgamma(array1[i]) - lgamma(array2[i])    return valueIn C++:double CstmCpp::calc_loglik_doc_second_term(int &amp;doc_id, int &amp;word_id, SparseVector&lt;int&gt; &amp;n_k_doc){  // compute_second_term_of_log_probability_document    double alpha_k = calc_alpha_word_given_doc(doc_id, word_id);  int n_k_w = n_k_doc.coeffRef(word_id); // get_word_count_in_doc()  if(n_k_w &gt; 18){    return lgamma(alpha_k + n_k_w) - lgamma(alpha_k);  }else{    double temp = 0.0;    for(int i=0; i&lt;n_k_w; i++){      temp += log(alpha_k + i);     }    return temp;  }}","categories": ["Machine Learning"],
        "tags": [],
        "url": "https://shusei-e.github.io/machine%20learning/FasterLogGamma/",
        "teaser":null},{
        "title": "Debug, Debug, Debug",
        "excerpt":"We would like to minimize bugs when we write code. If we encounter errors, we know something is going wrong, but some serious bugs don’t stop the code.Bug??  Values go wrong even if you are sure that you implemented the code correctlyWrite a debug function  Write a debug function and try the code with a tiny data  Make sure all counters work wellCoding  Break your function into small parts and make sure each component works fine.  Introduce a linting tool: ALE in Vim  Be careful especially when you copy and paste a part of codeWrite a documentation  R: devtools  Python: Sphinx  C++: DoxygenRewriteDo not hesitate to rewrite the entire code. Rewriting takes shorter time than debugging unorganized code (which could be infinite).Case StudiesNumber order and text orderWhen I read text files, the order was text_1, text_10, text_101, text_102. However, in a csv file that stores covariates, the order was text_1, text_2, text_3. There was a mismatch.","categories": ["Tips"],
        "tags": [],
        "url": "https://shusei-e.github.io/tips/DebugDebugDebug/",
        "teaser":null},{
        "title": "アメリカに引っ越す",
        "excerpt":"出発までビザ  F1ビザの場合、I-20が届いてからすぐに手続きを始めた方が良い          6月の頭はそれなりに空いている        書類の作成には相当時間がかかるので、その時間も考慮する必要がある          写真をアップロードするセクションがあるが、結局使われるのは大使館に持参する写真なので、アップロードする方は最悪規定に沿っていなくても大丈夫      銀行の残高証明書も持って行ったが、大学から奨学金などがもらえる場合は不要だったかもしれない        I-20は毎回の入国時に必要になるので、大切に保管・携帯住民票  税金などを考えるのなら、国外転出すべき  一時帰国の際の健康保険は、日本の滞在先(ホテルなどではなく)があれば住民票を戻すことで可能          保険料は月極め、月末に住民票があるかで計算される      住民票は住所があるところでしか作れないので、友人宅での「同居人」の扱いも検討する      その場合必要な書類が変わって来るので注意      年金  住民票あり+大学休学: 両親を代理人として学生免除の申請  住民票あり+大学退学: 源泉徴収票を元に日本での所得を計算して所得による免除  住民票なし: 任意加入できる、免除などはないマイナンバー  番号自体は残る荷物を送る  郵便局のEMSが(それなりに)安くて早い(東海岸で税関に止まらなければ5日程度)          品目を書かないといけないので、どの箱に何が入っているかをメモしておく      万が一紛失された際に備えるならば、差出人は自分自身じゃない方が手続きしやすい(らしい)      船便にするともっと安いけど無くなることもあるとか      到着後I-20の登録  International Officeに持って行ってサインをもらうSIMカードの入手  SIMフリーの携帯があればAT&amp;Tなどでプリペイド式のカードをすぐ入手できる銀行口座の開設  Bank of AmericaはI-20とパスポートだけで開設できた  一定金額口座($1500-)にあればクレジットカードの発行もできるとのこと          日本からの送金にはTransferWiseが便利      念のためにキャッシュパスポートも準備しておくと、いざという時に送金に使える        Overdraftに注意  クレジットカードは色々と面倒          Credit card historyに影響するので支払いは滞りなく行いたい        クレジットカードの支払いを自動化          銀行によってはワンクリックでできるらしいが、Bank of Americaの場合は設定が必要だった      まず初回のclosing dataを迎えるのを待つ      Bill Pay Centerから適当な額でクレジットカードに対して支払いを行う      Payment Centerに支払い先の一覧が出てくる (先ほどの支払いはキャンセルしてもOK)      eBillsが届いていたら、eBillsから支払いを設定することができる (届いていなければ電話する)      家具などの入手  Amazonでも色々手に入る  ベッド          Twin: 日本のシングルぐらいのサイズ        照明          家によっては天井に照明がない      税  F-1ビザで、大学からstipendをもらっている場合は、Individual Taxpayer Identification Numbersが必要なので、Form W-7を作成する  RAとかで働くのなら、Social Security Numberが必要になる  大学のOfficeに書類を提出したりと手続きが必要          ITINが届いたら、GLACIERというシステムの情報の更新と書類の再提出が必要になる      運転免許証  州によって違う  書類の準備          住所の証明 (Bank statementが一番簡単だけど、ない場合は大学からの学費の請求書など)      SSN Denial Letter: オフィスに行かないともらえない      Passport、I-20など        試験の準備をする          このサイトに練習問題があるので解く      17時にRMV Officeが閉まるのなら、15時ギリギリになると再受験させてもらえなくなるので注意      問題はランダムに表示されるので、難しい回と簡単な回があるらしい        路上試験を受ける          自動車学校を経由すると、予約の代行をしてくれるので便利      日本にない試験科目(3-point-turn)があるので、練習が多少は必要      国際免許証  住むなら、各州で運転免許証を取らないといけないが、一応日本からも持参した  免許更新センターなどで入手可能Social Security Number  RAなどとして働くなら必要  雇用する機関(〇〇センターなど)からレターをもらい、それをInternational Officeに持って行き更にレターをもらう","categories": ["日本語記事"],
        "tags": [],
        "url": "https://shusei-e.github.io/%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%A8%98%E4%BA%8B/MovingToUS/",
        "teaser":null},{
        "title": "Yet another expression of Bernoulli distribution",
        "excerpt":"The probability mass function of Bernoulli distribution isIf we take the proportion of it,Note that  works here as a constant.","categories": ["Statistics"],
        "tags": [],
        "url": "https://shusei-e.github.io/statistics/Bernoulli/",
        "teaser":null}]
