var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){

    var q=url.parse(req.url)
    console.log(q.pathname)

    if(req.url==='/'){
    fs.readFile('index.html',function(err,data){
        res.write('hello')
        res.end()
    })
}
else if(req.url==='/signup'){
   fs.readFile('index.html',function(err,data){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()
   })
}
else if(req.url==='/submitaction'){
    res.write('submitted')
    res.end()
}
else{
    res.write("error")
    res.end()
}

} ).listen(3000,()=>console.log("server started"))