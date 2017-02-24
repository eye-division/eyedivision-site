/**
* This is the commented version
* January 2017
* Alun Ward
* Eye Division Ltd
* a.ward@eyedivision.com
* ResidualParticles createJS (EaselJS) file for HTML5, Canvas
* requires https://code.createjs.com/createjs-2015.11.26.min.js
* Spritesheet and assets exported from Animate CC using the createJS library
* ResidualParticles.fla is the latest version
* residualparticles.html contains recommended HTML to start this off
**/
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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.walls = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,2,1).p("AgnAUIBPAAAgngTIBPAA");
	this.shape.setTransform(635.4,67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("EgxUgAyIAAqIMBipgABIAAKGEAxVgAFIAALBMhipgADIAAq/");
	this.shape_1.setTransform(315.7,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.walls, new cjs.Rectangle(-1,-1,641.4,142), null);


(lib.pressureText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape.setTransform(155.8,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAEgMAHgFQAIgFANAAIAAANQgKAAgHADQgGADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_1.setTransform(147.4,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgVAyQgGgDgFgFQgFgFgBgHQgCgHAAgIIAAhDIAMAAIAABDQAAANAGAHQAGAHAPAAQAGAAAGgDQAGgDADgFQAEgFADgHQACgHAAgJIAAg3IAMAAIAABmIgMAAIAAgOIgGAGIgGAFQgEADgFABQgGACgGAAQgJAAgIgDg");
	this.shape_2.setTransform(138,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgQA0QgIgDgFgFQgFgEgDgHQgCgGgBgIIAMAAQADAOAIAFQADADAGABQAEACAHAAQAGAAAFgCQAFgBACgDQAEgDACgDIABgHQAAgIgFgEQgFgDgHgDIgPgDQgJgCgHgCQgIgDgEgFQgDgDgBgEQgCgEAAgFQAAgNAKgIQAFgEAHgDQAGgCAJAAQAQAAAKAIQAGAEACAGQAEAGABAJIgMAAQgBgGgCgEQgDgFgEgCQgHgFgKAAQgLAAgHAFQgFAFAAAIQAAAHAEAEQAFADAIADIAOAEIAQAEQAIADAFAGQAFAFAAAKQAAAIgDAFQgDAGgGAEQgGAEgIACQgHACgJAAQgIAAgHgDg");
	this.shape_3.setTransform(127.5,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgQA0QgIgDgFgFQgFgEgDgHQgDgGAAgIIAMAAQADAOAHAFQAEADAFABQAGACAGAAQAGAAAFgCQAFgBADgDQADgDABgDIACgHQAAgIgFgEQgFgDgHgDIgPgDQgJgCgHgCQgIgDgEgFQgDgDgBgEQgBgEgBgFQAAgNAKgIQAFgEAHgDQAGgCAJAAQAQAAAKAIQAGAEACAGQAEAGABAJIgMAAQgBgGgCgEQgDgFgEgCQgHgFgKAAQgLAAgHAFQgFAFAAAIQAAAHAEAEQAFADAIADIAOAEIAQAEQAIADAFAGQAFAFAAAKQAAAIgDAFQgEAGgFAEQgGAEgIACQgHACgJAAQgIAAgHgDg");
	this.shape_4.setTransform(117.5,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_5.setTransform(106.9,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAFgMAGgFQAIgFANAAIAAANQgKAAgGADQgHADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_6.setTransform(98.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgvBKIAAiQIANAAIAAASIAHgJQADgEAGgCIAKgEIAJgCIALABQAFABAFADQAJAEAGAHQAFAHADAKQACAKAAAMQAAALgCAJQgDAKgGAHQgGAIgIAEQgJAFgLAAQgKAAgLgFQgKgFgFgKIAAA6gAgPg6QgHADgDAGQgFAGgCAIQgCAIAAAJQAAAJACAIQACAHAFAGQAEAGAGADQAHAEAIAAQAIAAAHgEQAHgEAFgGQAEgGACgIQACgIAAgKQAAgKgDgIQgCgHgGgFQgEgFgHgDQgGgDgHAAQgIAAgHAEg");
	this.shape_7.setTransform(88.9,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgFBIIAAiPIALAAIAACPg");
	this.shape_8.setTransform(74.8,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgaA1QgGgCgGgEQgEgEgDgFQgDgGAAgHQAAgaAkgEIAQgDIAIgBIAIgCQADgBAAgEIABgGIgBgIQgBgEgDgDQgDgDgFgBQgFgCgGAAIgMABQgFABgEADQgEADgCAEQgDAFgBAHIgMAAQABgKADgGQAEgHAFgEQAGgEAIgCQAHgCAJAAQAHAAAGACQAHACAGADQAEAEADAGQADAHAAAJIAAA3QAAAHACACQADACAIgDIAAAJIgEACIgGAAIgFAAIgFgCIgCgEIgCgEIgBgGIgIAIIgJAFIgJADIgLACQgHAAgGgCgAAJACIgPABIgMACQgFACgEACQgIAGAAAKQAAAFACADIAFAGQADADAEABIAIABQAHAAAHgCQAGgCAFgEQAGgDADgGQADgGAAgHIAAgQQgIADgHABg");
	this.shape_9.setTransform(67.3,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgVAyQgGgDgFgFQgEgFgCgHQgCgHAAgIIAAhDIAMAAIAABDQAAANAGAHQAGAHAOAAQAHAAAGgDQAGgDAEgFQADgFADgHQACgHAAgJIAAg3IAMAAIAABmIgMAAIAAgOIgGAGIgGAFQgEADgGABQgEACgHAAQgJAAgIgDg");
	this.shape_10.setTransform(55.9,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgVBFQgJgEgGgHQgFgIgDgKQgDgKAAgLQAAgLADgJQADgKAGgIQAFgHAJgFIAKgDIALgBQAKAAAKAFIAJAGQAEADADAGIAAg6IAMAAIAACPIgMAAIAAgSIgBAAQgCAGgEADIgJAHIgLAEIgJACQgMAAgJgFgAgPgVQgGAEgFAGQgEAHgCAIQgCAIAAAKQAAAKADAHQADAHAEAGQAFAFAHADQAGACAHAAQAIAAAHgDQAGgEAFgFQAEgGACgIQADgJAAgIQAAgKgDgHQgCgIgFgFQgEgGgHgEQgGgDgIAAQgJAAgHADg");
	this.shape_11.setTransform(44,10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgFBIIAAhnIALAAIAABngAgGg1IAAgSIANAAIAAASg");
	this.shape_12.setTransform(36,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgRA0QgHgDgFgFQgFgEgCgHQgDgGgBgIIANAAQACAOAIAFQADADAGABQAFACAFAAQAHAAAFgCQAEgBADgDQAEgDACgDIABgHQAAgIgFgEQgFgDgHgDIgPgDQgJgCgHgCQgHgDgGgFQgCgDgBgEQgBgEAAgFQAAgNAJgIQAFgEAGgDQAIgCAIAAQAQAAALAIQAEAEAEAGQADAGABAJIgMAAQgBgGgCgEQgCgFgEgCQgIgFgKAAQgMAAgFAFQgHAFAAAIQAAAHAGAEQAEADAHADIAQAEIAQAEQAHADAFAGQAFAFAAAKQAAAIgEAFQgDAGgFAEQgGAEgHACQgIACgIAAQgJAAgIgDg");
	this.shape_13.setTransform(28.8,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_14.setTransform(18.2,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIAAAAQAGgMAHgFQAHgFANAAIAAANQgKAAgHADQgGADgDAGQgEAGgCAIQgBAIAAAHIAAAzg");
	this.shape_15.setTransform(9.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pressureText, new cjs.Rectangle(0,0,167.4,24), null);


(lib.plusBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(3,0,0,4).p("AiPAAICPAAIAAiPAAACQIAAiQICQAA");
	this.shape.setTransform(29.8,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AAACQIAAiQIiPAAAAAAAIAAiPACQAAIiQAA");
	this.shape_1.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,0,0,4).p("AEqAAQAAAygPAtQgWBBgzAzQhXBXh7AAQgXAAgYgDQhdgPhGhFQhXhWAAh9QAAgUADgUQAMhhBIhIQBJhIBggNQAVgDAUAAQB7AABXBYQBYBXAAB6g");
	this.shape_2.setTransform(29.8,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguEnQhegPhGhFQhWhWgBh9QABgUACgVQAMhgBIhHQBJhJBggNQAVgCAUgBQB7AABWBZQBZBWgBB6QABAygQAtQgVBAg0A0QhWBWh7AAQgYABgWgDg");
	this.shape_3.setTransform(29.8,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AguEnQhegPhGhFQhWhWgBh9QABgUACgVQAMhgBIhHQBJhJBggNQAVgCAUgBQB7AABWBZQBZBWgBB6QABAygQAtQgVBAg0A0QhWBWh7AAQgYABgWgDg");
	this.shape_4.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,61.5);


(lib.newLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AggD7IgSguQgiAjgBgBIgngQQgBAAArhWIgVgPIiPgVICPg5IhViKICPBjIAqkBIAwEBICihjIh+CCICmBFIilAMQgLAPgBAAIAyBfIABAAIgDAAQgRAJgSAFIgsgkIgRAAIgDAuIgSACg");
	this.shape.setTransform(27.6,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(254,228,0,0.996)").s().p("AASEUIADguIARAAIAsAkQgnAMgrAAgAjEDEQggghgUglQgdg5AAhFQABhyBQhSQBShQBygBQBzABBRBQQBSBSAAByQAABIggA6QgTAjgfAfQgjAjgqAUIgzheQACAAALgPIClgMIimhFIB+iCIiiBjIgwkBIgqEBIiPhjIBVCKIiQA5ICQAUIAVAQQgrBVABABIAmAQQABAAAigiIATAtIAhADQhyAAhShSg");
	this.shape_1.setTransform(27.8,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newLogo, new cjs.Rectangle(0,0,55.5,55.5), null);


(lib.minusBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slash
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#346ABA").ss(3,0,0,4).p("AiPAAIEfAA");
	this.shape.setTransform(29.8,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AiPAAIEfAA");
	this.shape_1.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,1,1).p("AEqAAQAAB7hYBYQhXBXh7AAQh6AAhYhXQhXhWAAh9QAAh6BXhXQBYhYB6AAQB7AABXBYQBYBXAAB6g");
	this.shape_2.setTransform(29.8,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjSDTQhWhWgBh9QABh6BWhWQBYhZB6AAQB7AABWBZQBZBWgBB6QABB7hZBYQhWBWh7AAQh6AAhYhWg");
	this.shape_3.setTransform(29.8,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#346ABA").s().p("AjSDTQhWhWgBh9QABh6BWhWQBYhZB6AAQB7AABWBZQBZBWgBB6QABB7hZBYQhWBWh7AAQh6AAhYhWg");
	this.shape_4.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,61.5);


(lib.helpPanelBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,0,0,4).p("EA5qAHgMhzTAAAIAAu/MBzTAAAg");
	this.shape.setTransform(369.2,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg5pAHgIAAu/MBzTAAAIAAO/g");
	this.shape_1.setTransform(369.2,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpPanelBox, new cjs.Rectangle(-0.7,-0.7,740,98), null);


(lib.fireBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgGBIIAAiDIguAAIAAgMIBpAAIAAAMIguAAIAACDg");
	this.shape.setTransform(59.5,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAmBIQgCgEgBgGIgBgNIgBgOIgBgLQgBgGgDgDQgDgDgEgDIgIgCIgKgBIgqAAIAABCIgNAAIAAiPIA3AAQAMAAAJACQAJADAHAEQAMAJAAAUQAAANgFAIQgGAJgMAEQAGACAEAEQADAFACAFIACAMIABALIABANIABAJIACAGIACACIAAACgAgngEIAqAAQAHAAAHgBQAGgCAFgEQAFgDADgGQADgFAAgHQAAgJgDgFQgDgFgFgDQgFgDgGgBIgNgBIgrAAg");
	this.shape_1.setTransform(47.5,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAxBIIgQgtIhBAAIgRAtIgNAAIA4iPIAPAAIA3CPgAAdAPIgchKIgcBKIA4AAg");
	this.shape_2.setTransform(34,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgGBIIAAiDIguAAIAAgMIBpAAIAAAMIguAAIAACDg");
	this.shape_3.setTransform(21.8,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgUBJQgKgDgGgGQgHgGgFgIQgDgJAAgMIANAAQABAKADAGQAEAHAFAEQAGAEAHACQAHACAHAAQAKAAAHgCQAHgCAEgEQAFgFACgFQACgFAAgHQAAgIgEgFQgEgFgGgDQgGgEgIgCIgPgEIgRgEQgHgCgGgFQgHgEgDgHQgEgGAAgLQAAgIADgGQADgIAHgFQAGgFAIgEQAKgDALAAQAMAAAJADQAJAEAGAGQAGAGADAIQADAHAAAJIgNAAQAAgIgDgGQgCgGgGgEQgFgDgGgDIgNgBQgKAAgGADQgIADgEAEQgEAFgCAGQgBAFABAGQABAGAEAFQAFAEAGADQAHADAHABIAPAEIAQAEQAHACAFAEQAGAFAEAGQAEAIAAAKQAAAUgPALQgHAGgJACQgKADgMAAQgKAAgKgDg");
	this.shape_4.setTransform(10.1,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Al5CRIAAkhILyAAIAAEhg");
	this.shape_5.setTransform(37.3,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5}]},3).wait(1));

	// border
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("AFeCNIq7AAIAAkZIK7AAg");
	this.shape_6.setTransform(35,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEEBB4").s().p("AldCNIAAkZIK7AAIAAEZg");
	this.shape_7.setTransform(35,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.9,30.2);


(lib.beamText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgeBIIgFgBIAAgMIAEABIAGAAQAEAAAEgDQADgDACgEIAEgKIADgIIgohnIANAAIAgBYIAhhYIAOAAIgnBlIgHARIgGAOQgEAFgFADQgEADgGAAg");
	this.shape.setTransform(121.3,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgUBHQgIgDgFgEQgFgEgDgGQgDgFAAgFIANAAQABAHADADQADAEAFACIAJADIAKAAQALAAAIgDQAHgFAEgGQAEgIABgIIABgRQgGAJgKAFQgKAFgKAAQgGAAgFgCIgKgCQgJgFgFgIQgGgHgDgKQgDgJAAgLQAAgMADgJQADgLAFgGQAGgIAJgEQAJgEAMgBIAJACIALAEIAJAGQAEAFACAEIABAAIAAgSIAMAAIAABdQAAALgCAJQgDAJgFAIQgFAHgKAEQgJAFgOAAQgLgBgJgDgAgMg8QgHADgFAFQgEAFgDAIQgDAHAAAKQAAAKACAJQACAHAEAGQAFAGAGAFQAHADAJAAQAIAAAGgDQAHgEAEgGQAFgGACgHQADgIAAgJQAAgJgDgIQgCgIgEgGQgFgGgGgDQgHgDgIgBQgHABgGACg");
	this.shape_1.setTransform(109.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAFgMAGgFQAIgFANAAIAAANQgKAAgGADQgHADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_2.setTransform(101.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_3.setTransform(91.9,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgBgGQgCgFgDgDQgHgHgNAAQgFAAgFABIgIAFIgHAGIgDAIQgCAFAAAEIgBAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQAEgDAEgBQAFgBAEAAQAKAAAIADQAIADAGAJQADAFABAGIABAMIAABDg");
	this.shape_4.setTransform(80.8,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_5.setTransform(69.7,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AA6A1IAAhGIgBgKQgBgFgCgDQgFgGgNAAQgGAAgHADQgGACgEAGIgEAHIgCAHIgBAHIAAAHIAAA3IgLAAIAAhGIgBgKQgBgFgDgDQgEgGgNAAQgHAAgGADQgGACgFAGIgDAHIgCAHIgBAHIAAAHIAAA3IgMAAIAAhmIAMAAIAAAPQAFgJAIgEQAEgDAFgBQAFgBAFAAQAHAAAFABIAJAFQADACABAEIAEAIIAGgJIAIgGQAFgDAFgBQAFgBAFAAQALAAAGADQAGAEAEAGQADAFABAIIABAPIAABAg");
	this.shape_6.setTransform(50.2,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgbA1QgFgCgFgEQgFgEgDgFQgDgGAAgHQAAgaAlgEIAPgDIAIgBIAIgCQADgBABgEIAAgGIgBgIQgCgEgDgDQgCgDgGgBQgEgCgGAAIgMABQgFABgEADQgEADgDAEQgCAFgBAHIgMAAQABgKADgGQAEgHAGgEQAFgEAHgCQAIgCAJAAQAHAAAHACQAGACAFADQAFAEAEAGQACAHAAAJIAAA3QAAAHACACQADACAIgDIAAAJIgFACIgEAAIgGAAIgFgCIgDgEIgBgEIAAgGIgJAIIgJAFIgJADIgLACQgHAAgHgCgAAJACIgPABIgMACQgGACgEACQgHAGAAAKQAAAFACADIAFAGQADADAEABIAJABQAHAAAFgCQAHgCAGgEQAFgDADgGQADgGAAgHIAAgQQgIADgHABg");
	this.shape_7.setTransform(36.6,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_8.setTransform(25.3,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgJBIIgKgEQgEgDgFgEIgHgJIAAASIgMAAIAAiPIAMAAIAAA6QADgGAEgDIAJgGQAKgFALAAQALAAAJAEQAIAFAGAHQAGAIACAKQAEAJAAALQAAALgDAKQgCAKgHAIQgFAHgJAEIgJAEIgNABIgJgCgAgOgVQgHAEgFAGQgEAFgCAIQgCAHgBAKQABAIACAJQACAIAEAGQAFAFAHAEQAGADAIAAQAHAAAHgCQAFgDAFgFQAFgGADgHQADgHgBgKQABgKgCgIQgCgIgFgHQgDgGgIgEQgGgDgJAAQgIAAgGADg");
	this.shape_9.setTransform(13.9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beamText, new cjs.Rectangle(0,0,133.8,24), null);


(lib.Diamond_logopsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.newLogo();
	this.instance.parent = this;
	this.instance.setTransform(27.7,27.8,1,1,0,0,0,27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Diamond_logopsd, new cjs.Rectangle(-0.1,0,55.5,55.5), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgeBbQgMgFgJgIQgJgJgFgLQgFgLAAgNIAVAAQAFAXANAKQAGAFAJACQAJADALAAQALAAAJgDQAIgDAGgFQAGgEACgGQADgGAAgHQAAgNgJgHQgIgGgNgEIgbgGQgPgDgNgEQgNgFgJgKQgEgFgCgHQgCgHAAgJQAAgWAQgPQAJgHALgEQAMgEAPAAQAdAAATAOQAIAGAGALQAFALACAQIgVAAQgBgLgEgHQgFgIgGgEQgNgJgTAAQgUAAgKAJQgLAJAAAOQAAAMAJAGQAJAHAMAEIAbAHQAPADANAFQANAGAJAKQAJAJAAASQAAANgGAKQgGAKgKAGQgKAHgNADQgNAEgQAAQgPAAgNgFg");
	this.shape.setTransform(513.1,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_1.setTransform(494.6,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgKB+IAAj7IAVAAIAAD7g");
	this.shape_2.setTransform(481.1,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgQBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgEgSAAgTQAAgSAFgSQAFgRALgNQALgOAPgHQAPgJAUAAQAQAAAMAEQANAEAKAIQAJAHAHAMQAGAMACAQIgWAAQgFgVgOgLQgHgGgIgDQgJgDgKAAQgQAAgLAHQgLAHgIALQgHALgDAOQgEAOAAANQAAAOADANQADAOAIALQAHALAMAGQALAHAQAAQAMAAAJgEQAJgDAHgGQAIgHAEgJQAEgJACgLIAXAAQgDAPgGANQgHAMgJAJQgJAJgOAFQgNAFgRAAg");
	this.shape_3.setTransform(467.4,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgKB+IAAi0IAUAAIAAC0gAgLheIAAgfIAXAAIAAAfg");
	this.shape_4.setTransform(453.9,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgGBuQgIgIAAgUIAAiDIgaAAIAAgSIAaAAIAAgyIATAAIAAAyIAjAAIAAASIgjAAIAAB7IABALIACAIQACAEADABIALABIAIAAIAJgCIAAARIgKACIgOACQgQAAgHgIg");
	this.shape_5.setTransform(445.1,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgnBdIAAi0IAUAAIAAAiIABAAQAJgWANgIQAOgJAWAAIAAAXQgSAAgLAFQgLAGgGALQgHAKgDAOQgDANAAAOIAABZg");
	this.shape_6.setTransform(435.3,40.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgvBcQgLgDgIgGQgIgHgGgKQgEgJAAgNQAAguA/gIIAcgEIAOgCIANgEQAGgCABgGIABgLQABgIgDgHQgCgGgGgFQgFgFgJgDQgJgDgLAAQgKAAgJACQgKACgHAFQgGAFgFAIQgFAHgBAMIgVAAQABgQAHgLQAGgMAJgHQALgHANgDQANgEAOAAQANAAAMAEQANACAIAHQAJAGAGALQAEALAAAQIAABiQABAMAEADQAEADAOgEIAAAQIgIACIgJABIgKgBQgFAAgDgDIgFgGIgDgIIgBgJIgNAMIgQAKIgRAGIgUACQgMAAgLgEgAAPADIgaADQgMAAgJADQgKADgGAFQgOAJAAASQAAAJAEAGQADAGAFAEQAGAEAGACIAQACQAMAAAKgDQANgEAJgGQAJgHAGgJQAFgKAAgOIAAgbQgNAEgOACg");
	this.shape_7.setTransform(419.3,40.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AhWB+IAAj7IBbAAQAYAAARAGQAPAFAJAKQAKAKAEAMQADAOAAAOQAAAVgJANQgIAOgOAGQgNAJgSACQgRAEgQAAIg2AAIAABvgAg+gEIA2AAQAQgBANgCQANgCAKgGQAJgGAFgJQAFgLAAgPQAAgMgEgKQgEgIgHgGQgQgNghAAIg9AAg");
	this.shape_8.setTransform(399.3,37.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgJB+IAAj7IATAAIAAD7g");
	this.shape_9.setTransform(374.3,37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgvBcQgLgDgIgGQgIgHgGgKQgEgJAAgNQAAguA/gIIAcgEIAOgCIANgEQAGgCABgGIACgLQgBgIgCgHQgCgGgGgFQgFgFgJgDQgIgDgLAAQgMAAgIACQgKACgGAFQgIAFgEAIQgEAHgCAMIgVAAQABgQAGgLQAGgMAKgHQAKgHAOgDQANgEAPAAQAMAAANAEQALACAJAHQAJAGAGALQAEALAAAQIAABiQAAAMAFADQAEADAOgEIAAAQIgHACIgKABIgJgBQgGAAgDgDIgFgGIgDgIIAAgJIgPAMIgPAKIgRAGIgUACQgMAAgLgEgAAQADIgbADQgMAAgKADQgIADgHAFQgOAJAAASQAAAJAEAGQADAGAFAEQAFAEAIACIAPACQALAAALgDQAMgEAKgGQAJgHAGgJQAFgKABgOIAAgbQgOAEgNACg");
	this.shape_10.setTransform(361.1,40.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AglBYQgMgFgHgJQgIgJgEgMQgDgMAAgPIAAh2IAVAAIAAB2QAAAXALANQALAMAZAAQALAAALgFQAKgFAHgJQAIgJADgNQAEgMAAgPIAAhiIAVAAIAAC0IgVAAIAAgZIgJAKIgNAKQgHAEgIADQgKADgLAAQgRAAgNgFg");
	this.shape_11.setTransform(341.2,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgmB5QgPgHgLgNQgJgNgFgRQgEgSgBgTQAAgUAGgQQAFgRAJgOQAKgNAPgHQAIgEAJgDQAJgCAKAAQATAAARAJQAJAEAHAGQAHAHAFAIIAAhjIAWAAIAAD7IgWAAIAAghIgBAAQgEAKgHAHQgIAGgIAFQgJAEgJADQgJADgIgBQgVAAgQgHgAgbgkQgLAGgIAMQgIALgDAOQgEAPABAQQAAARAEAOQAGANAIAJQAIAJAMAFQALAEAMAAQAOABAMgHQALgGAJgJQAHgLAEgOQAFgPgBgQQABgPgFgOQgEgNgIgKQgIgLgMgFQgKgHgPAAQgQAAgMAHg");
	this.shape_12.setTransform(320.4,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgKB+IAAi0IAUAAIAAC0gAgKheIAAgfIAWAAIAAAfg");
	this.shape_13.setTransform(306.3,37.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgeBbQgMgFgJgIQgJgJgFgLQgFgLAAgNIAVAAQAFAXAMAKQAHAFAJACQAJADALAAQALAAAJgDQAJgDAFgFQAGgEACgGQADgGAAgHQAAgNgJgHQgIgGgNgEIgbgGQgPgDgNgEQgNgFgJgKQgEgFgCgHQgCgHAAgJQAAgWAQgPQAJgHALgEQAMgEAPAAQAdAAATAOQAIAGAGALQAFALACAQIgVAAQgBgLgEgHQgFgIgGgEQgNgJgTAAQgUAAgKAJQgLAJAAAOQAAAMAJAGQAJAHAMAEIAbAHQAPADANAFQANAGAJAKQAJAJAAASQAAANgGAKQgGAKgKAGQgJAHgOADQgNAEgQAAQgPAAgNgFg");
	this.shape_14.setTransform(293.6,40.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_15.setTransform(275.1,40.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AA+BsIgDgXIgBgYIgDgSQgCgLgEgGQgEgGgIgDQgGgEgJAAIgQgCIhKAAIAABzIgYgBIAAj6IBiAAQAUAAARAEQAQAEALAIQAVAPAAAjQAAAYgJAOQgKAOgVAJQAKAEAHAHQAGAIAEAJQADAJABALIAAAUIACAYIACAPIADAJIAEAGIAAABIgaABQgEgHgBgLgAhEgIIBJAAQANAAALgCQAMgEAIgFQAJgHAFgJQAEgJAAgNQAAgPgEgJQgFgJgJgFQgJgFgLgCQgKgCgMgBIhLAAg");
	this.shape_16.setTransform(254.2,37.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_17.setTransform(227.5,48.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAcB6IAAg9IhwAAIAAgTIByijIAUAAIAACjIAjAAIAAATIgjAAIAAA9gAg+AqIBaAAIAAiBg");
	this.shape_18.setTransform(213,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// diamondLogo_mc
	this.diamondLogo_mc = new lib.Diamond_logopsd();
	this.diamondLogo_mc.parent = this;
	this.diamondLogo_mc.setTransform(46.4,42.6,1,1,0,0,0,29,28.5);

	this.timeline.addTween(cjs.Tween.get(this.diamondLogo_mc).wait(1));

	// Layer 14
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aobl+IJigFIHVGRInHF2IpwgCg");
	this.shape_19.setTransform(54.4,41.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AobGCIAAsAIJigFIHUGRInGF2g");
	this.shape_20.setTransform(54.4,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// lozenge2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("Ah8GMIjpAAIgHsWID8gBIHbGZg");
	this.shape_21.setTransform(98.5,41.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AlkGMIgHsWID8gBIHbGZInnF+g");
	this.shape_22.setTransform(98.4,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// lozenge1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AFzAMInkGCIkDgCIAPsZIEAAAg");
	this.shape_23.setTransform(123.4,41.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AlzGMIAPsZIEAAAIHYGZInkGCg");
	this.shape_24.setTransform(123.3,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 13
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AlZmMIDugBIHVGVInrGCIjrAEg");
	this.shape_25.setTransform(148.5,41.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AlYmMIDugBIHVGVInqGCIjrAEg");
	this.shape_26.setTransform(148.3,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// lozenge3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("Eg1GgGFMBirgAKIHiGfIniGAMhitAAAg");
	this.shape_27.setTransform(339.6,41.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Eg1HAGQIACsVMBirgAKIHiGeIniGBg");
	this.shape_28.setTransform(339.5,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	// lozenge5
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_29.setTransform(409.1,41.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_30.setTransform(409,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// lozenge6
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_31.setTransform(435.1,41.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_32.setTransform(435,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-64.3,0.2,799.9,83.4), null);


// stage content:
(lib.ResidualParticles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {

		this.stop();

	  var startX = 50,
	  		startY = 270,
	  		endX = 750,
	  		endY = 270;

		var emitter = {
      density: 2,	// initial number of particles - altered by pressure
      particleSize: 5,
      startingX: 50,
      startingY: 270,
      gravity: 0,
      wind: 0,
      friction: 0.97,
      groundLevel: 400,
      ceiling: 150,
      rightWall: 750,
      leftWall: 50
	  };
    // create a box for the electrons and particles, easier to clear up
    var particleContainer = new createjs.Container();
    particleContainer.width = 710;
    particleContainer.height = 250;
    stage.addChild(particleContainer);

    var particles = [];
		var frozen = false;
	  this.result_txt.text = '';	  // make a reference
	  var resultText = this.result_txt;
		var electron = new createjs.Shape();
		var electronStartx = startX,
		  	electronStarty = startY,
		  	electronSpeed = 2, // between 10 and 40 at 60fps is good
		    electronSize = 3;

		electron.graphics.beginFill("#0070BC").drawCircle(0, 0, electronSize);

		// create the line
		var line = new createjs.Shape();
		line.graphics.beginStroke("#cccccc");
    line.graphics.lineTo(electronStartx, electronStarty);
    electron.x = electronStartx;
    electron.y = electronStarty;
    electron.vx = electronSpeed;
		electron.vy = 0;
		electron.mass = electronSize + electronSpeed / 5;
		electron.radius = emitter.particleSize;

		/** Sets up our single Electron */
  	function createElectron() {
  		electron.graphics.beginFill("#0070BC").drawCircle(0, 0, electronSize);
			electron.x = electronStartx;
	    electron.y = electronStarty;
	    electron.vx = electronSpeed;
			electron.vy = 0;
			electron.mass = electronSize + electronSpeed / 5;
			electron.radius = emitter.particleSize;
	    particleContainer.addChild(electron);
	    line.graphics.beginStroke("#cccccc");
    	line.graphics.lineTo(electronStartx, electronStarty);
    	particleContainer.addChild(line);
	    stage.update();
	    createjs.Ticker;
	    createjs.Ticker.setFPS(60);
	    electron.addEventListener("tick", moveElectron);
  	}

		function restartElectron() {
			line.graphics.clear();
			particleContainer.removeChild(line);
			particleContainer.removeChild(electron);
			stage.update();
			createElectron();
	  }

		// buttons and listeners
	  this.energyplus_mc.addEventListener("click",energyPlus.bind(this));
	  this.energyminus_mc.addEventListener("click",energyMinus.bind(this));
	  this.pressureplus_mc.addEventListener("click",pressurePlus.bind(this));
	  this.pressureminus_mc.addEventListener("click",pressureMinus.bind(this));

    for(i = 0; i < emitter.density; i++) {
		  createParticle();
		}

		createjs.Ticker.addEventListener("tick", handleTick); // moves particles

		this.fire_btn.addEventListener( "click", fireClick.bind(this));


		function fireClick() {
			 restartElectron();
		}

		/** Sets up a particle */
    function createParticle() {
      var graphics = new createjs.Graphics();
      graphics.beginFill("#cccccc");
      graphics.drawCircle(0, 0, emitter.particleSize);
      var circle = new createjs.Shape(graphics)
      circle.x = Math.random() * particleContainer.width;
	    circle.y = Math.random() *  particleContainer.height;
      circle.vx = Math.random() * 2 - 1;
     	circle.vy = Math.random() * 2 + 1;
      circle.id = "particle";
      circle.mass = emitter.particleSize;
      circle.radius = emitter.particleSize;
      particleContainer.addChild(circle);
      particles.push(circle);
    }


    function clearAssets() {
    	electron.removeEventListener("tick", moveElectron);
    	particleContainer.removeChild(electron);
    }

	  function restartParticles() {

	  	particleContainer.removeAllChildren();
	  	particles = [];
	  	for(i = 0; i < emitter.density; i++) {
			  createParticle();
			}
			resultText.text = '';
			stage.update();
	  }


		function handleTick(event) { // this is particle animator - runs on ticker

      for (var i = 0; i < particleContainer.getNumChildren(); i++) {

        var circle = particleContainer.getChildAt(i);
        if(circle.id == "particle") {
          circle.vx -= emitter.gravity;
          circle.vy += emitter.gravity;
          circle.x += circle.vx;
          circle.y += circle.vy;

        // bounce off walls
	      if ((circle.y - emitter.particleSize) <= emitter.ceiling) {
	          circle.vy *= -1;
	          circle.vx *= 1;
	          circle.y = emitter.ceiling + emitter.particleSize;
	        }
	        if ((circle.y + emitter.particleSize) > emitter.groundLevel) {
	          circle.vy *= -1;
	          circle.vx *= 1;
	          circle.y = emitter.groundLevel - emitter.particleSize;
	        }
	        if (circle.x - (emitter.particleSize) <= emitter.leftWall) {
	          circle.vx *= -1;
	          circle.x = emitter.leftWall + emitter.particleSize;
	        }
	        if (circle.x + (emitter.particleSize) >= emitter.rightWall) {
	          circle.vx *= -1;
	          circle.x = emitter.rightWall - emitter.particleSize;
	        }
	        // end bounce off walls

        }
      } // end foreach
    } // end tick event


    function endLine() {
      restartElectron();
    }

    function moveElectron(event) { // electron movement

	    event.target.x += event.target.vx;
	    event.target.y += event.target.vy;
	    if(electronSpeed < 8) {
	      for (var partB, j = 0; j < emitter.density; j++) {
	    		partB = particles[j];
	    		checkCollision(electron, partB);
	      	gravitate(electron,partB);
	      }
    	}

      drawLine();
	    // detect if it hits the walls and then stop everything
	    if ( (event.target.y > startY - 5) && (event.target.y < startY + 5) && (event.target.x >= emitter.rightWall - event.target.radius) ) {
        resultText.text = 'Success!';
        clearAssets();
      } else if ( (event.target.y <= emitter.ceiling) || (event.target.y >= emitter.groundLevel) || (event.target.x <= emitter.leftWall) || (event.target.x >= emitter.rightWall) ) {
        resultText.text = 'Crashed!';
        clearAssets();
      }
	  }

    function drawLine() {
	    if((electron.x <= endX) && (!frozen))  {
	    	line.graphics.lineTo(electron.x, electron.y);
	    }
	  }

	  // beam energy button - 1. remove electron and line; 2. restart electron and line
	  function energyPlus() { // increase energy, electron travels faster = fewer seconds
	  	if(electronSpeed < 10) {
	  		electronSpeed++;
	  		endLine();
	  	}
	  }
	  function energyMinus() {
	  	if(electronSpeed > 1)  {
	  		electronSpeed--;
	  		endLine();
	  	}
	  }

	  // add residual pressure via buttons - 1. remove particles; 2. add particles
	  function pressurePlus() { // add to residual pressure - add particles
	  	if(emitter.density < 10) {
	  		emitter.density++;
	  		restartParticles();
	  	}
	  	if(emitter.density <= 2) {
	  		this.vacuum_mc.shadow = null;
	  	} else {
	  		this.vacuum_mc.shadow = new createjs.Shadow("rgb(255, 147, 147)", 1, 1, emitter.density);
	  	}
	  }

	  function pressureMinus() { // remove particles
	  	if(emitter.density > 2) {
	  		emitter.density--;
	  		restartParticles();
		    this.vacuum_mc.shadow = new createjs.Shadow("rgb(255, 147, 147)", 1, 1, emitter.density);
	  	} else if(emitter.density <= 2) {
	  		this.vacuum_mc.shadow = null;
	  	}
	  }

	  // collision and movement
	  function gravitate (partA, partB) {
		  var dx = partB.x - partA.x,
		      dy = partB.y - partA.y,
		      distSQ = dx * dx + dy * dy,
		      dist = Math.sqrt(distSQ),
		      force = partA.mass * partB.mass / distSQ,
		      ax = force * dx / dist,
		      ay = force * dy / dist;
		  partA.vx += ax / partA.mass;
		  partA.vy += ay / partA.mass;
		  partB.vx -= ax / partB.mass;
		  partB.vy -= ay / partB.mass;
		}

		function checkCollision (ball0, ball1) {
      var dx = ball1.x - ball0.x,
          dy = ball1.y - ball0.y,
          dist = Math.sqrt(dx * dx + dy * dy);
      //collision handling code here
      if (dist < ball0.radius + ball1.radius) {
        //calculate angle, sine, and cosine
        var angle = Math.atan2(dy, dx),
            sin = Math.sin(angle),
            cos = Math.cos(angle),
            //rotate ball0's position
            pos0 = {x: 0, y: 0}, //point
            //rotate ball1's position
            pos1 = rotate(dx, dy, sin, cos, true),
            //rotate ball0's velocity
            vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true),
            //rotate ball1's velocity
            vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true),
            //collision reaction
            vxTotal = vel0.x - vel1.x;
        vel0.x = ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) /
                 (ball0.mass + ball1.mass);
        vel1.x = vxTotal + vel0.x;
        //update position - to avoid objects becoming stuck together
        var absV = Math.abs(vel0.x) + Math.abs(vel1.x),
            overlap = (ball0.radius + ball1.radius) - Math.abs(pos0.x - pos1.x);
        pos0.x += vel0.x / absV * overlap;
        pos1.x += vel1.x / absV * overlap;
        //rotate positions back
        var pos0F = rotate(pos0.x, pos0.y, sin, cos, false),
            pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
        //adjust positions to actual screen positions
        ball1.x = ball0.x + pos1F.x;
        ball1.y = ball0.y + pos1F.y;
        ball0.x = ball0.x + pos0F.x;
        ball0.y = ball0.y + pos0F.y;
        //rotate velocities back
        var vel0F = rotate(vel0.x, vel0.y, sin, cos, false),
            vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
        ball0.vx = vel0F.x;
        ball0.vy = vel0F.y;
        ball1.vx = vel1F.x;
        ball1.vy = vel1F.y;
      }
    }
    function rotate (x, y, sin, cos, reverse) {
      return {
        x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
        y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
      };
  	}

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.fire_btn = new lib.fireBtn();
	this.fire_btn.parent = this;
	this.fire_btn.setTransform(80.8,544.6,1,1,0,0,0,31.8,18.8);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.fireBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fire_btn).wait(1));

	// logo
	this.logo_mc = new lib.logo();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(397.6,50.3,1,1,0,0,0,369.7,41);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// plusMinus Pressure
	this.pressureplus_mc = new lib.plusBtn();
	this.pressureplus_mc.parent = this;
	this.pressureplus_mc.setTransform(282.7,538,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.pressureplus_mc, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.pressureminus_mc = new lib.minusBtn();
	this.pressureminus_mc.parent = this;
	this.pressureminus_mc.setTransform(202,538.5,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.pressureminus_mc, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pressureminus_mc},{t:this.pressureplus_mc}]}).wait(1));

	// plusMinus Energy
	this.energyplus_mc = new lib.plusBtn();
	this.energyplus_mc.parent = this;
	this.energyplus_mc.setTransform(516,538,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.energyplus_mc, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.energyminus_mc = new lib.minusBtn();
	this.energyminus_mc.parent = this;
	this.energyminus_mc.setTransform(435.2,538.5,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.energyminus_mc, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.energyminus_mc},{t:this.energyplus_mc}]}).wait(1));

	// energyText_mc
	this.energyText_mc = new lib.beamText();
	this.energyText_mc.parent = this;
	this.energyText_mc.setTransform(493.7,514.8,1,1,0,0,0,66.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.energyText_mc).wait(1));

	// pressureText_mc
	this.pressureText_mc = new lib.pressureText();
	this.pressureText_mc.parent = this;
	this.pressureText_mc.setTransform(261,526,1,1,0,0,0,83.7,27.3);

	this.timeline.addTween(cjs.Tween.get(this.pressureText_mc).wait(1));

	// result
	this.result_txt = new cjs.Text("", "20px 'Helvetica'", "#666666");
	this.result_txt.name = "result_txt";
	this.result_txt.lineHeight = 22;
	this.result_txt.lineWidth = 377;
	this.result_txt.parent = this;
	this.result_txt.setTransform(51,426.2);

	this.timeline.addTween(cjs.Tween.get(this.result_txt).wait(1));

	// linac_mc
	this.vacuum_mc = new lib.walls();
	this.vacuum_mc.parent = this;
	this.vacuum_mc.setTransform(400.1,275,1.109,1.786,0,0,0,315.8,70);

	this.timeline.addTween(cjs.Tween.get(this.vacuum_mc).wait(1));

	// help_mc
	this.help_mc = new lib.helpPanelBox();
	this.help_mc.parent = this;
	this.help_mc.setTransform(395.8,542,1,1,0,0,0,369.2,48.2);
	this.help_mc.filters = [new cjs.ColorFilter(0.33, 0.33, 0.33, 1, 170.85, 170.85, 170.85, 0)];
	this.help_mc.cache(-3,-3,744,102);

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.6,309.4,801.5,580.9);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;