/* *********************************************************************
 * This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
 * Rd, Reading, Berkshire, RG1 1NU:
 * United Kingdom Patent Application No. 1905888.2.
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

function getRenderer() {

	// Map width, height, ratio, and hash to a renderer.
    var rendererMap = [
        {
            "Width": 320,
            "Height": 480,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 0,
            "Value": [
                "PowerVR SGX535"
            ]
        },
        {
            "Width": 320,
            "Height": 480,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 3411485152,
            "Value": [
                "PowerVR SGX535"
            ]
        },
        {
            "Width": 640,
            "Height": 960,
            "Ratio": 2,
            "ReportedRenderer": "",
            "Hash": 3526118300,
            "Value": [
                "PowerVR SGX535"
            ]
        },
        {
            "Width": 640,
            "Height": 960,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 2780697445,
            "Value": [
                "PowerVR SGX543"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple A7 GPU",
            "Hash": 1506005715,
            "Value": [
                "Apple A7 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 857422828,
            "Value": [
                "Apple A7 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 1915583345,
            "Value": [
                "Apple A7 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A10 GPU",
                "Apple A9 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3816812018,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 2613240957,
            "Value": [
                "PowerVR SGX543"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 3366809836,
            "Value": [
                "PowerVR SGX543"
            ]
        },
        {
            "Width": 640,
            "Height": 1136,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 4197973107,
            "Value": [
                "PowerVR SGX543"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple A8 GPU",
            "Hash": 2656686317,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple A9 GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A9 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A9 GPU",
                "Apple A10 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3816812018,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1334,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 750,
            "Height": 1624,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 0,
            "Value": [
                "PowerVR SGX 535"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 1291430876,
            "Value": [
                "PowerVR SGX 543"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 2230545693,
            "Value": [
                "PowerVR SGX 543"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 3411485152,
            "Value": [
                "PowerVR SGX 535"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "",
            "Hash": 4191807391,
            "Value": [
                "PowerVR SGX 543"
            ]
        },
        {
            "Width": 768,
            "Height": 1024,
            "Ratio": 1,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 2780697445,
            "Value": [
                "PowerVR SGX 543"
            ]
        },
        {
            "Width": 828,
            "Height": 1792,
            "Ratio": 2,
            "ReportedRenderer": "Apple A12 GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 828,
            "Height": 1792,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2001,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2043977304,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2001,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2001,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A9 GPU",
                "Apple A10 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2001,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2436,
            "Ratio": 3,
            "ReportedRenderer": "Apple A11 GPU",
            "Hash": 3237505312,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2436,
            "Ratio": 3,
            "ReportedRenderer": "Apple A12 GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1125,
            "Height": 2436,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU",
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple A11 GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple A8 GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple A9 GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A9 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 1913250432,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2043977304,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A11 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A10 GPU",
                "Apple A9 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2208,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2688,
            "Ratio": 3,
            "ReportedRenderer": "Apple A12 GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1242,
            "Height": 2688,
            "Ratio": 3,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple A8 GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 104668068,
            "Value": [
                "Apple A7 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 1915583345,
            "Value": [
                "Apple A7 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A9 GPU",
                "Apple A10X GPU",
                "Apple A9X GPU",
                "Apple A10 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 4125234388,
            "Value": [
                "Apple A8X GPU",
                "Apple A8 GPU"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 543",
            "Hash": 2780697445,
            "Value": [
                "PowerVR SGX 543"
            ]
        },
        {
            "Width": 1536,
            "Height": 2048,
            "Ratio": 2,
            "ReportedRenderer": "PowerVR SGX 554",
            "Hash": 3651479251,
            "Value": [
                "PowerVR SGX 554"
            ]
        },
        {
            "Width": 1668,
            "Height": 2224,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12 GPU"
            ]
        },
        {
            "Width": 1668,
            "Height": 2388,
            "Ratio": 2,
            "ReportedRenderer": "Apple A12X GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12X GPU"
            ]
        },
        {
            "Width": 1668,
            "Height": 2388,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12X GPU"
            ]
        },
        {
            "Width": 2048,
            "Height": 2732,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 2917249763,
            "Value": [
                "Apple A12X GPU"
            ]
        },
        {
            "Width": 2048,
            "Height": 2732,
            "Ratio": 2,
            "ReportedRenderer": "Apple GPU",
            "Hash": 3129316290,
            "Value": [
                "Apple A10X GPU",
                "Apple A9X GPU"
            ]
        }
    ];

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
			if(ctx.setLineDash !== undefined) {
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
			} else {
				ctx.ellipse(0, 0, 25, 15, Math.PI / 4, 0, 2 * Math.PI);
			}
			ctx.fill();
			ctx.stroke();

			// Return the image as a base 64 encoded string.
			return canvas.toDataURL();
		}
	}

	// If the renderer hash relates to one in the map when combined with the
	// screen width, height and pixel ratio returns the renderer name.
	// @param reportedRenderer the renderer reported by WebGL.
	// @param rendererHash the hash code from the image generated.
	// @return the renderer name if the hash code and screen information
	// exist in the look up list.
	function lookupRenderer(reportedRenderer, rendererHash) {
		var w = window.screen.width * window.devicePixelRatio;
		var h = window.screen.height * window.devicePixelRatio;
        var r = window.devicePixelRatio;
		for (var i = 0; i < rendererMap.length; i++) {
			var item = rendererMap[i];
			if (item.Width == w && item.Height == h &&
				item.Ratio == r && item.ReportedRenderer == reportedRenderer &&
				item.Hash == rendererHash) {
				return item.Value;
			}
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

	// Try getting the renderer string via the conventional debug extension.
	// @return the UNMASKED_RENDERER_WEBGL parameter value.
	function getReportedRenderer() {
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
	}

	// Uses the hash of a known image and a lookup table to determine the
	// renderer string.
	// @param renderer the existing renderer value.
	// @return the modified renderer value, or if not available the value
	// passed into the function.
	function getHashRenderer(renderer) {
		try {
			var canvas = document.createElement("canvas");
			if (canvas != null) {

				// Get the image data as a string.
				var imageData = drawImage(canvas);
				if (imageData) {

					// Hash the image data and use this as a look up to the
					// GPU model.
					var gpuhash = fnvHash(imageData);

					// Loop through the map to get the renderer.
					renderer = lookupRenderer(renderer, gpuhash);
				}
			}
		} catch (err) {
			// Do nothing and just return the original value.
			console.log(err);
		}
		return renderer;
	}

	// Get the renderer from the debug UNMASKED_RENDERER_WEBGL method.
	var renderer = getReportedRenderer();

	// If the GPU model could not be identified then use image hashing.
	// Note: Apple GPU might still be returned if the hash and screen values
	// have not yet been classified and included in the lookup list.
    if (renderer == undefined || renderer == "Apple GPU") {

        // If the renderer is undefined then the device does not support
        // WebGL. Set the renderer to an empty string.
        if (renderer == undefined) renderer = "";

		renderer = getHashRenderer(renderer);
	}

	return renderer;
}
