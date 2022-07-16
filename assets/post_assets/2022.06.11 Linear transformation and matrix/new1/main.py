from manim import *

class test1(Scene):
    def construct(self):
        # number grid
        numberplane = NumberPlane(
            x_range=[-5, 5, 1],
            y_range=[-5, 5, 1],
            background_line_style={
                "stroke_width": 1,
                "stroke_opacity": 0.4
            }
        )
        # Origin dot
        OriginDot = Dot(ORIGIN)
        self.add(numberplane, OriginDot)

        # bases
        base1 = Vector([1, 0], color=RED)
        base2 = Vector([0, 1], color=YELLOW)
        base1Text = MathTex('\\hat{i}=', '(1,0)').next_to(base1.get_end(), DOWN)
        base2Text = MathTex('\\hat{j}=', '(0, 1)').next_to(base2.get_end(), LEFT)
        self.add(base1, base2, base1Text, base2Text)

        # vector
        v = Vector([2, 3], color=GREEN)
        vText = MathTex('\\vec{v}=(2,3)').next_to(v.get_end(), RIGHT)
        self.add(v, vText)

class test2(Scene):
    def construct(self):
        # number grid
        numberplane = NumberPlane(
            x_range=[-7, 7, 1],
            y_range=[-5, 5, 1],
            background_line_style={
                "stroke_width": 1,
                "stroke_opacity": 0.4
            }
        )
        # Origin dot
        OriginDot = Dot(ORIGIN)
        self.add(numberplane, OriginDot)

        # bases
        base1 = Vector([1, 0], color=RED)
        base2 = Vector([-1, 1], color=YELLOW)
        base1Text = MathTex('\\hat{i}_{transformed}=', '(1,0)').next_to(base1.get_end(), DOWN)
        base2Text = MathTex('\\hat{j}_{transformed}=', '(-1, 1)').next_to(base2.get_end(), LEFT)
        self.add(base1, base2, base1Text, base2Text)

        # vector
        v = Vector([-1, 3], color=GREEN)
        vText = MathTex('\\vec{v}_{transformed}=(-1,3)').next_to(v.get_end(), RIGHT)
        self.add(v, vText)