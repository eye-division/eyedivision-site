/**
* This is the commented version
* with console.log traces for the browser
* January 2017
* Alun Ward
* Eye Division Ltd
* a.ward@eyedivision.com
* Electron Gun createJS (EaselJS) file for HTML5, Canvas
* requires https://code.createjs.com/createjs-2015.11.26.min.js
* Spritesheet and assets exported from Animate CC using the createJS library
* ElectronGun.fla is the latest version
* electrongun.html contains recommended HTML to start this off
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
	this.shape_4.graphics.f().s("#666666").ss(1,0,0,4).p("AEqAAQAAAygPAtQgWBBgzAzQhXBXh7AAQgXAAgYgDQhdgPhGhFQhXhWAAh9QAAgUADgUQAMhhBIhIQBJhIBggNQAVgDAUAAQB7AABXBYQBYBXAAB6g");
	this.shape_4.setTransform(29.8,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AguEnQhegPhGhFQhWhWgBh9QABgUACgVQAMhgBIhHQBJhJBggNQAVgCAUgBQB7AABWBZQBZBWgBB6QABAygQAtQgVBAg0A0QhWBWh7AAQgYABgWgDg");
	this.shape_5.setTransform(29.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,61.5);


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


(lib.lozenge1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("EAmRgGNIHWGfInWGAMhT5AAAIAAsVEgtogGIMBT5gAK");
	this.shape.setTransform(292.1,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgtnAGQIAAsVMBT5gAKIHWGeInWGBg");
	this.shape_1.setTransform(292,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lozenge1, new cjs.Rectangle(-1,-1,586,82.5), null);


(lib.helpBox_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,0,0,4).p("EA5qAF3MhzTAAAIAArtMBzTAAAg");
	this.shape.setTransform(369,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpBox_mc, new cjs.Rectangle(-1,-1,740,77), null);


(lib.voltCables = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989898").ss(4,0,0,4).p("A5OAAMAydAAA");
	this.shape.setTransform(161.9,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#989898").ss(4,0,0,4).p("Ai/AAIF/AA");
	this.shape_1.setTransform(19.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.voltCables, new cjs.Rectangle(-2,-2,327.4,29), null);


(lib.topRightWall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F7F7F").ss(2,0,0,4).p("ATONgMgmbAAAIAA6/MAmbAAAg");
	this.shape.setTransform(123,78.3,1,0.907);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AzNNgIAA6+MAmbAAAIAAa+g");
	this.shape_1.setTransform(123,78.3,1,0.907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.topRightWall_mc, new cjs.Rectangle(-1,-1,248,158.6), null);


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


(lib.wiresfade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkNiBIIbED");
	this.shape.setTransform(29.2,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkNhAIIbCB");
	this.shape_1.setTransform(28.2,34);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkNAFIIbgJ");
	this.shape_2.setTransform(29.2,41);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkXA8IIvh3");
	this.shape_3.setTransform(29.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AkhBkIJDjH");
	this.shape_4.setTransform(29.2,51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// fade
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.02)","rgba(254,249,243,0.055)","rgba(251,234,211,0.145)","rgba(247,210,160,0.298)","rgba(242,176,93,0.502)","rgba(238,146,46,0.678)","rgba(235,113,48,0.761)","rgba(229,36,50,0.933)","#E30133"],[0,0.051,0.141,0.263,0.408,0.522,0.635,0.882,1],-27.7,0,27.8,0).s().p("AkUlgIIqGVIoqErg");
	this.shape_5.setTransform(29.5,35.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.wiresfade, new cjs.Rectangle(-0.8,0,60,70.5), null);


(lib.topLeftWall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989898").ss(2,0,0,4).p("AHBiEIxLAAIgFjHIUfgBIAAKZIjPAAg");
	this.shape.setTransform(65.6,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AHBFNIAAnRIxLAAIgFjHIUfgBIAAKZg");
	this.shape_1.setTransform(65.6,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.topLeftWall, new cjs.Rectangle(-1,-1,133.2,68.7), null);


(lib.q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818181").s().p("AhFDiIAAhJIBYAAIAABJgAhFBlIAAgIQAAgYAIgVQAIgVAcgeIAWgXQApgwAAgkQAAgagSgPQgSgPghAAQgsAAg6AbIAAhDQAbgJAQgDQARgDATgCQATgCASAAQBFAAApAcQApAbAAAuQAAAPgEAPQgFANgIANQgJAMgXAWIgUATQgZAWgKASQgLASAAAhIAAAZg");
	this.shape.setTransform(13.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.q, new cjs.Rectangle(0,0,26.9,45.2), null);


(lib.enclosure = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F7F7F").ss(4,0,0,4).p("EArrABuIAAbgMhXVAAAMAAAg6bMBXVAAAIAAYp");
	this.shape.setTransform(296.8,204);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgrqAdOMAAAg6bMBXVAAAIAAYqIgrAAIAAACIgWAAQgFgCgCACIgBAAIAAABIAAAAIgXABQAJABgLADIgPAEIAAAdIAUABIAAAJIAPABQAAAJAHALIAEAJQgYAQABAOQgBALADAEQgNAAgEAFQgBACAAAGIADAlIA+AAIAAAFQgTALgBAMQAAAMAIAIQAGAGAAAIQAAAIgEALQgFAMABAVQgmACAAAdQAAAFAeAeIACADIgEAAIAAAXIAUADIAAAMIAOABIAAACIAfABIAAbgg");
	this.shape_1.setTransform(296.8,204);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AktGLIAAsVIJbAAIAAMVg");
	this.shape_2.setTransform(546.1,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.enclosure, new cjs.Rectangle(15.3,15,563,378), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989898").ss(1,0,0,4).p("AHDBzIxLAAIgIDsIUegDIAEq7IjPAAg");
	this.shape.setTransform(66.3,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBCBCB").s().p("AqIBzIRKAAIAAnRIDPAAIgDK6I0fAEg");
	this.shape_1.setTransform(66.3,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(-0.4,-0.5,163.6,73), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989898").ss(2,0,0,4).p("AHDBzIxLAAIgIDsIUegDIAEq7IjPAAg");
	this.shape.setTransform(66.3,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AqIBzIRKAAIAAnRIDPAAIgDK6I0fAEg");
	this.shape_1.setTransform(66.3,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.4,-0.5,159.8,75), null);


(lib.bottomRightWall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F7F7F").ss(2,0,0,4).p("ATONoMgmbAAAIAA7PMAmbAAAg");
	this.shape.setTransform(123,87.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AzNNoIAA7PMAmbAAAIAAbPg");
	this.shape_1.setTransform(123,87.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottomRightWall_mc, new cjs.Rectangle(-1,-1,248,176.4), null);


(lib.cathodetext_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgYA1IAAhnIAQAAIAAASQACgGAHgHQAIgIALAAIABAAIAFABIAAATIgEgBIgCAAQgOAAgGAIQgHAJAAAMIAAA6g");
	this.shape.setTransform(140.2,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AghApQgOgOAAgaQAAgYAOgPQANgQAWAAQALAAAKAFQAKAFAGAJQAFAHACALQABAHABAPIhMAAQABAQAGAKQAIAJAOAAQANAAAIgJQAFgFACgHIARAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgGABgHAAQgTAAgOgOgAAegIQgCgLgEgHQgHgNgQAAQgLAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_1.setTransform(130.6,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgPAAIAAgOIAPAAIAAgeIARAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGADACIAHABIADAAIAEgBIAAAOIgHACg");
	this.shape_2.setTransform(122.3,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQAAgJgFgEQgHgFgLAAQgNAAgHAIQgDAEAAAIIgRAAQABgTALgIQAMgHARAAQARAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIACAAIADgBIAAANIgGACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgJAFQgJAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_3.setTransform(114.3,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgEgHQgHgNgRAAQgKAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_4.setTransform(102.9,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAlBIIAAhDIhIAAIAABDIgVAAIAAiPIAVAAIAAA8IBIAAIAAg8IATAAIAACPg");
	this.shape_5.setTransform(90.2,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgDgHQgIgNgRAAQgLAAgIAJQgIAJgBANIA6AAIAAAAg");
	this.shape_6.setTransform(71.8,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_7.setTransform(60.4,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_8.setTransform(49.6,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AAYBIIAAhCQAAgKgCgGQgFgJgNABQgKgBgJAIQgJAIAAAUIAAA3IgRAAIAAiPIARAAIAAA2QAGgJAFgCQAIgGAMAAQAXAAAJAQQADAJAAAOIAABDg");
	this.shape_9.setTransform(38.6,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AALBEQgMAAgDgGQgFgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIAQAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGAFACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_10.setTransform(30.2,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQAAgOAJgIQAKgHAPgCIAbgEQAFAAADgFIABgGQAAgJgHgEQgGgFgLAAQgOAAgGAIQgCAEgBAIIgRAAQAAgTAMgIQANgHAPAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAEAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgFAHgLAFQgJAFgLAAQgPAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_11.setTransform(22.2,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgoA8QgWgUAAgoQAAggARgVQASgWAeAAQAbAAAPAPQAPAOABASIgSAAQgEgOgJgIQgKgIgRAAQgTAAgNAPQgNAPAAAeQAAAZALAQQAMAPAWAAQAVAAALgQQAGgJADgOIATAAQgDAXgOAPQgRATgcAAQgYAAgRgQg");
	this.shape_12.setTransform(9.2,10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgYA1IAAhnIAQAAIAAASQACgGAHgHQAIgIALAAIABAAIAFABIAAATIgEgBIgCAAQgOAAgGAIQgHAJAAAMIAAA6g");
	this.shape_13.setTransform(140.2,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AghApQgOgOAAgaQAAgYAOgPQANgQAWAAQALAAAKAFQAKAFAGAJQAFAHACALQABAHABAPIhMAAQABAQAGAKQAIAJAOAAQANAAAIgJQAFgFACgHIARAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgGABgHAAQgTAAgOgOgAAegIQgCgLgEgHQgHgNgQAAQgLAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_14.setTransform(130.6,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgPAAIAAgOIAPAAIAAgeIARAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGADACIAHABIADAAIAEgBIAAAOIgHACg");
	this.shape_15.setTransform(122.3,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQAAgJgFgEQgHgFgLAAQgNAAgHAIQgDAEAAAIIgRAAQABgTALgIQAMgHARAAQARAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIACAAIADgBIAAANIgGACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgJAFQgJAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_16.setTransform(114.3,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgEgHQgHgNgRAAQgKAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_17.setTransform(102.9,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AAlBIIAAhDIhIAAIAABDIgVAAIAAiPIAVAAIAAA8IBIAAIAAg8IATAAIAACPg");
	this.shape_18.setTransform(90.2,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgDgHQgIgNgRAAQgLAAgIAJQgIAJgBANIA6AAIAAAAg");
	this.shape_19.setTransform(71.8,12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_20.setTransform(60.4,10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_21.setTransform(49.6,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AAYBIIAAhCQAAgKgCgGQgFgJgNABQgKgBgJAIQgJAIAAAUIAAA3IgRAAIAAiPIARAAIAAA2QAGgJAFgCQAIgGAMAAQAXAAAJAQQADAJAAAOIAABDg");
	this.shape_22.setTransform(38.6,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AALBEQgMAAgDgGQgFgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIAQAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGAFACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_23.setTransform(30.2,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC0000").s().p("AgnAuQgKgIAAgOQAAgOAJgIQAKgHAPgCIAbgEQAFAAADgFIABgGQAAgJgHgEQgGgFgLAAQgOAAgGAIQgCAEgBAIIgRAAQAAgTAMgIQANgHAPAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAEAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgFAHgLAFQgJAFgLAAQgPAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_24.setTransform(22.2,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC0000").s().p("AgoA8QgWgUAAgoQAAggARgVQASgWAeAAQAbAAAPAPQAPAOABASIgSAAQgEgOgJgIQgKgIgRAAQgTAAgNAPQgNAPAAAeQAAAZALAQQAMAPAWAAQAVAAALgQQAGgJADgOIATAAQgDAXgOAPQgRATgcAAQgYAAgRgQg");
	this.shape_25.setTransform(9.2,10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgYA1IAAhnIAQAAIAAASQACgGAHgHQAIgIALAAIABAAIAFABIAAATIgEgBIgCAAQgOAAgGAIQgHAJAAAMIAAA6g");
	this.shape_26.setTransform(140.2,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AghApQgOgOAAgaQAAgYAOgPQANgQAWAAQALAAAKAFQAKAFAGAJQAFAHACALQABAHABAPIhMAAQABAQAGAKQAIAJAOAAQANAAAIgJQAFgFACgHIARAAQgBAGgEAHQgDAHgGAEQgHAIgMADQgGABgHAAQgTAAgOgOgAAegIQgCgLgEgHQgHgNgQAAQgLAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_27.setTransform(130.6,12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgPAAIAAgOIAPAAIAAgeIARAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGADACIAHABIADAAIAEgBIAAAOIgHACg");
	this.shape_28.setTransform(122.3,10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQAAgJgFgEQgHgFgLAAQgNAAgHAIQgDAEAAAIIgRAAQABgTALgIQAMgHARAAQARAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIACAAIADgBIAAANIgGACIgGAAQgJAAgEgGQgCgEgBgGQgGAHgJAFQgJAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAIAAQAJAAAIgEQAOgHAAgQIAAgNIgIACg");
	this.shape_29.setTransform(114.3,12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgEgHQgHgNgRAAQgKAAgJAJQgIAJgBANIA6AAIAAAAg");
	this.shape_30.setTransform(102.9,12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAlBIIAAhDIhIAAIAABDIgVAAIAAiPIAVAAIAAA8IBIAAIAAg8IATAAIAACPg");
	this.shape_31.setTransform(90.2,10.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AghApQgOgOAAgaQAAgYAOgPQAOgQAUAAQAMAAAKAFQALAFAFAJQAFAHACALQACAHAAAPIhMAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgEAHgFAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAegIQgCgLgDgHQgIgNgRAAQgLAAgIAJQgIAJgBANIA6AAIAAAAg");
	this.shape_32.setTransform(71.8,12.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_33.setTransform(60.4,10.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_34.setTransform(49.6,12.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAYBIIAAhCQAAgKgCgGQgFgJgNABQgKgBgJAIQgJAIAAAUIAAA3IgRAAIAAiPIARAAIAAA2QAGgJAFgCQAIgGAMAAQAXAAAJAQQADAJAAAOIAABDg");
	this.shape_35.setTransform(38.6,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AALBEQgMAAgDgGQgFgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIAQAAIAAAeIARAAIAAAOIgRAAIAABDQAAAGAFACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_36.setTransform(30.2,10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgnAuQgKgIAAgOQAAgOAJgIQAKgHAPgCIAbgEQAFAAADgFIABgGQAAgJgHgEQgGgFgLAAQgOAAgGAIQgCAEgBAIIgRAAQAAgTAMgIQANgHAPAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAEAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgFAHgLAFQgJAFgLAAQgPAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAGAEQAFAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_37.setTransform(22.2,12.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgoA8QgWgUAAgoQAAggARgVQASgWAeAAQAbAAAPAPQAPAOABASIgSAAQgEgOgJgIQgKgIgRAAQgTAAgNAPQgNAPAAAeQAAAZALAQQAMAPAWAAQAVAAALgQQAGgJADgOIATAAQgDAXgOAPQgRATgcAAQgYAAgRgQg");
	this.shape_38.setTransform(9.2,10.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("Ar3BzIAAjlIXvAAIAADlg");
	this.shape_39.setTransform(76,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_39},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,24);


(lib.anode_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQALAFAFAJQAFAHACALQABAHAAAPIhLAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAdgIQgBgLgDgHQgIgNgRAAQgKAAgJAJQgIAJgBANIA5AAIAAAAg");
	this.shape.setTransform(126.2,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgdBEQgLgIgCgQIASAAQACAHADAEQAGAGANAAQATAAAGgOQACgFABgHIABgSQgGAIgHAEQgHAEgMAAQgQAAgNgMQgNgNAAgaQAAgbANgOQANgPASAAQALAAAJAGQAFADAFAHIAAgNIARAAIAABeQAAAUgGALQgLAVgdAAQgRAAgMgHgAgXgpQgEAJAAAPQAAARAHAJQAIAJAMAAQARAAAIgRQAEgJAAgMQAAgUgIgJQgIgKgMAAQgRAAgHASg");
	this.shape_1.setTransform(114.8,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQABgJgHgEQgGgFgLAAQgNAAgHAIQgCAEgBAIIgRAAQAAgTAMgIQAMgHAQAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIADAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgGAHgKAFQgIAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_2.setTransform(104.3,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIARAAIAAAeIAQAAIAAAOIgQAAIAABDQAAAGAEACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_3.setTransform(95.6,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_4.setTransform(90.8,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_5.setTransform(82.9,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_6.setTransform(72,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQAKAFAGAJQAFAHACALQABAHAAAPIhKAAQAAAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgRAAQgLAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_7.setTransform(54.1,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_8.setTransform(42.7,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_9.setTransform(31.8,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAZA1IAAhAQAAgKgDgGQgEgKgNAAIgJABQgIADgFAGQgFAGAAAFQgCAFAAAKIAAA2IgSAAIAAhnIARAAIAAAPQAHgKAJgDQAIgEAJgBQAXABAHAPQAFAIAAARIAABBg");
	this.shape_10.setTransform(20.9,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AArBIIgPgrIg4AAIgPArIgUAAIA2iPIAVAAIA0CPgAAXANIgXg+IgWA+IAtAAg");
	this.shape_11.setTransform(8.7,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQALAFAFAJQAFAHACALQABAHAAAPIhLAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAdgIQgBgLgDgHQgIgNgRAAQgKAAgJAJQgIAJgBANIA5AAIAAAAg");
	this.shape_12.setTransform(126.2,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AgdBEQgLgIgCgQIASAAQACAHADAEQAGAGANAAQATAAAGgOQACgFABgHIABgSQgGAIgHAEQgHAEgMAAQgQAAgNgMQgNgNAAgaQAAgbANgOQANgPASAAQALAAAJAGQAFADAFAHIAAgNIARAAIAABeQAAAUgGALQgLAVgdAAQgRAAgMgHgAgXgpQgEAJAAAPQAAARAHAJQAIAJAMAAQARAAAIgRQAEgJAAgMQAAgUgIgJQgIgKgMAAQgRAAgHASg");
	this.shape_13.setTransform(114.8,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQABgJgHgEQgGgFgLAAQgNAAgHAIQgCAEgBAIIgRAAQAAgTAMgIQAMgHAQAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIADAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgGAHgKAFQgIAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_14.setTransform(104.3,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIARAAIAAAeIAQAAIAAAOIgQAAIAABDQAAAGAEACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_15.setTransform(95.6,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_16.setTransform(90.8,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_17.setTransform(82.9,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_18.setTransform(72,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQAKAFAGAJQAFAHACALQABAHAAAPIhKAAQAAAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgRAAQgLAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_19.setTransform(54.1,12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_20.setTransform(42.7,10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_21.setTransform(31.8,12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("AAZA1IAAhAQAAgKgDgGQgEgKgNAAIgJABQgIADgFAGQgFAGAAAFQgCAFAAAKIAAA2IgSAAIAAhnIARAAIAAAPQAHgKAJgDQAIgEAJgBQAXABAHAPQAFAIAAARIAABBg");
	this.shape_22.setTransform(20.9,12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AArBIIgPgrIg4AAIgPArIgUAAIA2iPIAVAAIA0CPgAAXANIgXg+IgWA+IAtAAg");
	this.shape_23.setTransform(8.7,10.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQALAFAFAJQAFAHACALQABAHAAAPIhLAAQABAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgUAAgNgOgAAdgIQgBgLgDgHQgIgNgRAAQgKAAgJAJQgIAJgBANIA5AAIAAAAg");
	this.shape_24.setTransform(126.2,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgdBEQgLgIgCgQIASAAQACAHADAEQAGAGANAAQATAAAGgOQACgFABgHIABgSQgGAIgHAEQgHAEgMAAQgQAAgNgMQgNgNAAgaQAAgbANgOQANgPASAAQALAAAJAGQAFADAFAHIAAgNIARAAIAABeQAAAUgGALQgLAVgdAAQgRAAgMgHgAgXgpQgEAJAAAPQAAARAHAJQAIAJAMAAQARAAAIgRQAEgJAAgMQAAgUgIgJQgIgKgMAAQgRAAgHASg");
	this.shape_25.setTransform(114.8,14.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgnAuQgKgIAAgOQABgOAIgIQAKgHAOgCIAbgEQAHAAABgFIABgGQABgJgHgEQgGgFgLAAQgNAAgHAIQgCAEgBAIIgRAAQAAgTAMgIQAMgHAQAAQASAAAMAHQALAHAAAPIAAA7IABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIADAAIACgBIAAANIgGACIgFAAQgKAAgEgGQgCgEgBgGQgGAHgKAFQgIAFgNAAQgOAAgJgJgAAMACIgKACIgJABQgKACgFACQgIAFAAAKQAAAIAFAEQAGAEAHAAQAKAAAHgEQAPgHAAgQIAAgNIgIACg");
	this.shape_26.setTransform(104.3,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AALBEQgLAAgFgGQgEgHAAgKIAAhEIgOAAIAAgOIAOAAIAAgeIARAAIAAAeIAQAAIAAAOIgQAAIAABDQAAAGAEACIAGABIADAAIADgBIAAAOIgGACg");
	this.shape_27.setTransform(95.6,10.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgIBIIAAiPIARAAIAACPg");
	this.shape_28.setTransform(90.8,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_29.setTransform(82.9,12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgJBIIg1iPIAWAAIAoB5IAph5IAWAAIg1CPg");
	this.shape_30.setTransform(72,10.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AghApQgNgOAAgaQAAgYANgPQAOgQAUAAQALAAALAFQAKAFAGAJQAFAHACALQABAHAAAPIhKAAQAAAQAHAKQAGAJAOAAQAOAAAIgJQAFgFABgHIASAAQgBAGgDAHQgFAHgEAEQgIAIgMADQgGABgHAAQgTAAgOgOgAAdgIQgBgLgDgHQgIgNgRAAQgLAAgHAJQgJAJAAANIA4AAIAAAAg");
	this.shape_31.setTransform(54.1,12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AggA7QgNgOAAgZQAAgWALgQQAMgRAWAAQALAAAIAFQAEADAGAHIAAg1IARAAIAACPIgQAAIAAgOQgGAJgIAFQgJAEgJAAQgSAAgMgPgAgTgKQgIAKAAATQAAARAHALQAHAMAPAAQAMAAAIgLQAIgKAAgUQAAgTgIgJQgIgKgMAAQgMAAgJAKg");
	this.shape_32.setTransform(42.7,10.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgjApQgMgOAAgZQAAgaANgPQANgPAVAAQAVAAANANQAOAOAAAaQAAAYgMAQQgMAQgZAAQgVAAgNgOgAgWgbQgHAMAAAQQAAASAHAKQAHAMAPAAQARAAAGgOQAHgNAAgPQAAgPgFgJQgHgOgSAAQgPAAgHAMg");
	this.shape_33.setTransform(31.8,12.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAZA1IAAhAQAAgKgDgGQgEgKgNAAIgJABQgIADgFAGQgFAGAAAFQgCAFAAAKIAAA2IgSAAIAAhnIARAAIAAAPQAHgKAJgDQAIgEAJgBQAXABAHAPQAFAIAAARIAABBg");
	this.shape_34.setTransform(20.9,12.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AArBIIgPgrIg4AAIgPArIgUAAIA2iPIAVAAIA0CPgAAXANIgXg+IgWA+IAtAAg");
	this.shape_35.setTransform(8.7,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("Aq2B4IAAjvIVtAAIAADvg");
	this.shape_36.setTransform(69.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_36},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,24);


(lib.Diamond_logopsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.newLogo();
	this.instance.parent = this;
	this.instance.setTransform(27.7,27.8,1,1,0,0,0,27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Diamond_logopsd, new cjs.Rectangle(-0.1,0,55.5,55.5), null);


(lib.walls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.topLeftWall_mc = new lib.topLeftWall();
	this.topLeftWall_mc.parent = this;
	this.topLeftWall_mc.setTransform(67.1,66.2,1,1,0,0,0,65.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.topLeftWall_mc).wait(1));

	// bottom
	this.bottomRightWall_mc = new lib.bottomRightWall_mc();
	this.bottomRightWall_mc.parent = this;
	this.bottomRightWall_mc.setTransform(407.1,285.7,1,1,0,0,0,123,87.2);

	this.topRightWall_mc = new lib.topRightWall_mc();
	this.topRightWall_mc.parent = this;
	this.topRightWall_mc.setTransform(407.1,87.9,1,1,0,0,0,123,86.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#989898").ss(1,0,0,4).p("AHBiEIxLAAIgFjHIUfgBIAAKZIjPAAg");
	this.shape.setTransform(67.1,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBCBCB").s().p("AHBFNIAAnRIxLAAIgFjHIUfgBIAAKZg");
	this.shape_1.setTransform(67.1,66.2);

	this.bottomLeftWall_mc = new lib.Path_3();
	this.bottomLeftWall_mc.parent = this;
	this.bottomLeftWall_mc.setTransform(66.2,305.9,1,1,0,0,0,66.2,36.2);

	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(66.2,305.9,1,1,0,0,0,66.2,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7F7F7F").ss(1,0,0,4).p("ATONfMgmbAAAIAA6+MAmbAAAg");
	this.shape_2.setTransform(407.1,285.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBCBCB").s().p("AzNNgIAA6+MAmbAAAIAAa+g");
	this.shape_3.setTransform(407.1,285.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7F7F7F").ss(1,0,0,4).p("ATONgMgmbAAAIAA6/MAmbAAAg");
	this.shape_4.setTransform(407.1,79,1,0.91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBCBCB").s().p("AzNNfIAA69MAmbAAAIAAa9g");
	this.shape_5.setTransform(407.1,79,1,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.bottomLeftWall_mc},{t:this.shape_1},{t:this.shape},{t:this.topRightWall_mc},{t:this.bottomRightWall_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.walls, new cjs.Rectangle(-3.8,-0.5,534.9,374.4), null);


(lib.voltage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// voltCables_mc
	this.voltCables_mc = new lib.voltCables();
	this.voltCables_mc.parent = this;
	this.voltCables_mc.setTransform(306.4,45.6,1,1,0,0,0,161.7,12.5);

	this.timeline.addTween(cjs.Tween.get(this.voltCables_mc).wait(1));

	// plus_mc
	this.plus_mc = new lib.plusBtn();
	this.plus_mc.parent = this;
	this.plus_mc.setTransform(87.9,29.1,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.plus_mc, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plus_mc).wait(1));

	// minus_mc
	this.minus_mc = new lib.minusBtn();
	this.minus_mc.parent = this;
	this.minus_mc.setTransform(6.9,28.6,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.minus_mc, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.minus_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.voltage, new cjs.Rectangle(-5.1,16.6,475.2,62), null);


(lib.heater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wires_mc
	this.wires_mc = new lib.wiresfade();
	this.wires_mc.parent = this;
	this.wires_mc.setTransform(209.5,50.3,1,1,0,0,0,29.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.wires_mc).wait(1));

	// plus
	this.plus_mc = new lib.plusBtn();
	this.plus_mc.parent = this;
	this.plus_mc.setTransform(107.4,31.9,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.plus_mc, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plus_mc).wait(1));

	// minus
	this.minus_mc = new lib.minusBtn();
	this.minus_mc.parent = this;
	this.minus_mc.setTransform(26.6,32.4,1,1,0,0,0,11,11);
	new cjs.ButtonHelper(this.minus_mc, 0, 1, 2, false, new lib.minusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.minus_mc).wait(1));

	// cathodeHeater
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,0,0,4).p("ASkA3IowEnI8bAAIAAq7IclAAg");
	this.shape.setTransform(119.7,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#989898","#A8A8A8","#C2C2C2","#D9D9D9","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF"],[0,0.035,0.102,0.184,0.275,0.392,0.553,1],0,35.1,0,-34.9).s().p("AylFeIAAq7IclAAIImGUIowEng");
	this.shape_1.setTransform(119.5,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heater, new cjs.Rectangle(-0.5,14.6,240,72), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAzBdIAAh1QAAgMgCgKQgEgJgFgGQgLgMgZAAQgIAAgJADQgIADgHAFQgGAFgEAGQgFAGgCAHQgEAJAAAIIgBASIAABgIgVAAIAAi0IAVAAIAAAZQANgNAOgIQAGgFAIgCQAIgCAIAAQARAAAPAGQAOAGAKAOQAHAKABAKIABAWIAAB1g");
	this.shape.setTransform(399,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AglBYQgMgFgHgJQgIgJgDgMQgEgMAAgPIAAh2IAVAAIAAB2QAAAXALANQALAMAZAAQALAAALgFQALgFAGgJQAIgJADgNQAEgMAAgPIAAhiIAVAAIAAC0IgVAAIAAgZIgJAKIgNAKQgHAEgIADQgKADgLAAQgSAAgMgFg");
	this.shape_1.setTransform(379.5,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgtB8QgUgIgPgRQgHgIgGgLQgGgKgEgMQgIgaAAghQAAgSAHghQAHgYAOgRQAPgTAWgJQAWgKAcAAQAUgBASAFQARAFAOAKQAOAKAJAPQAJAPAFAUIgZAAQgDgOgIgLQgHgLgKgIQgLgHgNgFQgNgDgOAAQgLgBgLADQgLACgJAFQgSAIgLAQQgMAQgFAWQgFAgAAAQQAAAVAGATQAGATAMAOIANANIAPAKQARAJAVAAQAKgBALgCQALgCAKgFQAKgGAJgIQAJgJAGgMQAGgMACgNIADgbIhVAAIAAgTIBrAAIAACBIgUAAIAAgrQgGALgJAKQgJAIgLAHQgLAGgPAEQgOADgSAAQgYABgUgJg");
	this.shape_2.setTransform(355.7,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAzBdIAAh1QAAgMgDgKQgDgJgFgGQgLgMgZAAQgIAAgJADQgIADgGAFQgHAFgEAGQgFAGgCAHQgEAJAAAIIgBASIAABgIgVAAIAAi0IAVAAIAAAZQANgNANgIQAHgFAIgCQAIgCAJAAQAQAAAPAGQAOAGAKAOQAGAKACAKIABAWIAAB1g");
	this.shape_3.setTransform(323.2,43.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AggBZQgPgGgLgMQgMgLgGgSQgFgMgCgeQAAgTAFgRQAGgSAKgNQALgMAPgIQAQgIAUAAIAUACQAJACAIAEQAPAIALAMQALANAEASQAGARAAATQAAAWgGARQgGASgLAMQgLANgQAHQgPAHgTAAQgRgBgPgGgAgchFQgLAGgIALQgHALgEAOQgDANAAAOQAAARAEAOQAEAOAIAKQAHALANAFQAKAGAPAAQARAAALgHQAMgGAHgLQAIgLADgOQAEgNgBgPQABgPgEgOQgDgOgIgKQgHgLgMgGQgLgGgRAAQgQAAgMAHg");
	this.shape_4.setTransform(303.8,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgnBdIAAi0IAUAAIAAAiIABAAQAJgWANgIQAOgJAWAAIAAAXQgSAAgLAFQgLAGgGALQgHAKgDAOQgDANAAAOIAABZg");
	this.shape_5.setTransform(289,43.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgGBuQgJgIABgUIAAiDIgaAAIAAgSIAaAAIAAgyIAUAAIAAAyIAiAAIAAASIgiAAIAAB7IAAALIACAIQACAEAEABIAKABIAJAAIAIgCIAAARIgKACIgOACQgQAAgHgIg");
	this.shape_6.setTransform(277.5,41.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgQBeQgKgCgHgEQgQgHgKgNQgKgNgGgRQgEgSAAgTQgBgSAGgSQAFgRALgNQAKgOAQgHQAQgJATAAQAQAAAMAEQANAEAKAIQAJAHAGAMQAHAMACAQIgVAAQgGgVgNgLQgIgGgIgDQgJgDgKAAQgQAAgLAHQgMAHgHALQgHALgDAOQgEAOAAANQAAAOADANQAEAOAHALQAHALAMAGQALAHAQAAQALAAAKgEQAJgDAHgGQAIgHAEgJQAEgJACgLIAXAAQgDAPgGANQgGAMgKAJQgJAJgOAFQgNAFgRAAg");
	this.shape_7.setTransform(262.9,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_8.setTransform(243.5,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgJB+IAAj7IATAAIAAD7g");
	this.shape_9.setTransform(229.9,40.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhUB+IAAj7ICmAAIAAAVIiPAAIAABbICBAAIAAATIiBAAIAABjICTAAIAAAVg");
	this.shape_10.setTransform(216.1,40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_11.setTransform(185.2,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAzB+IAAh3QAAgLgCgJQgDgJgGgGQgLgMgZAAQgJAAgIADQgIADgHAFQgGAFgEAFQgFAHgCAHQgEAIAAAIIgBARIAABiIgVAAIAAj7IAVAAIAABgQANgOANgHQAHgFAIgCQAIgCAJAAQAQAAAPAFQAOAHAKANQAGAKACALIABAUIAAB3g");
	this.shape_12.setTransform(165.8,40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgGBuQgJgIAAgUIAAiDIgZAAIAAgSIAZAAIAAgyIAVAAIAAAyIAhAAIAAASIghAAIAAB7IAAALIACAIQACAEADABIALABIAJAAIAIgCIAAARIgKACIgOACQgQAAgHgIg");
	this.shape_13.setTransform(151.2,41.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_14.setTransform(131.8,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAVB8IAAi3Ig/AAIAAgOIAZgEQAMgBAIgFQAIgFAFgJQAGgJADgRIASAAIAAD3g");
	this.shape_15.setTransform(116,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// diamondLogo_mc
	this.diamondLogo_mc = new lib.Diamond_logopsd();
	this.diamondLogo_mc.parent = this;
	this.diamondLogo_mc.setTransform(46.4,42.6,1,1,0,0,0,29,28.5);

	this.timeline.addTween(cjs.Tween.get(this.diamondLogo_mc).wait(1));

	// lozenge1
	this.instance = new lib.lozenge1();
	this.instance.parent = this;
	this.instance.setTransform(292.6,41,1,0.994,0,0,0,292.1,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lozenge2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAmlAGQMhUmAAAIAAsVMBUmgAKIHaGfg");
	this.shape_16.setTransform(323.1,41.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBCBCB").s().p("Egt/AGQIAAsVMBUlgAKIHaGeInaGBg");
	this.shape_17.setTransform(322.9,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// lozenge3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_18.setTransform(353.1,41.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_19.setTransform(353,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// lozenge4
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_20.setTransform(381.1,41.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_21.setTransform(381,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// lozenge5
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_22.setTransform(409.1,41.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_23.setTransform(409,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// lozenge6
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_24.setTransform(439.1,41.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_25.setTransform(439,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0.3,739.5,82), null);


// stage content:
(lib.ElectronGun = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		// variables
		var heaterHelpOn = false;
		var voltageHelpOn = false;
		/* initialise some things */
		var heat = 0;
		var initHeat = 0;
		var heatAlpha;
		var voltage = 0;
		var initVoltage = 0;
		var initGravX = 200
		var initGravY = 300;
		var initGravPower = 50;
		var initRate = 5;
		var gravEpsilon = 100;
		var gravPwr = 30;
		var filtAlpha;
		var jetLeft;

		var beziers_mc = new createjs.Shape();
		beziers_mc.graphics.beginStroke("#cccccc");
		stage.addChild(beziers_mc);

		setupStage.bind(this);

		var emitter = {
      density: 0,	// number of particles
      particleSize: 3,
      startingX: 270,
      startingY: 300,
      gravity: 0.2,
      wind: 0,
      friction: 0.97,
      groundLevel: 490,
      ceiling: 120,
      rightWall: 750,
      leftWall: 205
    };

    createjs.Ticker.addEventListener("tick", handleTick.bind(this));
    updateCurves(voltage);

    function createCircle() {

        var graphics = new createjs.Graphics();
        graphics.beginFill("#0070BC");
        graphics.drawCircle(0, 0, emitter.particleSize);

        var circle = new createjs.Shape(graphics)
        circle.x = emitter.startingX;
  	    circle.y = emitter.startingY;
        circle.vx = Math.random() * 2 - 1;
        //circle.vy = Math.random() * -0.1 + 0.2; // was -0.1
        if(voltage > 80) {
        	circle.vy = 0;
        } else {
        	circle.vy = Math.random() * -emitter.wind + 0.2;
        }
        circle.name = "particle";
        stage.addChild(circle);
       console.log('added circle - density is ' + emitter.density);
    }

    function handleTick(event) {

      for (var i = 0; i < stage.getNumChildren(); i++) {
        var circle = stage.getChildAt(i);
        if(circle.name == "particle") {
          circle.vx -= emitter.gravity;
          circle.vx += emitter.wind;	// add wind attractor
          circle.x += circle.vx;
          circle.y += circle.vy;

          // hit enclosure walls or magnets
          if ( ( (circle.x > 341 + emitter.particleSize && circle.x < 364 - emitter.particleSize) && (circle.y > 172 - emitter.particleSize && circle.y < 220 - emitter.particleSize) )
          || ( (circle.x > 341 - emitter.particleSize && circle.x < 364 - emitter.particleSize) && (circle.y > 390 - emitter.particleSize && circle.y < 436 - emitter.particleSize) )
          || ( (circle.x > 232 + emitter.particleSize && circle.x < 342 - emitter.particleSize) && (circle.y < 172 + emitter.particleSize) )
          || ( (circle.x > 232 + emitter.particleSize && circle.x < 342 - emitter.particleSize) && (circle.y > 436 - emitter.particleSize) )
          || ((circle.x > 515 - emitter.particleSize) && (circle.y < 278) )
          || ((circle.x > 515 - emitter.particleSize) && (circle.y > 315) )
          || (circle.x > emitter.rightWall + emitter.particleSize)
          || (circle.x < emitter.leftWall + emitter.particleSize)
          || (circle.y > emitter.groundLevel - emitter.particleSize)
          || (circle.y < emitter.ceiling + emitter.particleSize) ) { // regenerate the particles
            circle.x = emitter.startingX;
  	        circle.y = emitter.startingY;
            circle.vx = Math.random() * 2 - 1;
            if(voltage > 80) {
            	circle.vy = 0;
            } else {
            	circle.vy = Math.random() * -emitter.wind + 0.2;
            }
            //stage.removeChildAt(i);
             i--;
          }
        }
      }
      stage.update();
    }

    function removeElectrons() {
    	for (var i = 0; i < stage.getNumChildren(); i++) { // better way?
        var circle = stage.getChildAt(i);
        if(circle.name == "particle") {
          stage.removeChild(circle);
        }
      }
    }
		function setupStage() {
			//heat = 0;
			initVoltage = 0;
			initHeat = 0;
			voltage = 0;
			initGravX = 200;
			initGravY = 300;
			initGravPower = 50;
			initRate = 5;
			gravPwr = 30;
			gravEpsilon = 100;
			for(i = 0; i < this.emitter.density; i++) {
	      createCircle();
	    }
	    updateCurves(voltage);
		}


		// buttons
		this.voltage_mc.minus_mc.addEventListener("click",minusVoltage.bind(this));
		this.voltage_mc.plus_mc.addEventListener("click",addVoltage.bind(this));
		this.heater_mc.minus_mc.addEventListener("click",minusHeat.bind(this));
		this.heater_mc.plus_mc.addEventListener("click",addHeat.bind(this));

		/* mouse detector for heater and voltage*/
		this.cathode_mc.addEventListener("click",showHeaterHelp.bind(this));
		this.anode_mc.addEventListener("click",showVoltageHelp.bind(this));


		function showHeaterHelp() {
			if(heaterHelpOn == false) {
				this.helpText_mc.text = "Heater: Heating the cathode means more electrons are released from the tungsten filament.";
				heaterHelpOn = true;
			} else {
				heaterHelpOn = false;
			}
		}
		function showVoltageHelp() {
			if(voltageHelpOn == false) {
				this.helpText_mc.text = "Anode: Increasing the voltage draws more electrons away from the Cathode heater.";
				voltageHelpOn = true;
			} else {
				voltageHelpOn = false;
			}
		}
		function addHeat() {
			heat < 10 ? heat++ : heat = 10;	// heat is 0 to 10
			console.log("heat:"+heat);
			heatAlpha = heat*2;

			if(heat == 0) {
				removeElectrons();
				emitter.density = 0;
				this.heater_mc.wires_mc.shadow = null;
			} else {
				emitter.density = heat;
				console.log('setting up stage with density of ' + emitter.density);
				// clean up the emitter first?
				removeElectrons();
				for(i = 0; i < emitter.density; i++) {
		      createCircle();
		    }
		    this.heater_mc.wires_mc.shadow = new createjs.Shadow("rgb(255, 147, 147)", heat, 0, heatAlpha);
			}
		}

		function minusHeat() {
			heat > 1 ? heat-- : heat = 0;
			console.log("heat:"+heat);
			heatAlpha = heat*2;
			if(heat == 0) {
				removeElectrons();
				emitter.density = 0;
				this.heater_mc.wires_mc.shadow = new createjs.Shadow("rgb(255, 147, 147)", heat, 0, heatAlpha);
			} else {
				removeElectrons();
				emitter.density = heat;
				for(i = 0; i < emitter.density; i++) {
		      createCircle();
		    }
				this.heater_mc.wires_mc.shadow = null;
			}
		}
		function addVoltage() {
			voltage < 100 ? voltage += 5 : voltage = 100;
			emitter.wind = (voltage / 100) / 2.5;
			filtAlpha = voltage / 10;
			console.log("voltage = " + voltage + ' wind = ' + emitter.wind);
			if(voltage >= 10) {
				this.walls_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, filtAlpha);
				this.voltage_mc.voltCables_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, filtAlpha);
			} else {
				this.walls_mc.shadow = null;
				this.voltage_mc.voltCables_mc.shadow = null;
			}
			updateCurves(voltage);
		}
		function minusVoltage() {
			voltage >= 5 ? voltage -= 5 : voltage = 0;
			emitter.wind = (voltage / 100) / 2.5;
			filtAlpha = voltage / 10;
			console.log("voltage = " + voltage + ' wind = ' + emitter.wind);

			if(voltage >= 10) {
				this.walls_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, filtAlpha);
				this.voltage_mc.voltCables_mc.shadow = new createjs.Shadow("#00cdcd", 1, 1, filtAlpha);
			} else {
				this.walls_mc.shadow = null;
				this.voltage_mc.voltCables_mc.shadow = null;
			}
			updateCurves(voltage);
		}

		function updateCurves(voltage) {
		  beziers_mc.graphics.clear();
			beziers_mc.graphics.setStrokeStyle(1, "#cccccc");
			beziers_mc.graphics.beginStroke("#cccccc");
			// calculate the curves
			for (var i = 1; i <= 6; i++) {
				drawCurve(390,390+i*20,122,voltage,390+i*20,495,270,300,7);
			}
		}

		function drawCurve(firstLineX,startX,startY,midpoint,endX,endY,attractorX,attractorY,numPoints) {
			if(midpoint <= 10) {
				beziers_mc.graphics.moveTo(startX,startY);
				beziers_mc.graphics.lineTo(endX,endY);
			} else {
				var scaler = (firstLineX - attractorX) / 100;
				var midpoint = startX - (scaler * voltage);
				var points = [{x:startX,y:startY},{x:startX-10,y:startY+80},{x:midpoint+20,y:startY+140},{x:midpoint,y:attractorY},{x:midpoint+20,y:endY-140},{x:startX-10,y:endY-80},{x:endX,y:endY}];
				beziers_mc.graphics.moveTo(points[0].x,points[0].y);
				for(var i = 1; i < numPoints - 2; i++ )		{
					var xc = (points[i].x + points[i+1].x) / 2;
					var yc = (points[i].y + points[i+1].y) / 2;
					beziers_mc.graphics.curveTo(points[i].x,points[i].y,xc,yc);
				}
				beziers_mc.graphics.curveTo(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
			}
		}

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// walls_mc
	this.walls_mc = new lib.walls();
	this.walls_mc.parent = this;
	this.walls_mc.setTransform(518,306.8,1,1,0,0,0,286,187.2);

	this.timeline.addTween(cjs.Tween.get(this.walls_mc).wait(1));

	// voltage_mc
	this.anode_mc = new lib.anode_mc();
	this.anode_mc.parent = this;
	this.anode_mc.setTransform(141.6,412.7,1,1,0,0,0,92.5,14.2);
	new cjs.ButtonHelper(this.anode_mc, 0, 1, 2, false, new lib.anode_mc(), 3);

	this.voltage_mc = new lib.voltage();
	this.voltage_mc.parent = this;
	this.voltage_mc.setTransform(283,448.2,1,1,0,0,0,234,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.voltage_mc},{t:this.anode_mc}]}).wait(1));

	// heater_mc
	this.cathode_mc = new lib.cathodetext_mc();
	this.cathode_mc.parent = this;
	this.cathode_mc.setTransform(127.9,235.7,1,1,0,0,0,83,14.2);
	new cjs.ButtonHelper(this.cathode_mc, 0, 1, 2, false, new lib.cathodetext_mc(), 3);

	this.heater_mc = new lib.heater();
	this.heater_mc.parent = this;
	this.heater_mc.setTransform(149.2,284.2,1,1,0,0,0,119.7,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.heater_mc},{t:this.cathode_mc}]}).wait(1));

	// diagram
	this.enclosure_mc = new lib.enclosure();
	this.enclosure_mc.parent = this;
	this.enclosure_mc.setTransform(483.8,307.1,1,1,0,0,0,296.8,204);

	this.timeline.addTween(cjs.Tween.get(this.enclosure_mc).wait(1));

	// logo
	this.logo_mc = new lib.logo();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(395.7,49.1,1,1,0,0,0,369.7,41);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// q
	this.q_mc = new lib.q();
	this.q_mc.parent = this;
	this.q_mc.setTransform(51.5,551.6,1,1,0,0,0,13.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.q_mc).wait(1));

	// helpText_mc
	this.helpText_mc = new cjs.Text("Click on an item to display information about it in this help area.", "18px 'Helvetica'", "#aaaaaa");
	this.helpText_mc.name = "helpText_mc";
	this.helpText_mc.lineHeight = 25;
	this.helpText_mc.lineWidth = 663;
	this.helpText_mc.parent = this;
	this.helpText_mc.setTransform(80,519.1);

	this.timeline.addTween(cjs.Tween.get(this.helpText_mc).wait(1));

	// helpBox_mc
	this.helpBox_mc = new lib.helpBox_mc();
	this.helpBox_mc.parent = this;
	this.helpBox_mc.setTransform(397,550.6,1,1,0,0,0,369,37.5);
	this.helpBox_mc.filters = [new cjs.ColorFilter(0.33, 0.33, 0.33, 1, 170.85, 170.85, 170.85, 0)];
	this.helpBox_mc.cache(-3,-3,744,81);

	this.timeline.addTween(cjs.Tween.get(this.helpBox_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(426,308.6,740.3,579.8);
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