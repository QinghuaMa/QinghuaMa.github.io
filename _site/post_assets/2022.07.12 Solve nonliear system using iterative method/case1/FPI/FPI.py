import numpy as np
import matplotlib.pyplot as plt
import matplotlib

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

# The nonlinear function
f = lambda x: x**6 - 5*x**5 + 3*x**4 + x**3 - 7*x**2 + 7*x - 20
# The Fixed-point iterative function
g = lambda x : (20/(x**5) - 7/(x**4) + 7/(x**3) - 1/(x**2) - 3/x + 1005) * x /(x + 1000)


x_list = []
maxIteration = 2000

# Define Fixed-point iterative process
def FixedPointIteration(g, x0, maxIteration):
    x_i = x0
    num = 0

    for i in range(maxIteration):
        x_list.append(x_i)
        x_i  = g(x_i)

        num += 1

    return x_i, num

x_i, num = FixedPointIteration(g, 4, maxIteration=maxIteration)

fig, axes = plt.subplots(1,2, figsize = (17, 7))
axes[0].plot(range(len(x_list)), x_list)
axes[0].set_xlabel('Iteration')
axes[0].set_ylabel(r'$x_i$')

axes[1].plot(range(len(x_list)),np.array(x_list) - g(np.array(x_list)))
axes[1].set_xlabel('Iteration')
axes[1].set_ylabel(r'$x_i$-$g(x_i)$')
fig.savefig('fig.eps')
plt.show()


