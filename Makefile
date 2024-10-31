LESSC := npm exec -- lessc
ESBUILD := npm exec -- esbuild
HIGHLIGHT := node_modules/@highlightjs/cdn-assets/highlight.min.js
SKINS := $(wildcard css/skin/*.less)
SKINS := $(patsubst css/skin/%.less,skin/%.css,$(SKINS))
APP := maslo

all: $(APP).js $(APP).css skins

$(APP).js: js/*.js $(HIGHLIGHT)
	echo -n > $@
	echo "" >> $@
	cat $(HIGHLIGHT) >> $@
	$(ESBUILD) --bundle js/$(APP).js >> $@

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
