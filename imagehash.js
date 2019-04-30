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

function getImageHash() {

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

    var imageHash;

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