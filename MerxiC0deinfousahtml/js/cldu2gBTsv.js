
function dadasdwqerewqaasd(name)
{
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
        return "";
    else
        return results[1];
}
$(document).ready(function(){
    var bcda = dadasdwqerewqaasd('bcda');
    $('.t-f-n-w').text(bcda);
});
