---
layout: single
permalink: /research/m_ary_policy_tree/
title: Scalable Multi-Action Offline Policy Learning with an *m*-ary Tree
author_profile: false
classes: not_too_wide
sidebar:
  nav: side
---
<!--[← Back to Research](/research/)-->


## Abstract
<span style="font-size: 0.9em">
Decision trees are widely used as interpretable policies for personalized treatment assignment. However, existing methods face practical challenges: binary trees can be too restrictive to capture complex heterogeneity, and tree-search algorithms often fail to scale to industrial datasets with tens of millions of observations.
To address these gaps, we propose a scalable offline policy-learning method for multi-action settings. We optimize exactly over fixed-depth, bounded-branching *m*-ary policy trees on categorical or discretized features by maximizing an estimated policy value based on doubly robust scores.
Multiway splits yield richer partitions at a given depth, enabling more expressive decision rules without deeper trees. We combine pruning, caching, and parallelization to achieve better scalability than existing algorithms.
For statistical efficiency, we use nested folds to leverage all observations. For each outer fold, we hold it out for honest evaluation and further split the remaining folds into inner folds for doubly robust score computation and policy learning; we then pool results across all outer folds.
Across 20 industry-scale experiments, *m*-ary policy trees outperform a commonly used global-winner-for-all policy in seven cases after false discovery rate control. In contrast, globally optimized binary trees do not achieve comparable gains, even at a greater depth.
</span>

<img src="/assets/images/research/m-ary_policy_tree.png" alt="Cover Image" style="display: block; width: 100%; max-width: 800px; margin: 0 auto 1em;">

## Paper
<u>Shusei Eshima</u>. 2026. "Scalable Multi-Action Offline Policy Learning with an *m*-ary Tree." In *Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2 (KDD '26: Research Track)*. <a href=" https://doi.org/10.1145/3770855.3817861" target="_blank"> https://doi.org/10.1145/3770855.3817861</a>.

## Algorithm
[Tree Search Algorithm](https://github.com/Shusei-E/m-ary_policy_tree)


## Presentation
2025 Conference on Digital Experimentation @ MIT (Oral Presentation)
