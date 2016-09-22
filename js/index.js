$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Software Development", count: "100", subItems: "Android\n Web\n Machine Learning\n Python\n Java\n Matlab"},
        {text: "Peter O'Hara Adu", count: "382", subItems: "MEST\n Wires&Bytes\n NsesaFoundation"},
        {text: "Hacker", count: "170", subItems: "Arduino\n Raspberry Pi\n Circuit Bending\n Tinkering"},
        {text: "Music", count: "123", subItems: "Hillsong\n Linkin Park\n Adele\n Hans Zimmer\n Matthew West"},
        {text: "Ideas", count: "123", subItems: "The Singularity"},
        {text: "School", count: "123", subItems: "Kwame Nkrumah University of Science and Technology\n Presbyterian Boys Senior High School"},
        {text: "TV Shows", count: "123", subItems: "Person of Interest\n Suits\n Mr Robot\n Big Bang Theory\n Brooklyn 99"},
        {text: "Home", count: "123", subItems: "The Milky Way\n Alpha Centauri\n Earth\n Africa\n Ghana\n Accra"},
        {text: "Books", count: "123", subItems: "Diaspora (Greg Egan)\n The HitchHikers Guide to the Galaxy (Douglas Adams)\n Mistborn (Brandon Sanderson)\n Discworld (Terry Pratchet)"},
        {text: "Causes", count: "123", subItems: "Personalised Education\n Equal Opportunity for All\n Women Empowerment"}
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "Please click here",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            // alert("Here is more details!!");
            $('#myModal').modal({})
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            // {// Line #0
            //   textField: "count",
            //   classed: {count: true},
            //   style: {
            //     "font-size": "28px",
            //     "font-family": "Source Sans Pro, sans-serif",
            //     "text-anchor": "middle",
            //     fill: "white"
            //   },
            //   attr: {
            //     dy: "0px",
            //     x: function (d) {return d.cx;},
            //     y: function (d) {return d.cy;}
            //   }
            // },
            {// Line #0
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                "fill": "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "30px"},
              attr: {dy: "-40px" }
            },
            {// Line #1
              textField: "count",
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
            // {// Line #1
            //   textField: "count",
            //   // classed: {text: true},
            //   style: {
            //     "font-size": "14px",
            //     "font-family": "Source Sans Pro, sans-serif",
            //     "text-anchor": "middle",
            //     "fill": "white"
            //   },
            //   attr: {
            //     dy: "50px",
            //     x: function (d) {return d.cx;},
            //     y: function (d) {return d.cy;}
            //   }
            // }
          ]
        }
      }]
  });
});