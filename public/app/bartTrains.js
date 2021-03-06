// Generated by CoffeeScript 1.8.0
angular.module('BartApp').directive('bartTrains', function($interval) {
  return {
    restrict: 'A',
    template: "<div class='train-container'>",
    link: function(scope, element, attrs) {
      var render;
      render = function() {
        var height, i, offset, svg, track1, track2, track3, track4, trains, width, _i, _j, _k, _l, _y0;
        width = 800;
        height = 1000;
        svg = d3.select(element[0]).append('svg').attr('width', width).attr('height', height);
        track1 = {
          left: 20,
          right: 120
        };
        track2 = {
          left: 204,
          right: 304
        };
        track3 = {
          left: 388,
          right: 488
        };
        track4 = {
          left: 564,
          right: 664
        };
        _y0 = 0;
        offset = 30;
        svg.append('line').attr('x1', track1.left).attr('x2', track1.left).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        svg.append('line').attr('x1', track1.right).attr('x2', track1.right).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        _y0 = 0;
        for (i = _i = 0; _i <= 35; i = ++_i) {
          svg.append('line').attr('x1', track1.left - 10).attr('x2', track1.right + 10).attr('y1', _y0).attr('y2', _y0).attr('stroke', 'black').attr('stroke-width', 2);
          _y0 += offset;
        }
        svg.append('line').attr('x1', track2.left).attr('x2', track2.left).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        svg.append('line').attr('x1', track2.right).attr('x2', track2.right).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        _y0 = 0;
        for (i = _j = 0; _j <= 35; i = ++_j) {
          svg.append('line').attr('x1', track2.left - 10).attr('x2', track2.right + 10).attr('y1', _y0).attr('y2', _y0).attr('stroke', 'black').attr('stroke-width', 2);
          _y0 += offset;
        }
        svg.append('line').attr('x1', track3.left).attr('x2', track3.left).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        svg.append('line').attr('x1', track3.right).attr('x2', track3.right).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        _y0 = 0;
        for (i = _k = 0; _k <= 35; i = ++_k) {
          svg.append('line').attr('x1', track3.left - 10).attr('x2', track3.right + 10).attr('y1', _y0).attr('y2', _y0).attr('stroke', 'black').attr('stroke-width', 2);
          _y0 += offset;
        }
        svg.append('line').attr('x1', track4.left).attr('x2', track4.left).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        svg.append('line').attr('x1', track4.right).attr('x2', track4.right).attr('y1', 0).attr('y2', height).attr('stroke', 'black').attr('stroke-width', 2);
        _y0 = 0;
        for (i = _l = 0; _l <= 35; i = ++_l) {
          svg.append('line').attr('x1', track4.left - 10).attr('x2', track4.right + 10).attr('y1', _y0).attr('y2', _y0).attr('stroke', 'black').attr('stroke-width', 2);
          _y0 += offset;
        }
        trains = svg.selectAll('div').data(scope.trains);
        trains.enter().append('rect').attr('width', 80).attr('height', 80).attr('x', function(d) {
          if (d.destination === "Dublin/Pleasanton") {
            return track1.left + 10;
          } else if (d.destination === "Fremont") {
            return track2.left + 10;
          } else if (d.destination === "Richmond") {
            return track3.left + 10;
          } else {
            return track4.left + 10;
          }
        }).attr('y', function(d) {
          if (_.isNaN(parseInt(d.minutes))) {
            return 25;
          } else {
            return parseInt(d.minutes) * 25;
          }
        }).attr('fill', function(d) {
          if (d.color === "GREEN") {
            return 'green';
          } else if (d.color === "YELLOW") {
            return 'yellow';
          } else if (d.color === "RED") {
            return 'red';
          } else if (d.color === "BLUE") {
            return 'blue';
          } else {
            return 'black';
          }
        });
        return trains.append('text').text(function(d) {
          return d.minutes;
        }).attr('stroke', 'black');
      };
      render();
    }
  };
});
