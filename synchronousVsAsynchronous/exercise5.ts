const fib = async () => {
    let fib = [0, 1];
    for (let i = 2; i <= 10; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        await new Promise((resolve) => setTimeout(() => {
            resolve(console.log(fib[i]));
        }, 500));
    }
}

const longRunningFunction = () => {
    fib();
    console.log("done");
}

longRunningFunction();