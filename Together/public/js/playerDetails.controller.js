var app = angular.module("togetherApp");

function playerDetailsControllerFn($scope,$http,communication) {
	//console.log("communication works?",JSON.parse(communication.get()).playerName);
	var vm = this;
	vm.tab='fitness';
    var playerName = communication.get();
    var playerId = communication.getId();

    var getPlayerBio = function() {
        $http.post("/getPlayerDetail",{playerName:playerName}).
        then(function(data) {
            if(data.status==200){
                vm.playerBio = data.data[0];
            }
        })
    }
    getPlayerBio();

    //console.log(angular.toJson(player));
    var generateSeriesDataForIntensityChart = function(rawData) {
        var seriesData = [];

        
        var singlePlayerData = [];

        angular.forEach(rawData,function(pData) {
            singlePlayerData.push(pData.points);
        });
        seriesData.push({'name':playerName,'data':singlePlayerData});    
        
        console.log(seriesData);
        return seriesData;
    }

    var generateSeriesDataForFqChart = function(rawData) {
        var seriesData = [];

        
        var singlePlayerData = [];

        angular.forEach(rawData,function(pData) {
            singlePlayerData.push(pData.points);
        });
        seriesData.push({'name':playerName,'data':singlePlayerData});    
        
        console.log(seriesData);
        return seriesData;
    }

    var getWeightIntensityData = function() {
        $http.post('/getPlayerIntensityData',{'playerId':playerId}).
        then(function (data) {
            vm.weightIntensityData = data.data;
            var playerNames = [];
            var generatedWeightSeriesData = generateSeriesDataForIntensityChart(data.data);
            console.log("generatedWeightSeriesData",generatedWeightSeriesData);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            });*/

            $scope.weightIntensityLineChartOptions = {
                title: {
                    text: 'Player Intensity Points(Weekly) ',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
                },
                yAxis: {
                    title: {
                        text: 'Points'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'Points'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: generatedWeightSeriesData
            };
           

              
     })

    }
    getWeightIntensityData();

    var getFqIntensityData = function() {
        $http.post('/getPlayerFrequenyData',{'playerId':playerId}).
        then(function (data) {
            vm.weightIntensityData = data.data;
            var playerNames = [];
            var generatedWeightSeriesData = generateSeriesDataForFqChart(data.data);
            console.log("generatedWeightSeriesData",generatedWeightSeriesData);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            });*/

            $scope.fqLineChartOptions = {
                title: {
                    text: 'Player Frequency Points(Weekly)',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
                },
                yAxis: {
                    title: {
                        text: 'Points'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                tooltip: {
                    valueSuffix: 'Points'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: generatedWeightSeriesData
            };
           

              
     })

    }
    getFqIntensityData();

     var getFqTenacityData = function() {
        $http.post('/getPlayerTenacityData',{'playerId':playerId}).
        then(function (data) {
            vm.weightIntensityData = data.data;
            var playerNames = [];
            var generatedWeightSeriesData = generateSeriesDataForIntensityChart(data.data);
            console.log("generatedWeightSeriesData",generatedWeightSeriesData);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            });*/

            $scope.tenacityLineChartOptions = {
                title: {
                    text: 'Player Tenacity Points(Weekly)',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
                },
                yAxis: {
                    title: {
                        text: 'Points'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                tooltip: {
                    valueSuffix: 'Points'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: generatedWeightSeriesData
            };
           

              
     })

    }
    getFqTenacityData();



   /* var generateSeriesDataForIntensityChart = function(rawData) {
        var seriesData = [];

        angular.forEach(rawData,function(d) {
            var singlePlayerData = [];

            angular.forEach(d.data,function(pData) {
                singlePlayerData.push(pData.runningIntensityPoint);
            });
            seriesData.push({'name':d.name,'data':singlePlayerData});    
        });
        console.log(seriesData);
        return seriesData;
    }


    var generateSeriesDataForWeightIntensityChart = function(rawData) {
        var seriesData = [];

        angular.forEach(rawData,function(d) {
            var singlePlayerData = [];

            angular.forEach(d.data,function(pData) {
                singlePlayerData.push(pData.weightingIntensityPoint);
            });
            seriesData.push({'name':d.name,'data':singlePlayerData});    
        });
        console.log(seriesData);
        return seriesData;
    }

    var generateSeriesDataForAvgCaloryBurnChart = function(rawData) {
        var seriesData = [];

        angular.forEach(rawData,function(d) {
            var singlePlayerData = [];

            angular.forEach(d.data,function(pData) {
                console.log("pData",pData);
                singlePlayerData.push(pData.avgCaloriesRate);
            });
            seriesData.push({'name':d.name,'data':singlePlayerData});    
        });
        console.log("avg",seriesData);
        return seriesData;
    }

    var generateSeriesDataForAvgDistanceChart = function(rawData) {
        var seriesData = [];

        angular.forEach(rawData,function(d) {
            var singlePlayerData = [];

            angular.forEach(d.data,function(pData) {
                console.log("pData",pData);
                singlePlayerData.push(pData.avgDistanceRate);
            });
            seriesData.push({'name':d.name,'data':singlePlayerData});    
        });
        console.log("avg",seriesData);
        return seriesData;
    }

	var getIntensityData = function() {
        $http.get('/getRunningIntensityData').
        then(function (data) {
            vm.intensityData = data.data;
            var playerNames = [];
            var generatedSeriesData = generateSeriesDataForIntensityChart(data.data);
            angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            })
           

            $scope.runningIntensityBarChartOptions = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Running Intensity Points'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Points'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} points</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series:generatedSeriesData 
            };  
     })

    }

    getIntensityData();


    $scope.columnChartOptionsSinglePlayer = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }]
    };
    $scope.pieData = [{
                        name: "Microsoft Internet Explorer",
                        y: 56.33
                        }, {
                            name: "Chrome",
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: "Firefox",
                            y: 10.38
                        }, {
                            name: "Safari",
                            y: 4.77
                        }, {
                            name: "Opera",
                            y: 0.91
                        }, {
                            name: "Proprietary or Undetectable",
                            y: 0.2
    }];

    var getWeightIntensityData = function() {
        $http.get('/getWeightingIntensityData').
        then(function (data) {
            vm.weightIntensityData = data.data;
            var playerNames = [];
            var generatedWeightSeriesData = generateSeriesDataForWeightIntensityChart(data.data);
            console.log("generatedWeightSeriesData",generatedWeightSeriesData);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            });

            $scope.weightIntensityLineChartOptions = {
                title: {
                    text: 'Weight Intensity Points(Weekly)',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
                },
                yAxis: {
                    title: {
                        text: 'Points'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'Points'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: generatedWeightSeriesData
            };
           

              
     })

    }
    getWeightIntensityData();

    var getAvgCaloriesRateData = function() {
        $http.get('/getAvgCaloriesRateData').
        then(function (data) {
            //vm.intensityData = data.data;
            var playerNames = [];
            var generatedSeriesDataForAvgCaloryBurn = generateSeriesDataForAvgCaloryBurnChart(data.data);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            })
           

            $scope.avgCaloriesChart = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Avg Calorie Burn Rate'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cal/min'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} Cal/min</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series:generatedSeriesDataForAvgCaloryBurn 
            };  
     })

    }
    getAvgCaloriesRateData();

    var getAvgDistanceRateData = function() {
        $http.get('/getAvgDistanceRateData').
        then(function (data) {
            //vm.intensityData = data.data;
            var playerNames = [];
            var generatedSeriesDataForAvgDistance = generateSeriesDataForAvgDistanceChart(data.data);
           /* angular.forEach(vm.intensityData.result,function(player) {
                playerNames.push(player.playerName);
            })
           

            $scope.avgDistanceChart = {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Average Distance Covered per sprint'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'miles'
                    },
                    labels: {
                       
                    }
                },
                tooltip: {
                    split: true,
                    valueSuffix: ' miles'
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: generatedSeriesDataForAvgDistance
            };
        })  
     }

    
    getAvgDistanceRateData();*/
}

app.controller("playerDetailsController",playerDetailsControllerFn);


