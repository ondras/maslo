LESSC := ../node_modules/.bin/lessc
SKINS := cyan
SKINS := $(patsubst %,%/skin.css,$(SKINS))

all: $(SKINS)

%/skin.css: %/skin.less _include/*.less
	$(LESSC) $< > $@

clean:
	rm -f $(SKINS)

.PHONY: all clean
