import torch
import numpy as np
import matplotlib.pyplot as plt
import matplotlib

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

f = lambda x: torch.cos(x[0] ** 2 + 0.4 * x[1]) + x[0] ** 2 + x[1] ** 2 - 1.6
g = lambda x: 1.5 * x[0] ** 2 - (1/0.36) * x[1] ** 2 - 1.0

# Record intermediate results
x_list, F_value_list = [], []


# Specify initial values
x = torch.tensor([[10.0], [10.0]], requires_grad = True)
x_list.append(x.data.numpy())

for i in range(10):
    # Calculate fucntion value
    F_value = torch.cat((f(x),g(x)),0).reshape((2, 1))
    F_value_list.append(F_value.data.numpy())

    # Calculate Jacobian matrix
    J = torch.cat((torch.autograd.grad(f(x), x, create_graph = True)[0],
               torch.autograd.grad(g(x), x, create_graph = True)[0]), 1).transpose(0, 1)
    
    # Update vector x
    x = x - torch.mm(torch.linalg.inv(J), F_value)
    x_list.append(x.data.numpy())
                        
x_list = np.array(x_list).reshape((-1, 2))
F_value_list = np.array(F_value_list).reshape((-1, 2))

print('Approximate value of vector x: ',x_list[-1], 'Approximate vector function value F: ', F_value_list[-1], sep = '\n')

markers = ['o', '^']
labels0 = [r'$x_1$',r'$x_2$']
labels1 = [r'$f_1$',r'$f_2$']

fig, axes = plt.subplots(1,2, figsize = (17, 7))

for idx, x, f in zip(range(0,2), x_list.T, F_value_list.T):
    axes[0].plot(range(len(x)), x, marker = markers[idx], label = labels0[idx])
    axes[1].plot(range(len(f)), f, marker = markers[idx], label = labels1[idx])
    
axes[0].set_xlabel('Interation')
axes[0].set_ylabel(r'Value of each component of vector x')
axes[0].legend()

axes[1].set_xlabel('Iteration')
axes[1].set_ylabel('Value of each component of vector function value F')
axes[1].legend()
fig.savefig('fig2.eps')