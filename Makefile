LESSC := node_modules/.bin/lessc
ROLLUP := node_modules/.bin/rollup
HIGHLIGHT := vendor/highlight.min.js

all: app.js app.css skin

app.js: js/*.js $(HIGHLIGHT)
	echo -n > $@
	cat node_modules/markdown-it/dist/markdown-it.min.js >> $@
	cat node_modules/markdown-it-attrs/markdown-it-attrs.browser.js >> $@
	cat node_modules/hammerjs/hammer.min.js >> $@
	cat $(HIGHLIGHT) >> $@
	$(ROLLUP) -c -i js/app.js >> $@

app.css: css/*.less
	$(LESSC) css/app.less > $@

$(HIGHLIGHT):
	wget cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js -O $(HIGHLIGHT)

skin:
	$(MAKE) -C skin

clean:
	rm -rf app.js app.css skin.css $(HIGHLIGHT)
	$(MAKE) -C skin clean

watch: all
	while inotifywait -e MODIFY -r \
		css/*.less \
		js/*.js \
		skin/*/*.less \
		; do make $^ ; done

.PHONY: all clean watch skin
