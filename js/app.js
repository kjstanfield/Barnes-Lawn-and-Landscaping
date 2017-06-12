$( ".close" ).hide();
$( ".navlinks" ).hide();

$( ".menu" ).click(function() {
    $( ".navlinks" ).slideToggle( "slow", function() {
        $( ".menu" ).hide();
        $( ".close" ).show();
    });
});

$( ".close" ).click(function() {
        $( ".navlinks" ).slideToggle( "slow", function() {
        $( ".close" ).hide();
        $( ".menu" ).show();
    });
});