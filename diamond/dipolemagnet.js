/**
* This is the commented version
* January 2017
* Alun Ward
* Eye Division Ltd
* a.ward@eyedivision.com
* Dipole Magnet createJS (EaselJS) file for HTML5, Canvas
* requires https://code.createjs.com/createjs-2015.11.26.min.js
* and TweenMax
* https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js
* Spritesheet and assets exported from Animate CC using the createJS library
* DipoleMagnet.fla is the latest version
* dipolemagnet.html contains recommended HTML to start this off
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


(lib.q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818181").s().p("AhFDiIAAhJIBYAAIAABJgAhFBlIAAgIQAAgYAIgVQAIgVAcgeIAWgXQApgwAAgkQAAgagSgPQgSgPghAAQgsAAg6AbIAAhDQAbgJAQgDQARgDATgCQATgCASAAQBFAAApAcQApAbAAAuQAAAPgEAPQgFANgIANQgJAMgXAWIgUATQgZAWgKASQgLASAAAhIAAAZg");
	this.shape.setTransform(13.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.q, new cjs.Rectangle(0,0,26.9,45.2), null);


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


(lib.pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// enclosure
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,0,0,4).p("Eg2KADMMBsVAAAEg2KgDLMBsVAAA");
	this.shape.setTransform(346.7,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("EA2LAAAMhsVAAA");
	this.shape_1.setTransform(346.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(4,0,0,4).p("AAAgDIAAAH");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg2KADIIAAmPMBsVAAAIAAGPg");
	this.shape_3.setTransform(346.7,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pipe, new cjs.Rectangle(-2,-42,697.4,44.9), null);


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


(lib.magnetBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("AN9E1I75AAIAApqIb5AAg");
	this.shape.setTransform(89.3,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F2F2F2","#F0F0F0","#E9E9E9","#DEDEDE","#CDCDCD","#B7B7B7","#B6B6B6"],[0,0.498,0.678,0.804,0.91,0.996,1],0,-30.9,0,31).s().p("At7E2IAAprIb4AAIAAJrg");
	this.shape_1.setTransform(89.3,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnetBack, new cjs.Rectangle(-1,-1,180.5,63.9), null);


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


(lib.currentText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgDA/QgFgEAAgMIAAhLIgPAAIAAgKIAPAAIAAgdIALAAIAAAdIATAAIAAAKIgTAAIAABGIAAAHIABAEQABABAAAAQAAABABAAQAAAAABAAQAAABABAAIAFABIAGgBIAEgBIAAAKIgFACIgIABQgKAAgDgFg");
	this.shape.setTransform(216.2,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgBgGQgCgFgDgDQgHgHgNAAQgGAAgEABIgIAFIgHAGIgDAIQgDAFAAAEIAAAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQAEgDAFgBQAEgBAEAAQAKAAAIADQAJADAFAJQADAFABAGIABAMIAABDg");
	this.shape_1.setTransform(207.9,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_2.setTransform(196.8,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAFgMAGgFQAIgFANAAIAAANQgKAAgGADQgHADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_3.setTransform(188.4,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAFgMAGgFQAIgFANAAIAAANQgKAAgGADQgHADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_4.setTransform(181.8,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgUAyQgIgDgEgFQgEgFgCgHQgCgHAAgIIAAhDIAMAAIAABDQAAANAGAHQAGAHAPAAQAGAAAGgDQAFgDAEgFQAEgFADgHQACgHAAgJIAAg3IAMAAIAABmIgMAAIAAgOIgFAGIgHAFQgEADgFABQgFACgGAAQgLAAgGgDg");
	this.shape_5.setTransform(172.4,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgJA2IgKgEQgJgEgFgHQgHgHgCgKQgDgKAAgMQAAgKADgKQADgJAGgIQAGgIAJgEQAJgFALAAQAJAAAHACQAHADAFAEQAGAEADAHQAEAHACAJIgNAAQgDgMgIgGQgEgEgFgBQgFgCgFAAQgIAAgIAEQgGAEgEAGQgFAGgCAIQgBAIgBAHQABAIABAIQADAIAEAGQAEAGAGAEQAHAEAJAAQAGAAAFgCQAGgCAEgEQAEgDACgFIAEgMIANAAQgCAJgDAHQgDAHgGAFQgGAFgHADQgHADgKAAg");
	this.shape_6.setTransform(161.3,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgJA2IgKgEQgJgEgFgHQgHgHgCgKQgDgKAAgMQAAgKADgKQADgJAGgIQAGgIAJgEQAJgFALAAQAJAAAHACQAHADAFAEQAGAEADAHQAEAHACAJIgNAAQgDgMgIgGQgEgEgFgBQgFgCgFAAQgIAAgIAEQgGAEgEAGQgFAGgCAIQgCAIABAHQgBAIACAIQADAIAEAGQAEAGAGAEQAHAEAJAAQAGAAAFgCQAGgCAEgEQAEgDACgFIAEgMIANAAQgCAJgDAHQgDAHgGAFQgGAFgHADQgHADgKAAg");
	this.shape_7.setTransform(144.7,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgFBIIAAhnIALAAIAABngAgGg1IAAgSIANAAIAAASg");
	this.shape_8.setTransform(136.9,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgDA/QgFgEAAgMIAAhLIgPAAIAAgKIAPAAIAAgdIALAAIAAAdIAUAAIAAAKIgUAAIAABGIAAAHIACAEQAAABAAAAQAAABABAAQAAAAABAAQAAABABAAIAGABIAEgBIAGgBIAAAKIgHACIgIABQgJAAgDgFg");
	this.shape_9.setTransform(131.9,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_10.setTransform(123.6,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgBgGQgCgFgDgDQgHgHgNAAQgGAAgEABIgIAFIgHAGIgDAIQgDAFAAAEIAAAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQAEgDAFgBQAEgBAEAAQAKAAAIADQAJADAFAJQADAFABAGIABAMIAABDg");
	this.shape_11.setTransform(112.5,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgUBHQgIgDgFgEQgFgEgDgGQgDgFAAgFIANAAQABAHADADQADAEAFACIAJADIAKAAQALAAAIgDQAHgFAEgGQAEgIABgIIABgRQgGAJgKAFQgKAFgKAAQgGAAgFgCIgKgCQgJgFgFgIQgGgHgDgKQgDgJAAgLQAAgMADgJQADgLAFgGQAGgIAJgEQAJgEAMgBIAJACIALAEIAJAGQAEAFACAEIABAAIAAgSIAMAAIAABdQAAALgCAJQgDAJgFAIQgFAHgKAEQgJAFgOAAQgLgBgJgDgAgMg8QgHADgFAFQgEAFgDAIQgDAHAAAKQAAAKACAJQACAHAEAGQAFAGAGAFQAHADAJAAQAIAAAGgDQAHgEAEgGQAFgGACgHQADgIAAgJQAAgJgDgIQgCgIgEgGQgFgGgGgDQgHgDgIgBQgHABgGACg");
	this.shape_12.setTransform(100.6,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgbA1QgGgCgFgEQgEgEgDgFQgDgGAAgHQAAgaAkgEIAQgDIAIgBIAIgCQADgBAAgEIABgGIgBgIQgBgEgEgDQgDgDgEgBQgGgCgGAAIgLABQgFABgEADQgEADgDAEQgCAFgBAHIgMAAQAAgKAEgGQAEgHAGgEQAFgEAHgCQAIgCAIAAQAHAAAIACQAGACAFADQAGAEACAGQADAHAAAJIAAA3QAAAHADACQACACAIgDIAAAJIgFACIgEAAIgGAAIgFgCIgDgEIgBgEIgBgGIgIAIIgJAFIgJADIgLACQgHAAgHgCgAAJACIgPABIgMACQgFACgFACQgHAGAAAKQAAAFACADIAFAGQADADAEABIAJABQAGAAAGgCQAHgCAGgEQAFgDADgGQADgGAAgHIAAgQQgIADgHABg");
	this.shape_13.setTransform(89.5,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AA6A1IAAhGIgBgKQgBgFgCgDQgFgGgNAAQgGAAgHADQgGACgEAGIgEAHIgCAHIgBAHIAAAHIAAA3IgLAAIAAhGIgBgKQgBgFgDgDQgEgGgNAAQgHAAgGADQgGACgFAGIgDAHIgCAHIgBAHIAAAHIAAA3IgMAAIAAhmIAMAAIAAAPQAFgJAIgEQAEgDAFgBQAFgBAFAAQAHAAAFABIAJAFQADACABAEIAEAIIAGgJIAIgGQAFgDAFgBQAFgBAFAAQALAAAGADQAGAEAEAGQADAFABAIIABAPIAABAg");
	this.shape_14.setTransform(75.3,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgSAzQgIgDgHgHQgGgHgEgKQgCgHgCgRQAAgKADgKQADgKAGgIQAGgHAJgEQAJgFALAAIAMABQAFABAFADQAIAEAGAHQAHAIACAKQADAKAAAKQAAAMgEAKQgDAKgGAIQgGAHgJAEQgJAEgLAAQgJgBgJgDgAgPgnQgGAEgFAGQgEAGgCAIQgCAIAAAHQAAAKACAIQADAIAEAGQAFAFAGAEQAHADAHAAQAJAAAHgEQAHgEAEgGQAEgGACgIQACgIAAgIQAAgIgCgIQgCgIgEgGQgEgGgHgDQgHgEgJAAQgJAAgGAEg");
	this.shape_15.setTransform(61.5,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgWA1IAAhmIAMAAIAAATIABAAQAFgMAGgFQAIgFANAAIAAANQgKAAgGADQgHADgDAGQgEAGgBAIQgCAIAAAHIAAAzg");
	this.shape_16.setTransform(53.1,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgDA/QgFgEAAgMIAAhLIgPAAIAAgKIAPAAIAAgdIALAAIAAAdIATAAIAAAKIgTAAIAABGIAAAHIABAEQABABAAAAQAAABABAAQAAAAABAAQAAABAAAAIAGABIAGgBIAEgBIAAAKIgFACIgIABQgKAAgDgFg");
	this.shape_17.setTransform(46.5,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgJA2IgKgEQgJgEgFgHQgHgHgCgKQgDgKAAgMQAAgKADgKQADgJAGgIQAGgIAJgEQAJgFALAAQAIAAAHACQAIADAGAEQAFAEAEAHQADAHABAJIgMAAQgDgMgHgGQgFgEgEgBQgGgCgFAAQgJAAgGAEQgHAEgEAGQgEAGgCAIQgCAIAAAHQAAAIACAIQABAIAFAGQAEAGAHAEQAGAEAJAAQAGAAAGgCQAFgCAEgEQAEgDADgFIADgMIANAAQgBAJgEAHQgDAHgGAFQgFAFgIADQgIADgJAAg");
	this.shape_18.setTransform(38.2,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_19.setTransform(27.1,12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgFBIIAAiPIALAAIAACPg");
	this.shape_20.setTransform(19.3,10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_21.setTransform(11.6,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.currentText, new cjs.Rectangle(0,0,225,24), null);


(lib.coil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape.setTransform(24.3,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_1.setTransform(33.6,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_2.setTransform(42.9,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_3.setTransform(52.2,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_4.setTransform(61.5,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_5.setTransform(70.8,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_6.setTransform(80.2,35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_7.setTransform(89.5,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_8.setTransform(98.8,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_9.setTransform(108.1,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_10.setTransform(117.4,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_11.setTransform(126.7,35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_12.setTransform(136,35.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_13.setTransform(154.7,35.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_14.setTransform(145.3,35.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgRgYQgEgGgRgh");
	this.shape_15.setTransform(164,35.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_16.setTransform(15,35.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFE278","#FFE076","#FEDA6F","#FDD063","#FCC052","#FAAD3C","#F79520","#F7931E"],[0,0.435,0.608,0.729,0.831,0.918,0.992,1],-2,-30.6,-2,30.7).s().p("AqhEyIiJpkIXJAAIBTE5IA5EqIriABIorABIi/gBg");
	this.shape_17.setTransform(90.9,34.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("AN9E1I75AAIAApqIb5AAg");
	this.shape_18.setTransform(89.8,34.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F2F2F2","#F0F0F0","#E9E9E9","#DEDEDE","#CDCDCD","#B7B7B7","#B6B6B6"],[0,0.498,0.678,0.804,0.91,0.996,1],0,-30.9,0,31).s().p("At7E2IAAprIb4AAIAAJrg");
	this.shape_19.setTransform(89.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coil, new cjs.Rectangle(-0.5,-0.5,180.5,73.8), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,0,0,4).p("AJGAAQAADxirCqQiqCrjxAAQjwAAirirQiqiqAAjxQAAjwCqirQCriqDwAAQDxAACqCqQCrCrAADwg");
	this.shape.setTransform(58.2,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmbGcQiqirAAjxQAAjwCqirQCriqDwAAQDxAACrCqQCqCrAADwQAADxiqCrQirCqjxAAQjwAAiriqg");
	this.shape_1.setTransform(58.2,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-2,-2,120.4,120.4), null);


(lib.bendText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape.setTransform(112.4,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFBIIAAiPIALAAIAACPg");
	this.shape_1.setTransform(104.6,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgUBHQgIgDgFgEQgFgEgDgGQgDgFAAgFIANAAQABAHADADQADAEAFACIAJADIAKAAQALAAAIgDQAHgFAEgGQAEgIABgIIABgRQgGAJgKAFQgKAFgKAAQgGAAgFgCIgKgCQgJgFgFgIQgGgHgDgKQgDgJAAgLQAAgMADgJQADgLAFgGQAGgIAJgEQAJgEAMgBIAJACIALAEIAJAGQAEAFACAEIABAAIAAgSIAMAAIAABdQAAALgCAJQgDAJgFAIQgFAHgKAEQgJAFgOAAQgLgBgJgDgAgMg8QgHADgFAFQgEAFgDAIQgDAHAAAKQAAAKACAJQACAHAEAGQAFAGAGAFQAHADAJAAQAIAAAGgDQAHgEAEgGQAFgGACgHQADgIAAgJQAAgJgDgIQgCgIgEgGQgFgGgGgDQgHgDgIgBQgHABgGACg");
	this.shape_2.setTransform(96.1,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgCgGQgBgFgDgDQgGgHgPAAQgEAAgFABIgIAFIgGAGIgFAIQgBAFAAAEIgBAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQADgDAFgBQAFgBAFAAQAJAAAIADQAJADAFAJQADAFACAGIAAAMIAABDg");
	this.shape_3.setTransform(84.7,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgbA1QgFgCgGgEQgEgEgDgFQgDgGAAgHQAAgaAkgEIAQgDIAIgBIAIgCQADgBAAgEIABgGIgBgIQgCgEgCgDQgEgDgEgBQgGgCgGAAIgLABQgFABgEADQgEADgDAEQgCAFgBAHIgMAAQAAgKAEgGQAEgHAFgEQAGgEAIgCQAHgCAIAAQAHAAAIACQAGACAFADQAGAEACAGQADAHAAAJIAAA3QAAAHADACQACACAIgDIAAAJIgFACIgEAAIgGAAIgFgCIgDgEIgBgEIgBgGIgIAIIgJAFIgJADIgLACQgHAAgHgCgAAJACIgPABIgMACQgGACgEACQgHAGAAAKQAAAFACADIAFAGQADADAEABIAIABQAIAAAGgCQAGgCAGgEQAFgDADgGQADgGAAgHIAAgQQgHADgIABg");
	this.shape_4.setTransform(73.8,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgVBFQgJgEgGgHQgFgIgDgKQgDgKAAgLQAAgLADgJQADgKAGgIQAFgHAJgFIAKgDIALgBQAKAAAKAFIAJAGQAEADADAGIAAg6IAMAAIAACPIgMAAIAAgSIgBAAQgCAGgEADIgJAHIgLAEIgJACQgMAAgJgFgAgPgVQgGAEgFAGQgEAHgCAIQgCAIAAAKQAAAKADAHQADAHAEAGQAFAFAHADQAGACAHAAQAIAAAHgDQAGgEAFgFQAEgGACgIQADgJAAgIQAAgKgDgHQgCgIgFgFQgEgGgHgEQgGgDgIAAQgJAAgHADg");
	this.shape_5.setTransform(56.1,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAdA1IAAhCQAAgHgCgGQgBgFgDgDQgHgHgOAAQgFAAgEABIgIAFIgGAGIgFAIQgCAFAAAEIAAAKIAAA3IgMAAIAAhmIAMAAIAAAOQAHgIAIgEQADgDAGgBQAEgBAFAAQAJAAAIADQAIADAGAJQAEAFABAGIAAAMIAABDg");
	this.shape_6.setTransform(44.7,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgKA2IgKgEQgJgEgFgHQgGgHgDgKQgDgKAAgMQAAgKAEgKQADgKAGgIQAGgHAJgEQAJgFAKAAQAVAAAMAPQANAPgBAbIhPAAQAAAIACAIQACAHAFAGQAEAFAHADQAGAEAIAAQAMAAAIgGIAHgIIAEgKIAOAAIgGAOQgEAGgFAFQgGAEgHADQgHADgKAAgAAigGQAAgIgCgHQgDgGgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAGgBAIIBDAAIAAAAg");
	this.shape_7.setTransform(33.6,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgJBIIgJgEQgFgDgEgEIgIgJIAAASIgLAAIAAiPIALAAIAAA6QADgGAEgDIAJgGQALgFAJAAQAMAAAJAEQAIAFAGAHQAGAIACAKQADAJAAALQAAALgCAKQgDAKgGAIQgFAHgJAEIgJAEIgNABIgJgCgAgPgVQgGAEgFAGQgEAFgDAIQgCAHAAAKQAAAIACAJQADAIAEAGQAFAFAGAEQAHADAIAAQAHAAAHgCQAGgDAFgFQAEgGADgHQACgHAAgKQABgKgCgIQgCgIgFgHQgEgGgGgEQgIgDgIAAQgIAAgHADg");
	this.shape_8.setTransform(22.2,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bendText, new cjs.Rectangle(0,0,133.8,24), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrows
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#81CCFF").ss(2,0,0,4).p("ABkiDIARAuAAsiDIA4AAAh2CHIDakK");
	this.shape.setTransform(15.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#80CCFF").ss(2,0,0,4).p("AC9iCIASAuACFiCIA4AAAAKiEIASAtAgtiEIA3AAAjQCGIDakKAgdCJIDakL");
	this.shape_1.setTransform(-9.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-31.6,-13.1,60,29), null);


(lib.angledPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// enclosure
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,1).p("AESAAIojAA");
	this.shape.setTransform(27,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AESABIojgB");
	this.shape_1.setTransform(27,-20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAHQgEgHgGgFIgBgBIAbAAIAAANg");
	this.shape_2.setTransform(52.4,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// interior
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EghwADIIACgKIoXAAIAAl3IIjAAIAAgOMBLoAABIgBGOg");
	this.shape_3.setTransform(-0.3,0,1,1,0,0,0,-269.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(4,2,1).p("AiVAAIErAA");
	this.shape_4.setTransform(71.1,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(4,0,0,4).p("EAl1gDOMhLpgABEgg3ADQMBGrgAB");
	this.shape_5.setTransform(296.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.angledPipe, new cjs.Rectangle(-2.4,-22.1,542.9,45.8), null);


(lib.Diamond_logopsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.newLogo();
	this.instance.parent = this;
	this.instance.setTransform(27.7,27.8,1,1,0,0,0,27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Diamond_logopsd, new cjs.Rectangle(-0.1,0,55.5,55.5), null);


(lib.coil = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// wires
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape.setTransform(24.3,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_1.setTransform(33.6,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_2.setTransform(42.9,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_3.setTransform(52.2,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_4.setTransform(61.5,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_5.setTransform(70.8,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_6.setTransform(80.2,35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_7.setTransform(89.5,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_8.setTransform(98.8,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_9.setTransform(108.1,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_10.setTransform(117.4,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_11.setTransform(126.7,35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_12.setTransform(136,35.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQAJgZAAAAQAGgJAGAUQCWJcgHA9QgDAigTgZQgIgKgOgd");
	this.shape_13.setTransform(154.7,35.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlBQADgJAHgQQAFgJAGAUQCXJcgHA9QgEAigSgZQgIgKgPgd");
	this.shape_14.setTransform(145.3,35.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgRgYQgEgGgRgh");
	this.shape_15.setTransform(164,35.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(2,0,0,4).p("AhSlAQADgJAHgRQAFgJAGAUQCWJcgGA+QgEAhgTgYQgEgGgSgh");
	this.shape_16.setTransform(15,35.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFE278","#FFE076","#FEDA6F","#FDD063","#FCC052","#FAAD3C","#F79520","#F7931E"],[0,0.435,0.608,0.729,0.831,0.918,0.992,1],-2,-30.6,-2,30.7).s().p("AqhEyIiJpkIXJAAIBTE5IA5EqIriABIorABIi/gBg");
	this.shape_17.setTransform(90.9,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// magnetBack
	this.magnetBody_mc = new lib.magnetBack();
	this.magnetBody_mc.parent = this;
	this.magnetBody_mc.setTransform(89.7,34.6,1,1,0,0,0,89.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.magnetBody_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.coil, new cjs.Rectangle(-0.5,-0.5,180.5,73.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgGBuQgJgIAAgUIAAiDIgZAAIAAgSIAZAAIAAgyIAUAAIAAAyIAiAAIAAASIgiAAIAAB7IABALIACAIQACAEADABIALABIAIAAIAJgCIAAARIgKACIgOACQgQAAgHgIg");
	this.shape.setTransform(444.5,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_1.setTransform(429.9,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAzBdIAAh1QAAgMgDgKQgDgJgFgGQgLgMgZAAQgIAAgJADQgIADgGAFQgHAFgEAGQgFAGgCAHQgEAJAAAIIgBASIAABgIgVAAIAAi0IAVAAIAAAZQANgNANgIQAHgFAIgCQAIgCAJAAQAQAAAPAGQAOAGAKAOQAGAKACAKIABAWIAAB1g");
	this.shape_2.setTransform(410.5,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgjB9QgOgFgJgHQgJgIgGgJQgEgKAAgIIAWAAQADAKAEAHQAGAGAHAEQAHAEAJABIASACQAUAAANgIQANgHAHgMQAGgMACgPQACgPAAgQQgKARgSAIQgRAJgTAAQgKAAgJgCQgJgCgIgEQgPgIgKgNQgJgNgFgRQgGgRAAgTQABgUAEgRQAFgSAJgNQALgMAPgIQAQgHAVAAQAIAAAJADQAJACAJAFQAIAEAIAHQAHAHAEAJIABAAIAAggIAWAAIAACjQAAASgFARQgDAQgJANQgKAMgRAIQgQAHgZAAQgUAAgOgFgAgWhpQgMAEgIAKQgIAJgGANQgEANAAARQgBARAEAPQADAOAIALQAIALALAHQAMAGAQAAQAPAAAKgGQAMgGAIgKQAIgLAEgMQAFgOgBgQQABgQgFgOQgEgOgHgLQgJgKgLgGQgMgGgOAAQgMAAgLAFg");
	this.shape_3.setTransform(389.7,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgvBcQgLgDgIgGQgJgHgEgKQgGgJAAgNQAAguBAgIIAcgEIAOgCIAOgEQAFgCABgGIABgLQAAgIgCgHQgDgGgFgFQgFgFgJgDQgIgDgMAAQgKAAgKACQgJACgHAFQgGAFgFAIQgFAHAAAMIgWAAQABgQAGgLQAGgMALgHQAJgHAOgDQANgEAOAAQANAAAMAEQAMACAKAHQAIAGAFALQAGALAAAQIAABiQAAAMADADQAFADANgEIAAAQIgHACIgJABIgKgBQgFAAgDgDIgFgGIgCgIIgCgJIgNAMIgRAKIgRAGIgTACQgLAAgMgEgAAPADIgaADQgMAAgKADQgJADgHAFQgNAJAAASQAAAJADAGQADAGAGAEQAGAEAGACIAPACQANAAALgDQAMgEAJgGQAJgHAGgJQAGgKgBgOIAAgbQgNAEgOACg");
	this.shape_4.setTransform(370.1,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ABfB+IAAjgIgBAAIhTDgIgVAAIhTjgIgBAAIAADgIgXAAIAAj7IAkAAIBSDeIAAAAIBRjeIAkAAIAAD7g");
	this.shape_5.setTransform(345.4,37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_6.setTransform(311.4,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgKB+IAAj7IAVAAIAAD7g");
	this.shape_7.setTransform(297.8,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AggBZQgPgGgLgMQgMgLgGgSQgFgMgCgeQAAgTAFgRQAFgSALgNQALgMAPgIQAQgIAUAAIATACQAKACAIAEQAPAIALAMQALANAEASQAGARAAATQAAAWgGARQgGASgLAMQgLANgQAHQgPAHgTAAQgRgBgPgGgAgchFQgLAGgIALQgHALgDAOQgEANAAAOQAAARAEAOQAFAOAHAKQAHALAMAFQALAGAPAAQAQAAAMgHQALgGAIgLQAIgLADgOQADgNAAgPQAAgPgDgOQgDgOgIgKQgIgLgLgGQgMgGgQAAQgPAAgNAHg");
	this.shape_8.setTransform(284.2,40.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhSCBIAAj8IAUAAIAAAgIABAAQAFgJAHgHQAHgHAJgEQAJgFAIgCQAKgDAHAAIAVACQAJACAIAEQAPAHAKANQAKANAFARQAEARAAAVQAAATgEAQQgGARgKAOQgKANgPAHQgPAJgVgBQgSABgSgKQgRgIgLgRIAABlgAgbhnQgLAGgHALQgJAKgDAOQgFAOAAARQABAPAEAOQAEAMAIALQAIAKALAGQALAHAPgBQAPAAAMgGQAMgHAIgLQAHgLAEgOQADgPAAgRQAAgRgFgNQgFgNgIgJQgJgKgKgEQgMgFgMAAQgPAAgMAGg");
	this.shape_9.setTransform(264.2,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgJB+IAAi0IATAAIAAC0gAgKheIAAgfIAVAAIAAAfg");
	this.shape_10.setTransform(249.3,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhmB+IAAj7IBWAAIAUAAIAUADIATAGQAJADAJAHQAMAJAJANQAIANAEAPQAFAOACAPIACAbIgCAZIgFAaQgDAMgGALQgGAMgJAJQgIAKgLAGQgKAGgLADQgMADgMACIgYABgAhOBqIA5AAIAdgCQAOgCAPgIQANgGAIgLQAIgLAFgNQAEgNACgOIACgaIgCgbQgBgPgFgMQgFgNgJgLQgIgKgNgHQgMgGgPgCIgegCIg5AAg");
	this.shape_11.setTransform(233.2,37.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_12.setTransform(205.5,48.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AggB6QgQgDgKgKQgLgIgGgPQgGgOgCgXIAXAAQAAAOAEAMQAEAKAJAHQAQAPAbAAQANAAAMgFQALgEAIgIQAJgHAEgKQAEgLAAgLQgBgPgGgJQgGgLgLgFQgLgGgOgCQgNgCgQABIAAgRQAPAAAMgCQANgCAKgFQAJgGAFgJQAFgJAAgOQAAgMgEgIQgEgJgHgFQgHgFgKgDQgKgCgKAAQgLAAgKAEQgJAEgHAHQgHAHgEAKQgEAKAAALIgWAAQAAgQAFgOQAGgOAMgLQAMgLAOgDQAPgDAOAAQAPAAANAEQANADAJAIQAKAHAFAMQAGAMAAAPQAAATgJAOQgEAIgHAFQgGAGgJADQANAEAJAGQAIAHAFAIQAFAJACAIIACASQAAAQgGANQgFANgKAKQgKAKgPAHQgPAFgTABQgUAAgQgEg");
	this.shape_13.setTransform(190.8,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 1st
	this.diamondLogo_mc = new lib.Diamond_logopsd();
	this.diamondLogo_mc.parent = this;
	this.diamondLogo_mc.setTransform(46.4,42.6,1,1,0,0,0,29,28.5);

	this.timeline.addTween(cjs.Tween.get(this.diamondLogo_mc).wait(1));

	// 1st
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AocGCIAAsIIJlgBIHTGNInfGBg");
	this.shape_14.setTransform(54.5,41.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// lozenge2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AFyASIneF6IkHABIAFsZID8AAg");
	this.shape_15.setTransform(97.6,41.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AltmMID9AAIHjGeIneF6IkHABg");
	this.shape_16.setTransform(97.5,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Layer 13
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AhLGOIkpAAIgmsbIFCADIHwGbg");
	this.shape_17.setTransform(122.2,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AlzGOIglsbIFBADIHxGbInjF9g");
	this.shape_18.setTransform(122.1,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// lozenge3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("EgzBgGNMBefgACIHhGfInhGAMhecgABg");
	this.shape_19.setTransform(326.2,41.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Egy9AGOIgCsbMBeegACIHiGfIniGAg");
	this.shape_20.setTransform(326.1,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// lozenge1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHhGfInhGAMhWDAAAg");
	this.shape_21.setTransform(353.6,40.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_22.setTransform(353.5,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// lozenge4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_23.setTransform(381.1,41.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_24.setTransform(381,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// lozenge5
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_25.setTransform(409.1,41.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_26.setTransform(409,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// lozenge6
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_27.setTransform(435.1,41.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_28.setTransform(435,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-61,0,796.5,83.4), null);


// stage content:
(lib.DipoleMagnet = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {

		this.stop();

		//stage.enableMouseOver(0);
		// add custom code here from original AS files
		var fired = false;
		var electronStartx = 50;
		var electronStarty = 300;
		var centerX = 500;
		var centerY = 300;
		var turnPointx = 755;
		var turnPointy = electronStarty;
		var radius = 350;
		var accelPointy = electronStarty;
		var accel = 200;

		var totalHeight = 600;
		var magnetFrontX = this.magnetFront_mc.x;
		var magnetBackX = this.magnetBack_mc.x;
		var magnetFrontY = this.magnetFront_mc.y;
		var magnetBackY = this.magnetBack_mc.y;
		var shadowPower = 0;
		var current = 0;

		this.pipe_mc.rotation = 0;
		var bendAngle = this.pipe_mc.rotation;
		var bendRadians = angleToRadians(bendAngle);

		var electronAngle = 0;
		var electronRadians = angleToRadians(electronAngle);

		var shadowBlur = 0;

		this.arrows_mc.scaleX = this.arrows_mc.scaleY = 0.1;
		this.arrows_mc.rotation = 180;
		var up = true; // initial rotation - pointing upwards
		accelPointy = turnPointy - centerY;

		var line = new createjs.Shape();

		// create a cjs mask for the electron
	  var mask = new createjs.Shape();
  	mask.graphics.drawRect(0,0,700,315);
  	mask.x = 50;
  	mask.y = 140;
		// electron
		var electron = new createjs.Shape();
	  electron.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);
	  electron.x = electronStartx;
	  electron.y = electronStarty;
  	electron.mask = mask;
  	line.mask = mask;
  	stage.addChild(line);

  	this.arrows_mc.scaleX = 0;
  	this.arrows_mc.scaleY = 0;
	  // results
	  this.result_txt.text = '';
	  // make a reference
	  var resultText = this.result_txt;

	  var startX = electron.x;
	  var startY = electron.y;

		//instantiate a Greensock TimelineMax
	  var tl = new TimelineMax();
	  // start a ticker
	  createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", stage);

		this.fire_btn.addEventListener("click",startElectron.bind(this));

		function startElectron() {

			this.result_txt =  '';
			stage.enableMouseOver(0);
			line.graphics.clear();
    	line.graphics.beginStroke("#cccccc");
    	electron.x = startX;
    	electron.y = startY;

    	this.fire_btn.removeEventListener("click",startElectron);// required?

    	line.graphics.setStrokeStyle(2, "#cccccc");
	    line.graphics.moveTo(electron.x, electron.y);
	    stage.addChild(electron);
    	tl.to( electron, 0.5, {x:electronStartx, y:electronStarty, ease:Linear.easeNone, onUpdate:drawLine})
	  	.to( electron, 0.5, {x:centerX, y:centerY, ease:Linear.easeNone, onUpdate:drawLine})
			.to( electron, 0.5, {x:turnPointx, y:turnPointy, ease:Linear.easeNone, onUpdate:drawLine,onComplete:stopLine});

		}

		function drawLine() {
	    line.graphics.lineTo(electron.x, electron.y);
	  }

	  function resetTimelineTween() {
	  	line.graphics.clear();
	  	tl.clear();
	  }

	  function stopLine() {
			calculateScore();
	  	tl.clear(); // clear timeline
	  	line.graphics.clear();
	  	stage.update();
	  	stage.removeChild(electron);
	  	stage.enableMouseOver(10);
	  }

	  function calculateScore() {
			if(bendAngle == electronAngle) {
				resultText.text = 'Success!';
				stage.update();
			} else {
				resultText.text = 'Missed, try again';
				stage.update();
			}
		}

	  // bending the pipe
	  this.bendplus_btn.addEventListener("click",addBend.bind(this));
	  function addBend() {
			if(bendAngle < 80) {
				bendAngle += 10;
				this.pipe_mc.rotation = bendAngle;
				stage.update();
			}
		}

	  this.bendminus_btn.addEventListener("click",minusBend.bind(this));
		function minusBend() {
			if(bendAngle > -80) {
				bendAngle-=10;
				this.pipe_mc.rotation = bendAngle;
				stage.update();
			}

		}
		/* current plus and minus */

		this.currentplus_btn.addEventListener("click",addCurrent.bind(this));

		function addCurrent() {
			// arrows should face downwards (negative current electron travels up)
			if(electronAngle <= 0) {
				if(!up) { // then rotate it
					this.arrows_mc.rotation = 180; // rotates it 180
					up = true;
					stage.update();
				}
				this.arrows_mc.scaleX = this.arrows_mc.scaleY = electronAngle/100;

			} else { // electronAngle is in range 10 to 80
				if(up) { // then rotate it
					up = false;
					stage.update();
				}
				this.arrows_mc.scaleX = this.arrows_mc.scaleY = electronAngle/100;
			}
			this.result_txt =  '';
			if(electronAngle < 80) {
				electronAngle+=10;
				electronRadians = angleToRadians(electronAngle);
			} // same as bendAngle now

			shadowBlur = Math.abs(electronAngle)/8;
			if (electronAngle == 0) {
				shadowBlur == 0;
			}
			this.magnetFront_mc.magnetBody_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, shadowBlur);
			this.magnetBack_mc.magnetBody_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, shadowBlur);
			// calculate end point
			turnPointx = Math.round(centerX + Math.cos(electronRadians) * radius);
			turnPointy = Math.round(centerY + Math.sin(electronRadians) * radius);

			accelPointy = turnPointy - centerY;

		}

		this.currentminus_btn.addEventListener("click",minusCurrent.bind(this));

		function minusCurrent() {
			// arrows should face upwards (negative current electron travels up)
			if(electronAngle > 0) {
				if(up) { // then rotate it
					up = false;

					this.arrows_mc.rotation = 180; // rotates by 180 - flip it
					stage.update();
				}
			} else {
				if(!up) {
					up = true;
					stage.update();
				}
			}
			if(electronAngle > -80) {
				electronAngle-=10;
				electronRadians = angleToRadians(electronAngle);
			}
			shadowBlur = Math.abs(electronAngle)/8;

			if (electronAngle == 0) {
				shadowBlur == 0;
			}
			this.magnetFront_mc.magnetBody_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, shadowBlur);
			this.magnetBack_mc.magnetBody_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, shadowBlur);

			turnPointx = Math.round(centerX + Math.cos(electronRadians) * radius);
			turnPointy = Math.round(centerY + Math.sin(electronRadians) * radius);
			accelPointy = turnPointy - centerY;

			if(electronAngle >= -80) {
				this.arrows_mc.scaleX = this.arrows_mc.scaleY = electronAngle/100;
				this.result_txt =  '';
				stage.update();
			} else {
				this.arrows_mc.scaleX = this.arrows_mc.scaleY = electronAngle/100;
				console.log(this.arrows_mc.scaleX);
				stage.update();
			}
		}

		function angleToRadians(angle) {
			rotateRadians = angle * Math.PI/180;
			return rotateRadians;
		}
	}


	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// header
	this.logo_mc = new lib.logo();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(395.7,51,1,1,0,0,0,369.7,41);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// start
	this.fire_btn = new lib.fireBtn();
	this.fire_btn.parent = this;
	this.fire_btn.setTransform(80.8,544.6,1,1,0,0,0,31.8,18.8);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.fireBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fire_btn).wait(1));

	// pressureplus_mc
	this.currentplus_btn = new lib.plusBtn();
	this.currentplus_btn.parent = this;
	this.currentplus_btn.setTransform(519.7,535.5,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.currentplus_btn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.currentplus_btn).wait(1));

	// pressureminus_mc
	this.currentminus_btn = new lib.minusBtn();
	this.currentminus_btn.parent = this;
	this.currentminus_btn.setTransform(439,536,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.currentminus_btn, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.currentminus_btn).wait(1));

	// energyplus_mc
	this.bendplus_btn = new lib.plusBtn();
	this.bendplus_btn.parent = this;
	this.bendplus_btn.setTransform(704.2,532.7,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.bendplus_btn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bendplus_btn).wait(1));

	// energyminus_mc
	this.bendminus_btn = new lib.minusBtn();
	this.bendminus_btn.parent = this;
	this.bendminus_btn.setTransform(623.5,533.2,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.bendminus_btn, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bendminus_btn).wait(1));

	// currentText
	this.currentText = new lib.currentText();
	this.currentText.parent = this;
	this.currentText.setTransform(470.9,522.9,1,1,0,0,0,83.7,27.3);

	this.timeline.addTween(cjs.Tween.get(this.currentText).wait(1));

	// bendText
	this.bendText = new lib.bendText();
	this.bendText.parent = this;
	this.bendText.setTransform(680.7,510.3,1,1,0,0,0,66.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.bendText).wait(1));
	// arrows
	this.arrows_mc = new lib.arrow();
	this.arrows_mc.parent = this;
	this.arrows_mc.setTransform(501.1,297.9,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.arrows_mc).wait(1));

	// result
	this.result_txt = new cjs.Text("", "20px 'Helvetica'", "#666666");
	this.result_txt.name = "result_txt";
	this.result_txt.lineHeight = 22;
	this.result_txt.lineWidth = 209;
	this.result_txt.parent = this;
	this.result_txt.setTransform(71,172.5);

	this.timeline.addTween(cjs.Tween.get(this.result_txt).wait(1));

	// help_txt
	this.q_mc = new lib.q();
	this.q_mc.parent = this;
	this.q_mc.setTransform(149,540.1,1,1,0,0,0,13.4,22.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(385.8,561.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AApAlIAAgxIgBgHIgCgFQgEgFgJAAQgEAAgFACQgEACgDAFIgCAEIgCAFIgBAFIAAAFIAAAmIgHAAIAAgxIgBgHQgBgDgCgCQgDgFgJAAQgEAAgFACQgEACgDAFIgCAEIgCAFIgBAFIAAAFIAAAmIgIAAIAAhHIAIAAIAAALQAEgHAGgDIAGgCIAHgBIAIABIAGADIADAEIADAGIAEgGIAGgFIAGgCIAIgBQAHAAAFACQAEADACAEQADAEABAFIAAAKIAAAtg");
	this.shape_1.setTransform(378,558.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgSAlQgFgBgDgDIgFgGQgCgEAAgGQAAgRAZgDIALgCIAFgBIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEIgBgGIgDgFQgCgCgEgBIgHgBIgIABQgEABgDACIgEAFIgCAIIgJAAQABgHACgEQACgFAFgDQADgDAGgBIALgBIAJABQAFABAEADQADACACAFQACAEAAAGIAAAnQAAAFACABQACABAFgCIAAAHIgDABIgEAAIgDAAIgEgBIgCgDIgBgDIAAgEIgGAFIgGAEIgGACIgIABIgJgBgAAGABIgKABIgIACQgEABgDACQgFADAAAIIABAFIADAFIAGACIAFABIAJgCQAFgBAEgCIAGgHQACgEAAgFIAAgLIgLACg");
	this.shape_2.setTransform(368.5,558.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgFgFgCgHQgBgHgBgIQABgHABgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgHAHQgDAEgGABQgEACgHAAgAAXgEIgBgKQgCgFgCgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_3.setTransform(360.6,558.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgFAzIgHgDQgEgCgDgDQgDgDgBgDIgBAAIAAANIgIAAIAAhkIAIAAIAAAoIAFgHIAGgDQAHgEAHAAQAIAAAGADQAHADAEAGQAEAFABAHQACAGAAAIQAAAHgBAHQgCAHgEAGQgEAEgGAEIgHACIgIAAIgGAAgAgKgOQgEACgDAEIgFAJIgCAMQAAAGACAGQABAGAEAEQADAEAEADQAFACAFAAQAFAAAEgCQAFgCADgEQAEgDACgGQACgEAAgIQAAgHgCgFQgBgGgDgEQgDgEgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_4.setTransform(352.5,557.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_5.setTransform(340.4,558.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgEgFgDgHQgCgFAAgMQAAgHABgHQACgHAFgFQAEgFAGgDQAGgDAIAAIAIAAIAGADQAHADAEAFQAFAFABAHQACAHAAAHQAAAJgCAHQgDAHgEAFQgEAFgHACQgFADgIAAQgGAAgGgCgAgLgbQgEADgDAEQgDAEgCAGIAAAKQgBAHACAFQABAGAEAEQADAEAEACQAFADAFAAQAHAAAEgDQAFgDADgEQADgEABgGIABgLQAAgFgBgGQgBgGgDgEQgDgEgFgCQgEgDgHAAQgFAAgGADg");
	this.shape_6.setTransform(332.7,558.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_7.setTransform(326.8,558.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_8.setTransform(322.2,557.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_9.setTransform(316.4,558.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgHAlIgHgCQgFgDgFgFQgEgFgBgHQgDgHAAgIQAAgHADgHQACgHAEgFQAEgFAGgDQAHgDAGAAQAPAAAJAKQAJAKAAATIg4AAQAAAGACAFQACAFACAEQADAEAFACQAFADAEAAQAJAAAGgFIAEgFIADgHIAKAAIgEAKIgHAHQgDAEgGABQgFACgHAAgAAYgEIgCgKQgBgFgDgDQgDgEgFgCQgEgCgGAAQgEAAgEACQgEACgEAEIgEAIIgDAKIAvAAIAAAAg");
	this.shape_10.setTransform(308.7,558.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgDAzIAAhkIAHAAIAABkg");
	this.shape_11.setTransform(303.2,557.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAGgDQAGgDAGAAQAQAAAIAKQAIAKAAATIg3AAQAAAGACAFQACAFACAEQADAEAFACQAEADAFAAQAJAAAFgFIAGgFIADgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAXgEIgBgKQgBgFgEgDQgCgEgEgCQgFgCgGAAQgEAAgFACQgDACgDAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_12.setTransform(297.8,558.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAGgDQAGgDAHAAQAPAAAIAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgGAHQgEAEgFABQgFACgHAAgAAXgEQABgFgCgFQgBgFgEgDQgCgEgEgCQgFgCgFAAQgFAAgFACQgEACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_13.setTransform(286.2,558.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAUAzIAAgwIgBgHIgDgGQgEgGgKAAIgGABIgGAEIgFAEIgCAGIgCAGIAAAGIAAAoIgJAAIAAhkIAJAAIAAAmIAKgIQADgCADgBIAGgBQAHAAAGADQAFABAEAHQADADAAAFIABAHIAAAwg");
	this.shape_14.setTransform(278.4,557.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_15.setTransform(272.6,557.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgFAzIAAhAIgKAAIAAgHIAKAAIAAgMQAAgIADgGIAFgDIAGgBIAEAAIADAAIAAAIIgEgBIgGABIgCADIgBAFIAAAFIAAAJIANAAIAAAHIgNAAIAABAg");
	this.shape_16.setTransform(265,557.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgFgFgCgHQgCgFgBgMQAAgHACgHQADgHADgFQAFgFAGgDQAHgDAHAAIAIAAIAHADQAGADAFAFQADAFACAHQADAHAAAHQAAAJgDAHQgCAHgEAFQgFAFgHACQgFADgIAAQgGAAgGgCgAgKgbQgFADgDAEQgDAEgCAGIgBAKQABAHABAFQACAGADAEQACAEAGACQAEADAFAAQAGAAAFgDQAFgDADgEQADgEABgGIACgLQAAgFgCgGQgBgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_17.setTransform(259.2,558.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_18.setTransform(247.5,558.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgFgFgCgHQgCgFgBgMQAAgHACgHQADgHADgFQAFgFAGgDQAHgDAHAAIAIAAIAHADQAGADAFAFQADAFACAHQADAHAAAHQAAAJgDAHQgCAHgEAFQgFAFgHACQgFADgIAAQgGAAgGgCgAgKgbQgFADgDAEQgDAEgCAGIgBAKQABAHABAFQACAGADAEQACAEAGACQAEADAFAAQAGAAAFgDQAFgDADgEQADgEABgGIACgLQAAgFgCgGQgBgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_19.setTransform(239.8,558.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgDAzIAAhIIAIAAIAABIgAgDglIAAgMIAIAAIAAAMg");
	this.shape_20.setTransform(234.4,557.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_21.setTransform(230.9,557.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_22.setTransform(225.1,558.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAGgDQAGgDAHAAQAPAAAIAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgGAHQgEAEgFABQgFACgHAAgAAXgEQABgFgCgFQgBgFgEgDQgCgEgEgCQgFgCgFAAQgFAAgFACQgEACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_23.setTransform(217.4,558.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_24.setTransform(211.5,558.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgDAzIAAhIIAIAAIAABIgAgDglIAAgMIAIAAIAAAMg");
	this.shape_25.setTransform(207.3,557.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgPAxQgGgEgEgEQgEgGgCgHQgBgHAAgHQAAgIACgGQACgHADgFQAFgGAGgDIAGgCIAIgBQAHAAAHAEIAGADIAFAHIAAgoIAIAAIAABkIgIAAIAAgNIgFAGIgGAFIgIADIgGAAQgIAAgHgCgAgKgOQgFADgDAEQgDAEgBAGQgCAFABAHQAAAHABAFQACAGAEADQADAEAFACQAEACAEAAQAGAAAFgCQAEgDADgEQAEgEABgGQACgGAAgGIgCgMQgBgEgEgFQgDgEgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_26.setTransform(201.3,557.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAPAAAIAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgGAHQgEAEgFABQgFACgHAAgAAXgEQABgFgCgFQgBgFgEgDQgCgEgEgCQgFgCgFAAQgFAAgFACQgEACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_27.setTransform(189.5,558.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAUAzIAAgwIgBgHIgDgGQgEgGgKAAIgGABIgGAEIgFAEIgCAGIgCAGIAAAGIAAAoIgJAAIAAhkIAJAAIAAAmIAKgIQADgCADgBIAGgBQAHAAAGADQAFABAEAHQADADAAAFIABAHIAAAwg");
	this.shape_28.setTransform(181.7,557.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_29.setTransform(175.9,557.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgHAlIgGgCQgHgDgDgFQgFgFgBgHQgCgHAAgIQAAgHACgHQACgHAEgFQAEgFAHgDQAGgDAGAAQAQAAAIAKQAJAKAAATIg4AAQAAAGACAFQABAFADAEQAEAEAEACQAFADAEAAQAJAAAGgFIAEgFIAEgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAYgEIgCgKQgCgFgDgDQgCgEgFgCQgEgCgGAAQgEAAgFACQgDACgEAEIgEAIIgDAKIAvAAIAAAAg");
	this.shape_30.setTransform(385.5,539.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgOAyQgFgCgEgDQgEgDgBgEQgCgEAAgDIAIAAIAEAHIAFAEIAGACIAHAAQAIAAAFgDQAFgCADgFQACgFABgGIABgMQgEAHgHADQgHAEgHgBIgIgBIgGgBQgGgEgFgFQgDgGgCgGQgCgHAAgHQAAgIABgHQACgHAEgFQAEgFAGgDQAHgDAIAAIAGABIAIADIAGAFQADACACAEIAAgNIAIAAIAABAQAAAIgBAHQgCAGgEAFQgDAFgHADQgGADgKAAQgIAAgGgCgAgIgpQgFACgDADQgEADgCAGQgBAFAAAHQgBAHACAGQABAEADAFQADAFAFACQAFADAFAAQAGAAAFgDQAEgCADgEQAEgEABgFQACgGAAgGQAAgGgCgGQgBgFgEgEQgDgEgEgDQgFgCgGAAQgEAAgEACg");
	this.shape_31.setTransform(377.1,540.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_32.setTransform(369.1,539.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgSAlQgFgBgDgDIgFgGQgCgEAAgGQAAgRAZgDIALgCIAFgBIAGgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEIgBgGIgDgFQgCgCgEgBIgHgBIgIABQgEABgDACIgEAFIgCAIIgJAAQABgHACgEQACgFAFgDQADgDAGgBIALgBIAJABQAFABAEADQADACACAFQACAEAAAGIAAAnQAAAFACABQACABAFgCIAAAHIgDABIgEAAIgDAAIgEgBIgCgDIgBgDIAAgEIgGAFIgGAEIgGACIgIABIgJgBgAAGABIgKABIgIACQgEABgDACQgFADAAAIIABAFIADAFIAGACIAFABIAJgCQAFgBAEgCIAGgHQACgEAAgFIAAgLIgLACg");
	this.shape_33.setTransform(361.6,539.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AAUAyIAAgvIgBgHIgDgHQgEgEgKAAIgGABIgGADIgFAFIgCAEIgCAHIAAAHIAAAmIgJAAIAAhjIAJAAIAAAmIAKgJQADgCADAAIAGgBQAHAAAGADQAFABAEAHQADADAAAFIABAHIAAAvg");
	this.shape_34.setTransform(353.6,538.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_35.setTransform(345.9,539.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgFgFgCgHQgCgFgBgMQAAgHACgHQADgHADgFQAFgFAGgDQAGgDAIAAIAIAAIAHADQAGADAFAFQADAFACAHQADAHAAAHQAAAJgDAHQgCAHgEAFQgFAFgHACQgFADgIAAQgGAAgGgCgAgKgbQgFADgDAEQgDAEgCAGIgBAKQABAHABAFQACAGADAEQACAEAGACQAEADAFAAQAGAAAFgDQAFgDADgEQADgEABgGIACgLQAAgFgCgGQgBgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_36.setTransform(334.3,539.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_37.setTransform(328.5,538.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_38.setTransform(320.8,538.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_39.setTransform(315,539.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAGgDQAGgDAGAAQAQAAAIAKQAIAKABATIg4AAQAAAGACAFQACAFACAEQADAEAFACQAEADAFAAQAJAAAFgFIAGgFIADgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAYgEIgCgKQgBgFgEgDQgCgEgEgCQgFgCgGAAQgEAAgFACQgDACgDAEIgFAIIgDAKIAvAAIAAAAg");
	this.shape_40.setTransform(307.3,539.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_41.setTransform(301.4,539.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_42.setTransform(296.7,539.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgOAjQgFgCgDgDQgDgEgBgFQgCgFAAgFIAAgvIAJAAIAAAuQAAAKAEAFQAEAFAKAAQAEAAAFgCQAEgCADgEQACgEACgFQABgFAAgGIAAgmIAJAAIAABHIgJAAIAAgKIgDAEIgFAEIgHADIgHABQgHAAgFgCg");
	this.shape_43.setTransform(290.2,539.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_44.setTransform(282.4,539.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_45.setTransform(270.8,539.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgDAyIAAhHIAIAAIAABHgAgDglIAAgMIAIAAIAAAMg");
	this.shape_46.setTransform(265.4,538.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_47.setTransform(261.9,538.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgGAlIgIgCQgFgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgHAHQgDAEgGABQgEACgHAAgAAXgEIgBgKQgCgFgCgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_48.setTransform(256.2,539.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_49.setTransform(248.4,539.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgOAyQgFgCgEgDQgEgDgBgEQgCgEAAgDIAIAAIAEAHIAFAEIAGACIAHAAQAIAAAFgDQAFgCADgFQACgFABgGIABgMQgEAHgHADQgHAEgHgBIgIgBIgGgBQgGgEgFgFQgDgGgCgGQgCgHAAgHQAAgIABgHQACgHAEgFQAEgFAGgDQAHgDAIAAIAGABIAIADIAGAFQADACACAEIAAgNIAIAAIAABAQAAAIgBAHQgCAGgEAFQgDAFgHADQgGADgKAAQgIAAgGgCgAgIgpQgFACgDADQgEADgCAGQgBAFAAAHQgBAHACAGQABAEADAFQADAFAFACQAFADAFAAQAGAAAFgDQAEgCADgEQAEgEABgFQACgGAAgGQAAgGgCgGQgBgFgEgEQgDgEgEgDQgFgCgGAAQgEAAgEACg");
	this.shape_50.setTransform(240.1,540.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgSAlQgFgBgDgDIgFgGQgCgEAAgGQAAgRAZgDIALgCIAFgBIAGgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEIgBgGIgDgFQgCgCgEgBIgHgBIgIABQgEABgDACIgEAFIgCAIIgJAAQABgHACgEQACgFAFgDQADgDAGgBIALgBIAJABQAFABAEADQADACACAFQACAEAAAGIAAAnQAAAFACABQACABAFgCIAAAHIgDABIgEAAIgDAAIgEgBIgCgDIgBgDIAAgEIgGAFIgGAEIgGACIgIABIgJgBgAAGABIgKABIgIACQgEABgDACQgFADAAAIIABAFIADAFIAGACIAFABIAJgCQAFgBAEgCIAGgHQACgEAAgFIAAgLIgLACg");
	this.shape_51.setTransform(232.3,539.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AApAlIAAgxIgBgHIgCgFQgEgFgJAAQgEAAgFACQgEACgDAFIgCAEIgCAFIgBAFIAAAFIAAAmIgHAAIAAgxIgBgHQgBgDgCgCQgDgFgJAAQgEAAgFACQgEACgDAFIgCAEIgCAFIgBAFIAAAFIAAAmIgIAAIAAhHIAIAAIAAALQAEgHAGgDIAGgCIAHgBIAIABIAGADIADAEIADAGIAEgGIAGgFIAGgCIAIgBQAHAAAFACQAEADACAEQADAEABAFIAAAKIAAAtg");
	this.shape_52.setTransform(222.4,539.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgFgFgCgHQgCgFgBgMQAAgHACgHQACgHAEgFQAFgFAGgDQAHgDAHAAIAIAAIAGADQAHADAFAFQADAFACAHQACAHABAHQAAAJgDAHQgCAHgEAFQgFAFgHACQgFADgIAAQgGAAgGgCgAgKgbQgFADgDAEQgDAEgCAGIgBAKQABAHABAFQACAGADAEQACAEAGACQAEADAFAAQAGAAAFgDQAFgDADgEQADgEABgGIACgLQAAgFgCgGQgBgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_53.setTransform(212.7,539.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_54.setTransform(206.8,539.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_55.setTransform(202.2,538.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_56.setTransform(196.4,539.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgHAlIgGgCQgGgDgFgFQgEgFgBgHQgCgHAAgIQAAgHACgHQACgHAEgFQAEgFAHgDQAGgDAGAAQAQAAAIAKQAJAKAAATIg4AAQAAAGACAFQABAFADAEQADAEAFACQAFADAEAAQAJAAAGgFIAEgFIAEgHIAJAAIgEAKIgGAHQgEAEgFABQgFACgIAAgAAYgEIgCgKQgCgFgDgDQgCgEgFgCQgEgCgGAAQgEAAgFACQgDACgEAEIgEAIIgDAKIAvAAIAAAAg");
	this.shape_57.setTransform(188.7,539.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgDAyIAAhjIAHAAIAABjg");
	this.shape_58.setTransform(183.3,538.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgGAlIgIgCQgFgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgGAHQgEAEgGABQgEACgHAAgAAXgEIgBgKQgCgFgCgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_59.setTransform(177.9,539.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AgGAlIgHgCQgHgDgDgFQgFgFgCgHQgBgHAAgIQAAgHABgHQADgHAEgFQAFgFAGgDQAGgDAGAAQAQAAAIAKQAIAKABATIg4AAQAAAGACAFQACAFACAEQADAEAFACQAEADAFAAQAJAAAFgFIAGgFIADgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAXgEIgBgKQgBgFgEgDQgCgEgEgCQgFgCgGAAQgEAAgFACQgDACgDAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_60.setTransform(326.6,520.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AAUAyIAAgvIgBgIIgDgGQgEgEgKAAIgGABIgGADIgFAFIgCAEIgCAGIAAAIIAAAmIgJAAIAAhkIAJAAIAAAnIAKgJQADgBADgBIAGgBQAHAAAGACQAFADAEAFQADAEAAAEIABAIIAAAvg");
	this.shape_61.setTransform(318.8,519);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgCAsQgDgDAAgIIAAg0IgKAAIAAgHIAKAAIAAgUIAHAAIAAAUIAOAAIAAAHIgOAAIAAAwIAAAFIABADIACACIAEABIAEgBIADAAIAAAHIgEAAIgFABQgHAAgCgDg");
	this.shape_62.setTransform(313,519.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgGAlIgIgCQgFgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgHAHQgDAEgGABQgEACgHAAgAAXgEIgBgKQgCgFgCgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_63.setTransform(303.4,520.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AgMAkQgEgCgEgDQgDgDgDgFQgCgEAAgFIAJAAQACAJAFAEIAGADIAIABIAHgBIAGgDIADgFIACgFQAAgFgEgDQgEgCgFgCIgKgCIgLgDQgFgCgDgDIgDgFIgBgGQAAgKAHgFQADgDAFgCQAFgBAFAAQAMAAAGAFQAFADACAEQACAEAAAHIgIAAIgCgIQgBgDgDgBQgGgEgHAAQgHAAgEAEQgFADAAAGQAAAFAEACQADADAFABIAKADIALADQAFACAEAEQAEAEAAAHQgBAFgCAEQgCAEgEADQgDADgGABQgGABgFAAQgHAAgFgCg");
	this.shape_64.setTransform(296,520.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgSAlQgFgBgDgDIgFgGQgCgEAAgGQAAgRAZgDIALgCIAFgBIAGgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEIgBgGIgDgFQgCgCgEgBIgHgBIgIABQgEABgDACIgEAFIgCAIIgJAAQABgHACgEQACgFAFgDQADgDAGgBIALgBIAJABQAFABAEADQADACACAFQACAEAAAGIAAAnQAAAFACABQACABAFgCIAAAHIgDABIgEAAIgDAAIgEgBIgCgDIgBgDIAAgEIgGAFIgGAEIgGACIgIABIgJgBgAAGABIgKABIgIACQgEABgDACQgFADAAAIIABAFIADAFIAGACIAFABQAFAAAEgCQAFgBAEgCIAGgHQACgEAAgFIAAgLIgLACg");
	this.shape_65.setTransform(288.8,520.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgGAlIgIgCQgFgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAIAKAAATIg3AAQAAAGACAFQABAFAEAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgHAHQgDAEgGABQgEACgHAAgAAXgEIgBgKQgCgFgCgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_66.setTransform(280.9,520.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_67.setTransform(275,520.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGIgBAKIABALQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_68.setTransform(268.5,520.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgGAlIgIgCQgFgDgFgFQgEgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAFgDQAHgDAHAAQAOAAAJAKQAJAKgBATIg3AAQAAAGACAFQACAFADAEQADAEAEACQAEADAGAAQAIAAAFgFIAGgFIACgHIAKAAIgEAKIgHAHQgDAEgGABQgFACgGAAgAAXgEIgBgKQgBgFgDgDQgDgEgEgCQgFgCgFAAQgFAAgEACQgFACgCAEIgGAIIgCAKIAuAAIAAAAg");
	this.shape_69.setTransform(260.8,520.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgPAwQgGgCgEgGQgEgFgCgGQgBgIAAgIQAAgHACgGQACgHADgGQAFgEAGgEIAGgCIAIgBQAHAAAHADIAGAFIAFAFIAAgoIAIAAIAABkIgIAAIAAgMIgFAGIgGAEIgIADIgGABQgIAAgHgDgAgKgOQgFADgDAEQgDAFgBAEQgCAGABAHQAAAHABAGQACAFAEAEQADADAFACQAEACAEAAQAGAAAFgDQAEgCADgEQAEgEABgGQACgFAAgHIgCgMQgBgEgEgEQgDgFgEgCQgFgDgGABQgFgBgFADg");
	this.shape_70.setTransform(252.4,519.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_71.setTransform(242.5,520.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AgMAkQgGgDgFgEQgEgFgDgHQgCgFgBgMQABgHACgHQACgHADgFQAFgFAGgDQAGgDAIAAIAIAAIAHADQAGADAFAFQAEAFACAHQACAHAAAHQgBAJgCAHQgDAHgDAFQgFAFgGACQgHADgHAAQgGAAgGgCgAgKgbQgFADgDAEQgDAEgBAGIgCAKQAAAHACAFQABAGADAEQAEAEAEACQAFADAFAAQAHAAAEgDQAFgDADgEQADgEABgGIACgLQgBgFgBgGQgBgGgDgEQgDgEgFgCQgEgDgHAAQgGAAgEADg");
	this.shape_72.setTransform(236,520.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AgHAlIgGgCQgHgDgDgFQgFgFgBgHQgCgHAAgIQAAgHACgHQACgHAEgFQAEgFAHgDQAGgDAGAAQAPAAAJAKQAJAKAAATIg4AAQAAAGACAFQABAFADAEQAEAEAEACQAFADAEAAQAJAAAGgFIAEgFIAEgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAYgEIgCgKQgCgFgDgDQgCgEgFgCQgEgCgGAAQgEAAgFACQgDACgEAEIgEAIIgDAKIAvAAIAAAAg");
	this.shape_73.setTransform(224.4,520.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgLAkQgGgCgDgDQgEgDgCgFQgBgEAAgFIAIAAQACAJAFAEIAGADIAHABIAIgBIAGgDIADgFIABgFQABgFgEgDQgEgCgEgCIgKgCIgMgDQgFgCgEgDIgCgFIgBgGQAAgKAHgFQADgDAFgCQAFgBAGAAQAKAAAHAFQAFADACAEQACAEAAAHIgIAAIgCgIQgBgDgEgBQgFgEgGAAQgJAAgDAEQgFADAAAGQAAAFADACQAEADAFABIALADIALADQAEACAEAEQAEAEgBAHQAAAFgCAEQgCAEgEADQgDADgGABQgGABgFAAQgGAAgFgCg");
	this.shape_74.setTransform(217,520.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgSAlQgFgBgDgDIgFgGQgCgEAAgGQAAgRAZgDIALgCIAFgBIAGgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEIgBgGIgDgFQgCgCgEgBIgHgBIgIABQgEABgDACIgEAFIgCAIIgJAAQABgHACgEQACgFAFgDQADgDAGgBIALgBIAJABQAFABAEADQADACACAFQACAEAAAGIAAAnQAAAFACABQACABAFgCIAAAHIgDABIgEAAIgDAAIgEgBIgCgDIgBgDIAAgEIgGAFIgGAEIgGACIgIABIgJgBgAAGABIgKABIgIACQgEABgDACQgFADAAAIIABAFIADAFIAGACIAFABQAFAAAEgCQAFgBAEgCIAGgHQACgEAAgFIAAgLIgLACg");
	this.shape_75.setTransform(209.8,520.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#666666").s().p("AgHAlIgGgCQgHgDgDgFQgFgFgBgHQgCgHAAgIQAAgHACgHQACgHAEgFQAEgFAHgDQAGgDAGAAQAPAAAJAKQAJAKAAATIg4AAQAAAGACAFQABAFADAEQAEAEAEACQAFADAEAAQAJAAAGgFIAEgFIAEgHIAJAAIgEAKIgGAHQgEAEgFABQgGACgHAAgAAYgEIgCgKQgCgFgDgDQgCgEgFgCQgEgCgGAAQgEAAgFACQgDACgEAEIgEAIIgDAKIAvAAIAAAAg");
	this.shape_76.setTransform(201.9,520.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgPAlIAAhHIAIAAIAAANQAEgIAEgEQAGgDAJAAIAAAJQgHAAgFACQgEACgCAFQgDAEgBAFIgBALIAAAjg");
	this.shape_77.setTransform(196,520.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("AgGAlIgHgCQgGgDgEgFQgEgFgCgHQgCgHAAgIQAAgGACgHQACgHAEgGQAFgFAGgDQAGgDAHAAQAGAAAGABQAFACAEADQADADADAEQACAFABAHIgIAAQgDgJgFgEIgGgEIgIgBQgFAAgFADQgFADgCAEQgDAEgCAGQgBAGAAAEQAAAGABAFQABAGADAEQADAEAFADQAFADAFAAQAFAAAEgCQADgBADgDQADgCACgEQACgDAAgFIAJAAQgBAGgCAFQgDAFgDAEQgEADgGACQgFACgHAAg");
	this.shape_78.setTransform(189.4,520.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("AAUAlIAAguIgBgJIgDgGQgEgFgKAAIgGABIgGAEIgFAEIgCAFIgCAHIAAAHIAAAmIgJAAIAAhHIAJAAIAAAKIAKgJQADgCADAAIAGgBQAHAAAGACQAFACAEAGQADAEAAAEIABAJIAAAug");
	this.shape_79.setTransform(181.7,520.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AgEAyIAAhkIAJAAIAABkg");
	this.shape_80.setTransform(175.9,519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.q_mc}]}).wait(1));

	// magnetFront
	this.magnetFront_mc = new lib.coil();
	this.magnetFront_mc.parent = this;
	this.magnetFront_mc.setTransform(418.8,401.5,1,1,0,0,0,65.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.magnetFront_mc).wait(1));

	// left pipe
	this.vacuum_mc = new lib.pipe();
	this.vacuum_mc.parent = this;
	this.vacuum_mc.setTransform(51.2,321.4,0.598,0.847,0,0,0,1.1,4.8);

	this.timeline.addTween(cjs.Tween.get(this.vacuum_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3iYZMAAAgwxMAvEAAAMAAAAwxg");
	mask.setTransform(600,296.5);

	// bendPipe
	this.pipe_mc = new lib.angledPipe();
	this.pipe_mc.parent = this;
	this.pipe_mc.setTransform(500.9,300,0.624,0.844,-0.2,0,0,1.4,0);

	var maskedShapeInstanceList = [this.pipe_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.pipe_mc).wait(1));

	// circle
	this.circle_mc = new lib.circle();
	this.circle_mc.parent = this;
	this.circle_mc.setTransform(499.4,300,0.687,0.687,0,0,0,58.2,58.2);

	this.timeline.addTween(cjs.Tween.get(this.circle_mc).wait(1));

	// magnetBehind
	this.magnetBack_mc = new lib.coil();
	this.magnetBack_mc.parent = this;
	this.magnetBack_mc.setTransform(519.8,258.5,1,1,0,0,0,65.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.magnetBack_mc).wait(1));

	// box
	this.box_mc = new lib.walls();
	this.box_mc.parent = this;
	this.box_mc.setTransform(400.6,297.6,1,1,0,0,0,350,157.5);

	this.timeline.addTween(cjs.Tween.get(this.box_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(365,310.5,796.3,575);
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