"use strict";

$(document).ready(function () {
    function handleClick(event) {
        event.preventDefault();
        const clickedLink = $(event.target);
        const divAboveLink = clickedLink.prev();

        //Toggle the hide class on the div element
        divAboveLink.toggleClass('hide');
        //See if div element above current link has class of hide
        const isHidden = divAboveLink.hasClass('hide');
        //Update link text based on the hide class
        if (isHidden) {
            clickedLink.text('Show more');
        } else {
            clickedLink.text('Show less');
        }
    }
    $('a').click(handleClick);
});
