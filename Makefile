LESSC := node_modules/.bin/lessc
ROLLUP := node_modules/.bin/rollup
HIGHLIGHT := vendor/highlight.min.js
SKINS := $(wildcard css/skin/*.less)
SKINS := $(patsubst css/skin/%.less,skin/%.css,$(SKINS))

all: app.js app.css skins

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

skins: $(SKINS)

skin/%.css: css/skin/%.less css/skin/_include/*.less
	$(LESSC) $< > $@

clean:
	echo $(SKINS)
	rm -rf app.js app.css $(HIGHLIGHT) $(SKINS)

watch: all
	while inotifywait -e MODIFY -r \
		css/*.less \
		css/skin/*.less \
		css/skin/_include/*.less \
		js/*.js \
		; do make $^ ; done

.PHONY: all clean watch skin
