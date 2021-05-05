const url = "https://api.nasa.gov/planetary/apod?api_key=5OYov8qoTcHzNm87Luc5IfPN9yrd8Bey5gu2SoT0";

function search(){
    let data = $("#insertDate").val();
        $.ajax({url: url+"&date="+data,
        success: function(result){
        space(result);
                } 
        });
};

function space(obj){
    let spImg = obj.url
    let imgSpace = JSON.stringify(obj.media_type);
    console.log(imgSpace);
    
    $("h2").html(obj.title);

    
    if (imgSpace === '"image"') {
        $("iframe").css("display", "none")
        $("img").attr("src", spImg)
        // $("img").css("display", "block")
    }
    else{
        $("img").css("display", "none")
        $("iframe").attr("src", spImg);
        $("iframe").css("width 640px", "height 480px", "display block", "border none")
        $("img").css("width: 250px", "height: 250px")
    }
}
