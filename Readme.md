## Deploying app

```yaml
ares-package ./drmtoday-webos-demo
ares-install -d webOS_TV com.drmtoday.demo_1.0.0_all.ipk
ares-launch -d webOS_TV com.drmtoday.demo
```

## Debugging

```yaml
ares-inspect -d webOS_TV com.drmtoday.demo
```

## Switching player

This demo app demonstrates how to use PRESTOplay SDK for Browsers and/or Dash.js to play encrypted content protected by DRMtoday.
By default, PRESTOplay is used.

To switch to Dash.js, please modify appinfo.json - replace line:

```yaml
  "main": "index-prestoplay.html",
```
  
with line:

```yaml
  "main": "index-dashjs.html",
```