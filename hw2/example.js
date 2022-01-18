function main(){
	// 1
	// d3.csv('data/pop.csv', d3.autoType).then(data => {
	// 	for (var i = data.length - 1; i >= 0; i--) {
	// 		let el = data[i]
	// 		console.log(el);
	// 	}
	// });

	// 2
	// d3.csv('data/pop.csv', d3.autoType).then(data => {
	// 	data.forEach(function (el){
	// 		console.log(el.country);
	// 	})
	// });

	// 3
	// d3.csv('data/pop.csv', d3.autoType).then(data => {
	// 	
	// 	console.log(data.map(d => d['country']))
	// });	

	// 4
	// d3.csv('data/pop.csv', d3.autoType).then(data => {
	// 	// var regions = d3.entries(data);
	// 	console.log(d3.nest().key(function (d){return d['country'];}).entries(data))
	// });	

	// scale 1
	// d3.csv('data/pop.csv', d3.autoType).then(data => {
	// 	// load_data
	// 	var country = data.map(d => d['country'])
	// 	var pop = data.map(d => d['2020'])
	// 	console.log(pop)

	// 	var width = 1000,
	// 	barHeight = 20
	// 	margin =1;

	// 	var scale = d3.scaleLinear()
	// 			.domain([d3.min(pop), d3.max(pop)])
	// 			.range([100, 1000]);
		
	// 	var svg = d3.select('body').append('svg')
	// 			.attr('width', width)
	// 			.attr('height', barHeight * pop.length);
		
	// 	var group = svg.selectAll('g')
	// 			.data(pop)
	// 			.enter()
	// 			.append('g')
	// 			.attr('transform', function(d,i){
	// 				return 'translate(0,' + i * barHeight + ')';
	// 			});

	// 	group.append('rect')
	// 		.attr('width', function(d){
	// 			return scale(d);
	// 		})
	// 		.attr('height', barHeight - margin);
		
	// 	group.append('text')
	// 		.attr('x', function (d) {
	// 			return (scale(d));
	// 		})
	// 		.attr('y', barHeight / 2)
	// 		.attr('dy', '.35em')
	// 		// .attr('transform', function(d,i){
	// 		// 		return 'translate(0,' + i * barHeight + ')';
	// 		// 	})
	// 		.text(function(d,i){
	// 				return country[i];
	// 			});

	// });

	// scale 2
	d3.csv('data/pop.csv', d3.autoType).then(data => {
		// load_data
		var country = data.map(d => d['country'])
		var pop = data.map(d => d['2020'])
		console.log(pop)

		var width = 5000,
		barHeight = 20
		margin =1;
		height = barHeight * pop.length;

		var widthScale = d3.scaleLinear()
				.domain([d3.min(pop), d3.max(pop)])
				.range([100, 500]);

		var heightScale = d3.scaleBand()
				.range([0, height])
				.padding(0.2)
				.domain(country);
		
		var svg = d3.select('body').append('svg')
				.attr('width', 180+ width)
				.attr('height', barHeight * pop.length);

		var group = svg.selectAll('g')
				.data(pop)
				.enter()
				.append('g')
				.attr('transform', function(d,i){
					return 'translate(180,' + i * barHeight + ')';
				});

		group.append('rect')
			.attr('width', function(d){
				return widthScale(d);
			})
			.attr('height', barHeight - margin);
		
		group.append('text')
			.attr('x', function (d) {
				return (widthScale(d));
			})
			.attr('y', barHeight / 2)
			.attr('dy', '.35em')
			// .attr('transform', function(d,i){
			// 		return 'translate(0,' + i * barHeight + ')';
			// 	})
			.text(function (d) {
				return d;
			});

		var yAxis = d3.axisLeft(heightScale);

		var gX = svg.append("g")
		    .attr("transform", "translate(180)")
		    .call(yAxis);

	});
}