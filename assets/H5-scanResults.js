/*本页面是扫描二维码的H5页面*/
//本地测试ID
//精简点击事件
$(".leanFile").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
    $("#content").removeClass("hide");
    $("#pdfContent").addClass("hide");
    leanFile(notaryId,notaCode);
})
//全文点击事件
$(".pdfFile1").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
    /*  $("#pdfContent").removeClass("hide");
      $("#content").addClass("hide");*/
    pdfFile1();
});

$(".pdfFile2").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
    /*  $("#pdfContent").removeClass("hide");
      $("#content").addClass("hide");*/
    pdfFile2();
});

$(".pdfFile3").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
    /*  $("#pdfContent").removeClass("hide");
      $("#content").addClass("hide");*/
    pdfFile3();
});

//精简版数据
function leanFile(id,notaCode) {
    if(notaCode != ""){
        url = hostId;
    }else{
        url = hostId2;
        $.ajax({
            url: url + "getStgDataNtznById.htm",
            type: "GET",
            data: {
                "dataId": id,
                "notaCode": notaCode
            },
            dataType: "json",
            success: function (datas) {
                if (datas.success) {
                    sessionStorage.setItem("dataid",datas.data.data_id);
                    sessionStorage.setItem("notaCode",datas.data.nota_code);
                    /* console.log("--------上传的 data---------");
                     console.log(datas);*/
                    var data = datas.data;
                    $(".nota_matter").html(data.nota_matter);
                    $(".notary_name").html(data.notary_name);
                    $(".npo_id").html(data.npo_name);
                    $(".nota_date").html(data.nota_date_cn);
                    $(".nota_code").html(data.nota_code);
                    $(".chain_hash").html(data.chain_hash);
                    $(".data_hash").html(data.trxhash);
                    $(".nota_date").parent("li").nextAll().remove();
					
				if(data.npoMap && data.npoMap.telephone) {
					$(".npo-info").html(data.npoMap.npo_name+'核实电话：<a href="tel:'+data.npoMap.telephone+'" style="color: #0079FE">'+data.npoMap.telephone+'</a>');
				}
                    if(data.sys_status<0){
                        $(".sys_status").removeClass("hide");
                        $(".pdfFile").addClass("hide");
                    }
                    if(data.version>1){
                        $(".version").removeClass("hide");
                    }
                    if(data.trxhash==undefined){
                        $(".hashIsShow").css("display","none");
                        $(".status-bar").css("height","80px");
                    }
                    var personList = data.personList;
                    var html = "";
                    if (personList && personList.length<11) {
                        var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                        for (var i = 0; i < personList.length; i++) {
                            html +=
                                '<li>' +
                                '<span class="e-cert-key ">当事人' + changeNum[i] + ':</span>' +
                                '<span class="e-cert-value ">' + personList[i].person_name + '</span>' +
                                '</li>' +
                                ' <li>' +
                                '<span class="e-cert-key ">有效证件:</span>' +
                                '<span class="e-cert-value cert_code">' + personList[i].cert_code + '</span>' +
                                '</li>';
                        }

                        $(".nota_date").parent().after(html);
                    }
                } else {
                    failMsg(datas.msg);
                }
            }
        })
    }
    $.ajax({
        url: url + "getStgDataNtznById.htm",
        type: "GET",
        data: {
            "dataId": id,
            "notaCode": notaCode
        },
        dataType: "json",
        success: function (datas) {
            if (datas.success) {
                sessionStorage.setItem("dataid",datas.data.data_id);
                sessionStorage.setItem("notaCode",datas.data.nota_code);
                /* console.log("--------上传的 data---------");
                 console.log(datas);*/
                var data = datas.data;
                $(".nota_matter").html(data.nota_matter);
                $(".notary_name").html(data.notary_name);
                $(".npo_id").html(data.npo_name);
                $(".nota_date").html(data.nota_date_cn);
                $(".nota_code").html(data.nota_code);
                $(".chain_hash").html(data.chain_hash);
                $(".data_hash").html(data.trxhash);
                $(".nota_date").parent("li").nextAll().remove();
				if(data.npoMap && data.npoMap.telephone) {
					$(".npo-info").html(data.npoMap.npo_name+'核实电话：<a href="tel:'+data.npoMap.telephone+'" style="color: #0079FE">'+data.npoMap.telephone+'</a>');
				}
                if(data.sys_status<0){
                    $(".sys_status").removeClass("hide");
                    $(".pdfFile").addClass("hide");
                }
                if(data.version>1){
                    $(".version").removeClass("hide");
                }
                if(data.trxhash==undefined){
                    $(".hashIsShow").css("display","none");
                    $(".status-bar").css("height","80px");
                }
                var personList = data.personList;
                var html = "";
                if (personList && personList.length<11) {
                    var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                    for (var i = 0; i < personList.length; i++) {
                        html +=
                            '<li>' +
                            '<span class="e-cert-key ">当事人' + changeNum[i] + ':</span>' +
                            '<span class="e-cert-value ">' + personList[i].person_name + '</span>' +
                            '</li>' +
                            ' <li>' +
                            '<span class="e-cert-key ">有效证件:</span>' +
                            '<span class="e-cert-value cert_code">' + personList[i].cert_code + '</span>' +
                            '</li>';
                    }

                    $(".nota_date").parent().after(html);
                }
            } else {
                failMsg(datas.msg);
            }
        }
    })
}
var DEFAULT_URL = '';
////全文版数据
function pdfFile() {
    var dataid = sessionStorage.getItem("dataid");
    var notaCode = getRequest3("notaCode");

    if(notaCode != ""){
        url = hostId;
        //console.log("----------hash值----------"+hashData);
        $.ajax({
            url: url + "downloadNtzn.htm",
            type: "GET",
            data: {
                "dataId":dataid/*正确参数 dataid*/,
                "notaCode":notaCode
            },
            dataType: "json",
            success: function (datas) {
                if (datas.success) {
                    var path=datas.data.path;
                    // console.log(path);
                    // console.log(datas.data.path);
                    window.open(path,"_top");
                    // DEFAULT_URL=path;
                    // pdfjsLib.getDocument(path)
                } else {
                    failMsg(datas.msg);
                }
            }
        })
    }else {
        url = hostId2;
        //console.log("----------hash值----------"+hashData);
        $.ajax({
            url: url + "downloadNtzn.htm",
            type: "POST",
            data: {
                "dataId":dataid/*正确参数 dataid*/
            },
            dataType: "json",
            success: function (datas) {
                if (datas.success) {
                    var path=datas.data.path;
                    // console.log(path);
                    // console.log(datas.data.path);
                    window.open(path,"_top");
                    // DEFAULT_URL=path;
                    // pdfjsLib.getDocument(path)
                } else {
                    failMsg(datas.msg);
                }
            }
        })
    }

}/*本页面是扫描二维码的H5页面*/
//本地测试ID
//精简点击事件
$(".leanFile").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
    $("#content").removeClass("hide");
    $("#pdfContent").addClass("hide");
    leanFile(notaryId);
})
//全文点击事件
$(".pdfFile").click(function () {
    $(this).find("div").addClass("active");
    $(this).siblings().find("div").removeClass("active");
  /*  $("#pdfContent").removeClass("hide");
    $("#content").addClass("hide");*/
    //pdfFile();
});
//精简版数据
function leanFile(id,notaCode) {
    var url = "";
    if(notaCode != ""){
        url = hostId;
    }else{
        url = hostId2;
    }
    $.ajax({
        url: url + "getStgDataNtznById.htm",
        type: "GET",
        data: {
            "dataId": id,
            "notaCode": notaCode
        },
        dataType: "json",
        success: function (datas) {
            if (datas.success) {
                sessionStorage.setItem("dataid",datas.data.data_id);
                sessionStorage.setItem("notaCode",datas.data.nota_code);
               /* console.log("--------上传的 data---------");
                console.log(datas);*/
                var data = datas.data;
                $(".nota_matter").html(data.nota_matter);
                $(".notary_name").html(data.notary_name);
                $(".npo_id").html(data.npo_name);
                $(".nota_date").html(data.nota_date_cn);
                $(".nota_code").html(data.nota_code);
                $(".chain_hash").html(data.chain_hash);
                $(".data_hash").html(data.trxhash);
				if(data.npoMap && data.npoMap.linktel){
					$(".npo-info").html('公证处核实电话：<a href="tel'+data.npoMap.linktel+'" style="color: #0079FE">'+data.npoMap.linktel+'</a>');
				}
                $(".nota_date").parent("li").nextAll().remove();
                if(data.sys_status<0){
                    $(".sys_status").removeClass("hide");
                    $(".pdfFile").addClass("hide");
                }
                if(data.version>1){
                    $(".version").removeClass("hide");
                }
				 if(data.trxhash==undefined){
					$(".hashIsShow").css("display","none");
					$(".status-bar").css("height","80px");
				}
                var personList = data.personList;
                var html = "";
                if (personList && personList.length<11) {
                    var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                    for (var i = 0; i < personList.length; i++) {
                        html +=
                            '<li>' +
                            '<span class="e-cert-key ">当事人' + changeNum[i] + ':</span>' +
                            '<span class="e-cert-value ">' + personList[i].person_name + '</span>' +
                            '</li>' +
                            ' <li>' +
                            '<span class="e-cert-key ">有效证件:</span>' +
                            '<span class="e-cert-value cert_code">' + personList[i].cert_code + '</span>' +
                            '</li>';
                    }

                    $(".nota_date").parent().after(html);
              }
            } else {
                failMsg(datas.msg);
            }
        }
    })
}
var DEFAULT_URL = '';

////全文版数据
function pdfFile() {
    var dataid = sessionStorage.getItem("dataid");
    var notaCode = getRequest3("notaCode");
    if(notaCode != ""){
        url = hostId;
        //console.log("----------hash值----------"+hashData);
        $.ajax({
            url: url + "downloadNtzn.htm",
            type: "GET",
            data: {
                "dataId":dataid/*正确参数 dataid*/,
                "notaCode":notaCode
            },
            dataType: "json",
            success: function (datas) {
                if (datas.success) {
                    var path=datas.data.path;
                    // console.log(path);
                    // console.log(datas.data.path);
                    window.open(path,"_top");
                    // DEFAULT_URL=path;
                    // pdfjsLib.getDocument(path)
                } else {
                    failMsg(datas.msg);
                }
            }
        })
    }else {
        url = hostId2;
        //console.log("----------hash值----------"+hashData);
        $.ajax({
            url: url + "downloadNtzn.htm",
            type: "POST",
            data: {
                "dataId":dataid/*正确参数 dataid*/
            },
            dataType: "json",
            success: function (datas) {
                if (datas.success) {
                    var path=datas.data.path;
                    // console.log(path);
                    // console.log(datas.data.path);
                    window.open(path,"_top");
                    // DEFAULT_URL=path;
                    // pdfjsLib.getDocument(path)
                } else {
                    failMsg(datas.msg);
                }
            }
        })
    }
}

function pdfFile1() {
    var path="/（2023）京中信内民证字第00756号.pdf";
    // console.log(path);
    // console.log(datas.data.path);
    window.open(path,"_top");
}

function pdfFile2() {
    var path="/（2023）京中信内民证字第00757号.pdf";
    // console.log(path);
    // console.log(datas.data.path);
    window.open(path,"_top");
}

function pdfFile3() {
    var path="/（2023）京中信内民证字第00755号.pdf";
    // console.log(path);
    // console.log(datas.data.path);
    window.open(path,"_top");
}
