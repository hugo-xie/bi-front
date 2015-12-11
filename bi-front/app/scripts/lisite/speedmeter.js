$(function () {
		
	    $('#container1').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
                enabled: false
            },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: '溶解氧'
		    },
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});	
$(function () {
		
	    $('#container2').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
                enabled: false
            },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    
		    title: {
		        text: '高锰酸钾浓度'
		    },
		    
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});	
$(function () {
		
	    $('#container3').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
                enabled: false
            },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    
		    title: {
		        text: '氨氮浓度'
		    },
		    
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});
$(function () {
		
	    $('#container4').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
                enabled: false
            },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    
		    title: {
		        text: '总磷浓度'
		    },
		    
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});
$(function () {
		
	    $('#container5').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
                enabled: false
            },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    
		    title: {
		        text: '工业污水量'
		    },
		    
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});	
$(function () {
		
	    $('#container6').highcharts({
			credits:{
		    	enabled:false
		    },
		    exporting: {
	            enabled: false
	        },
		    chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    
		    title: {
		        text: '农业污水量'
		    },
		    
		    pane: {
		        startAngle: -150,
		        endAngle: 150,
		        background: [{
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#FFF'],
		                    [1, '#333']
		                ]
		            },
		            borderWidth: 0,
		            outerRadius: '109%'
		        }, {
		            backgroundColor: {
		                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		                stops: [
		                    [0, '#333'],
		                    [1, '#FFF']
		                ]
		            },
		            borderWidth: 1,
		            outerRadius: '107%'
		        }, {
		            // default background
		        }, {
		            backgroundColor: '#DDD',
		            borderWidth: 0,
		            outerRadius: '105%',
		            innerRadius: '103%'
		        }]
		    },
		       
		    // the value axis
		    yAxis: {
		        min: 0,
		        max: 200,
		        
		        minorTickInterval: 'auto',
		        minorTickWidth: 1,
		        minorTickLength: 10,
		        minorTickPosition: 'inside',
		        minorTickColor: '#666',
		
		        tickPixelInterval: 30,
		        tickWidth: 2,
		        tickPosition: 'inside',
		        tickLength: 10,
		        tickColor: '#666',
		        labels: {
		            step: 2,
		            rotation: 'auto'
		        },
		        title: {
		            text: 'mg/m³'
		        },
		        plotBands: [{
		            from: 0,
		            to: 120,
		            color: '#55BF3B' // green
		        }, {
		            from: 120,
		            to: 160,
		            color: '#DDDF0D' // yellow
		        }, {
		            from: 160,
		            to: 200,
		            color: '#DF5353' // red
		        }]        
		    },
		
		    series: [{
		        name: 'Speed',
		        data: [80],
		        tooltip: {
		            valueSuffix: ' mg/m³'
		        }
		    }]
		
		}, 
		// Add some life
		function (chart) {
			if (!chart.renderer.forExport) {
			    setInterval(function () {
			        var point = chart.series[0].points[0],
			            newVal,
			            inc = Math.round((Math.random() - 0.5) * 20);
			        
			        newVal = point.y + inc;
			        if (newVal < 0 || newVal > 200) {
			            newVal = point.y - inc;
			        }
			        
			        point.update(newVal);
			        
			    }, 3000);
			}
		});
	});	