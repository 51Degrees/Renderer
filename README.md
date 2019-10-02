![51Degrees](https://51degrees.com/DesktopModules/FiftyOne/Distributor/Logo.ashx?utm_source=github&utm_medium=repository&utm_content=home&utm_campaign=gpu-hash "THE Fastest and Most Accurate Device Detection")**GPU Renderer Identifier**

<sup>Need [C](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for C") | [.NET](https://github.com/51Degrees/.NET-Device-Detection "THE Fastest and most Accurate device detection for .NET") | [PHP](https://github.com/51Degrees/Device-Detection) | [Python](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Python") | [Perl](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Perl") | [Node.js](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Node.js")?</sup>

## Introduction
51Degrees GPU Renderer Identifier is a JavaScript function which returns the GPU renderer string. It also works on Apple iOS versions greater than 12.2 which would otherwise obfuscate the exact model to simply "Apple GPU".

## How it Works
A direct query to WebGL can be used to returned the GPU renderer string. The following JavaScript function performs this operation.
```
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
```
Since iOS 12.2, the exact GPU renderer string is not returned from a direct query. All iOS devices return "Apple GPU". More complex methods must be used.

`renderer.js` contains a single function named `getRenderer`. This leverages hardware defined interpolation methods and sample patterns, which vary from one GPU to another, along with the screen dimensions and CPU benchmarking, to return the GPU renderer string.

For a more in depth explanation of the techniques used, see the [article on Apple device detection](https://51degrees.com/blog/51degrees-releases-new-technique-to-identify-apple-devices-using-ios-122-or-higher).

## Usage
To find the exact GPU model name, `renderer.js` must be included in the HTML like:
```
<script src="renderer.js" type="text/javascript" async></script>
```
Then to get the GPU model name, simply call the `getRenderer` function passing a callback function to handle the result:
```
getRenderer(function(renderer) { console.log(renderer); } );
```

By default the CPU Benchmarking feature is disabled as it can take several seconds to complete. To enable CPU Benchmarking pass the same-origin URL of the tak.js script.
```
getRenderer(function(renderer) { console.log(renderer); }, "tak.js" );
```

Note that the 'getRenderer' function will always return 'Unknown' unless the device is an Apple one that it knows about.
If you also want to get the renderer name for non-Apple devices then getRenderer can be combined with the previously described WebGL query:

```
getRenderer(function (value) {
    if (value == 'Unknown') {
        var canvas = document.createElement("canvas");
        if (canvas != null) {
            var context = canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");
            if (context) {
                var info = context.getExtension("WEBGL_debug_renderer_info");
                if (info) {
                    value = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
                }
            }
        }
    }                
    console.log(value);
});
```

## Example
For an example of this in action, see `index.html` which uses the method to display an example page with information about the device.