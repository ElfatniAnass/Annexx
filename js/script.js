// récupérer et afficher les données JSON dans html
var arrayData = [];
$(document).ready(function () {
    $.ajax({
         url: "https://github.com/ElfatniAnass/Annexx/blob/main/data/data.json", success: function (result) {
            console.log(result);
            $.each(JSON.parse(result), function (index, item) {
                arrayData.push(item);
                $(".fetch-content").append(
                    "<div class='col-lg-3 col-md-4 col-sm-6 col-12 text-center mrb-2'>" +
                    "<div class='custom-card'>" +
                    "<div class='title'>Garde Meubles " + "<br>" + item.city + ' ' + item.area + "</div>" +
                    "<div class='card-body'>" +
                    "<div class='subtitle'>" +
                    "<h5> <img src='./assets/icons/icon-location-card.svg' alt=''> Adresse </h5> " +
                    "<p class='desc'>" + item.adresse + ' ' + item.zipcode + "<br>" + item.commun + ' ' + item.city + "</p>" +
                    "</div>" +
                    "<div class='subtitle'>" +
                    "<h5> <img src='./assets/icons/icon-phone-card.svg' alt=''> Téléphone </h5> " +
                    "<p class='desc'>" + item.phone + "</p>" +
                    "</div>" +
                    "<div class='subtitle'>" +
                    "<h5> <img src='./assets/icons/icon-timer-card.svg' alt=''> Horaires des bureaux </h5> " +
                    "<p class='desc'>" + item.schedule.workingday + "<br>" + item.schedule.weekend + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>"
                );
            });
        }
    });
});


// chercher par Commune 
$('#btnsearch').click(function () {
    $('#refresh-content').empty();
    var search = $('#search').val();
    const result = arrayData.filter(element => element.commun.toLowerCase().includes(search.toLowerCase()));
    document.getElementById('refresh-content').scrollIntoView();
    if(result.length){
        $.each(result, function (key, val) {
            $(".fetch-content").append(
                "<div class='col-lg-3 col-md-4 col-sm-6 col-12 text-center mrb-2'>" +
                "<div class='custom-card'>" +
                "<div class='title'>Garde Meubles " + "<br>" + val.city + ' ' + val.area + "</div>" +
                "<div class='card-body'>" +
                "<div class='subtitle'>" +
                "<h5> <img src='./assets/icons/icon-location-card.svg' alt=''> Adresse </h5> " +
                "<p class='desc'>" + val.adresse + ' ' + val.zipcode + "<br>" + val.commun + ' ' + val.city + "</p>" +
                "</div>" +
                "<div class='subtitle'>" +
                "<h5> <img src='./assets/icons/icon-phone-card.svg' alt=''> Téléphone </h5> " +
                "<p class='desc'>" + val.phone + "</p>" +
                "</div>" +
                "<div class='subtitle'>" +
                "<h5> <img src='./assets/icons/icon-timer-card.svg' alt=''> Horaires des bureaux </h5> " +
                "<p class='desc'>" + val.schedule.workingday + "<br>" + val.schedule.weekend + "</p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
        });
    } else {
        $(".fetch-content").append(
            "<div class='col-12 text-center mrb-2'> <h1>Aucun résultat trouvé</h1> </div>"
        );
    }
});
