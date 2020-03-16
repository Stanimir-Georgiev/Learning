window.addEventListener('load', function () {
    this.console.log('Hello')
    this.console.log('Hello')
    this.console.log('Hello')
    let element = this.document.createElement('p');
    element.textContent = "Hello I am for test";
    this.document.getElementsByTagName('body')[0].append(element)
    this.setTimeout(function () {
        alert('Hello');
        window.location = `https://www.facebook.com/`
    }, 200)

})