(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:



// stage content:
(lib.animatedlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes-closed
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrDXQgUgJgPgPQgGgGgEgGIASAAIABACQAdAdAoAAQApAAAdgdIACgCIARAAIgKAMQgQAPgUAIQgUAJgXAAQgWAAgVgIgAgri6QgUgJgPgPQgGgGgEgGIASAAIABACQAdAdAoAAQApAAAdgdIACgCIARAAIgKAMQgQAPgUAIQgUAJgXAAQgWAAgVgIg");
	this.shape.setTransform(48.8,59);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(112).to({_off:false},0).wait(4));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkrAKIAAgTIJXAAIAAATg");
	this.shape_1.setTransform(50.5,50.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(116));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8EuQgUgHgPgQQgPgQgJgTQgIgWAAgWQAAgYAIgUQAJgTAPgRQAQgOAUgKQAVgHAWgBQAWABAVAHQAUAKAPAOQAPARAJATQAJAWAAAWQAAAWgJAWQgJATgPAQQgQAPgUAIQgUAKgWgBQgXABgVgKgAg2BtQgRAHgOAOQgdAdAAApQgBAoAdAcQAdAfApAAQAoAAAdgdQANgOAIgSQAIgSAAgUQAAgpgdgdQgdgcgoAAQgTgBgTAIgAkrAMIAAgTIJXAAIAAATgAg8hfQgUgKgPgPQgPgPgJgVQgIgTAAgZQAAgVAIgVQAJgVAPgOQAQgRAUgIQAVgJAWAAQAWAAAVAJQAUAIAPARQAPAOAJAVQAJAVAAAWQAAAYgJATQgJAVgPAPQgQAPgUAJQgUAIgWABQgXgBgVgHgAg2kiQgRAIgOAOQgdAcAAAoQgBApAdAdQAdAdApAAQAoAAAdgdQANgNAIgRQAIgTAAgUQAAgpgdgcQgdgdgogBQgTABgTAHg");
	this.shape_2.setTransform(50.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},112).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.5,68.9,60,62.3);
// library properties:
lib.properties = {
	id: '383E10CFF8014AA68B8876AAC8645E43',
	width: 100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;