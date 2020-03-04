jQuery(document).ready(function ($) {
    $("select").change(function() {
        $("iframe").attr("src", $(this).val())
    })
});
