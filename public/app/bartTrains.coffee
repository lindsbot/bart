angular.module('BartApp')
.directive 'bartTrains', ($interval)->
  restrict: 'A'
  template: "<div class='train-container'>"
  link: (scope, element, attrs)->

    render = ()->

      width = 800
      height = 1000

      svg = d3.select element[0]
        .append 'svg'
          .attr 'width', width
          .attr 'height', height

      track1 = {left: 20, right: 120}
      track2 = {left: 204, right: 304}
      track3 = {left: 388, right: 488}
      track4 = {left: 564, right: 664}

      _y0 = 0
      offset = 30
      
      # track1
      svg.append 'line'
        .attr 'x1', track1.left
        .attr 'x2', track1.left
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      svg.append 'line'
        .attr 'x1', track1.right
        .attr 'x2', track1.right
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2

      _y0 = 0
      for i in [0..35]
        svg.append 'line'
          .attr 'x1', track1.left - 10
          .attr 'x2', track1.right + 10
          .attr 'y1', _y0
          .attr 'y2', _y0
          .attr 'stroke', 'black'
          .attr 'stroke-width', 2
        _y0 += offset

      # track2
      svg.append 'line'
        .attr 'x1', track2.left
        .attr 'x2', track2.left
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      svg.append 'line'
        .attr 'x1', track2.right
        .attr 'x2', track2.right
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      
      _y0 = 0
      for i in [0..35]
        svg.append 'line'
          .attr 'x1', track2.left - 10
          .attr 'x2', track2.right + 10
          .attr 'y1', _y0
          .attr 'y2', _y0
          .attr 'stroke', 'black'
          .attr 'stroke-width', 2
        _y0 += offset

      # track3
      svg.append 'line'
        .attr 'x1', track3.left
        .attr 'x2', track3.left
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      svg.append 'line'
        .attr 'x1', track3.right
        .attr 'x2', track3.right
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2

      _y0 = 0
      for i in [0..35]
        svg.append 'line'
          .attr 'x1', track3.left - 10
          .attr 'x2', track3.right + 10
          .attr 'y1', _y0
          .attr 'y2', _y0
          .attr 'stroke', 'black'
          .attr 'stroke-width', 2
        _y0 += offset      

      # track4
      svg.append 'line'
        .attr 'x1', track4.left
        .attr 'x2', track4.left
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      svg.append 'line'
        .attr 'x1', track4.right
        .attr 'x2', track4.right
        .attr 'y1', 0
        .attr 'y2', height
        .attr 'stroke', 'black'
        .attr 'stroke-width', 2
      
      _y0 = 0
      for i in [0..35]
        svg.append 'line'
          .attr 'x1', track4.left - 10
          .attr 'x2', track4.right + 10
          .attr 'y1', _y0
          .attr 'y2', _y0
          .attr 'stroke', 'black'
          .attr 'stroke-width', 2
        _y0 += offset

      trains = svg.selectAll('div').data(scope.trains)
      trains.enter()
        .append 'rect'
        .attr 'width', 80
        .attr 'height', 80
        .attr 'x', (d)->
          if d.destination is "Dublin/Pleasanton"
            return track1.left + 10
          else if d.destination is "Fremont"
            return track2.left + 10
          else if d.destination is "Richmond"
            return track3.left + 10
          else
            return track4.left + 10
        .attr 'y', (d)->
          if _.isNaN(parseInt(d.minutes))
            return 25
          else
            return parseInt(d.minutes) * 25
        .attr 'fill', (d)->
          if d.color is "GREEN"
            return 'green'
          else if d.color is "YELLOW"
            return 'yellow'
          else if d.color is "RED"
            return 'red'
          else if d.color is "BLUE"
            return 'blue'
          else
            return 'black' 
      trains.append('text')
        .text (d)->
          d.minutes
        .attr 'stroke', 'black'

    render()

    # $interval ()->
    #   element.empty()
    #   render()
    # , 1000

    return