import numpy as np
import matplotlib.pyplot as plt
import matplotlib

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

# Define vector function
f = lambda x: x[0] ** 2 + x[1] ** 2 + x[2] ** 2 - 1.0
g = lambda x: 2 * x[0] ** 2 + x[1] ** 2 - 4 * x[2]
h = lambda x: 3 * x[0] ** 2 - 4 * x[1] ** 2 + x[2] ** 2

# Record intermediate values
x_list, A_list, F_value_list = [], [], []

# Specify
x = np.array([1.0, 1.0, 1.0]).reshape((3, 1))

A = np.eye(3)
A_list.append(A)

for i in range(100):
    x_list.append(x)
    
    F_value = np.array([f(x), g(x), h(x)])
    F_value_list.append(F_value)
    
    x_current = x - np.linalg.inv(A).dot(F_value)
    F_current_value = np.array([f(x_current), g(x_current), h(x_current)])
    
    Delta = F_current_value - F_value
    delta = x_current - x
    
    A = A + ((Delta - A.dot(delta)).dot(delta.T))/np.dot(delta.T, delta)
    A_list.append(A)
    x = x_current

    if np.linalg.norm(F_value_list[-1]) < 1e-4:
        print('Iterative numbers:', i + 1)
        break
    
print('Approximate value of vector x: ',x_list[-1],'Approximate vector function value F:', F_value_list[-1], sep = '\n')
x_list = np.array(x_list).reshape((-1,3)).T
F_value_list = np.array(F_value_list).reshape((-1,3)).T


# Plot iterative process
markers = ['o', '^', 's']
labels0 = [r'$x_1$',r'$x_2$',r'$x_3$']
labels1 = [r'$f_1$',r'$f_2$',r'$f_3$']
fig, axes = plt.subplots(1,2, figsize = (17, 7))
for idx, x, f in zip(range(0,3), x_list, F_value_list):
    axes[0].plot(range(len(x)), x, marker = markers[idx], label = labels0[idx])
    axes[1].plot(range(len(f)), f, marker = markers[idx], label = labels1[idx])
    
axes[0].set_xlabel('Interation')
axes[0].set_ylabel(r'Value of each component of vector x')
axes[0].legend()

axes[1].set_xlabel('Iteration')
axes[1].set_ylabel('Value of each component of vector function value F')
axes[1].legend()
fig.savefig('fig1.eps')

