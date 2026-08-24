---
permalink: /
seo_title: "Rui Yang | Foundation Models for Agents & Reinforcement Learning"
description: "Rui Yang is a Ph.D. candidate at UIUC developing reliable foundation models for interactive agents through multimodal post-training and reinforcement learning."
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. candidate in Computer Science at UIUC <img src="/images/uiuc-mark.png" alt="" class="intro-school-logo intro-school-logo--uiuc" width="15" height="15" aria-hidden="true">, advised by Professors [Tong Zhang](http://tongzhang-ml.org) and [Huan Zhang](https://www.huan-zhang.com). Previously, I received bachelor's and master's degrees from Tsinghua University <img src="/images/tsinghua-mark.png" alt="" class="intro-school-logo intro-school-logo--tsinghua" width="18" height="18" aria-hidden="true"> and HKUST <img src="/images/hkust-mark.svg" alt="" class="intro-school-logo intro-school-logo--hkust" width="18" height="18" aria-hidden="true">.

<p class="research-intro">My research focuses on building <strong>reliable interactive agents powered by foundation models</strong> that can perceive multimodal inputs, reason about complex tasks, evaluate outcomes, and act effectively in dynamic environments. I also study <strong>robust learning under distribution shift and imperfect feedback</strong>, spanning LLM/VLM alignment, reward modeling, and robust offline and goal-conditioned RL.</p>

<div class="research-overview" id="research">
  <article>
    <h3>Multimodal agents</h3>
    <p>Scalable post-training and evaluation for multimodal agents that perceive accurately, assess their current state, and reason and act effectively over long horizons.</p>
    <p class="research-links"><a href="https://openwebrl.github.io/">OpenWebRL</a> · <a href="https://gui-libra.github.io/">GUI-Libra</a> · <a href="https://microsoft.github.io/GUI-Actor">GUI-Actor</a> · <a href="https://arxiv.org/abs/2608.01456">MeMento</a> · <a href="https://arxiv.org/abs/2510.12693">ERA</a> · <a href="https://embodiedbench.github.io/">EmbodiedBench</a></p>
  </article>
  <article>
    <h3>Trustworthy alignment &amp; evaluation</h3>
    <p>Aligning LLMs/VLMs with heterogeneous human preferences, together with robust reasoning evaluation under changing inputs.</p>
    <p class="research-links"><a href="https://arxiv.org/abs/2402.10207">RiC</a> · <a href="https://arxiv.org/abs/2406.10216">GRM</a> · <a href="https://arxiv.org/abs/2505.24846">MiCRo</a> · <a href="https://arxiv.org/abs/2502.13131">DRMs</a> · <a href="https://dynamath.github.io/">DynaMath</a></p>
  </article>
  <article>
    <h3>Robust and generalizable RL</h3>
    <p>Robust offline and goal-conditioned RL under data corruption, observation shifts, and unseen goals.</p>
    <p class="research-links"><a href="https://openreview.net/forum?id=_QzJJGH_KE">RORL</a> · <a href="https://openreview.net/forum?id=5hAMmCU0bK">RIQL</a> · <a href="https://openreview.net/forum?id=UrQySwOk4q">GOAT</a> · <a href="https://openreview.net/forum?id=KJztlfGPdwW">WGCSL</a></p>
  </article>
</div>

<p class="job-market-note">I am actively seeking full-time opportunities in foundation models, AI agents, and reinforcement learning.</p>



<!-- Prior to my PhD, I was fortunate to work closely with Prof. [Chongjie Zhang](https://engineering.wustl.edu/faculty/Chongjie-Zhang.html) (Washington University in St. Louis), Dr. [Lei Han](http://www.leihan.org) (Noitom Robotics, formerly Tencent AI Lab/Robotics X Lab), and Prof. [Meng Fang](https://mengfn.github.io) (University of Liverpool).  -->



## News {#news}

<!-- - **🌟 (2025.11)** Check out our new paper about visual backdoor attacks on VLM-based embodied agents [BEAT](https://arxiv.org/abs/2510.27623)! -->

- **🌟 2026.06** We released **[OpenWebRL](https://arxiv.org/abs/2606.02031)**, an open framework for training visual web agents with online multi-turn RL on live websites, and **[Orchard](https://arxiv.org/abs/2605.15040)**, an open-source framework with scalable training recipes across diverse agent domains.
- **🎉 2026.04** [ReCAP](https://arxiv.org/abs/2603.23559) was accepted to **ICML 2026**.
- **🌟 2026.02** We released [GUI-Libra](https://gui-libra.github.io/), a data-efficient post-training recipe for GUI agents that achieves strong online performance using 81K open-source examples.
- **🎉 2026.01** [BEAT](https://arxiv.org/abs/2510.27623) and [DROCO](https://arxiv.org/abs/2512.02486) were accepted to **ICLR 2026**.
- **🎉 2025.11** [MiCRo](https://arxiv.org/abs/2505.24846) received an **EMNLP 2025 Outstanding Paper Award**.
- **🎉 2025.09** [GUI-Actor](https://arxiv.org/abs/2506.03143) and [ADG](https://arxiv.org/abs/2505.23871) were accepted to **NeurIPS 2025**, and [MergeBench](https://arxiv.org/abs/2505.10833) to the **Datasets & Benchmarks Track**.
- **🎉 2025.05** [EmbodiedBench](https://github.com/EmbodiedBench/EmbodiedBench) was accepted to **ICML 2025** as an **oral** paper.


---
## Selected Publications {#publications}

<p class="section-note"><sup>*</sup> Equal contribution. Selected papers I led or co-led; see <a href="https://scholar.google.com/citations?user=QHSUy3MAAAAJ">Google Scholar</a> for the full list.</p>

### Foundation Models for Interactive Agents

- **[OpenWebRL: Demystifying Online Multi-turn Reinforcement Learning for Visual Web Agents](https://arxiv.org/abs/2606.02031)**.  
  <span class="badge badge-arxiv">Preprint 2026</span> [[Code]](https://github.com/OpenWebRL/OpenWebRL) [[Project]](https://openwebrl.github.io/) [[Models & Data]](https://huggingface.co/OpenWebRL)  
  <span class="paper-authors">**Rui Yang**<sup>*</sup>, Qianhui Wu<sup>*</sup>, Yuxi Chen, Hao Bai, Wenlin Yao, Hao Cheng, Baolin Peng, Huan Zhang, Tong Zhang, Jianfeng Gao.</span>

- **[GUI-Libra: Training Native GUI Agents to Reason and Act with Action-aware Supervision and Partially Verifiable RL](https://arxiv.org/abs/2602.22190)**.  
  <span class="badge badge-arxiv">Preprint 2026</span> [[Code]](https://github.com/GUI-Libra/GUI-Libra) [[Project]](https://gui-libra.github.io/)  
  <span class="paper-authors">**Rui Yang**, Qianhui Wu, Zhaoyang Wang, Hanyang Chen, Ke Yang, Hao Cheng, Huaxiu Yao, Baolin Peng, Huan Zhang, Jianfeng Gao, Tong Zhang.</span>

- **[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://arxiv.org/abs/2502.09560)**.  
  <span class="badge badge-icml">ICML 2025</span> <span class="badge badge-oral">Oral</span> [[Code]](https://github.com/EmbodiedBench/EmbodiedBench) [[Project]](https://embodiedbench.github.io/)  
  <span class="paper-authors">**Rui Yang**<sup>*</sup>, Hanyang Chen<sup>*</sup>, Junyu Zhang<sup>*</sup>, Mark Zhao<sup>*</sup>, Cheng Qian, Kangrui Wang, Qineng Wang, Teja Venkat Koripella, Marziyeh Movahedi, Manling Li, Heng Ji, Huan Zhang, Tong Zhang.</span>

- **[GUI-Actor: Coordinate-Free Visual Grounding for GUI Agents](https://arxiv.org/abs/2506.03143)**.  
  <span class="badge badge-neurips">NeurIPS 2025</span> [[Code]](https://github.com/microsoft/GUI-Actor) [[Project]](https://microsoft.github.io/GUI-Actor)  
  <span class="paper-authors">Qianhui Wu<sup>*</sup>, Kanzhi Cheng<sup>*</sup>, **Rui Yang**<sup>*</sup>, Chaoyun Zhang, Jianwei Yang, Huiqiang Jiang, Jian Mu, Baolin Peng, Bo Qiao, Reuben Tan, Si Qin, Lars Liden, Qingwei Lin, Huan Zhang, Tong Zhang, Jianbing Zhang, Dongmei Zhang, Jianfeng Gao.</span>

### Reliable Reasoning and Alignment
- **[DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models](https://arxiv.org/abs/2411.00836)**.  
  <span class="badge badge-iclr">ICLR 2025</span> [[Code]](https://github.com/DynaMath/DynaMath) [[Project]](https://dynamath.github.io/)  
  <span class="paper-authors">Chengke Zou<sup>*</sup>, Xingang Guo<sup>*</sup>, **Rui Yang**<sup>*</sup>, Junyu Zhang, Bin Hu, Huan Zhang.</span>

- **[Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs](https://arxiv.org/abs/2406.10216)**.  
  <span class="badge badge-neurips">NeurIPS 2024</span> [[Code]](https://github.com/YangRui2015/Generalizable-Reward-Model)  
  <span class="paper-authors">**Rui Yang**, Ruomeng Ding, Yong Lin, Huan Zhang, Tong Zhang.</span>

- **[Rewards-in-Context: Multi-objective Alignment of Foundation Models with Dynamic Preference Adjustment](https://arxiv.org/abs/2402.10207)**.  
  <span class="badge badge-icml">ICML 2024</span> [[Code]](https://github.com/YangRui2015/RiC)  
  <span class="paper-authors">**Rui Yang**<sup>*</sup>, Xiaoman Pan<sup>*</sup>, Feng Luo<sup>*</sup>, Shuang Qiu<sup>*</sup>, Han Zhong, Dong Yu, Jianshu Chen.</span>


- **[MiCRo: Mixture Modeling and Context-aware Routing for Personalized Preference Learning](https://arxiv.org/abs/2505.24846)**.  
  <span class="badge badge-emnlp">EMNLP 2025</span> <span class="badge badge-award">Outstanding Paper</span>  
  <span class="paper-authors">Jingyan Shen<sup>*</sup>, Jiarui Yao<sup>*</sup>, **Rui Yang**<sup>*</sup>, Yifan Sun, Feng Luo, Rui Pan, Tong Zhang, Han Zhao.</span>

  

### Robust Offline RL and Goal-Conditioned RL

- **[Towards Robust Offline Reinforcement Learning under Diverse Data Corruption](https://openreview.net/forum?id=5hAMmCU0bK)**.  
  <span class="badge badge-iclr">ICLR 2024</span> <span class="badge badge-spot">Spotlight</span> [[Code]](https://github.com/YangRui2015/RIQL)  
  <span class="paper-authors">**Rui Yang**<sup>*</sup>, Han Zhong<sup>*</sup>, Jiawei Xu<sup>*</sup>, Amy Zhang, Chongjie Zhang, Lei Han, Tong Zhang.</span>


- **[RORL: Robust Offline Reinforcement Learning via Conservative Smoothing](https://openreview.net/forum?id=_QzJJGH_KE)**.  
  <span class="badge badge-neurips">NeurIPS 2022</span> <span class="badge badge-spot">Spotlight</span> [[Code]](https://github.com/YangRui2015/RORL)  
  <span class="paper-authors">**Rui Yang**<sup>*</sup>, Chenjia Bai<sup>*</sup>, Xiaoteng Ma, Zhaoran Wang, Chongjie Zhang, Lei Han.</span>

- **[What Is Essential for Unseen Goal Generalization of Offline Goal-conditioned RL?](https://openreview.net/forum?id=UrQySwOk4q)**.  
  <span class="badge badge-icml">ICML 2023</span> [[Code]](https://github.com/YangRui2015/GOAT)  
  <span class="paper-authors">**Rui Yang**, Yong Lin, Xiaoteng Ma, Hao Hu, Chongjie Zhang, Tong Zhang.</span>

- **[Rethinking Goal-conditioned Supervised Learning and Its Connection to Offline RL](https://openreview.net/forum?id=KJztlfGPdwW)**.  
  <span class="badge badge-iclr">ICLR 2022</span> [[Code]](https://github.com/YangRui2015/AWGCSL)  
  <span class="paper-authors">**Rui Yang**, Yiming Lu, Wenzhe Li, Hao Sun, Meng Fang, Yali Du, Xiu Li, Lei Han, Chongjie Zhang.</span>

## Experience {#experiences}
- <img src="/images/apple.svg" alt="Apple" class="exp-logo"> **Research Intern**, Apple Foundation Models, 2026.

- <img src="/images/microsoft-mark.svg" alt="Microsoft" class="exp-logo"> **Research Intern**, Microsoft Research, Deep Learning Group, 2025.

- <img src="/images/tencent-en.svg" alt="Tencent" class="exp-logo"> **Research Intern**, Tencent AI Lab and Robotics X Lab, 2020–2022 (multiple internship terms).

- <img src="/images/meituan.png" alt="Meituan" class="exp-logo"> **Machine Learning Intern**, Meituan, 2019.




## Service {#services}

Conference Reviewer: ICML, ICLR, NeurIPS (<span class="badge badge-top-reviewer">NeurIPS 2023 Top Reviewer</span>), ACL/ARR, ICRA, AAMAS.

Journal Reviewer: IEEE Robotics and Automation Letters (RA-L), IEEE Transactions on Neural Networks and
Learning Systems (TNNLS), IEEE Transactions on Artificial Intelligence (TAI), Machine Learning, Journal of Artificial Intelligence Research.

Teaching Assistant: CS 441 Applied Machine Learning, UIUC; COMP 4211 Machine Learning, HKUST; COMP 1021 Introduction to Computer Science, HKUST.


## Hobbies {#others}

Outside research, I enjoy 🏃 running, 🏓 table tennis, and 🏊 swimming. My personal bests are 1 h 30 min in the half marathon and 3 h 36 min in the marathon.
