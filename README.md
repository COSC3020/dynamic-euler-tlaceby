[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)

# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$ e = \sum^{\infty}\_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

The **worst-case** $\Theta()$ for **both** the `e()` and `factorial()` implimentations is $\Theta(n)$. For the **euler** function, we have to iterate a total of $n$ times to compute the factorial and sum. The `factorial()` method is also $\Theta(n)$ as we need to iterate from $1 \to n$.

**Note**: I decided not to call `factorial()` inside the `e()` function. This was done as it requires only $n$ iterations but if I called the factorial, foreach iteration it would be another n iterations. So the worst-case complexity would be $\Theta(n^2)$.
