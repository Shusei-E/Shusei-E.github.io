---
layout: single
permalink: /research/ihLDA/
title: Scale-Invariant Infinite Hierarchical Topic Model
author_profile: false
classes: wide
sidebar:
  nav: side
---
<!--[← Back to Research](/research/)-->

## Abstract
<span style="font-size: 0.9em">
Hierarchical topic models have been employed to organize a large number of diverse topics from corpora into a latent tree structure.
However, existing models yield fragmented topics with overlapping themes whose expected probability becomes exponentially smaller along the depth of the tree.
To solve this intrinsic problem, we propose a scale-invariant infinite hierarchical topic model (ihLDA).
The ihLDA adaptively adjusts the topic creation to make the expected topic probability decay considerably slower than that in existing models.
Thus, it facilitates the estimation of deeper topic structures encompassing diverse topics in a corpus.
Furthermore, the ihLDA extends a widely used tree-structured prior (Adams et al., 2010) in a hierarchical Bayesian way, which enables drawing an infinite topic tree from the base tree while efficiently sampling the topic assignments for the words.
Experiments demonstrate that the ihLDA has better topic uniqueness and hierarchical diversity than existing approaches, including state-of-the-art neural models.
</span>


## Paper
<u>Shusei Eshima</u> and Daichi Mochihashi. 2023. "Scale-Invariant Infinite Hierarchical Topic Model." In _Findings of the Association for Computational Linguistics: ACL 2023_, pp.11731–11746. <!-- <a href="https://doi.org/xxx" target="_blank">https://doi.org/xxx</a>.-->


## Code
<a href="https://github.com/Shusei-E/ihLDA" target="_blank">GitHub</a>


## Award
* The earlier version of this project won <a href="https://www.anlp.jp/nlp2023/award.html" target="_blank">the Excellence Award</a>  at the 29th Annual Meeting of the Association for Natural Language Processing. <small>(one of the eleven awarded papers out of 579 papers)</small>
