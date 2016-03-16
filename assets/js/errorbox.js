function show_message(text) {
    $("#error").html(text)
        .show();
}

function show_error(text) {
    show_message(text);
}