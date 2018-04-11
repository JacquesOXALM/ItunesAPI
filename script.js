


$(document).ready(function() {
    $("#searchArt").on("click",function(){
        number =$("#howmany").val();
        var name= $("#name").val();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + name + "&limit=" + number,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (result) {
                console.log(result);
                myFunction(result);
            },
            error: function () {
                alert('Failed!');
            }
        });
    });


});



function myFunction(result){
    document.getElementById("content").innerHTML= "";
 for(var i=0; i<number; i++){
     var album = result.results[i].collectionName;
     var coverart = result.results[i].artworkUrl100;
     var music = result.results[i].previewUrl;
     var title = result.results[i].trackName;
     var artist = result.results[i].artistName;
     var price = result.results[i].collectionPrice;
     var genre = result.results[i].primaryGenreName;
     document.getElementById("content").innerHTML += "<tr class='song'>"+"</tr><td id='number'>" + (i + 1) + "</td>"+ "<td id='img'><img src=" + coverart + "></td>" +
         "<td <div align='center' id='info'>" + title +
         "<br>" + album + "<br><audio controls=\"true\" src=\"" +
         music + "\" id=\"audio\" type=\"audio/m4a\"></audio></div><br><button class='detail'>View Details</button><div style='display: none' class='det'><br>$"+ price + "<br> Genre: " +genre +"</div></td>";
    }
    $(".detail").on("click",function(){
        var det = $(this).parent().find(".det");
        console.log(det);
        det.slideToggle();
    })

}






function Search(){


}