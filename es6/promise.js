
function waitAndSayHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rejected')
        }, 1000);
    });
}

 waitAndSayHello().then(async () => {
    console.log('hello world');
    await waitAndSayHello();
    console.log('here 2')
       
})