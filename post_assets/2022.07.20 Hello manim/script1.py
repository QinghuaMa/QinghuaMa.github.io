# script1.py
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


