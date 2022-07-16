import numpy as np
import matplotlib.pyplot as plt
import matplotlib

# Specify the font properties in the figures
font = {'font.size': 13,
        'font.family': 'serif'}
matplotlib.rcParams.update(font)

# The lower and upper limit
a, b = -1, 5

# Define the nonlinear function
fun = lambda x:x**6-5*x**5+ 3*x**4 + x**3 -7*x**2 + 7*x - 20 
x = np.arange(a,b,0.05)
y = fun(x)

# The profile of the nonlinear funciton
plt.xlim(a, b)
plt.xlabel(r'$x$')
plt.ylabel(r'$y$')
plt.title('The profile of the nonlinear function')
plt.plot(x,y)
plt.axhline(0, color = "k", ls=(0, (5, 5)), alpha=0.8, zorder=0)
fig = plt.gcf()
fig.savefig('fig1.eps')
plt.show()

# Specify parameters
theta = 0.00005         # the minimum interval length
maxIteration = 200      # the maximum iterative number

# Record the convergence process of x0
list_x = []
# Record the interval length of each iteration
range_list = []

# Define Bisection method function
def BisectionMethod(func, a ,b ,theta, maxIteration):
    # func: nonlinear funciton
    # a, b: upper and lower limits, respectively
    # theta: the minimum interval length
    num = 0
    try:
        # If upper and lower bounds of interval are wrong
        if a > b or func(a) * func(b) > 0 or abs(a - b) < theta:
            raise ValueError
 
        # If the solution exists at the endpoint of interval
        if func(a) * func(b) == 0:
            if func(a) == 0:
                return a, num
            else:
                return b, num

        # If the solution exits in the middle of interval
        while True:
            num += 1
            c = (a + b) / 2
        
            list_x.append(c)
            range_list.append(abs(a - b))
            
            if func(c) == 0:
                return c, num
            
            else: 
                if func(a) * func(c) < 0:
                    b = c
                else:
                    a = c
                if abs(a - b) < theta:
                    
                    return (a + b) / 2, num

            if num >= maxIteration:
                print("There maybe exists solution, but the algorithm does not converge.")
                return None

    except ValueError:
        print("Upper and lower bounds of interval may be error")
        return None

# Solve fucntion
x0, num = BisectionMethod(fun, a, b, theta, maxIteration=maxIteration)


# Plot iteration process diagram
fig, axes= plt.subplots(1, 3, figsize=(20, 5))
axes[0].plot(range(len(list_x)), list_x)
axes[0].scatter(range(len(list_x)),list_x,color='tab:brown')
axes[0].set_xlabel('Iteration')
axes[0].set_ylabel(r'$x_i$')

axes[1].plot(range(len(list_x)),[fun(x) for x in list_x])
axes[1].scatter(range(len(list_x)),[fun(x) for x in list_x], color='tab:brown')
axes[1].set_xlabel('Interation')
axes[1].set_ylabel(r'$f(x_i)$')

axes[2].plot(range(len(list_x)),np.array(range_list) / 2)
axes[2].scatter(range(len(list_x)),np.array(range_list) / 2, color='tab:brown')
axes[2].set_xlabel('Iteration')
axes[2].set_ylabel('Upper bound of error')
fig.savefig('fig2.eps')
plt.show()