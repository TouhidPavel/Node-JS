const url = require('url')

// Modern API: URL Class
const myURL = new URL('https://www.example.com:8000/path/name?query=123#fragment')
console.log(myURL.href)
console.log(myURL.protocol)
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.port)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.hash)



// Legacy API: url.parse()
const parseURL = url.parse('https://www.example.com:8000/path/name?query=123#fragment')
console.log(parseURL.href)
console.log(parseURL.protocol)
console.log(parseURL.host)
console.log(parseURL.hostname)
console.log(parseURL.port)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.hash)



// Query String Parsing
const myURL1 = new URL('https://www.example.com/path?name=John&age=30')
console.log(myURL1.searchParams.get('name'))
console.log(myURL1.searchParams.get('age'))

myURL1.searchParams.forEach((value, name)=>{
    console.log(`${name} : ${value}`)
})



// Constructing a URL
const newURL = new URL('https://www.example.com')
newURL.pathname = 'new-path'
newURL.searchParams.set('first-name', 'Touhiduzzaman')
newURL.searchParams.set('last-name', 'Pavel')
console.log(newURL.href)



// Building a URL: url.format()
const buildURL = url.format({
    protocol: 'https:',
    hostname: 'www.example.com',
    port: '3000',
    pathname: 'something',
    query: {
        'first-name': 'Touhiduzzaman',
        'last-name': 'Pavel'
    }
})
console.log(buildURL)



// Resolving URLs: url.resolve()
const baseURL = 'https://example.com/home/'
const targetURL = 'about'
const resolvedUrl = url.resolve(baseURL, targetURL)
console.log(resolvedUrl)