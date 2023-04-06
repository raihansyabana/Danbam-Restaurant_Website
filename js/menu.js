$(document).ready(function(){
    //hide
    $('#hide-button').click(function(){
        $('.content').hide()
    })

    //show
    $('#show-button').click(function(){
        $('.content').show()
    })

    //toggle
    $('#toggle-button').click(function(){
        $('.content').toggle()
    })

    //slide-up
    $('#slide-up').click(function(){
        $('.content').slideUp(500)
    })

    //slide-down
    $('#slide-down').click(function(){
        $('.content').slideDown(500)
    })

    //toggle-slide
    $('#slide-toggle').click(function(){
        $('.content').slideToggle(500)
    })

    //animate
    $('#animate-button').click(function(){
        $('.content img').animate({
            width: '500px',
            height: '300px'
        })
    })

    //change content
    $('#cc-button').click(function(){
        //change chtml
        //$('.content').html('<h2>Chocolate</h2> <img src ="assets/chocolate.jpg">')

        //empty html
        //$('.content').empty()

        //append html (+ from the back)
        $('.content').append('<h2>Chocolate</h2> <img src ="assets/chocolate.jpg">')

        //preprend html (+ from the front)
        $('.content').prepend('<h2>Lollipops</h2> <img src ="assets/lollipops.jpg">')
    })


    //get value
    $('#get-value').click(function(){
        alert($('#username').val())

        // get html text
        // console.log($('.content).text())

        // get html 
        // console.log($('.content).html())
    })

    let slideCount = $('.slider .slides .slide').length
    let slideWidth = $('.slider .slides .slide').width()
    let slideHeight = $('.slider .slides .slide').height()
    let totalWidth = slideCount * slideWidth

    $('.slider').css({
        width: slideWidth,
        height: slideHeight
    })
   
    $('.slider .slides').css({
        width: totalWidth,
        marginLeft : -slideWidth
    })

    $('.slider .slides .slide:last-child').prependTo('.slider .slides')

    $('#prev').click(function(){
        $('.slider .slides').animate({
            left: slideWidth
        }, 1000, function(){
            $('.slider .slides .slide:last-child').prependTo('.slider .slides')
            $('.slider .slides').css({
                left : ''
            })
        })
    })

    $('#next').click(function(){
        $('.slider .slides').animate({
            left: -slideWidth
        }, 1000, function(){
            $('.slider .slides .slide:first-child').appendTo('.slider .slides')
            $('.slider .slides').css({
                left : ''
            })
        })
    })


})