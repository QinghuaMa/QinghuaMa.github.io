---
layout: single
title: Hello, manim!
date: 2022-07-20 21:23:43 +0800
categories: 
 - Program
tags: 
 - manim
 - python
toc: false
---

本示例来自 [manim community edition 官方文档](https://docs.manim.community/en/stable/index.html)。首先按照步骤安装manim：[Installation on Windows platform](https://docs.manim.community/en/stable/installation/windows.html)。之后，按照示例编写代码：[Quik start](https://docs.manim.community/en/stable/tutorials/quickstart.html)：

```python
from manim import *

class CreateCircle(Scene):
    # Most of the time, the code for scripting an animation is entirely contained within the construct() method of a Scene class.
    # Inside construct(), you can create objects, display them on screen, and animate them.
    # Note: All animations must reside within the construct() method of a class derived from Scene.
    # Other code,such as auxiliary or mathematical functions, may reside outside the class.
    def construct(self):
        hello = Text('Hello, manim!', font='Arial', font_size=90)
        self.play(Write(hello))
        self.wait(2)
        self.play(FadeOut(hello))

        circle = Circle()  # create a circle
        circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
        # self.play(Create(circle))  # show the circle on screen
        square = Square()  # create a square
        square.rotate(PI / 4)  # rotate a certain amount

        self.play(Create(square))  # animate the creation of the square
        self.play(Transform(square, circle))  # interpolate the square into the circle
        self.play(FadeOut(square))  # fade out animation
```

之后，在命令行中输入：

```
manim -pql script1.py CreateCircle
```

即可得到动画视频。其中，script1.py 是python文件名，CreateCircle 是上面创建的继承自Scene的子类。

⚠注意：因为我使用的是腾讯云图床，没有找到合适的视频外链，因此是在终端中输入以下代码生成相应的gif文件：

```
manim script1.py --format=gif
```

生成的gif文件如下所示：

<img src="https://blogimages-1309804558.cos.ap-nanjing.myqcloud.com/imgpersonal/CreateCircle_ManimCE_v0.16.0.post0.gif" alt="CreateCircle_ManimCE_v0.16.0.post0" style="zoom:67%;" />
