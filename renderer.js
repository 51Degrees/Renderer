/*!*********************************************************************
 * This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
 * Rd, Reading, Berkshire, RG1 1NU:
 * GB1905888.2 and EP19192975.1.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0.
 *
 * If a copy of the MPL was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 *
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 ********************************************************************** */
  
'use strict';

// Interogates the device using JavaScript to work out the renderer.
// The takUrl parameter provides the URL of the tak.js file in a location that
// supports same-orgin operation with web workers. If the parameter is not 
// provided then CPU benchmarking will not be available to the detection 
// process.
// @param complete the function to call with the renderer.
// @param takUrl the full URL of the tak.js file (optional).
function getRenderer(complete, takUrl) {
	var nodes = 
		[
		  {
		    "x": "Unknown",
		    "m": function(n){return family(n);},
		    "n": [
		      2,
		      1,
		      3
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      9,
		      10,
		      11,
		      5,
		      6,
		      7,
		      8,
		      4
		    ],
		    "v": [
		      "iPhone"
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      16,
		      15,
		      14,
		      13,
		      12
		    ],
		    "v": [
		      "iPad"
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      16,
		      15,
		      14,
		      9,
		      10,
		      11,
		      13,
		      18,
		      21,
		      19,
		      20,
		      8,
		      17
		    ],
		    "v": [
		      "Macintosh"
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A8 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      23,
		      22
		    ],
		    "v": [
		      1136
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      24,
		      25
		    ],
		    "v": [
		      2001
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      26,
		      27
		    ],
		    "v": [
		      2208
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      28,
		      29
		    ],
		    "v": [
		      1334
		    ]
		  },
		  {
		    "x": "Apple A11 GPU|Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      30,
		      32,
		      31
		    ],
		    "v": [
		      2436
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      33,
		      34
		    ],
		    "v": [
		      2688
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      33,
		      35
		    ],
		    "v": [
		      1624
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      33,
		      36
		    ],
		    "v": [
		      1792
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      38,
		      37
		    ],
		    "v": [
		      2048
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A12X GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      39,
		      40
		    ],
		    "v": [
		      2732
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A12 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      42,
		      41
		    ],
		    "v": [
		      2224
		    ]
		  },
		  {
		    "x": "Apple A12X GPU",
		    "v": [
		      2388
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      2160
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      38,
		      43
		    ],
		    "v": [
		      2048
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      44,
		      27
		    ],
		    "v": [
		      2208
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      44,
		      29
		    ],
		    "v": [
		      1334
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      44,
		      23
		    ],
		    "v": [
		      1136
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      44,
		      25
		    ],
		    "v": [
		      2001
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A9 GPU|Apple A8 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      45,
		      47,
		      46
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      48,
		      49
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      50,
		      51
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      48,
		      52
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      53,
		      46
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      48,
		      54
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      55,
		      46
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      56,
		      57
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      3237505312
		    ]
		  },
		  {
		    "x": "Apple A11 GPU|Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      60,
		      59,
		      58
		    ],
		    "v": [
		      1349146759
		    ]
		  },
		  {
		    "x": "Apple A11 GPU|Apple A12 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      62,
		      61
		    ],
		    "v": [
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      64,
		      63
		    ],
		    "v": [
		      1349146759
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      65,
		      66,
		      67
		    ],
		    "v": [
		      1349146759
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      69,
		      68
		    ],
		    "v": [
		      1349146759
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8X GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      73,
		      70,
		      72,
		      74,
		      75,
		      76,
		      71,
		      45
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU|Apple A12X GPU|Apple A12 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      79,
		      77,
		      78
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A12X GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      41,
		      80
		    ],
		    "v": [
		      "p3"
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "v": [
		      2114570256,
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      1349146759,
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      73,
		      83,
		      72,
		      81,
		      82,
		      71
		    ],
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      "srgb"
		    ]
		  },
		  {
		    "x": "Apple A7 GPU",
		    "v": [
		      857422828,
		      1915583345
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      46663968,
		      2114570256,
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      839732043,
		      3816812018,
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      2114570256,
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      1349146759,
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      1411440593,
		      1924197914,
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      1411440593,
		      1913250432,
		      3074367344,
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      2917249763,
		      3237505312
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      3128296539,
		      3816812018,
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      46663968,
		      2114570256,
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      1349146759,
		      2917249763,
		      3237505312
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 13.25,
		        "b": 13.53
		      }
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "r": [
		      {
		        "a": 11.64,
		        "b": 13.09
		      }
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "r": [
		      {
		        "a": 14.08,
		        "b": 14.53
		      }
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 13.05,
		        "b": 13.64
		      }
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "r": [
		      {
		        "a": 14.31,
		        "b": 14.69
		      }
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 13.22,
		        "b": 13.84
		      }
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "r": [
		      {
		        "a": 11.64,
		        "b": 13.09
		      }
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "r": [
		      {
		        "a": 11.64,
		        "b": 13.23
		      }
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 13.24,
		        "b": 13.88
		      }
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 14.56,
		        "b": 21.68
		      }
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "r": [
		      {
		        "a": 13.28,
		        "b": 14.22
		      }
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "r": [
		      {
		        "a": 11.64,
		        "b": 12.96
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      2656686317,
		      3710391565
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      86,
		      87,
		      84,
		      85
		    ],
		    "v": [
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      89,
		      88
		    ],
		    "v": [
		      2114570256
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      46663968
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      91,
		      90
		    ],
		    "v": [
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      92
		    ],
		    "v": [
		      4005673483
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "v": [
		      1350183384,
		      1361285941,
		      3816812018
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      93,
		      94
		    ],
		    "v": [
		      3129316290
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      95,
		      96
		    ],
		    "v": [
		      2114570256
		    ]
		  },
		  {
		    "x": "Apple A12X GPU|Apple A12 GPU",
		    "v": [
		      1349146759,
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A12X GPU",
		    "v": [
		      1349146759,
		      2917249763
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      97,
		      98
		    ],
		    "v": [
		      4005673483
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "v": [
		      1361285941
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "v": [
		      1350183384,
		      3816812018,
		      4125234388
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "r": [
		      {
		        "a": 13.66,
		        "b": 16.36
		      }
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A9X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      99
		    ],
		    "r": [
		      {
		        "a": 19.06,
		        "b": 21.29
		      }
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "r": [
		      {
		        "a": 22.45,
		        "b": 25.26
		      }
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "r": [
		      {
		        "a": 21.59,
		        "b": 22.44
		      }
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "r": [
		      {
		        "a": 13.78,
		        "b": 19.64
		      }
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "r": [
		      {
		        "a": 19.81,
		        "b": 34.8
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      100,
		      101
		    ],
		    "r": [
		      {
		        "a": 27.91,
		        "b": 30.91
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 30.92,
		        "b": 31.88
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "r": [
		      {
		        "a": 0.37,
		        "b": 4.48
		      }
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "r": [
		      {
		        "a": 14.49,
		        "b": 15.29
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "r": [
		      {
		        "a": 16.34,
		        "b": 387.31
		      }
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "r": [
		      {
		        "a": 13.91,
		        "b": 15.11
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "r": [
		      {
		        "a": 16.64,
		        "b": 36.84
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "r": [
		      {
		        "a": 0.37,
		        "b": 1.99
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 37.57,
		        "b": 10072.46
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU",
		    "r": [
		      {
		        "a": 0.26,
		        "b": 115.16
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "r": [
		      {
		        "a": 0.26,
		        "b": 5.67
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 6.13,
		        "b": 177.99
		      }
		    ]
		  }
		];

    function hash() {

        // Draws an image that changes very subtly based on the GPU model used
        // to render it.
        // @param a canvas instance that has not be drawn to.
        // @return a base 64 encoded string containing the image.
        function drawImage(canvas) {

            // Configure the canvas and get context.
            canvas.width = 67;
            canvas.height = 67;
            var ctx = canvas.getContext('2d', { alpha: true });

            if (ctx != null) {

                // Configure the canvas context.
                ctx.imageSmoothingQuality = "low";
                ctx.imageSmoothingEnabled = true;
                ctx.globalCompositeOperation = "source-over";
                ctx.globalAlpha = 1;
                ctx.miterLimit = Infinity;
                ctx.filter = "none";
                ctx.lineCap = "butt";
                ctx.lineDashOffset = 0;
                ctx.lineJoin = "miter";
                ctx.font = "10pt Arial";
                ctx.lineWidth = 2;
                // setLineDash not supported on iPhone 3G / iOS 4.2
                if (ctx.setLineDash !== undefined) {
                    ctx.setLineDash([10, 20]);
                }
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = -3;
                ctx.shadowOffsetY = -5;

                // Rotate the canvas and add some text.
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(0.8901179);
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("*51Degrees*", 0, 0);

                // Draw a transparent circle or elipse over the text. A circle
                // is used if the ellipse feature is not supported by the GPU.
                ctx.beginPath();
                ctx.shadowColor = "yellow";
                ctx.shadowBlur = 1;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                ctx.strokeStyle = "red";
                ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
                if (ctx.ellipse === undefined) {
                    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
                }
                else {
                    ctx.ellipse(0, 0, 25, 15, Math.PI / 4, 0, 2 * Math.PI);
                }
                ctx.fill();
                ctx.stroke();

                // Return the image as a base 64 encoded string.
                return canvas.toDataURL();
            }
        }

        // Performs an FNV hash on the string provided.
        // @param str the string to be hashed.
        // @return the hash value as a 32 bit integer.
        function fnvHash(str) {
            var h = 0x811c9dc5;
            for (var i = 0; i < str.length; ++i) {
                h ^= str.charCodeAt(i);
                h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
            }
            return h >>> 0;
        }

        var imageHash = 0;

        var canvas = document.createElement("canvas");
        if (canvas != null) {

            // Get the image data as a string.
            var imageData = drawImage(canvas);
            if (imageData) {

                // Hash the image data.
                imageHash = fnvHash(imageData);
            }
        }

        return imageHash;
    }

    // Try getting the renderer string via the conventional debug extension.
    // @return the UNMASKED_RENDERER_WEBGL parameter value.
    function reportedrenderer() {
        var canvas = document.createElement("canvas");
        if (canvas != null) {
            var context = canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");
            if (context) {
                var info = context.getExtension("WEBGL_debug_renderer_info");
                if (info) {
                    return context.getParameter(info.UNMASKED_RENDERER_WEBGL);
                }
            }
        }
        return '';
    }

    // Width of the screen in pixels.
    function width() {
        return window.screen.width * window.devicePixelRatio;
    }

    // Height of the screen in pixels.
    function height() {
        return window.screen.height * window.devicePixelRatio;
    }

    // Pixel ratio of the screen.
    function ratio() {
        return window.devicePixelRatio;
    }

    // Determines if the query is supported by the device.
    // @param query the media query to check
    // @return true if the query is supported, otherwise false
    function hasMediaSupport(query) {
        return window.matchMedia(query).matches;
    }

    // Takes a list of values for a media query name and returns
    // the one that is supported, or undefined if none are supported.
    // @param name of the media query
    // @param possibleValues possible values for the media query name
    // @return the first value from the list that matches, otherwise "n/a"
    function getMediaSingleValue(name, possibleValues) {
        for (var i = 0; i < possibleValues.length; i++) {
            if (hasMediaSupport('(' + name + ': ' + possibleValues[i] + ')')) {
                return possibleValues[i];
            }
        }
        return 'n/a';
    }

    // Returns the color gamut value from the media queries.
    // @return p2 or srgb or undefined
    function mediacolorgamut() {
        return getMediaSingleValue('color-gamut', ['p3', 'srgb']);
    }

    // Returns the portion of the User-Agent which represents the family of 
    // Apple products the device belongs.
    // @return iPhone, iPad or Macintosh otherwise empty string
    function family() {
        var segments = /iPhone|iPad|Macintosh/.exec(navigator.userAgent);
        if (segments && segments.length > 0) {
            return segments[0];
        }
        return '';
    }

    // An uninitialised array of CPU benchmark results. Used to store results
    // from the first run to avoid performing the benchmark a subsequent time.
    var benchmarkValues = null;

    // Performs the CPU benchmark using multiple web workers and records the
    // samples in benchmarkValues. If the benchmark samples have already been
    // collected the promise resolves immediately.
    // @return a promise that will either resolve to the CPU benchmark
    // value, or reject with an error message. 
    function benchmarkcpu() {

        function workerState() {
            this.samples = [];
            this.active = 0;
        }

        function timerComplete(worker) {

            // Stop the web worker as it's timed out.
            worker.terminate();

            finished(worker.state);
        }

        function workerComplete(source) {

            // Clear the timer if present.
            clearTimeout(source.currentTarget.timeout);

            // Get the state attached to the web worker.
            var state = source.currentTarget.state;

            // Stop the web worker as there are no more messages for it.
            source.currentTarget.terminate();

            // Add the sample from the web worker to the main array of samples.
            state.samples = state.samples.concat(source.data);

            finished(state);
        }

        function finished(state) {

            // Reduce the number of active web workers.
            state.active--;

            // If this is the last web worker then finish the test.
            if (state.active === 0) {

                // Record the CPU cleaned benchmark value to avoid repeated
                // execution.
                benchmarkValues = state.samples;

                // Resolve the promise.
                state.resolve(benchmarkValues);
            }
        }

        // Starts the web workers using the URL provided.
        function workersStart(resolve, reject, url) {
            var workers = [];
            var state = new workerState();
            state.resolve = resolve;
            state.reject = reject;
            try {
                for (var i = 0; i < 2; i++) {

                    // Start a web worker with the URL provided.
                    var worker = new Worker(url);

                    // Add the state for all web workers to this web worker.
                    worker.state = state;

                    // Set functions and add to the array of workers.
                    worker.onmessage = workerComplete;
                    worker.onerror = function (error) { reject(error); };
                    workers.push(worker);
                }

                // Get the web workers to run the benchmark 80 times. If the 
                // worker doesn't complete within 4 seconds then timeout.
                for (var i = 0; i < workers.length; i++) {
                    state.active++;
                    workers[i].postMessage(80);
                    workers[i].timeout = setTimeout(
                        timerComplete, 4000, workers[i]);
                }
            }
            catch (ex) {
                reject(new Error(ex));
            }
        }

        // Valids the URL and starts the web workers if valid, otherwise
        // rejects the promise.
        function workerFetchUrl(resolve, reject, url) {
            fetch(url, {
                mode: 'same-origin'
            }).then(function (response) {

                // If the URL is valid then use it to start the workers
                // running the CPU benchmark.
                if (response.ok) {
                    workersStart(resolve, reject, response.url);
                }

                // If the URL is not valid then use the reject method
                // to return the Profile Id of the current node.
                else {
                    var error = new Error('Url could not be reached');
                    error.response = response;
                    reject(error);
                }
            }).catch(function (error) {

                // The Url can not be loaded. Reject the operation.                  
                reject(error);
            });
        }

        // Create a new promise that will validate the URL for the web workers
        // and then start them, or if the URL is invalid reject the promise.
        return new Promise(function (resolve, reject) {
            if (benchmarkValues != null) {
                resolve(benchmarkValues);
            }
            else {
                // Wait 1 second before executing the benchmark.
                // Testing has shown that this benchmark can return significantly
                // slower results when a page is being retrieved for the first
                // time.
                // This can often mean that devices are reported incorrectly.
                // Waiting for 1 second gives the device enough time to settle 
                // down and gives a far more consistent benchmark result.
                // Note that this does not affect page load time as the wait
                // occurs on a background thread.
                setTimeout(function () {
                    workerFetchUrl(resolve, reject, takUrl);
                }, 1000);
            }
        });
    }

    // Uses the CPU benchmark data to work out an average.
    // @param node that the benchmark is being run for. 
    // @return a promise which when resolved will produce the average.
    function benchmarkcpuavg(node) {
        return benchmarkcpu().then(function (values) {
            var average = 0;
            if (values.length > 0) {
                var sum = values.reduce(function (previous, current) {
                    return current += previous;
                });
                average = sum / values.length;
            }
            resolveNode(node, average);
        }).catch(function (error) {
            complete(node.x);
        });;
    }

    // Uses the CPU benchmark data to work out a the standard deviation.
    // @param node that the benchmark is being run for. 
    // @return a promise which when resolved will produce the standard 
    // deviation..
    function benchmarkcpustd(node) {
        return benchmarkcpu().then(function (values) {
            var std = 0;
            if (values.length > 0) {
                var sum = values.reduce(function (previous, current) {
                    return current += previous;
                });
                var average = values.length > 0 ? sum / values.length : 0;
                std = values.reduce(function (sq, n) {
                    return sq + Math.pow(n - average, 2);
                }, 0) / (values.length - 1);
            }
            resolveNode(node, std);
        }).catch(function (error) {
            complete(node.x);
        });;
    }

    function resolveNode(node, value) {

        // For all the children of the node being evaluated.
        for (var i = 0; i < node.n.length; i++) {

            // Get the values for the child.
            var child = nodes[node.n[i]];

            // If the child is a range of values.
            if (child.r) {

                for (var c = 0; c < child.r.length; c++) {
                    var range = child.r[c];

                    // If the value is between the two values as a range.
                    if ((range.a === null || value >= range.a) &&
                        (range.b === null || value <= range.b)) {
                        evaluateNode(child);
                        return;
                    }
                }
            }

            // If the child has a specific list of values.
            else if (child.v) {

                // Compare for equality with the value found.
                if (child.v.indexOf(value) != -1) {
                    evaluateNode(child);
                    return;
                }
            }
        }

        // There child that have matched. Therefore return the Profile
        // Id of the node passed.
        complete(node.x);
    }

    // Evaluates the children of the node until a Profile Id is found.
    // @param node to be evaluated.
    // @return the profile Id of the best node found.
    function evaluateNode(node) {

        // If there is a function then execute it, get the result and
        // then find the matching item in the list.
        if (node.m) {

            // Get the value from the function.
            var result = node.m(node);

            // If this isn't a promise then resolve the value returned. If it
            // is a promise it's up to the evaluation method to handle
            // processing the promise once it's resolved.
            if (result || result === '') {
                if (!result.then) {
                    resolveNode(node, result);
                }
            }
            else if (node.x) {
                complete(node.x);
            }
        }

        // There is no method so return the Profile Id.
        else {
            complete(node.x);
        }
    }

    // Evaluate the root node of the tree.
    evaluateNode(nodes[0]);
}