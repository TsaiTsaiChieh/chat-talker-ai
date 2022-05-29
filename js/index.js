// top btn
$(".top").on("click", function(event) {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

const project = [{
            "userNum": "10000",
            "basePrice": 600,
            "proPrice": 1600,
        },
        {
            "userNum": "15000",
            "basePrice": 1200,
            "proPrice": 2400,
        },
        {
            "userNum": "20000",
            "basePrice": 1800,
            "proPrice": 3200,
        },
        {
            "userNum": "25000",
            "basePrice": 2400,
            "proPrice": 4000,
        },
        {
            "userNum": ">25000",
            "basePrice": 3000,
            "proPrice": 4800,
        }
    ]
    // price btn
$('.btn-price').click(function() {
    $('.btn-price').removeClass('active');
    const idx = $(this).index()
    $(this).addClass('active');
    $('span.user-count').text(project[idx].userNum)
    $('.base > span.price-count').text(project[idx].basePrice)
    $('.standard > span.price-count').text(project[idx].proPrice)
});

// toggle question
$('.toggle-btn').click(function() {
    $(this).parent().toggleClass('active');
});