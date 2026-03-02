const http = require('http')
const app = http.createServer((req , res) => {

    if(req.url =='/')
    {
        res.write('This is Home')
    }
    else if(req.url == '/about')
    {
        res.write('This is About')
    }
    else if(req.url == '/contact')
    {
        res.write('This is Contact')
    }
    res.end()
})
app.listen(3000)
