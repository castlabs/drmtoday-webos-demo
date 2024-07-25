# WebOS DRMtoday integration

This repository contains an example of how your application can play encrypted media content protected with DRMtoday.
Due to the limitations of the native player that comes with webOS, for demo purposes, we have included two players:

1. [PRESTOplay SDK for Browsers](https://castlabs.com/prestoplay/web-apps/)
2. [dash.js](https://dashjs.org/)

## Switching player

This demo app by default demonstrates how to use the PRESTOplay SDK for Browsers to play encrypted content protected by DRMtoday.
To switch to dash.js, please modify appinfo.json - replace line:

```yaml
  "main": "index-prestoplay.html",
```
  
with line:

```yaml
  "main": "index-dashjs.html",
```


## Deploying app

To package and deploy the application through a command line, [webOS CLI Tools](https://webostv.developer.lge.com/develop/tools/cli-introduction) can be used.
Instructions on how to download and install CLI Tools can be found at the link above.

Once CLI Tools are installed and the test device is configured, the following command can be used to package the application:

```yaml
ares-package ./drmtoday-webos-demo
```

When the application is packaged, it can be installed and launched on a webOS device using the following commands:

```yaml
ares-install -d webOS_TV com.drmtoday.demo_1.0.0_all.ipk
ares-launch -d webOS_TV com.drmtoday.demo
```

## Debugging

In case of some issues with the playback, the following command can be used to debug the webOS application:

```yaml
ares-inspect -d webOS_TV com.drmtoday.demo
```

The command returns a URL that can be opened in a browser and through which console and network logs are accessible.


## Implementation details

Source code of the demo pages with the two mentioned players is available in dedicated html pages in the repository.

Please refer to the DRMtoday documentation for more details about general integration of a particular player with DRMtoday:

- [dash.js](https://fe.staging.drmtoday.com/documentation/integration/player/dashjs.html)
- [PRESTOplay SDK for Browsers](https://fe.staging.drmtoday.com/documentation/integration/player/prestoplay.html#prestoplay-for-browsers)
