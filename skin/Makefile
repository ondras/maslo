LESSC := ../node_modules/.bin/lessc
SKINS := dark
SKINS := $(patsubst %,%/skin.css,$(SKINS))

all: $(SKINS)

%/skin.css: %/src/skin.less
	$(LESSC) $< > $@

clean:
	rm -f $(SKINS)

.PHONY: all clean
