# mjpeg-localhost-stream
turn any mjpeg stream into a `http://localhost:<port>` proxy link

## Why?
html pages make exception for `localhost` urls, so you can use this to bypass CORS restrictions. using a simple `http://localhost:<port>` link, you can access any mjpeg stream from any website. This is especially useful for accessing ip camera streams from a https website.

## How?

You can integrate the mjpeg stream that is generated by this tool into any html page using the following code:

```html
<img id="mjpeg" src="http://localhost:8080" crossorigin="anonymous">
```

```javascript
    // get base64 image
    setInterval(function () {
      console.log(new Date().getTime() / 1000);
      var img = document.getElementById('mjpeg');
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL('image/jpeg');
        console.log(dataURL);
    }, 1000/60);
```

## Usage

```bash
npm install -g mjpeg-localhost-stream
mjpeg-localhost-stream <mjpeg-stream-url> <port> (optional, default port is 9999)
```




## Citing this work

If you use this tool in an academic context, please cite the following publication:

```
@misc{mjpeg-localhost-stream,
  author = {Tejaswi Gowda},
  title = {mjpeg-localhost-stream},
  year = {2021},
  publisher = {GitHub},
  journal = {GitHub repository}
}
```

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details



