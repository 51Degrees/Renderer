/* *********************************************************************
 * This Source Code Form is copyright of 51Degrees Mobile Experts Limited.
 * Copyright 2019 51Degrees Mobile Experts Limited, 9 Greyfriars Rd, 
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51Degrees Mobile Experts Limited of 9 Greyfriars 
 * Rd, Reading, Berkshire, RG1 1NU:
 * United Kingdom Patent Application No. [TODO].
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
        { width: 0, height: 0, ratio: 0, hashes: [0, 0], renderer: "X" },
        { width: 0, height: 0, ratio: 0, hashes: [0, 0], renderer: "Y" }
    ];

    // Some GPUs produce random results when blurring is enabled. If the 
    // screen size is associated with such a GPU then don't use blurring.
    // @return true if blurring shouldn't be used, otherwise false.
    function getNoBlur() {

        // Array of User-Agent segment, width, height and pixel ratio of 
        // screens and device types that contain GPUs that result in random
        // results when blurring is enabled.
        var noBlur = [
            ["iPad", 768, 1024, 2],
            ["iPad", 768, 1024, 1]
        ];

        var w = window.screen.width;
        var h = window.screen.height;
        var r = window.devicePixelRatio;
        for (var i = 0; i < noBlur.length; i++) {
            var item = noBlur[i];
            if (navigator.userAgent.indexOf(item[0]) != -1 &&
                item[1] == w &&
                item[2] == h &&
                item[3] == r) {
                return true;
            }
        }
        return false;
    }

    // Draws an image that changes very subtly based on the GPU model used
    // to render it.
    // @param a canvas instance that has not be drawn to.
    // @return a base 64 encoded string containing the image.
    function drawImage(canvas) {

        // Configure the canvas context.
        canvas.width = 67;
        canvas.height = 67;
        var ctx = canvas.getContext('2d', { alpha: true });
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
        ctx.setLineDash([10, 20]);
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

        // Draw a transparent circle or elipse over the text. A circle is used
        // if the ellipse feature is not supported by the GPU.
        ctx.beginPath();
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = getNoBlur() ? 0 : 1;
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

    // If the render hash relates to one in the map when combined with the
    // screen width, height and pixel ratio returns the renderer name.
    function internalGetRenderer(rendererHash) {
        var w = window.screen.width;
        var h = window.screen.height;
        var r = window.devicePixelRatio;
        for (var i = 0; i < rendererMap.length; i++) {
            var item = rendererMap[i];
            if (item.width == w && item.height == h && item.ratio == r &&
                item.hashes.indexOf(rendererHash) != -1) {
                return item.renderer;
            }
        }
    }

    // Used the FNV hash on the string provided.
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

    var renderer;

    var canvas = document.createElement("canvas");
    if (canvas) {

        // Try getting the GPU via the conventional debug extension.
        var context = canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
        if (context) {
            var info = context.getExtension("WEBGL_debug_renderer_info");
            if (info) {
                renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
            }
        }

        // If the GPU model could not be identified then use GPU hashing.
        if (renderer == undefined) {

            // Get the image data as a string.
            var imageData = drawImage(canvas);
            if (imageData) {

                // Hash the image data and use this as a look up to the 
                // GPU model.
                var gpuhash = fnvHash(imageData);

                // Loop through the map to get the renderer.
                renderer = internalGetRenderer(gpuhash);
            }
        }
    }

    return renderer;
}


