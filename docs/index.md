---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: R-NACOS
titleTemplate: R-NACOS docs
editLink: true
lastUpdated: true

head:
  - - meta
    - name: description
      content: r-nacos docs
  - - meta
    - name: keywords
      content: r-nacos 

hero:
  name: "R-NACOS"
  text: ""
  tagline: "『r-nacos是一个用rust实现的nacos服务』"
  # 按钮相关
  actions:
    - theme: brand
      text: "简介"
      link: "/notes/intro/"  
    - theme: alt
      text: "快速开始"
      link: "/notes/quick_started/"

# 按钮下方的描述
features:
  - title: "更轻量"
    details: "r-nacos使用rust实现，rust是无gc的系统级言语，使得服务运行时占用的内存和CPU资源更少。演示系统中接入接近5千个配置，450个服务实例，服务使用的内存在15M左右。"
  - title: "更稳定"
    details: "依托于rust的内存安全特性，通过所有权系统和生命周期的机制，几乎消除了空指针引用、悬挂指针、数据竞争和内存泄漏等常见的内存错误。r-nacos基本没有遇到过内存相关问题，可以长时间稳定运行。从用户的实际反馈情况来看，也确实基本没有遇到过非功能性问题。"
  - title: "高性能"
    details: "rust是系统级高性能编程语言，同时r-nacos通过精心设计的数据结构和算法。这使得它能够在支持大规模的数据时，同时保持较高的性能。"  
---




