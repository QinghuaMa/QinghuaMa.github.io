---
layout: single
title: Hello, world!
date: 2022-01-01 10:17:07
categories: 日常
tags: ["Hello world"]
description: Hello, world!
categories: 
---

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!



$e^{i\pi}+1=0$

![image-20220707190620188](https://blogimages-1309804558.cos.ap-nanjing.myqcloud.com/imgpersonal/image-20220707190620188.png)



```python
f = lambda x: x[0] ** 2 + x[1] ** 2 + x[2] ** 2 - 1.0
g = lambda x: 2 * x[0] ** 2 + x[1] ** 2 - 4 * x[2]
h = lambda x: 3 * x[0] ** 2 - 4 * x[1] ** 2 + x[2] ** 2
```





```matlab
function output1 = CustomRmoutliers(x)
% x: timetable
% output1: timetable, removed outliers

tt = diff(x.Variables);
[~, breakpoints] = rmoutliers(tt, 'median');
x(breakpoints, :) = [];

output1 = x;
end
```



![Mapping](https://blogimages-1309804558.cos.ap-nanjing.myqcloud.com/imgpersonal/Mapping.gif)
