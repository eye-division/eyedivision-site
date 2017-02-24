/**
* This is the commented version
* with console.log traces for the browser
* January 2017
* Alun Ward
* Eye Division Ltd
* a.ward@eyedivision.com
* Undulator createJS (EaselJS) file for HTML5, Canvas
* requires https://code.createjs.com/createjs-2015.11.26.min.js
* Spritesheet and assets exported from Animate CC using the createJS library
* Undulator.fla is the latest version
* undulator.html contains recommended HTML to start this off
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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("EAr+gYmIKuAAMAAAAxNMhtXgAHMAAAgxDg");
	this.shape.setTransform(350,157.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg2rAYhMAAAgxDIAAgCMBipgACIAAAAMhipAAEMBipgAEIKuAAMAAAAxNg");
	this.shape_1.setTransform(350,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.walls, new cjs.Rectangle(-1,-1,702,317), null);


(lib.redarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.424)").s().p("AgeCoIAAjwIhAAAIBehfIBfBfIg5AAIAADwg");
	this.shape.setTransform(9.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redarrow, new cjs.Rectangle(0,0,19,33.6), null);


(lib.plusBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(3,0,0,4).p("AAACQIAAiQIiPAAAAAAAIAAiPAAAAAICQAA");
	this.shape.setTransform(29.8,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AAAAAIAAiPAAAAAIiPAAAAACQIAAiQACQAAIiQAA");
	this.shape_1.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,0,0,4).p("AEqAAQAAAygPAtQgWBBgzAzQhXBXh7AAQgXAAgYgDQhdgPhGhFQhXhWAAh9QAAgUADgUQAMhhBIhIQBJhIBggNQAVgDAUAAQB7AABXBYQBYBXAAB6g");
	this.shape_2.setTransform(29.8,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguEnQhegPhGhFQhWhWgBh9QABgUACgVQAMhgBIhHQBJhJBggNQAVgCAUgBQB7AABWBZQBZBWgBB6QABAygQAtQgVBAg0A0QhWBWh7AAQgYABgWgDg");
	this.shape_3.setTransform(29.8,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(2,0,0,4).p("AEqAAQAAAygPAtQgWBBgzAzQhXBXh7AAQgXAAgYgDQhdgPhGhFQhXhWAAh9QAAgUADgUQAMhhBIhIQBJhIBggNQAVgDAUAAQB7AABXBYQBYBXAAB6g");
	this.shape_4.setTransform(29.8,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AguEnQhegPhGhFQhWhWgBh9QABgUACgVQAMhgBIhHQBJhJBggNQAVgCAUgBQB7AABWBZQBZBWgBB6QABAygQAtQgVBAg0A0QhWBWh7AAQgYABgWgDg");
	this.shape_5.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,61.5);


(lib.newLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AggD7IgSguQgiAjgBgBIgngQQgBAAArhWIgVgPIiPgVICPg5IhViKICPBjIAqkBIAwEBICihjIh+CCICmBFIilAMQgLAPgBAAIAyBfIABAAIgDAAQgRAJgSAFIgsgkIgRAAIgDAuIgSACg");
	this.shape.setTransform(27.6,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(254,228,0,0.996)").s().p("AASEUIADguIARAAIAsAkQgnAMgrAAgAjEDEQggghgUglICQAUIAVAQQgrBVABABIAmAQQABAAAigiIATAtIAhADQhyAAhShSgABECdQACAAALgPIClgMQgTAjgfAfQgjAjgqAUgABQA9IB+iCIiiBjIgwkBIgqEBIiPhjIBVCKIiQA5Qgdg5AAhFQABhyBQhSQBShQBygBQBzABBRBQQBSBSAAByQAABIggA6g");
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
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("AEqAAQAAB7hYBYQhXBXh7AAQh6AAhYhXQhXhWAAh9QAAh6BXhXQBYhYB6AAQB7AABXBYQBYBXAAB6g");
	this.shape_4.setTransform(29.8,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#346ABA").s().p("AjSDTQhWhWgBh9QABh6BWhWQBYhZB6AAQB7AABWBZQBZBWgBB6QABB7hZBYQhWBWh7AAQh6AAhYhWg");
	this.shape_5.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,61.5);


(lib.magnet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outer line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("APRguIAAFUAnrAXInlk8");
	this.shape.setTransform(97.7,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(2,2,1).p("AgXPmIu5pvIAAvnIP7l5IOlJrIAAAFIvnF4InOkuAPQgkIAAKaIvnFwIAAvn");
	this.shape_1.setTransform(97.7,62.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_2.setTransform(49,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AADACIgFgDAADACIAAAA");
	this.shape_3.setTransform(48.8,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(238,238,238,0.424)").s().p("AnbC8IAAvnIHjE9IAGAEIAAABIAAgBIHOEuIAAPng");
	this.shape_4.setTransform(47.6,81.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.424)").s().p("AnlDGIgGgEInlk8IP7l5IOmJqIAAAFIvoF4gAANDGIAAgBIAAAAg");
	this.shape_5.setTransform(97.7,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.494)").s().p("Anzk3IPnl4IAAFWIAAKaIvnFvg");
	this.shape_6.setTransform(145.3,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADACIgFgDIAFADg");
	this.shape_7.setTransform(48.8,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// inner line
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(1,2,1).p("AAlC/IAAgEIvsFzAPHMnIuipsIAAvj");
	this.shape_8.setTransform(97.6,44);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnet, new cjs.Rectangle(-1.4,-39,198.1,202.8), null);


(lib.lozengeGrey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AhrmNIHVGVInrGCIjrAEIATsag");
	this.shape.setTransform(36.5,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AlYmMIDugBIHVGVInqGCIjrAEg");
	this.shape_1.setTransform(36.3,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lozengeGrey, new cjs.Rectangle(-1,-1,74.7,81.6), null);


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

	// box
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("AFeCNIq7AAIAAkZIK7AAg");
	this.shape_6.setTransform(35,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEEBB4").s().p("AldCNIAAkZIK7AAIAAEZg");
	this.shape_7.setTransform(35,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.9,30.2);


(lib.fieldstrength_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAdBIIAAhEQAAgFgBgGQgCgFgDgDQgHgIgOAAQgEABgFABIgIAFIgHAGIgDAHQgCAFAAAEIgBAKIAAA4IgMAAIAAiPIAMAAIAAA3QAHgIAIgEQAEgDAEgBQAFgBAEAAQAKAAAIADQAIADAGAJQAEAFAAAGIABALIAABEg");
	this.shape.setTransform(116,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgDA/QgFgEAAgMIAAhLIgPAAIAAgKIAPAAIAAgdIALAAIAAAdIAUAAIAAAKIgUAAIAABGIAAAHIACAEQAAABAAAAQAAABABAAQAAAAABAAQAAABABAAIAGABIAEgBIAGgBIAAAKIgHACIgIABQgJAAgDgFg");
	this.shape_1.setTransform(107.6,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgUBHQgIgDgFgEQgFgEgDgGQgDgFAAgFIANAAQABAHADADQADAEAFACIAJADIAKAAQALAAAIgDQAHgFAEgGQAEgIABgIIABgRQgGAJgKAFQgKAFgKAAQgGAAgFgCIgKgCQgJgFgFgIQgGgHgDgKQgDgJAAgLQAAgMADgJQADgLAFgGQAGgIAJgEQAJgEAMgBIAJACIALAEIAJAGQAEAFACAEIABAAIAAgSIAMAAIAABdQAAALgCAJQgDAJgFAIQgFAHgKAEQgJAFgOAAQgLgBgJgDgAgMg8QgHADgFAFQgEAFgDAIQgDAHAAAKQAAAKACAJQACAHAEAGQAFAGAGAFQAHADAJAAQAIAAAGgDQAHgEAEgGQAFgGACgHQADgIAAgJQAAgJgDgIQgCgIgEgGQgFgGgGgDQgHgDgIgBQgHABgGACg");
	this.shape_2.setTransform(98.5,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgCgGQgBgFgDgDQgGgHgOAAQgGAAgEABIgIAFIgGAGIgFAIQgCAFAAAEIAAAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQADgDAGgBQAEgBAFAAQAJAAAIADQAIADAGAJQAEAFABAGIAAAMIAABDg");
	this.shape_3.setTransform(87.1,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_4.setTransform(76,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIAAAAQAFgMAIgFQAHgFANAAIAAANQgKAAgHADQgGADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_5.setTransform(67.6,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgDA/QgFgEAAgMIAAhLIgOAAIAAgKIAOAAIAAgdIALAAIAAAdIAUAAIAAAKIgUAAIAABGIABAHIABAEQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAIAHABIAEgBIAGgBIAAAKIgHACIgIABQgIAAgEgFg");
	this.shape_6.setTransform(61,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgRA0QgHgDgFgFQgFgEgDgHQgCgGgBgIIAMAAQADAOAHAFQAEADAFABQAFACAGAAQAHAAAFgCQAFgBADgDQADgDABgDIACgHQAAgIgFgEQgFgDgHgDIgPgDQgJgCgHgCQgHgDgGgFQgCgDgBgEQgCgEABgFQAAgNAJgIQAFgEAGgDQAIgCAIAAQAQAAAKAIQAFAEAEAGQADAGABAJIgMAAQgBgGgCgEQgDgFgEgCQgHgFgKAAQgLAAgHAFQgFAFgBAIQABAHAFAEQAEADAHADIAQAEIAQAEQAHADAFAGQAFAFAAAKQAAAIgEAFQgDAGgFAEQgGAEgHACQgIACgJAAQgJAAgHgDg");
	this.shape_7.setTransform(53.3,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgVBFQgJgEgGgHQgFgIgDgKQgDgKAAgLQAAgLADgJQADgKAGgIQAFgHAJgFIAKgDIALgBQAKAAAKAFIAJAGQAEADADAGIAAg6IAMAAIAACPIgMAAIAAgSIgBAAQgCAGgEADIgJAHIgLAEIgJACQgMAAgJgFgAgPgVQgGAEgFAGQgEAHgCAIQgCAIAAAKQAAAKADAHQADAHAEAGQAFAFAHADQAGACAHAAQAIAAAHgDQAGgEAFgFQAEgGACgIQADgJAAgIQAAgKgDgHQgCgIgFgFQgEgGgHgEQgGgDgIAAQgJAAgHADg");
	this.shape_8.setTransform(36.4,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgFBIIAAiPIALAAIAACPg");
	this.shape_9.setTransform(28.3,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_10.setTransform(20.6,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgFBIIAAhnIALAAIAABngAgGg1IAAgSIANAAIAAASg");
	this.shape_11.setTransform(12.8,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgHBJIAAhcIgQAAIAAgKIAQAAIAAgQQAAgNAFgHQACgEADgCQAFgCAGABIAFAAIAFAAIAAALIgIgBQgEABgDABIgEAFIgBAGIAAAHIAAANIAUAAIAAAKIgUAAIAABcg");
	this.shape_12.setTransform(7.8,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fieldstrength_mc, new cjs.Rectangle(3,0,120.6,24), null);


(lib.bluearrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("AgeCoIAAjwIhAAAIBehfIBfBfIg5AAIAADwg");
	this.shape.setTransform(9.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluearrow, new cjs.Rectangle(0,0,19,33.6), null);


(lib.magnetsBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrows
	this.instance = new lib.bluearrow();
	this.instance.parent = this;
	this.instance.setTransform(73,48.9,1.066,1,0,0,-20.2,9.5,16.9);

	this.instance_1 = new lib.bluearrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.7,4.5,1.066,1,0,0,-20.2,9.5,16.9);

	this.instance_2 = new lib.bluearrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(313.7,-38.8,1.066,1,0,0,-20.2,9.5,16.9);

	this.instance_3 = new lib.redarrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.9,-60.2,1.066,1,0,180,159.8,9.5,16.9);

	this.instance_4 = new lib.redarrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(254.5,-15.4,1.066,1,0,180,159.8,9.5,16.9);

	this.instance_5 = new lib.redarrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(132.9,29.6,1.066,1,0,180,159.8,9.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// magnet1_mc
	this.magnet1_mc = new lib.magnet();
	this.magnet1_mc.parent = this;
	this.magnet1_mc.setTransform(0,83.9,0.512,0.512,0,0,0,0,162.3);

	this.timeline.addTween(cjs.Tween.get(this.magnet1_mc).wait(1));

	// magnet2_mc
	this.magnet2_mc = new lib.magnet();
	this.magnet2_mc.parent = this;
	this.magnet2_mc.setTransform(110.1,40.2,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet2_mc).wait(1));

	// magnet3_mc
	this.magnet3_mc = new lib.magnet();
	this.magnet3_mc.parent = this;
	this.magnet3_mc.setTransform(170,8.5,0.512,0.512,0,0,0,97.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.magnet3_mc).wait(1));

	// magnet4_mc
	this.magnet4_mc = new lib.magnet();
	this.magnet4_mc.parent = this;
	this.magnet4_mc.setTransform(230.1,-3.8,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet4_mc).wait(1));

	// magnet5_mc
	this.magnet5_mc = new lib.magnet();
	this.magnet5_mc.parent = this;
	this.magnet5_mc.setTransform(290,-34.6,0.512,0.512,0,0,0,97.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.magnet5_mc).wait(1));

	// magnet6_mc
	this.magnet6_mc = new lib.magnet();
	this.magnet6_mc.parent = this;
	this.magnet6_mc.setTransform(350.1,-47.7,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet6_mc).wait(1));

	// 20 degreesbck
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1).p("EgwVAKnIAAgBMBY1ggSIHyE3EgocAPqIgCABEgwVAKnIHsE/IBGGHIoyjUgEgocAPqMBYuAAAMAAAggfg");
	this.shape.setTransform(220,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("EgonASnInsk/IAAAAMBY1ggTIHyE4MhYuAgeMBYuggeMAAAAgeMhYuAAAIgCABg");
	this.shape_1.setTransform(219.8,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkYCPIAAnxIHrE/IBGGGg");
	this.shape_2.setTransform(-61.3,120.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnetsBack, new cjs.Rectangle(-90.8,-128.4,621.3,285.4), null);


(lib.magnets_mcbackup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wall
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,2,1).p("EgoeAUIMBYwggeIAAnyMhYwAHhEgoeAUIInzlBIAA7OIHzggg");
	this.shape.setTransform(196.6,-55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("EgsYgMmMBYwgHiIAAHyMhYwAgfg");
	this.shape_1.setTransform(221.6,-55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj5LWIAA7NIHzggMAAAAgvg");
	this.shape_2.setTransform(-87.4,-31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// blank wall
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEEEEE").s().p("EgwRAPHIAA7OIHzgfMBYwgHiIAAHyMhYwAgfg");
	this.shape_3.setTransform(196.6,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// arrow
	this.instance = new lib.bluearrow();
	this.instance.parent = this;
	this.instance.setTransform(373.9,-60.2,1.066,1,0,180,159.8,9.5,16.9);

	this.instance_1 = new lib.bluearrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.5,-19.4,1.066,1,0,180,159.8,9.5,16.9);

	this.instance_2 = new lib.bluearrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.9,26.6,1.066,1,0,180,159.8,9.5,16.9);

	this.instance_3 = new lib.redarrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(314,-36.1,1.066,1,0,0,-20.2,9.5,16.9);

	this.instance_4 = new lib.redarrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(195.2,4.1,1.066,1,0,0,-20.2,9.5,16.9);

	this.instance_5 = new lib.redarrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(72.8,48.8,1.066,1,0,0,-20.2,9.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// magnet1_mc
	this.magnet1_mc = new lib.magnet();
	this.magnet1_mc.parent = this;
	this.magnet1_mc.setTransform(0,84.1,0.512,0.512,0,0,0,0,162.3);

	this.timeline.addTween(cjs.Tween.get(this.magnet1_mc).wait(1));

	// magnet2_mc
	this.magnet2_mc = new lib.magnet();
	this.magnet2_mc.parent = this;
	this.magnet2_mc.setTransform(110.1,40.2,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet2_mc).wait(1));

	// magnet3_mc
	this.magnet3_mc = new lib.magnet();
	this.magnet3_mc.parent = this;
	this.magnet3_mc.setTransform(170,8.5,0.512,0.512,0,0,0,97.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.magnet3_mc).wait(1));

	// magnet4_mc
	this.magnet4_mc = new lib.magnet();
	this.magnet4_mc.parent = this;
	this.magnet4_mc.setTransform(230.1,-3.8,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet4_mc).wait(1));

	// magnet5_mc
	this.magnet5_mc = new lib.magnet();
	this.magnet5_mc.parent = this;
	this.magnet5_mc.setTransform(290,-34.6,0.512,0.512,0,0,0,97.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.magnet5_mc).wait(1));

	// magnet6_mc
	this.magnet6_mc = new lib.magnet();
	this.magnet6_mc.parent = this;
	this.magnet6_mc.setTransform(350.1,-47.7,0.512,0.512,0,0,0,97.7,118.8);

	this.timeline.addTween(cjs.Tween.get(this.magnet6_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnets_mcbackup, new cjs.Rectangle(-113.8,-185.4,620.8,270.2), null);


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

	// diamondLogo_mc
	this.diamondLogo_mc = new lib.Diamond_logopsd();
	this.diamondLogo_mc.parent = this;
	this.diamondLogo_mc.setTransform(47.9,42.3,1,1,0,0,0,29,28.5);

	this.timeline.addTween(cjs.Tween.get(this.diamondLogo_mc).wait(1));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgnBdIAAi0IAUAAIAAAiIABAAQAJgWANgIQAOgJAWAAIAAAXQgSAAgLAFQgLAGgGALQgHAKgDAOQgDANAAAOIAABZg");
	this.shape.setTransform(416.9,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AggBZQgPgGgLgMQgMgLgGgSQgFgMgCgeQAAgTAFgRQAGgSAKgNQALgMAPgIQAQgIAUAAIAUACQAJACAIAEQAPAIALAMQALANAEASQAGARAAATQAAAWgGARQgGASgLAMQgLANgQAHQgPAHgTAAQgRgBgPgGgAgchFQgLAGgIALQgHALgEAOQgDANAAAOQAAARAEAOQAEAOAIAKQAHALANAFQAKAGAPAAQARAAALgHQAMgGAHgLQAIgLADgOQAEgNgBgPQABgPgEgOQgDgOgIgKQgHgLgMgGQgLgGgRAAQgQAAgMAHg");
	this.shape_1.setTransform(400.5,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgGBuQgIgIgBgUIAAiDIgZAAIAAgSIAZAAIAAgyIAUAAIAAAyIAiAAIAAASIgiAAIAAB7IABALIACAIQACAEADABIALABIAIAAIAJgCIAAARIgKACIgOACQgQAAgHgIg");
	this.shape_2.setTransform(385.9,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgvBcQgLgDgIgGQgJgHgFgKQgEgJAAgNQgBguBAgIIAcgEIAOgCIAOgEQAFgCABgGIACgLQgBgIgCgHQgCgGgGgFQgFgFgJgDQgIgDgLAAQgMAAgIACQgKACgGAFQgIAFgEAIQgEAHgBAMIgWAAQABgQAGgLQAHgMAJgHQALgHANgDQANgEAPAAQAMAAANAEQAMACAIAHQAJAGAGALQAEALAAAQIAABiQAAAMAFADQAEADAOgEIAAAQIgHACIgKABIgJgBQgGAAgDgDIgFgGIgCgIIgBgJIgPAMIgQAKIgRAGIgTACQgMAAgLgEgAAQADIgbADQgMAAgKADQgIADgHAFQgOAJAAASQAAAJADAGQADAGAGAEQAFAEAIACIAOACQAMAAALgDQAMgEAKgGQAJgHAGgJQAFgKABgOIAAgbQgOAEgNACg");
	this.shape_3.setTransform(371.8,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgKB+IAAj7IAVAAIAAD7g");
	this.shape_4.setTransform(357.8,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AglBYQgMgFgIgJQgHgJgEgMQgDgMAAgPIAAh2IAVAAIAAB2QAAAXALANQALAMAZAAQAMAAAKgFQAKgFAIgJQAGgJAEgNQAEgMAAgPIAAhiIAVAAIAAC0IgVAAIAAgZIgKAKIgMAKQgGAEgKADQgIADgLAAQgSAAgNgFg");
	this.shape_5.setTransform(344.1,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgmB5QgPgHgLgNQgKgNgEgRQgEgSgBgTQAAgUAGgQQAEgRAKgOQALgNAOgHQAIgEAJgDQAJgCALAAQARAAASAJQAKAEAGAGQAHAHAFAIIAAhjIAWAAIAAD7IgWAAIAAghIgBAAQgEAKgHAHQgIAGgIAFQgIAEgKADQgJADgIgBQgVAAgQgHgAgbgkQgMAGgHAMQgHALgEAOQgDAPAAAQQAAARAEAOQAFANAJAJQAIAJAMAFQAKAEANAAQAOABAMgHQAMgGAHgJQAIgLAEgOQAFgPgBgQQABgPgFgOQgEgNgIgKQgIgLgMgFQgLgHgOAAQgPAAgNAHg");
	this.shape_6.setTransform(323.4,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAzBdIAAh1QAAgMgCgKQgDgJgGgGQgKgMgaAAQgIAAgJADQgIADgHAFQgGAFgEAGQgFAGgCAHQgEAJAAAIIgBASIAABgIgVAAIAAi0IAVAAIAAAZQANgNAOgIQAGgFAIgCQAIgCAIAAQASAAAOAGQAOAGAKAOQAGAKACAKIABAWIAAB1g");
	this.shape_7.setTransform(303.3,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AhIBnQgMgOgHgSQgGgTAAgYIAAicIAYAAIAACVQAAAXAFARQAEARAJAKQAJALAOAFQAOAFASAAQAUAAAPgFQAOgGAIgLQAJgLAEgQQAEgRAAgWIAAiVIAYAAIAACcQAAAZgGASQgGATgNANQgYAagxAAQgwAAgYgag");
	this.shape_8.setTransform(281,37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_9.setTransform(253.8,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgbB5QgQgDgLgJQgMgIgHgNQgHgNgBgTIAWAAQACAMAFAKQAFAJAIAGQAIAHALADQAKADALAAQANAAALgFQAMgFAHgJQAIgIAEgMQAEgLAAgNQAAgOgEgLQgFgMgIgHQgIgJgLgEQgLgFgNAAQgRAAgNAGQgOAGgKANIgSgDIAUh/IB5AAIAAATIhnAAIgPBTIAOgHIAMgFIANgDIAOgBQARAAAOAGQAPAFAKALQALAKAFAPQAGAPAAATQAAATgGAQQgHAPgKAKQgLALgOAFQgPAGgPAAQgQAAgPgEg");
	this.shape_10.setTransform(239,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 21
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aobl+IJigFIHVGRInHF2IpwgCg");
	this.shape_11.setTransform(55.9,41.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AobGCIAAsAIJigFIHUGRInGF2g");
	this.shape_12.setTransform(55.9,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// lozenge2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AFrAOInnF+IjpAAIgHsWID8gBg");
	this.shape_13.setTransform(100.1,41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AlkGMIgHsWID9gBIHaGYInnF/g");
	this.shape_14.setTransform(100,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// lozenge1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AFzAMInkGCIkDgCIAPsZIEAAAg");
	this.shape_15.setTransform(125,41.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AlzGMIAPsZIEAAAIHYGZInkGCg");
	this.shape_16.setTransform(124.9,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 24
	this.instance = new lib.lozengeGrey();
	this.instance.parent = this;
	this.instance.setTransform(150.1,41.6,1,1,0,0,0,36.5,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lozengeGrey
	this.instance_1 = new lib.lozengeGrey();
	this.instance_1.parent = this;
	this.instance_1.setTransform(173.7,41.5,1,1,0,0,0,36.5,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lozenge3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("Eg2zgGHMBmHgAGIHgGdInbF8MhmPAACg");
	this.shape_17.setTransform(358.3,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Eg2ygGHMBmHgAGIHgGdInbF8MhmPAACg");
	this.shape_18.setTransform(358.2,41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_19.setTransform(441.3,41.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_20.setTransform(441.2,41.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("EAx2AGPMhrFgABIADsVMBq+gAHIHbGeg");
	this.shape_21.setTransform(367.4,41.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Eg5OAGOIADsVMBq/gAHIHaGeInXF/g");
	this.shape_22.setTransform(367.3,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// lozenge3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_23.setTransform(403.1,41.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_24.setTransform(403,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// lozenge4
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_25.setTransform(381.1,41.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_26.setTransform(381,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// lozenge6
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_27.setTransform(435.1,41.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_28.setTransform(435,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-29.1,-0.1,770.8,83.3), null);


// stage content:
(lib.Undulator = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		var magnetWidth = 100;
		var magnetFrontX = this.magnetsFront_mc.x;
		var magnetFrontY = this.magnetsFront_mc.y;
		var magnetBackX = this.magnetsBack_mc.x;
		var magnetBackY = this.magnetsBack_mc.y;

		var magnetX = this.magnetsFront_mc.magnet1_mc.x+45;
		var magnetX2 = this.magnetsFront_mc.magnet2_mc.x;
		var magnetX3 = this.magnetsFront_mc.magnet3_mc.x;
		var magnetX4 = this.magnetsFront_mc.magnet4_mc.x;
		var magnetX5 = this.magnetsFront_mc.magnet5_mc.x;
		var magnetX6 = this.magnetsFront_mc.magnet6_mc.x;
		var rotateAngle = 70; // (90 degrees is horizontal line)
		var rotateRadians = rotateAngle * Math.PI/180;
		var energy = 0;
		var fieldstrength = 10;
		var shadowAlphaRed = '';
		var shadowAlphaBlue = '';
		// set up fire button click listener
		this.fire_btn.addEventListener("click", playClick.bind(this));

		var startPoint = new createjs.Point();
		var endPoint = new createjs.Point();

		startPoint.x = 50;
		startPoint.y = 420;

		endPoint.x = 740;
		endPoint.y = 155;
		var circle = new createjs.Shape();
	  circle.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);
	  circle.x = startPoint.x;
	  circle.y = startPoint.y;

	  var line = new cjs.Shape();
		stage.addChild(line);

		// set up Greensock TimelineMax
		var tl = new TimelineMax();

		///////////////////////////////
		// set up some anchor points //
		///////////////////////////////
	  var start1 = new createjs.Shape();
	  start1.graphics.beginFill("red").drawCircle(0, 0, 3);
	  start1.x = 50;
	  start1.y = 420;

	  var start2 = new createjs.Shape();
	  start2.graphics.beginFill("red").drawCircle(0, 0, 3);
	  start2.x = start1.x + 140;
	  start2.y = start1.y - (Math.round((start2.x-start1.x) / Math.tan(rotateRadians)));

	  var ap1 = new createjs.Shape();
	  ap1.graphics.beginFill("black").drawCircle(0, 0, 2);
	  ap1.x = magnetFrontX + magnetX;
	  ap1.y = start1.y - (Math.round((ap1.x-start1.x) / Math.tan(rotateRadians)));

	  var ap2 = new createjs.Shape();
	  ap2.graphics.beginFill("blue").drawCircle(0, 0, 2);
	  ap2.x = magnetFrontX + magnetX2;
	  ap2.y = start1.y - (Math.round((ap2.x-start1.x) / Math.tan(rotateRadians)));

	 	var ap3 = new createjs.Shape();
	  ap3.graphics.beginFill("green").drawCircle(0, 0, 2);
	  ap3.x = magnetFrontX + magnetX3;
	  ap3.y = start1.y - (Math.round((ap3.x-start1.x) / Math.tan(rotateRadians)));

	  var ap4 = new createjs.Shape();
	  ap4.graphics.beginFill("black").drawCircle(0, 0, 2);
	  ap4.x = magnetFrontX + magnetX4;
	  ap4.y = start1.y - (Math.round((ap4.x-start1.x) / Math.tan(rotateRadians)));

	  var ap5 = new createjs.Shape();
	  ap5.graphics.beginFill("blue").drawCircle(0, 0, 2);
	  ap5.x = magnetFrontX + magnetX5;
	  ap5.y = start1.y - (Math.round((ap5.x-start1.x) / Math.tan(rotateRadians)));

	  var ap6 = new createjs.Shape();
	  ap6.graphics.beginFill("green").drawCircle(0, 0, 2);
	  ap6.x = magnetFrontX + magnetX6;
	  ap6.y = start1.y - (Math.round((ap6.x-start1.x) / Math.tan(rotateRadians)));

	  var end1 = new createjs.Shape();
	  end1.graphics.beginFill("red").drawCircle(0, 0, 3);
	  end1.x = 630;
	  end1.y = start1.y - (Math.round((end1.x-start1.x) / Math.tan(rotateRadians)));

	  var end2 = new createjs.Shape();
	  end2.graphics.beginFill("red").drawCircle(0,0, 3);
	  end2.x = 730;
	  end2.y = start1.y - (Math.round((end2.x-start1.x) / Math.tan(rotateRadians)));

	  // start a stage update ticker
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", stage);

		function playClick() {

			line.graphics.clear();
			stage.enableMouseOver(0);
			stage.addChild(circle);
			this.fire_btn.removeEventListener("click", playClick);

    	line.graphics.beginStroke("#cccccc");
    	circle.x = startPoint.x;
    	circle.y = startPoint.y;

	    line.graphics.setStrokeStyle(3, "#cccccc");
	    line.graphics.moveTo(circle.x, circle.y);

	    if(energy == 0) { // straight line
				//tl.to( circle, 0.5, {x:start1.x, y:start1.y, ease:Linear.easeNone, onUpdate:drawLine})
				tl.to( circle, 0.5, {x:end2.x, y:end2.y, ease:Linear.easeNone, onUpdate:drawLine, onComplete:stopLine});
			} else {
				//tl.to( circle, 0.5, {x:start1.x, y:start1.y, ease:Linear.easeNone, onUpdate:drawLine})
				tl.to( circle, 1, {x:start2.x, y:start2.y, ease:Linear.easeNone, onUpdate:drawLine})
				.to( circle, 5,  {bezier:{type:"soft", values:[
		  	{x:ap1.x - fieldStrength,	y:ap1.y - fieldStrength},
		  	{x:ap2.x + fieldStrength,	y:ap2.y + fieldStrength},
		  	{x:ap3.x - fieldStrength, y:ap3.y - fieldStrength},
		  	{x:ap4.x + fieldStrength, y:ap4.y + fieldStrength},
				{x:ap5.x - fieldStrength, y:ap5.y - fieldStrength},
		  	{x:ap6.x + fieldStrength,	y:ap6.y + fieldStrength},
		  	{x:end1.x , y:end1.y}
				],autoRotate:true}, ease:Linear.easeNone, onUpdate:drawLine } )
				.to( circle, 1, {x:end2.x, y:end2.y, ease:Linear.easeNone, onUpdate:drawLine, onComplete:stopLine});
			}
		}

		function drawLine() {
	    line.graphics.lineTo(circle.x, circle.y);
	  }
	  function stopLine() {
	  	tl.clear(); // clear timeline
	  	stage.removeChild(circle);
	  	stage.enableMouseOver(10);
	  }

		this.plus_btn.addEventListener("click", addCurrent.bind(this));

		function addCurrent() {
			energy < 18 ? energy+=2 : energy = 18;	// energy is 0 to 18 in increments of 2
			shadowAlphaRed = "rgba(255, 147, 147, " + energy/2 + ")";
			shadowAlphaBlue = "rgba(0, 205, 205, " + energy/2 + ")";
			// alpha isn't working really
			if(energy >= 0.1) {
				this.magnetsFront_mc.magnet1_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet2_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet3_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet4_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet5_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet6_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet1_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet2_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet3_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet4_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet5_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet6_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.y = magnetFrontY + (energy);
				this.magnetsBack_mc.y = magnetBackY - (energy);
				stage.update();
			}
			fieldStrength = energy * 2;
		}

		this.minus_btn.addEventListener("click", minusCurrent.bind(this));

		function minusCurrent() {
			energy > 2 ? energy-=2 : energy = 0;	// energy is 0 to 18 in increments of 2
			shadowAlphaRed = "rgba(255, 147, 147, " + energy/2 + ")";
			shadowAlphaBlue = "rgba(0, 205, 205, " + energy/2 + ")";

			if(energy >= 0.1) {
				this.magnetsFront_mc.magnet1_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet2_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet3_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet4_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet5_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.magnet6_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet1_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet2_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet3_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet4_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet5_mc.shadow = new createjs.Shadow(shadowAlphaBlue, 1, 1, Math.round(energy));
				this.magnetsBack_mc.magnet6_mc.shadow = new createjs.Shadow(shadowAlphaRed, 1, 1, Math.round(energy));
				this.magnetsFront_mc.y = magnetFrontY + (energy);
				this.magnetsBack_mc.y = magnetBackY - (energy);
				stage.update();
			} else {
				// remove shadow
				this.magnetsFront_mc.magnet1_mc.shadow = null;
				this.magnetsFront_mc.magnet2_mc.shadow = null;
				this.magnetsFront_mc.magnet3_mc.shadow = null;
				this.magnetsFront_mc.magnet4_mc.shadow = null;
				this.magnetsFront_mc.magnet5_mc.shadow = null;
				this.magnetsFront_mc.magnet6_mc.shadow = null;
				this.magnetsBack_mc.magnet1_mc.shadow = null;
				this.magnetsBack_mc.magnet2_mc.shadow = null;
				this.magnetsBack_mc.magnet3_mc.shadow = null;
				this.magnetsBack_mc.magnet4_mc.shadow = null;
				this.magnetsBack_mc.magnet5_mc.shadow = null;
				this.magnetsBack_mc.magnet6_mc.shadow = null;
			}
			fieldStrength = energy * 2;//Math.round(40/1.5 * energy);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.logo_mc = new lib.logo();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(395.7,51,1,1,0,0,0,369.7,41);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2cAYSMAAAgwnMBiOgACIAAAAIKrAAMAAAAwvg");
	mask.setTransform(391.2,300.4);

	// magnetsFront
	this.magnetsFront_mc = new lib.magnets_mcbackup();
	this.magnetsFront_mc.parent = this;
	this.magnetsFront_mc.setTransform(209.2,130.5,0.79,0.79,0,0,0,0.6,-128.6);

	var maskedShapeInstanceList = [this.magnetsFront_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.magnetsFront_mc).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg2rAYgMAAAgxFMBipgABIAAABIKugBMAAAAxNg");
	mask_1.setTransform(389.7,300.5);

	// magnetsBack
	this.magnetsBack_mc = new lib.magnetsBack();
	this.magnetsBack_mc.parent = this;
	this.magnetsBack_mc.setTransform(209.3,470.3,0.777,0.777,0,0,0,0.7,83.9);

	var maskedShapeInstanceList = [this.magnetsBack_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.magnetsBack_mc).wait(1));

	// start
	this.fire_btn = new lib.fireBtn();
	this.fire_btn.parent = this;
	this.fire_btn.setTransform(635.8,544.8,1,1,0,0,0,31.8,18.8);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.fireBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fire_btn).wait(1));

	// plusMinus
	this.plus_btn = new lib.plusBtn();
	this.plus_btn.parent = this;
	this.plus_btn.setTransform(374.8,534.7,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.plus_btn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.minus_btn = new lib.minusBtn();
	this.minus_btn.parent = this;
	this.minus_btn.setTransform(294.1,535.2,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.minus_btn, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.minus_btn},{t:this.plus_btn}]}).wait(1));

	// field strength
	this.fieldstrength_mc = new lib.fieldstrength_mc();
	this.fieldstrength_mc.parent = this;
	this.fieldstrength_mc.setTransform(350.9,507.6,1,1,0,0,0,63.3,14.2);

	this.timeline.addTween(cjs.Tween.get(this.fieldstrength_mc).wait(1));

	// centreBox
	this.box_mc = new lib.walls();
	this.box_mc.parent = this;
	this.box_mc.setTransform(389.7,300.5,1,1,0,0,0,350,157.5);

	this.timeline.addTween(cjs.Tween.get(this.box_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.9,309.9,770.6,574.8);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;