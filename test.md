# ES2017 = ES8 = JS

  - JavaScript language follows the ECMAScript (ES) specification
  - ES versions are numbered both by year and edition
  - Eight edition was finalized in June 2017
  - Previous version (ES2016) brought only two minor features
  - Developers not always enthusiastic about bleeding-edge news

---

# History II: Node.js

Also known as *The Callback Hell*

```js
getData(function(err, data) {
	if (err) return displayError(err)

	processData(data, function(err, result) {
		if (err) return displayError(err)

		displayData(result, function(err) {
			if (err) return displayError(err)
		})
	})
})
```

---

![](https://f4.bcbits.com/img/0003971684_10.jpg)
