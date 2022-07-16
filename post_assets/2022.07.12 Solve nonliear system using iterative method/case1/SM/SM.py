import matplotlib
import numpy as np
import matplotlib.pyplot as plt

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

# Define nonlinear function
def f(x): return x**6-5*x**5 + 3*x**4 + x**3 - 7*x**2 + 7*x - 20


x_list, error_list = [], []

# Specify tolerance
tolerance = 1e-4

# Specify initial values, x_0, x_1
x_0, x_1 = 3, 4
x_list.append(x_0)
x_list.append(x_1)

def SecantMethod(tolerance, x_0, x_1):
    error = tolerance + 1
    cur_root = x_1
    count = 1
    while error > tolerance:
        sect = (f(x_1) - f(x_0)) / (x_1 - x_0)
        cur_root = cur_root - f(x_1) / sect
        x_list.append(cur_root)

        error = abs(f(cur_root))
        error_list.append(error)

        x_0 = x_1
        x_1 = cur_root
        count += 1

    return x_1, count

x_1, count = SecantMethod(tolerance, x_0, x_1)
x_1, count, f(x_1)

fig, axes = plt.subplots(1,2, figsize = (17, 7))
axes[0].plot(range(len(x_list)), x_list)
axes[0].scatter(range(len(x_list)),x_list, color='tab:brown')
axes[0].set_xlabel('Iteration')
axes[0].set_ylabel(r'$x_i$')

axes[1].plot(range(len(x_list)),f(np.array(x_list)))
axes[1].scatter(range(len(x_list)),f(np.array(x_list)), color='tab:brown')
axes[1].set_xlabel('Iteration')
axes[1].set_ylabel(r'$f(x_i)$')
fig.savefig('fig.eps')