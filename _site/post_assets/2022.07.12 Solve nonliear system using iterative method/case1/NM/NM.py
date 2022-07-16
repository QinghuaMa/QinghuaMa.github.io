import torch
import numpy as np
import matplotlib.pyplot as plt
import matplotlib

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

# Define nonlinear function
f = lambda x: x**6-5*x**5+ 3*x**4 + x**3 -7*x**2 + 7*x - 20 

def f_Derivation(x,f):
    return torch.autograd.grad(f(x), x, create_graph= True)

x_list = []

# Specify initial value
x_i = torch.tensor([10.],requires_grad = True)
x_list.append(x_i.data.numpy())

for i in range(50):
    f_val = f(x_i)
    fp = f_Derivation(x_i, f)[0]    
    x_i = x_i - f_val/fp
    x_list.append(x_i.data.numpy())
    
    if f(x_i) < 1e-3:
        break
    
print('Approximate solution：',x_i)
print('Function value of approximate solution',f(x_i))

fig, axes = plt.subplots(1,2, figsize = (17, 7))
axes[0].plot(range(len(x_list)), x_list)
axes[0].set_xlabel('Iteration')
axes[0].set_ylabel(r'$x_i$')

axes[1].plot(range(len(x_list)),f(np.array(x_list)))
axes[1].set_xlabel('Iteration')
axes[1].set_ylabel(r'$f(x_i)$')

fig.savefig('fig.eps')


