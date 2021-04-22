LESSC := node_modules/.bin/lessc --math=strict
ROLLUP := node_modules/.bin/rollup
HIGHLIGHT := node_modules/@highlightjs/cdn-assets/highlight.min.js
SKINS := $(wildcard css/skin/*.less)
SKINS := $(patsubst css/skin/%.less,skin/%.css,$(SKINS))
APP := maslo

all: $(APP).js $(APP).css skins

$(APP).js: js/*.js $(HIGHLIGHT)
	echo -n > $@
	cat node_modules/markdown-it/dist/markdown-it.min.js >> $@
	cat node_modules/markdown-it-attrs/markdown-it-attrs.browser.js >> $@
	cat node_modules/hammerjs/hammer.min.js >> $@
	echo "" >> $@
	cat $(HIGHLIGHT) >> $@
	$(ROLLUP) -c -i js/$(APP).js >> $@

$(APP).css: css/*.less
	$(LESSC) css/$(APP).less > $@

skins: $(SKINS)

skin/%.css: css/skin/%.less css/*.less
	$(LESSC) $< > $@

clean:
	echo $(SKINS)
	rm -rf $(APP).js $(APP).css $(SKINS)

watch: all
	while inotifywait -e MODIFY -r \
		css/*.less \
		css/skin/*.less \
		js/*.js \
		; do make $^ ; done

.PHONY: all clean watch skin
