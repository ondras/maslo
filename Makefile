LESSC := npm exec -- lessc
ESBUILD := npm exec -- esbuild
APP := maslo

all: $(APP).js $(APP).css

$(APP).js: js/*.js
	$(ESBUILD) --bundle js/$(APP).js --minify --outfile=$@

$(APP).css: css/*.less css/skin/*.less
	$(LESSC) css/$(APP).less > $@

clean:
	rm -rf $(APP).js $(APP).css

watch: all
	while inotifywait -e MODIFY -r \
		css/*.less \
		css/skin/*.less \
		js/*.js \
		; do make $^ ; done

.PHONY: all clean watch
