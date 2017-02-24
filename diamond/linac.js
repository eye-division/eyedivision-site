/**
* This is the commented version
* January 2017
* Alun Ward
* Eye Division Ltd
* a.ward@eyedivision.com
* Linac createJS (EaselJS) file for HTML5, Canvas
* requires https://code.createjs.com/createjs-2015.11.26.min.js
* Spritesheet and assets exported from Animate CC using the createJS library
* Linac.fla is the latest version
* linac.html contains recommended HTML to start this off
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


(lib.jetzone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{red:0,blue:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// graphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(4,0,0,4).p("AjkiEIHKAAAjlCFIHKAA");
	this.shape.setTransform(22.9,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0071BC").ss(4,0,0,4).p("AjkiEIHKAAAjlCFIHKAA");
	this.shape_1.setTransform(22.9,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2,50.1,30.5);


(lib.grid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAq5IAAVz");
	this.shape.setTransform(45,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("EAtyAM+MhbjgADIAA52MBbjgACg");
	this.shape_1.setTransform(338.4,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgtxAM7IAA52MBbjgACIAAZ7g");
	this.shape_2.setTransform(338.4,83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grid, new cjs.Rectangle(44,-0.9,588.4,168.1), null);


(lib.fireBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgJBIIAAh+IgwAAIAAgRIBzAAIAAARIgwAAIAAB+g");
	this.shape.setTransform(60.5,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAjBIIgCgFIgBgLIgBgYQgBgOgJgFQgFgDgMAAIgqAAIAAA+IgUAAIAAiPIBBAAQAQAAAKAFQAUAJAAAZQAAANgFAIQgFAIgKAEQAIAEAFAFQAEAGAAAMIABAUIACAMQABAHAEACIAAADgAgmgFIAqAAQAOAAAIgFQAIgGgBgOQAAgQgLgFQgFgDgKAAIgtAAg");
	this.shape_1.setTransform(47.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AArBIIgPgrIg3AAIgQArIgUAAIA2iPIAVAAIA0CPgAAWANIgWg+IgWA+IAsAAg");
	this.shape_2.setTransform(33.7,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgJBIIAAh+IgwAAIAAgRIBzAAIAAARIgwAAIAAB+g");
	this.shape_3.setTransform(22.4,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgoA+QgPgNAAgYIATAAQAAANAFAHQAKAOAWAAQALAAAIgDQARgGAAgPQAAgMgHgFQgHgFgQgDIgRgFQgTgEgIgFQgNgIAAgTQAAgTANgMQANgNAYAAQAVAAAPAMQAQAKAAAYIgTAAQgBgMgEgFQgJgMgTAAQgRAAgHAHQgHAIAAAKQAAAKAIAFQAGADASAFIAUAEQAOADAIAFQANAKAAATQAAAYgRAKQgRALgWgBQgZAAgPgNg");
	this.shape_4.setTransform(9.5,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAjBIIgBgFIgCgLIgBgYQgBgOgJgFQgGgDgLAAIgqAAIAAA+IgUAAIAAiPIBBAAQAQAAALAFQATAJAAAZQAAANgFAIQgGAIgJAEQAJAEAEAFQAEAGAAAMIABAUIACAMQABAHAEACIAAADgAgmgFIAqAAQAOAAAIgFQAIgGAAgOQAAgQgMgFQgFgDgKAAIgtAAg");
	this.shape_5.setTransform(48.9,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AArBIIgPgrIg3AAIgQArIgUAAIA2iPIAVAAIA0CPgAAXANIgXg+IgWA+IAtAAg");
	this.shape_6.setTransform(34.7,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:9.5}},{t:this.shape_3,p:{x:22.4}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:60.5}}]}).to({state:[{t:this.shape_4,p:{x:10.5}},{t:this.shape_3,p:{x:23.4}},{t:this.shape_6},{t:this.shape_5},{t:this.shape,p:{x:61.5}}]},1).to({state:[{t:this.shape_4,p:{x:9.5}},{t:this.shape_3,p:{x:22.4}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:60.5}}]},1).to({state:[]},1).wait(1));

	// border
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("AFeCNIq7AAIAAkZIK7AAg");
	this.shape_7.setTransform(35,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFCC00","#FFFFFF"],[0,1],0,35,0,-34.9).s().p("AldCNIAAkZIK7AAIAAEZg");
	this.shape_8.setTransform(35,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.9,30.2);


(lib.plusWire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("EgvIAAAMBeRAAA");
	this.shape.setTransform(284.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plusWire, new cjs.Rectangle(-18.7,0,607.4,4), null);


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


(lib.minusWire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("Eg0QAAAMBohAAA");
	this.shape.setTransform(317.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.minusWire, new cjs.Rectangle(-19,0,673,4), null);


(lib.helpPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,0,0,4).p("EA5qAHgMhzTAAAIAAu/MBzTAAAg");
	this.shape.setTransform(369.2,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg5pAHgIAAu/MBzTAAAIAAO/g");
	this.shape_1.setTransform(369.2,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpPanel, new cjs.Rectangle(-0.7,-0.7,740,98), null);


(lib.heater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AlOiBIKdED");
	this.shape.setTransform(42.6,26.5,0.819,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AlOhAIKdCB");
	this.shape_1.setTransform(41.6,34,0.819,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AlOAFIKdgJ");
	this.shape_2.setTransform(42.6,41,0.819,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AlaA8IK1h3");
	this.shape_3.setTransform(42.6,46.5,0.819,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AlnBkILPjH");
	this.shape_4.setTransform(42.6,51.5,0.819,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.02)","rgba(255,249,243,0.055)","rgba(253,234,211,0.145)","rgba(252,209,160,0.298)","rgba(249,176,90,0.502)","rgba(247,147,30,0.678)","rgba(244,116,32,0.761)","rgba(239,53,35,0.933)","#ED1C24"],[0,0.051,0.141,0.263,0.408,0.522,0.635,0.882,1],-34.4,0,34.4,0).s().p("AlXlgIKvGVIqvErg");
	this.shape_5.setTransform(42.9,35.3,0.819,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heater, new cjs.Rectangle(12.2,0,61,70.5), null);


(lib.FLIP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flip polarity
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ag0BIIAAiPIA/AAQATAAAMALQALALAAATQAAARgKANQgKALgWAAIgsAAIAAA9gAghgEIAmAAQANAAAIgGQAIgFAAgOQAAgQgMgGQgGgDgLAAIgmAAg");
	this.shape.setTransform(74.8,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgJBIIAAiPIATAAIAACPg");
	this.shape_1.setTransform(65.2,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgtBIIAAiPIAUAAIAAB+IBHAAIAAARg");
	this.shape_2.setTransform(57.2,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgxBIIAAiPIBjAAIAAASIhPAAIAAArIBFAAIAAARIhFAAIAABBg");
	this.shape_3.setTransform(45.6,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// <Path>
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("AJiCNIzDAAIAAkZITDAAg");
	this.shape_4.setTransform(61,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC00","#FFFFFF"],[0,1],0,35,0,-34.9).s().p("AphCNIAAkZITCAAIAAEZg");
	this.shape_5.setTransform(61,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.9,30.2);


(lib.autoflip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Flip polarity
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ag0BIIAAiPIA/AAQATAAAMALQALALAAATQAAARgKANQgKALgWAAIgsAAIAAA9gAghgEIAmAAQANAAAIgGQAIgFAAgOQAAgQgMgGQgGgDgLAAIgmAAg");
	this.shape.setTransform(106.4,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgJBIIAAiPIATAAIAACPg");
	this.shape_1.setTransform(96.8,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgtBIIAAiPIAUAAIAAB+IBHAAIAAARg");
	this.shape_2.setTransform(88.8,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgxBIIAAiPIBjAAIAAASIhPAAIAAArIBFAAIAAARIhFAAIAABBg");
	this.shape_3.setTransform(77.2,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ag0A2QgRgVAAggQAAgcAPgVQASgbAkAAQAlAAATAZQAOATAAAeQAAAfgQAVQgUAZgiAAQghAAgTgWgAgjgqQgOAPAAAdQAAAYAMAQQAMARAaAAQAaAAAMgTQALgSAAgXQAAgZgNgQQgNgPgXAAQgWAAgOAPg");
	this.shape_4.setTransform(57.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgJBIIAAh+IgwAAIAAgRIBzAAIAAARIgwAAIAAB+g");
	this.shape_5.setTransform(43.7,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgxAwQgHgPAAgaIAAhQIAUAAIAABYQAAAQAGAKQAJAQAUAAQAYAAAJgRQAFgKAAgPIAAhYIAUAAIAABQQAAAagHAPQgOAagkAAQgjAAgOgag");
	this.shape_6.setTransform(30.5,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AArBIIgPgrIg4AAIgPArIgUAAIA2iPIAVAAIA0CPgAAXANIgXg+IgWA+IAtAAg");
	this.shape_7.setTransform(16.6,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// <Path>
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("AJiCNIzDAAIAAkZITDAAg");
	this.shape_8.setTransform(61,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFCC00","#FFFFFF"],[0,1],0,35,0,-34.9).s().p("AphCNIAAkZITCAAIAAEZg");
	this.shape_9.setTransform(61,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,124.5,30.2);


(lib.enclosure = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(4,0,0,4).p("EA2LAJOMhsVAAAIAAybMBsVAAAg");
	this.shape.setTransform(364,76.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.enclosure, new cjs.Rectangle(15.3,15.7,697.5,122), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhKIAACV");
	this.shape.setTransform(2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,-2,4,18.9), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhPIAACf");
	this.shape.setTransform(2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,-2,4,20), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhKIAACV");
	this.shape.setTransform(2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,-2,4,19), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhKIAACV");
	this.shape.setTransform(2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,-2,4,18.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhKIAACV");
	this.shape.setTransform(2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,-2,4,19), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhPIAACf");
	this.shape.setTransform(2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,-2,4,20), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhOIAACd");
	this.shape.setTransform(2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,-2,4,19.9), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhOIAACd");
	this.shape.setTransform(2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,-2,4,19.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhPIAACf");
	this.shape.setTransform(2,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,-2,4,20), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBB03B").ss(4,0,0,4).p("AAAhRIAACj");
	this.shape.setTransform(2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,-2,4,20.5), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("AhNBNQgggfAAguQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsQAAAuggAfQghAhgtAAQgtAAggghg");
	this.shape.setTransform(11,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,22,22), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhNBNQgggfAAguQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsQAAAuggAfQghAhgtAAQgtAAggghg");
	this.shape.setTransform(11,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,22,22), null);


(lib.wires = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(309.2,55.8,1,1,0,0,0,2,7.5);
	this.instance.alpha = 0.68;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(526.5,10.2,1,1,0,0,0,2,8.2);
	this.instance_1.alpha = 0.68;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(247,9.8,1,1,0,0,0,2,8);
	this.instance_2.alpha = 0.68;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(381.3,9.9,1,1,0,0,0,2,7.9);
	this.instance_3.alpha = 0.68;

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(666.9,9.9,1,1,0,0,0,2,7.9);
	this.instance_4.alpha = 0.68;

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.4,9.8,1,1,0,0,0,2,8);
	this.instance_5.alpha = 0.68;

	this.instance_6 = new lib.plusWire();
	this.instance_6.parent = this;
	this.instance_6.setTransform(310.3,65.2,1,1,0,0,0,293.3,2);
	this.instance_6.alpha = 0.68;

	this.instance_7 = new lib.minusWire();
	this.instance_7.parent = this;
	this.instance_7.setTransform(343,0,1,1,0,0,0,326,2);
	this.instance_7.alpha = 0.68;

	this.instance_8 = new lib.Path_6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(601.6,55.7,1,1,0,0,0,2,7.5);
	this.instance_8.alpha = 0.68;

	this.instance_9 = new lib.Path_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(455.1,55.8,1,1,0,0,0,2,7.5);
	this.instance_9.alpha = 0.68;

	this.instance_10 = new lib.Path_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(187.6,55.8,1,1,0,0,0,2,7.5);
	this.instance_10.alpha = 0.68;

	this.instance_11 = new lib.Path_9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(94.4,55.5,1,1,0,0,0,2,8);
	this.instance_11.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wires, new cjs.Rectangle(-2,-2,673,69.2), null);


(lib.plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AAAA1IAAhp");
	this.shape.setTransform(10.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AhBAAICDAA");
	this.shape_1.setTransform(10.8,11);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plus, new cjs.Rectangle(0,0,22,22), null);


(lib.minus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AhBAAICDAA");
	this.shape.setTransform(10.8,11);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.minus, new cjs.Rectangle(0,0,22,22), null);


(lib.linac_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wires
	this.wires_mc = new lib.wires();
	this.wires_mc.parent = this;
	this.wires_mc.setTransform(336.5,59.4,1,1,0,0,0,334.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.wires_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.linac_container, new cjs.Rectangle(0,24.9,673,69.2), null);


(lib.Diamond_logopsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.newLogo();
	this.instance.parent = this;
	this.instance.setTransform(27.7,27.8,1,1,0,0,0,27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Diamond_logopsd, new cjs.Rectangle(-0.1,0,55.5,55.5), null);


(lib.voltage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.minus_mc = new lib.minus();
	this.minus_mc.parent = this;
	this.minus_mc.setTransform(11,74,1,1,0,0,0,11,11);

	this.plus_mc = new lib.plus();
	this.plus_mc.parent = this;
	this.plus_mc.setTransform(11,11,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plus_mc},{t:this.minus_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.voltage, new cjs.Rectangle(0,0,22,85), null);


(lib.logofull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgxB6QgKgFgJgIQgIgHgHgJQgNgSgGgYQgDgQgDgjQAAgRADgQQABgPAGgNQAEgMAGgKQAGgKAIgIQAPgQAWgIQAOgEAggDQATABARAEQAQAFANALQAMAKAJAOQAIAQADATIgYAAQgIgggTgOQgVgNggAAQgWAAgQAJQgQAJgLAPQgKAQgGAUQgFAUAAAWQAAAVAFAUQAEAUAKAQQAKAPARALQASAJAYABQAQAAAOgGQANgFAKgKQAKgIAHgOQAGgMAEgPIAZAAQgEASgJARQgHAQgOAMQgNANgSAGQgKAEgLACIgXACQgdAAgUgLg");
	this.shape.setTransform(349.4,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABXB+IgdhPIhyAAIgeBPIgYAAIBij7IAbAAIBgD7gAAyAaIgyiDIgwCDIBiAAg");
	this.shape_1.setTransform(325.2,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ABHB+IiQjbIAAAAIAADbIgYAAIAAj7IAbAAICQDbIABAAIAAjbIAYAAIAAD7g");
	this.shape_2.setTransform(300.9,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgLB+IAAj7IAXAAIAAD7g");
	this.shape_3.setTransform(283.5,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhPB+IAAj7IAYAAIAADnICHAAIAAAUg");
	this.shape_4.setTransform(270,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgRBeQgKgCgIgEQgPgHgLgNQgKgNgFgRQgFgRAAgUQAAgTAGgSQAGgRALgNQAKgNAQgIQAPgIATAAQAlAAAWAaQAVAaAAAwIiMAAQAAAPAEANQAEANAHAKQAIAJALAGQAMAGAOAAQAUAAAPgLQAHgFAFgIQAFgIADgKIAXAAQgEANgGALQgGALgKAIQgJAIgNAFQgNAFgRAAgAA7gLQAAgOgDgMQgEgLgHgJQgIgIgKgFQgLgGgOAAQgNAAgLAGQgLAFgHAJQgIAIgEAMQgFAMgBANIB1AAIAAAAg");
	this.shape_5.setTransform(239.7,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAzB+IAAh3QAAgKgDgKQgDgJgFgGQgKgMgaAAQgJAAgIADQgIACgGAGQgHAFgEAFQgFAHgCAHQgDAIgBAIIgBARIAABiIgVAAIAAj7IAVAAIAABgQANgOAOgIQAGgEAIgCQAIgDAJAAQAQABAPAFQAOAHAKANQAHAKABALIABAUIAAB3g");
	this.shape_6.setTransform(220.3,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgLB+IAAjnIhQAAIAAgUIC3AAIAAAUIhQAAIAADng");
	this.shape_7.setTransform(200.8,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_8.setTransform(176.5,48.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhRB8QAAgTAEgOQAEgOAMgOQANgPAOgKIAbgTIAXgPQAMgGAKgHQAJgJAFgKQAFgKAAgOQAAgMgEgKQgEgKgIgGQgHgHgKgDQgJgEgMAAQgLABgKAFQgLAFgGAIQgHAJgFALQgDALABAMIgZAAQAAgRAGgPQAGgQALgKQAKgLAPgFQAPgHAQAAQAUABAOAFQAOAGAKAIQAJAKAFANQAFAMAAAOQAAARgGAMQgFAMgJALQgJAIgMAIIgWAOIgXAOIgUANIgNAJIgKALQgEAGgCAIQgEAHAAAJICIAAIAAATg");
	this.shape_9.setTransform(162.1,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// diamondLogo_mc
	this.diamondLogo_mc = new lib.Diamond_logopsd();
	this.diamondLogo_mc.parent = this;
	this.diamondLogo_mc.setTransform(46.4,42.6,1,1,0,0,0,29,28.5);

	this.timeline.addTween(cjs.Tween.get(this.diamondLogo_mc).wait(1));

	// 1st
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AocGCIAAsIIJlgBIHTGNInfGBg");
	this.shape_10.setTransform(53.9,41.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// lozenge2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("AFyASIneF6IkHABIAFsZID8AAg");
	this.shape_11.setTransform(97.6,41.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AltmMID9AAIHjGeIneF6IkHABg");
	this.shape_12.setTransform(97.5,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// lozenge3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CBCBCB").ss(1,0,0,4).p("EgwrgGGMBZ0gAJIHiGfIniGAMhZ2gABg");
	this.shape_13.setTransform(311,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgwrAGPIABsVMBZ1gAJIHhGeInhGBg");
	this.shape_14.setTransform(310.9,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// lozenge1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHhGfInhGAMhWDAAAg");
	this.shape_15.setTransform(353.6,40.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_16.setTransform(353.5,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// lozenge4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EguzgGFMBWDgAKIHiGfIniGAMhWDAAAg");
	this.shape_17.setTransform(381.1,41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_18.setTransform(381,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// lozenge5
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_19.setTransform(409.1,41.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWDgAKIHiGeIniGBg");
	this.shape_20.setTransform(409,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// lozenge6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F2F2F2").ss(1,0,0,4).p("EAnQAGQMhWDAAAIAAsVMBWDgAKIHiGfg");
	this.shape_21.setTransform(435.1,41.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBCBCB").s().p("EguyAGQIAAsVMBWEgAKIHhGeInhGBg");
	this.shape_22.setTransform(435,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logofull, new cjs.Rectangle(-1.7,0,959.5,83.4), null);


// stage content:
(lib.Linac = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {

		this.stop();

		var fired = false;

		var particleAccel = 0.2;
		var accelIncrement = 8;
		var initAccel = 1;
		var maxVelocity = 2;
		var minVelocity = -2;

		var chamberArray = [];

		var topScore;

		var blueElectron = new createjs.Shape();
		var traceElectron = new createjs.Shape();
		var traceElectronStartY = 210;

		var blueline = new createjs.Shape();

		var topScoreText = this.topScore_txt.text;

		var _this = this;

		initEngine();
		/* setup listeners for buttons */
		this.flip_btn.alpha = 0.2;
		this.flip_btn.mouseEnabled = false;
		this.autoflip_btn.addEventListener("click",autoFlip.bind(this));

		this.fire_btn.addEventListener("click",fireElectron.bind(this));

		function initEngine() {
			particleAccel = 0.2;
			accelIncrement = 8;
			initAccel = 1;
			maxVelocity = 2;
			minVelocity = -2;

			chamberArray[0] = new chamber('chamber1',152,386,28,'+',0.2,null, false);
			chamberArray[1] = new chamber('chamber2',195,386,30,'-',0.2,null, false);
			chamberArray[2] = new chamber('chamber3',244,386,33,'+',0.2,null, false);
			chamberArray[3] = new chamber('chamber4',303,386,34,'-',0.2,null, false);
			chamberArray[4] = new chamber('chamber5',363,386,38,'+',0.2,null, false);
			chamberArray[5] = new chamber('chamber6',433,386,42,'-',0.2,null, false);
			chamberArray[6] = new chamber('chamber7',505,386,42,'+',0.2,null, false);
			chamberArray[7] = new chamber('chamber8',575,386,42,'-',0.2,null, false);
			chamberArray[8] = new chamber('chamber9',650,386,42,'+',0.2,null, false);
			chamberArray[9] = new chamber('chamber10',715,386,42,'-',0.2,null, false);

		// initial set up of charges on chambers - starts red / positive at 1.
			for(var n = 0; n < chamberArray.length; n++) {
			 	var myMovie = chamberArray[n].name;
				if(n%2 == 0) {
					switchMovieColor(myMovie,"red");
					chamberArray[n].charge = "+";
				} else {
					switchMovieColor(myMovie,"blue");
					chamberArray[n].charge = "-";
				}
				chamberArray[n].poleFlipped = false;
				switchMovieAlpha(myMovie,0.2);
			}

		} // end initEngine()

		function chamber(name,x,y,width,charge,alpha,shadow,poleFlipped) {
			this.name = name;
			this.id = name;
			this.x = x;
			this.y = y;
			this.width = width;
			this.charge = charge;
			this.alpha = alpha;
			this.shadow = shadow;
			this.poleFlipped = poleFlipped;
		}

		function fireElectron() {
			fired = true;
			_this.topScore_txt.text = "Fire!";
			_this.walls_mc.shadow = new createjs.Shadow('#0099cc',1,1,5);

		  var mask = new createjs.Shape();
	  	mask.graphics.drawRect(0,0,640,220);
	  	mask.x = 120;
	  	mask.y = 100;

	  	blueElectron.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);

			blueElectron.x = 120;
			blueElectron.y = 400;
			blueElectron.velocity = initAccel;
			stage.addChild(blueElectron);
			traceElectron.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);
			traceElectron.x = blueElectron.x;
			traceElectron.y = traceElectronStartY;
	    //blueElectron.mask = mask;
	    traceElectron.mask = mask;
			stage.addChild(traceElectron);

			blueline.graphics.clear();
			blueline.graphics.beginStroke("#0099CC");
			blueline.graphics.moveTo(traceElectron.x,traceElectron.y);
			stage.addChild(blueline);

			_this.flip_btn.alpha = 1;
			_this.flip_btn.mouseEnabled = true;
			_this.flip_btn.addEventListener("click",flipPolarity.bind(this));

			_this.autoflip_btn.alpha = .5;
			_this.autoflip_btn.mouseEnabled = false;
			_this.autoflip_btn.removeEventListener("click",autoFlip.bind(this));

			//_this.fire_btn.removeEventListener("click",fireElectron.bind(this));
			//_this.fire_btn.alpha = 0.3;
			//_this.fire_btn.mouseEnabled = false;

			initEngine();

			stage.update();
			blueElectron.addEventListener("tick",moveElectron);
		}

		function setupElectron() {
			stage.removeChild(blueElectron);
			//console.log('setupElectron()');
	  	blueElectron.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);
			blueElectron.x = 120;
			blueElectron.y = 400;
			blueElectron.velocity = 1; //initAccel = ; // reset this - not working
			stage.addChild(blueElectron);

			traceElectron.graphics.beginFill("#0070BC").drawCircle(0, 0, 3);
			traceElectron.x = blueElectron.x;
			traceElectron.y = traceElectronStartY;

			stage.addChild(traceElectron);
			stage.update();
		}

		function moveElectron(event) {			// tick updater for manual flip

			if(fired === true) {

				if( (event.target.x >= 119) && (event.target.x < 758 )) {

					for(var i = 0; i < chamberArray.length; i++) {

						var myMovie = chamberArray[i].name;

						if( (event.target.x > chamberArray[i].x-10) && (event.target.x < chamberArray[i].x+chamberArray[i].width/2) ) {

							if(chamberArray[i].charge == "+") {
								event.target.velocity += particleAccel;
								traceElectron.y -= particleAccel*accelIncrement;
							} else {
								event.target.velocity -= particleAccel;
								traceElectron.y += particleAccel*accelIncrement;
							}
							switchMovieAlpha(myMovie,1);
						} else if( (event.target.x > chamberArray[i].x+chamberArray[i].width/2) && (event.target.x < chamberArray[i].x+chamberArray[i].width+10) ) {	// decelerate y++;
							if(chamberArray[i].charge == "+") {
								event.target.velocity -= particleAccel;
								traceElectron.y += particleAccel*accelIncrement;
							} else { 	// accelerate again
								event.target.velocity += particleAccel;
								traceElectron.y -= particleAccel*accelIncrement;
							}
							switchMovieAlpha(myMovie,1);
						} else {
							switchMovieAlpha(myMovie,0.2);
						}
					}
					event.target.x += event.target.velocity;
					traceElectron.x = event.target.x;

					blueline.graphics.lineTo(traceElectron.x, traceElectron.y);

				} else {	// outside the box - so reset
					reset();
				}
			}
		}

		function flipPolarity() {
			//console.log('I flipped polarity!');

			for(var i = 0; i < chamberArray.length; i++) {
				var myMovie = chamberArray[i].name;
				if(chamberArray[i].charge === "+") {
					chamberArray[i].charge = "-";
					switchMovieColor(myMovie,"blue");
				} else {
					chamberArray[i].charge = "+";
					switchMovieColor(myMovie,"red");
				}
			}
		}

		function calculateScore(successText,topScore) {

			if((!topScore) || (traceElectron.y < topScore)) {
				topScore = Math.round(traceElectron.y);
			}
			if(topScore <= 120) {
				successText.text = "Success!";
			} else if(topScore <= 140) {
				successText.text = "Nearly there!";
			} else {
				successText.text = "More energy required!";
			}
		}

		function reset(autoSet = false)	{

			_this.walls_mc.shadow = null;

			//console.log('reset now ' + autoSet);
			autoSet === false ? calculateScore(_this.topScore_txt,topScore) : _this.topScore_txt.text = "Success!";

			blueElectron.removeEventListener('tick',moveElectron);
			blueElectron.removeEventListener('tick',autoMoveElectron);

			stage.removeChild(blueElectron);
			stage.removeChild(traceElectron);

			// reset all buttons to listen again
			// make all chambers alpha = 0.2 again
			for(var i = 0; i < chamberArray.length; i++) {
				var myMovie = chamberArray[i].name;
				switchMovieAlpha(myMovie,0.2);
			}

			_this.autoflip_btn.alpha = 1;
			_this.autoflip_btn.mouseEnabled = true;
			_this.autoflip_btn.addEventListener("click",autoFlip.bind(this));

			_this.fire_btn.mouseEnabled = true;
			_this.fire_btn.alpha = 1;
			_this.fire_btn.addEventListener("click",fireElectron.bind(this));

			fired = false;

			_this.flip_btn.alpha = 0.2;
			_this.flip_btn.mouseEnabled = false;
			_this.flip_btn.removeEventListener("click",flipPolarity);

		}

		function autoFlip() {			// run automatically
			_this.walls_mc.shadow = new createjs.Shadow('#0099cc',1,1,5);

			_this.topScore_txt.text = "AUTO FLIP";
			fired = true;

			_this.fire_btn.removeEventListener("click",fireElectron);
			_this.fire_btn.mouseEnabled = false;
			_this.fire_btn.alpha = 0.3;

			_this.flip_btn.mouseEnabled = false;
			_this.flip_btn.alpha = 0.3;
			_this.flip_btn.removeEventListener("click",flipPolarity);
			_this.autoflip_btn.mouseEnabled = false;
			_this.autoflip_btn.alpha = 0.3;

			initEngine(); // set up chambers and colours / charges

			setupElectron();	// set up electron - removes line too

			blueline.graphics.clear();
			blueline.graphics.beginStroke("#0099CC");
			blueline.graphics.lineTo(traceElectron.x,traceElectron.y);
			stage.addChild(blueline);
			stage.update();

			blueElectron.removeEventListener("tick",moveElectron);
			blueElectron.addEventListener("tick",autoMoveElectron);

		}

		function autoMoveElectron(event) { // check blueElectron position on autoFlip

			if(fired === true) {

				if( (event.target.x >= 119) && (event.target.x < 758 )) {	// inside bounds

					for(i = 0; i < chamberArray.length; i++ ) {

						var myMovie = chamberArray[i].name;

						if ( (event.target.x > chamberArray[i].x - 10) && (event.target.x < (chamberArray[i].x + chamberArray[i].width) ) ) {

							event.target.velocity += particleAccel;
							traceElectron.y -= particleAccel * accelIncrement;

							switchMovieAlpha(myMovie,1);

							if( (event.target.x >= (chamberArray[i].x + chamberArray[i].width/2)-8) && (event.target.x <= (chamberArray[i].x + chamberArray[i].width/2)+8) ) {
								if (chamberArray[i].poleFlipped === false) {
									flipPolesOnce(i);
								}

							}
						}
					}

					event.target.x += event.target.velocity;
					traceElectron.x = event.target.x;

					blueline.graphics.lineTo(traceElectron.x, traceElectron.y);

				} else {
					reset(true); // autoSet = true;
				}

			} else {
				//console.log('fired=' + fired);
			}

		}

		function flipPolesOnce(currentMovie) {

				for(var m = 0; m < chamberArray.length; m++) {
					var myMovie = chamberArray[m].name;
					if(chamberArray[m].charge === "+") {
						chamberArray[m].charge = "-";
						switchMovieColor(myMovie,"blue");
					} else {
						chamberArray[m].charge = "+";
						switchMovieColor(myMovie,"red");
					}

					if(m == currentMovie) {
						chamberArray[m].poleFlipped = true;
					}
					switchMovieAlpha(myMovie,0.2);
				}
		}

		function switchMovieColor(myMovie,color) {
			switch(myMovie) {
				case 'chamber1':
					_this.chamber1_mc.gotoAndStop(color);
					break;
				case 'chamber2':
					_this.chamber2_mc.gotoAndStop(color);
					_this.chamber2_mc.alpha = 0.2;
					break;
				case 'chamber3':
					_this.chamber3_mc.gotoAndStop(color);
					_this.chamber3_mc.alpha = 0.2;
					break;
				case 'chamber4':
					_this.chamber4_mc.gotoAndStop(color);
					_this.chamber4_mc.alpha = 0.2;
					break;
				case 'chamber5':
					_this.chamber5_mc.gotoAndStop(color);
					_this.chamber5_mc.alpha = 0.2;
					break;
				case 'chamber6':
					_this.chamber6_mc.gotoAndStop(color);
					_this.chamber6_mc.alpha = 0.2;
					break;
				case 'chamber7':
					_this.chamber7_mc.gotoAndStop(color);
					_this.chamber7_mc.alpha = 0.2;
					break;
				case 'chamber8':
					_this.chamber8_mc.gotoAndStop(color);
					_this.chamber8_mc.alpha = 0.2;
					break;
				case 'chamber9':
					_this.chamber9_mc.gotoAndStop(color);
					_this.chamber9_mc.alpha = 0.2;
					break;
				case 'chamber10':
					_this.chamber10_mc.gotoAndStop(color);
					_this.chamber10_mc.alpha = 0.2;
					break;
			}
		}

		function switchMovieAlpha(myMovie,alpha) {
			switch(myMovie) {
				case 'chamber1':
					_this.chamber1_mc.alpha = alpha;
					break;
				case 'chamber2':
					_this.chamber2_mc.alpha = alpha;
					break;
				case 'chamber3':
					_this.chamber3_mc.alpha = alpha;
					break;
				case 'chamber4':
					_this.chamber4_mc.alpha = alpha;
					break;
				case 'chamber5':
					_this.chamber5_mc.alpha = alpha;
					break;
				case 'chamber6':
					_this.chamber6_mc.alpha = alpha;
					break;
				case 'chamber7':
					_this.chamber7_mc.alpha = alpha;
					break;
				case 'chamber8':
					_this.chamber8_mc.alpha = alpha;
					break;
				case 'chamber9':
					_this.chamber9_mc.alpha = alpha;
					break;
				case 'chamber10':
					_this.chamber10_mc.alpha = alpha;
					break;
			}
		}
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.logo_mc = new lib.logofull();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(395.7,51,1,1,0,0,0,369.7,41);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// topScore
	this.topScore_txt = new cjs.Text("", "20px 'Helvetica'", "#666666");
	this.topScore_txt.name = "topScore_txt";
	this.topScore_txt.lineHeight = 22;
	this.topScore_txt.lineWidth = 135;
	this.topScore_txt.parent = this;
	this.topScore_txt.setTransform(138,109.8);

	this.timeline.addTween(cjs.Tween.get(this.topScore_txt).wait(1));

	// heater_mc
	this.heater_mc = new lib.heater();
	this.heater_mc.parent = this;
	this.heater_mc.setTransform(92.8,396.7,1,1,0,0,0,36.1,35.2);

	this.timeline.addTween(cjs.Tween.get(this.heater_mc).wait(1));

	// heater bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("AkVlbIIlGUIolEi");
	this.shape.setTransform(98.7,396.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,0,0,4).p("AAFgCIgJAF");
	this.shape_1.setTransform(70.4,431.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#989898","#A8A8A8","#C2C2C2","#D9D9D9","#EAEAEA","#F6F6F6","#FDFDFD","#FFFFFF"],[0,0.035,0.102,0.184,0.275,0.392,0.553,1],-91.5,35.3,-91.5,-34.6).s().p("AkSlbIIlGUIolEig");
	this.shape_2.setTransform(98.4,396.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fire
	this.fire_btn = new lib.fireBtn();
	this.fire_btn.parent = this;
	this.fire_btn.setTransform(267.9,546.1,1,1,0,0,0,31.8,18.8);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.fireBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fire_btn).wait(1));

	// jetZone1_mc
	this.chamber1_mc = new lib.jetzone();
	this.chamber1_mc.parent = this;
	this.chamber1_mc.setTransform(152.9,386.5,0.608,1);

	this.timeline.addTween(cjs.Tween.get(this.chamber1_mc).wait(1));

	// jetZone2_mc
	this.chamber2_mc = new lib.jetzone();
	this.chamber2_mc.parent = this;
	this.chamber2_mc.setTransform(195.9,386.5,0.658,1);

	this.timeline.addTween(cjs.Tween.get(this.chamber2_mc).wait(1));

	// jetZone3_mc
	this.chamber3_mc = new lib.jetzone();
	this.chamber3_mc.parent = this;
	this.chamber3_mc.setTransform(244.2,386.5,0.714,1);

	this.timeline.addTween(cjs.Tween.get(this.chamber3_mc).wait(1));

	// jetZone4_mc
	this.chamber4_mc = new lib.jetzone();
	this.chamber4_mc.parent = this;
	this.chamber4_mc.setTransform(303.7,386.5,0.739,1);

	this.timeline.addTween(cjs.Tween.get(this.chamber4_mc).wait(1));

	// jetZone5_mc
	this.chamber5_mc = new lib.jetzone();
	this.chamber5_mc.parent = this;
	this.chamber5_mc.setTransform(382.6,400,0.825,1,0,0,0,23.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber5_mc).wait(1));

	// jetZone6_mc
	this.chamber6_mc = new lib.jetzone();
	this.chamber6_mc.parent = this;
	this.chamber6_mc.setTransform(455.1,400,0.912,1,0,0,0,23.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber6_mc).wait(1));

	// jetZone7_mc
	this.chamber7_mc = new lib.jetzone();
	this.chamber7_mc.parent = this;
	this.chamber7_mc.setTransform(526.7,400,0.912,1,0,0,0,23.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber7_mc).wait(1));

	// jetZone8_mc
	this.chamber8_mc = new lib.jetzone();
	this.chamber8_mc.parent = this;
	this.chamber8_mc.setTransform(597.2,400,0.912,1,0,0,0,23.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber8_mc).wait(1));

	// jetZone9_mc
	this.chamber9_mc = new lib.jetzone();
	this.chamber9_mc.parent = this;
	this.chamber9_mc.setTransform(672.1,400,0.912,1,0,0,0,23.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber9_mc).wait(1));

	// jetZone10_mc
	this.chamber10_mc = new lib.jetzone();
	this.chamber10_mc.parent = this;
	this.chamber10_mc.setTransform(736.8,400,0.912,1,0,0,0,23.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.chamber10_mc).wait(1));

	// topScoreGradient
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AB5hjIhjAAIgvAAAh4BkIAmAAIDLAA");
	this.shape_3.setTransform(748.1,130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.016)","rgba(255,249,243,0.051)","rgba(253,234,211,0.141)","rgba(252,209,160,0.298)","rgba(249,176,90,0.498)","rgba(247,147,30,0.678)","rgba(244,116,32,0.757)","rgba(239,53,35,0.929)","#ED1C24"],[0,0.051,0.141,0.263,0.408,0.522,0.635,0.882,1],0.9,40.8,0.2,-79.2).s().p("AlnKuIICvYIBpjJIBjAAIhjAAIBji+IAAC+IAADJIABPbgAFnkqIjMAAgAEEnzg");
	this.shape_4.setTransform(724.2,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// gridBox
	this.grid_mc = new lib.grid();
	this.grid_mc.parent = this;
	this.grid_mc.setTransform(69.6,290,1.093,1.332,0,0,0,-0.3,142.6);

	this.timeline.addTween(cjs.Tween.get(this.grid_mc).wait(1));

	// flip_mc
	this.autoflip_btn = new lib.autoflip();
	this.autoflip_btn.parent = this;
	this.autoflip_btn.setTransform(582.2,537.9,1,1,0,0,0,65,10.5);
	new cjs.ButtonHelper(this.autoflip_btn, 0, 1, 2, false, new lib.autoflip(), 3);

	this.flip_btn = new lib.FLIP();
	this.flip_btn.parent = this;
	this.flip_btn.setTransform(385.2,537.9,1,1,0,0,0,65,10.5);
	new cjs.ButtonHelper(this.flip_btn, 0, 1, 2, false, new lib.FLIP(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flip_btn},{t:this.autoflip_btn}]}).wait(1));

	// walls
	this.walls_mc = new lib.enclosure();
	this.walls_mc.parent = this;
	this.walls_mc.setTransform(415,399,1,1,0,0,0,364,76.7);

	this.timeline.addTween(cjs.Tween.get(this.walls_mc).wait(1));

	// linac_mc
	this.linac_container_mc = new lib.linac_container();
	this.linac_container_mc.parent = this;
	this.linac_container_mc.setTransform(432.3,417.7,1,1,0,0,0,364,76.7);

	this.timeline.addTween(cjs.Tween.get(this.linac_container_mc).wait(1));

	// voltage_mc
	this.voltage_mc = new lib.voltage();
	this.voltage_mc.parent = this;
	this.voltage_mc.setTransform(39.5,399.5,1,1,0,0,0,11,42.5);

	this.timeline.addTween(cjs.Tween.get(this.voltage_mc).wait(1));

	// help_mc
	this.help_mc = new lib.helpPanel();
	this.help_mc.parent = this;
	this.help_mc.setTransform(395.8,542,1,1,0,0,0,369.2,48.2);
	this.help_mc.filters = [new cjs.ColorFilter(0.33, 0.33, 0.33, 1, 170.85, 170.85, 170.85, 0)];
	this.help_mc.cache(-3,-3,744,102);

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424.8,310.2,959,580.1);
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