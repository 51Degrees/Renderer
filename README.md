![51Degrees](https://51degrees.com/DesktopModules/FiftyOne/Distributor/Logo.ashx?utm_source=github&utm_medium=repository&utm_content=home&utm_campaign=gpu-hash "THE Fastest and Most Accurate Device Detection")**Device Detection for Java**

[Recent Changes](#recent-changes "Review recent major changes") | [Supported Databases](https://51degrees.com/compare-data-options?utm_source=github&utm_medium=repository&utm_content=home-menu&utm_campaign=gpu-hash "Different device databases which can be used with 51Degrees device detection") | [Java Developer Documention](https://51degrees.com/support/documentation/java?utm_source=github&utm_medium=repository&utm_content=home-menu&utm_campaign=gpu-hash "Full getting started guide and advanced developer documentation") | [Available Properties](https://51degrees.com/resources/property-dictionary?utm_source=github&utm_medium=repository&utm_content=home-menu&utm_campaign=gpu-hash "View all available properties and values")

<sup>Need [C](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for C") | [.NET](https://github.com/51Degrees/.NET-Device-Detection "THE Fastest and most Accurate device detection for .NET") | [PHP](https://github.com/51Degrees/Device-Detection) | [Python](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Python") | [Perl](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Perl") | [Node.js](https://github.com/51Degrees/Device-Detection "THE Fastest and most Accurate device detection for Node.js")?</sup>

**Important**

As of version 3.2.2.20-beta the Maven coordinates for the 51Degrees Java API have changed:

***Core***

```xml
<dependency>
    <groupId>com.51degrees</groupId>
    <artifactId>device-detection-core</artifactId>
    <version>x.x.x.x</version>
</dependency>
```

***WebApp***

```xml
<dependency>
    <groupId>com.51degrees</groupId>
    <artifactId>device-detection-webapp</artifactId>
    <version>x.x.x.x</version>
</dependency>
```

You can also get a package with examples and a package with WebApp example servlets. For more details and the latest packages see [Maven Central Repository](http://search.maven.org/#search|ga|1|g%3A%22com.51degrees%22).

**Server Side and Offline projects:** Initialize detector like...

```java
Provider p = new Provider(StreamFactory.create("path_to_data_file", false));
Match match = p.match("HTTP User-Agent string");
```

Use like...

```java
boolean isTablet = match.getValues("IsTablet").toBool();
```

or 

```java
boolean isMobile = match.getValues("IsMobile").toBool();
```

... from within a web application server side to determine the requesting device type.

**Client Side:** Include...

```
https://[YOUR DOMAIN]/51Degrees.features.js?DeviceType&ScreenInchesDiagonal
```

... from Javascript to retrieve device type and physcial screen size information. Use Google Analytics custom dimensions to add this data for more granular analysis.

**Servlets:** Include...

```java
import fiftyone.mobile.detection.webapp.BaseServlet;
```

Extend...

```java
public class MyServlet extends BaseServlet {
```

Use...

```java
boolean isMobile = Boolean.parseBoolean(getProperty(request,"IsMobile"));
```

or

```java
boolean isTablet = Boolean.parseBoolean(getProperty(request,"IsTablet"));
```

... to add device detection to your servlet.

**[Review All Properties](https://51degrees.com/resources/property-dictionary?utm_source=github&utm_medium=repository&utm_content=home-menu&utm_campaign=gpu-hash "View all available properties and values")**

## What's needed?

The simplest method of deploying 51Degrees device detection to a Java project is with Maven. Just search for [51Degrees on Maven](http://search.maven.org/#search|ga|1|51degrees "51Degrees Packages on Maven").

This GitHub repository and Maven include 51Degrees free Lite device database. The Lite data is updated monthly by our professional team of analysts. 

Data files which are updated weekly and daily, automatically, and with more properties and device combinations are also available.

**[Compare Device Databases](https://51degrees.com/compare-data-options?utm_source=github&utm_medium=repository&utm_content=home-menu&utm_campaign=gpu-hash "Compare different data file options for 51Degrees device detection")**