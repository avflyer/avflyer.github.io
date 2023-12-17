
console.time('start WebServer need time');
var libHttp = require('http');  //HTTP协议模块
var libUrl = require('url');    //URL解析模块
var libFs = require("fs");      //文件系统模块
var libPath = require("path");  //路径解析模块

var funGetContentType = function (filePath) {
    var contentType = "";
    //使用路径解析模块获取文件扩展名
    var ext = libPath.extname(filePath);
    switch (ext) {
        case ".html":
            contentType = "text/html";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".gif":
            contentType = "image/gif";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".ico":
            contentType = "image/icon";
            break;
        default:
            contentType = "application/octet-stream";
    }
    return contentType;
}


var funWebSvr = function (req, res) {
    var reqUrl = req.url;
    console.log(reqUrl);
    var pathName = libUrl.parse(reqUrl).pathname;
    if (libPath.extname(pathName) == "") {
        pathName += "/"; //指定访问目录
    }

    if (pathName.charAt(pathName.length - 1) == "/") {
        pathName += "index.html"; //指定为默认网页
    }
    var filePath = libPath.join("./", pathName);
    libFs.exists(filePath, function (exists) {
        if (exists) {
            res.writeHead(200, { "Content-Type": funGetContentType(filePath) });
            var stream = libFs.createReadStream(filePath, { flags: "r", encoding: null });
            stream.on("error", function () {
                res.writeHead(404);
                res.end("<h1>404 Read Error</h1>");
            });
            stream.pipe(res);
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        }
    });
}

var webSvr = libHttp.createServer(funWebSvr);

webSvr.on("error", function (error) {
    console.log(error);
});


webSvr.listen(8081, function () {
    console.log('WebServer running at http://127.0.0.1:8081');
    console.timeEnd('start WebServer need time');
});
