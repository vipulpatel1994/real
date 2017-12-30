(function () {
    'use strict';

    angular.module('eliteApp').controller('TeamDetailCtrl', ['$stateParams', '$ionicPopup', 'eliteApi', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams, $ionicPopup, eliteApi) {
        var vm = this;
        
        //console.log("$stateParams", $stateParams);
        vm.productId = Number($stateParams.id);
        
        var data = eliteApi.getLeagueData();
        var data = [
            {
                "id" : 1,
                "name" : "Dehydrated White Onion",
                "title" : "Dehydrated White Onion",
                "detailTypes" : [
                    {
                        "name" : "Dehydrated White Onion Flakes",
                        "size" : "8 to 15 mm",
                        "detail" : "These Dehydrated White Onion-Kibbled/Flakes are offered to our clients at superior range. These are exported to our clients with complete freshness and taste. These are highly used for the preparation of sausages pie and black pudding. We have our qualified experts and make sure these are processed using quality material. These are available in standard size of 8-25 mm and medically useful as an antiseptic & expectorant, healing wounds.",
                        "imgName" : "1_1.jpg"
                    },{
                        "name" : "Dehydrated White Onion Chopped",
                        "size" : "3 to 5 mm",
                        "detail" : "These are processed under the supervision of our quality experts who uses advance technology for its freshness and quality. These onion chops are highly used for preparing ethnic food, canned & frozen vegetable mixes, dry casserole mixes and stuffing mixes.",
                        "imgName" : "1_2.jpg"
                    },{
                        "name" : "Dehydrated White Onion Granules",
                        "size" : "0.5 to 1 mm",
                        "detail" : "The dehydrated white onion granules offered by us is obtained by drying or dehydrating white onion, the flavor of the flakes or the granules onion is similar to garlic, but is much milder and much sweeter. These granules dehydrated onion is used in preparations of soups, sauces, food preparations, vegetable, stuffing mixes, fast foods etc. Making use of suitable processing techniques, we ensure requisite content of moisture, yeast etc., in our dehydrated white onion granules as per the international standards",
                        "imgName" : "1_3.jpg"
                    },{
                        "name" : "Dehydrated White Onion Minced",
                        "size" : "1 to 3 mm",
                        "detail" : "We are one of the leading manufacturers and suppliers of a wide gamut of Dehydrated White Onion Minced. These minced onions are processed using organically cultivated onions which we procure from reliable vendors of the market. All the minced onions offered by us are thoroughly dried to give enhanced flavors and aroma. Further, clients can avail these dehydrated onions from us in various packaging.",
                        "imgName" : "1_4.jpg"
                    },{
                        "name" : "Dehydrated White Onion Powder",
                        "size" : "80 to 100 mesh",
                        "detail" : "This Dehydrated Onion Powder is highly used for seasoning & flavoring while cooking various foods. These onion powders are processed using latest techniques and assure to retain their strong smell and soothing color. Clients can avail these at cost-effective rates. These powders are packaged with best quality and keep the product with high safety.",
                        "imgName" : "1_5.jpg"
                    }
                ]
            },
            {
                "id" : 2,
                "name" : "Dehydrated Red Onion",
                "title" : "Dehydrated Red Onion",
                "detailTypes" : [
                    {
                        "name" : "Dehydrated Red Onion Flakes",
                        "size" : "8 to 15 mm",
                        "detail" : "These Dehydrated Red Onion-Kibbled/Flakes are offered to our clients at superior range. These are exported to our clients with complete freshness and taste. These are highly used for the preparation of sausages pie and black pudding. We have our qualified experts and make sure these are processed using quality material. These are available in standard size of 8-25 mm and medically useful as an antiseptic & expectorant, healing wounds.",
                        "imgName" : "2_1.jpg"
                    },{
                        "name" : "Dehydrated Red Onion Chopped",
                        "size" : "3 to 5 mm",
                        "detail" : "These are processed under the supervision of our quality experts who uses advance technology for its freshness and quality. These onion chops are highly used for preparing ethnic food, canned & frozen vegetable mixes, dry casserole mixes and stuffing mixes.",
                        "imgName" : "2_2.jpg"
                    },{
                        "name" : "Dehydrated Red Onion Granules",
                        "size" : "0.5 to 1 mm",
                        "detail" : "The dehydrated red onion granules offered by us is obtained by drying or dehydrating red onion, the flavor of the flakes or the granules onion is similar to garlic, but is much milder and much sweeter. These granules dehydrated onion is used in preparations of soups, sauces, food preparations, vegetable, stuffing mixes, fast foods etc. Making use of suitable processing techniques, we ensure requisite content of moisture, yeast etc., in our dehydrated red onion granules as per the international standards",
                        "imgName" : "2_3.jpg"
                    },{
                        "name" : "Dehydrated Red Onion Minced",
                        "size" : "1 to 3 mm",
                        "detail" : "We are one of the leading manufacturers and suppliers of a wide gamut of Dehydrated Red Onion Minced. These minced onions are processed using organically cultivated onions which we procure from reliable vendors of the market. All the minced onions offered by us are thoroughly dried to give enhanced flavors and aroma. Further, clients can avail these dehydrated onions from us in various packaging.",
                        "imgName" : "2_4.jpg"
                    },{
                        "name" : "Dehydrated Red Onion Powder",
                        "size" : "80 to 100 mesh",
                        "detail" : "This Dehydrated Onion Powder is highly used for seasoning & flavoring while cooking various foods. These onion powders are processed using latest techniques and assure to retain their strong smell and soothing color. Clients can avail these at cost-effective rates. These powders are packaged with best quality and keep the product with high safety.",
                        "imgName" : "2_5.jpg"
                    }
                ]
            },
            {
                "id" : 3,
                "name" : "Dehydrated Garlic",
                "title" : "Dehydrated Garlic",
                "detailTypes" : [
                    {
                        "name" : "Dehydrated Garlic Flakes",
                        "size" : "8 to 15 mm",
                        "detail" : "We offer our clients an array of Dehydrated Garlic Flakes, in the form of minced, powder and granules. Garlic is widely known for its pungent flavor, used for flavoring various culinary dishes. Hence, these products can be used for seasoning dry soups mixes, sauces, vegetable mixes, stuffing mixes and fast foods.",
                        "imgName" : "3_1.jpg"
                    },{
                        "name" : "Dehydrated Garlic Minced",
                        "size" : "1 to 3 mm",
                        "detail" : "We also supply and export a wide range of Garlic Spray Dried Powder which is used in various purposes. Garlic has also some medicinal values and other features. These are dried and processed in machines which are hygienic and operated by skilled workers. The quality of these products is tested at all levels of manufacturing. Dehydrated Garlic, Garlic Paste, Garlic Powder, Garlic Products at Penta Pure Foods. We are leading manufacturer, supplier, exporter of Dehydrated Garlic, Garlic Paste, Garlic Powder, Garlic Products.",
                        "imgName" : "3_2.jpg"
                    },{
                        "name" : "Dehydrated Garlic Granules",
                        "size" : "40 to 60 mesh",
                        "detail" : "We offer Dehydrated Garlic in the from of Dehydrated Garlic Flakes, Dehydrated Garlic Minced, Dehydrated Garlic Granules and Dehydrated Garlic Powder. The Dehydrated Garlic is used in dry soups mixes, sauces, food preparations, vegetable mixes, stuffing mixes and fast foods.",
                        "imgName" : "3_3.jpg"
                    },{
                        "name" : "Dehydrated Garlic Powder",
                        "size" : "80 to 100 mesh",
                        "detail" : "We offer the finest quality of Dehydrated Garlic Powder to the global clients. Being an eminent processor, we make sure that the raw material used is procured from the best garlic plants. The products are well-appreciated for their quality assured packaging and rich taste. We provide these products at reasonable rates to suit the budget of our clients.",
                        "imgName" : "3_4.jpg"
                    }
                ]
            },
            {
                "id" : 4,
                "name" : "Fresh Onion",
                "title" : "Fresh Onion",
                "detailTypes" : [
                    {
                        "name" : "Fresh Red Onion",
                        "size" : "",
                        "detail" : "We hold deep knowledge in supplying Red Onion - procured from the authentic cultivators. Onion has wide usage in garnishing as well as cooking mostly all kind of foods. We also provide onion in customized packing and quantities as per the detailed specifications given by clients.",
                        "imgName" : "4_1.jpg"
                    },{
                        "name" : "Fresh White Onions",
                        "size" : "",
                        "detail" : "White Onion offered by us complements the flavor of other ingredients and makes the dish delicious. We also provide onion in customized packing and quantities as per the detailed specifications given by clients.",
                        "imgName" : "4_2.jpg"
                    }
                ]
            }
        ];

        data.forEach(function (value, index) {
            if(value.id == vm.productId) {
                console.log(value)
                vm.title = value.title;
                vm.name = value.name;
                vm.detailTypes = value.detailTypes;
            };
        })

        // vm.alertPopup = $ionicPopup.alert({
        //     title: 'You are now my subscribed to Cat Facts',
        //     template: 'You will meow receive fun daily facts about CATS!'
        // });



        /*
        var team = _.chain(data.teams)
                    .flatten("divisionTeams")
                    .find({ "id": vm.teamId })
                    .value();

        vm.teamName = team.name;

        vm.games = _.chain(data.games)
                    .filter(isTeamInGame)
                    .map(function (item) {
                        var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                        var opponentName = isTeam1 ? item.team2 : item.team1;
                        var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
                        return {
                            gameId: item.id,
                            opponent: opponentName,
                            time: item.time,
                            location: item.location,
                            locationUrl: item.locationUrl,
                            scoreDisplay: scoreDisplay,
                            homeAway: (isTeam1 ? "vs." : "at")
                        };
                    })
                    .value();

        vm.teamStanding = _.chain(data.standings)
                           .flatten("divisionStandings")
                           .find({ "teamId": vm.teamId })
                           .value();

        vm.following = false;*/
/*
        vm.toggleFollow = function(){

            if (vm.following) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Unfollow?',
                    template: 'Are you sure you want to unfollow?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        vm.following = !vm.following;
                    }
                });
            } else{
                vm.following = !vm.following;
            }
        };


        function isTeamInGame(item){
            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }

        function getScoreDisplay(isTeam1, team1Score, team2Score) {
            if (team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            }
            else {
                return "";
            }
        }*/
    };
})();

