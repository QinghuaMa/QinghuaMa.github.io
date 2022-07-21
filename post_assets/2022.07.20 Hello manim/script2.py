# script2.py
from manim import *

class TrySections(Scene):
    def construct(self):
        # play the first animations...
        # you don't need a section in the very beginning as it gets created automatically
        self.next_section()

        # Hello, world!
        hello = Text('Hello, manim!', font='Arial', font_size=90)
        self.play(Write(hello))
        self.wait(2)
        self.play(FadeOut(hello))
        self.next_section()

        # Be aware that you need **at least one animation** in each section,
        # so here we have to use self.wait()
        self.add(Circle())
        self.wait()
        self.next_section()
