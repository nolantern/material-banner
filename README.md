# material-banner
This a material styled banner.

__This was made to work with [Materialize](https://materializecss.com/ "Homepage of Materialize").__
You can use it without [Materialize](https://materializecss.com/ "Homepage of Materialize"), but you have to style it on your own.

Leading Icons __only__ tested with [Material Icon Font](https://google.github.io/material-design-icons/ "Github Site of Material Icons") icons!


## Installation

Include `material-banner.js` __or__ `material-banner-min.js` at the end of your body tag for optimized page loading.

Local
```
<body>
  <!-- your content -->
  <script src="/.../material-banner.js">
</body>
```

Github
```
<body>
  <!-- your content -->
  <script src="https://nolantern.github.io/material-banner/js/material-banner-min.js">
</body>
```

## Usage

### Placement

Place the `<material-banner></material-banner>` tag over your content of the `<body></body>` tag.
If you using a top bar (appbar / top navigation) place it between the top bar and body's content.


```
<body>

  <!-- top navigation -->

  <material-banner></material-banner>

  <!-- body's content -->
  <p>Hello World</p>

</body>
```

If you want the banner collapsed at the beginning, declare it disabled:
```<material-banner disabled></material-banner>```

### Collapse / Expand

To collapse / expand the banner change it's `disabled` attribute.

```
<material-banner id="banner">Hello World</material-banner>

<button id="btn" onclick="toggleBan()">Toggle Banner</button>

<script>
  const banner = document.getElementById("banner");
  function toggleBan(){
    banner.disabled = !banner.disabled
  }
</script>
```

### Banner Text

Place your content between the `<material-banner></material-banner>` tags.
```
 <material-banner>This is my banner message.</material-banner>
```

### Leading Icon (optional)

You can use a leading icon within your banner.
Place it between `<span>` or `<div>` tags (or whatever tag you want). Inside the `<material-banner></material-banner>` tags and set `slot="icon"`.

```
<material-banner>
  This is my banner message.
  <span slot="icon">
    <i class="material-icons notranslate">signal_wifi_off</i>
  </span>
</material-banner>
```

__This is only tested with [Material Icon Font](https://google.github.io/material-design-icons/ "Github site of Material Icons") icons.__

### Buttons (optional)

You can add buttons to the banner.
Place them between `<span>` or `<div>` tags (or whatever tag you want). Inside the `<material-banner></material-banner>` tags and set `slot="buttons"`.

```
<material-banner>
  This is my banner message.
  <span slot="buttons">
    <button class="material-icons notranslate" onclick="anyFunction()">signal_wifi_off</button>
  </span>
</material-banner>
```
