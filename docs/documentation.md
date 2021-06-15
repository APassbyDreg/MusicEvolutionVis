# 音乐演进可视化项目说明文档

贺梓淇 姜冠宇 应宇欣 曾博涵

## 总览

![overview](documentation_imgs/overview.png)

音乐自始至终都是人类的文化财富，对于音乐文化的分析与研究是很有价值的一项工作。

本组就过去百年间众多流派中著名音乐家及其重要作品的特性与联系进行了可视化分析，并使用 Vue, Echarts 等框架，以热力图、关系图的方式呈现了可视化的效果。

## 各部分说明

### 属性表部分



### 关系图部分



### 比例尺部分
为了显示不同状态下音乐流派比例，我们设计了流派比例尺来满足这一需求，在实现中使用了条形图，主要分为三种情况：
+ 未选中流派或音乐家：此时本部分会根据各个年份不同流派的音乐比例数据进行绘制
+ 当选中流派未选中音乐家：此时本部分会显示在当前时间下选中流派受到哪些流派的影响
+ 当选中音乐家时：此时本部分会显示在当前时间下选中音乐家受到哪些流派的影响
此外，点击比例尺中的各个模块，会跳转到选中对应流派时的情况。


### 弹幕部分

为了更加精确地定位到指定的音乐家，我们设计了音乐家背景弹幕来满足这一需求。在实现中，影响力最大的 1000 位音乐家将以弹幕形式在背景持续滚动，而其中影响力最大的约 30% 的音乐家则会被高亮颜色突出，便于识别。当鼠标点击其中任意一位音乐家时，图例将被切换为音乐家中心模式，表格也会被切换为对应的流派的属性表格。

### 设置项部分

我们设计了多种设置项供用户筛选展示不同的内容，包括了重置按钮、表例状态选择器、流派筛选器以及年份范围选择器。为了便于展示各个属性随时间的变化，我们还提供了基于年份选择器的时间动画。