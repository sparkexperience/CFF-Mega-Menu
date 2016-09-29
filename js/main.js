$(function () {
    $('.primaryNav__item').each(function () {
        var $container = $(this),
            $link = $container.find('.primaryNav__item-link'),
            $closeLink = $container.find('.subMenu__close'),
            activeclass = 'subMenu__active';

        $link.on('click', function (e) {
            e.preventDefault();
            $container.toggleClass(activeclass);

            $container.siblings().removeClass(activeclass);
        });

        $closeLink.on('click', function (e) {
            e.preventDefault();
            $container.removeClass(activeclass);
        });
    });


    $('.alternateMenu__hasLInks').each(function () {
        var $container = $(this),
            $link = $container.find('.alternateMenu__open-link'),
            activeclass = 'alternateMenu__active';

        $link.on('click', function (e) {
            e.preventDefault();
            $container.toggleClass(activeclass);

            $container.siblings().removeClass(activeclass);
        });
    });
});