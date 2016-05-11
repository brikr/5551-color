function pad(n) {
    return n.length >= 4 ? n : new Array(4 - n.length + 1).join('0') + n;
}

$(document).ready(function() {
    $('#colorpicker').change(function() {
        color = parseInt($('#colorpicker').val().substr(1), 16);
        r = ((color & 0xFF0000) >> 16) / 8;
        g = ((color & 0x00FF00) >> 8) / 8;
        b = (color & 0x0000FF) / 8;
        a = 1;

        rgba = 0;
        rgba += r << 11;
        rgba += g << 6;
        rgba += b << 1;
        rgba += a;

        $('#rgbavalue').html(pad(rgba.toString(16).toUpperCase()));
    });
});
