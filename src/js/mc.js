$(function() {
    var mc_em = 'insurance4solutions';
    mc_em = mc_em + '@';
    mc_em = mc_em + 'gmail.com';

    $('#copyright_year').html(new Date().getFullYear());
    $('#mc_em1').html(mc_em);
    $('#mc_em1').attr('href', 'mailto:' + mc_em);
    $('#mc_em2').html(mc_em);
    $('#mc_em2').attr('href', 'mailto:' + mc_em);
});