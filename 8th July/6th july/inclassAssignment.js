// Create a class FooBar, whose objects have foo and bar as their attributes.
// Also, write the function solve(obj, param1, param2).
// obj: Object of class FooBar
// param1, param2: some random numbers provided to you directly as input.

// Function solve(obj, param1, param2) should return the value obj.foo + obj.bar + func(param1, param2)

// There is a global function named func(a, b), which takes two numbers as parameters, and its implementation is hidden.


class FooBar {
    constructor(foo, bar) {
        this.foo = foo;
        this.bar = bar;
    }
}

function solve(obj, gfoo, gbar) {
    const g = func.bind(obj);

    return obj.foo + obj.bar + g(gfoo, gbar)
}

