(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "04_puzzle_vaca_atlas_",
        frames: [
            [0, 0, 230, 300],
            [232, 0, 115, 150],
            [349, 152, 115, 150],
            [232, 152, 115, 150],
            [349, 0, 115, 150]
        ]
    }];


    // symbols:



    (lib._04_puzzle_vaca = function() {
        this.spriteSheet = ss["04_puzzle_vaca_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._04_puzzle_vaca_p1 = function() {
        this.spriteSheet = ss["04_puzzle_vaca_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._04_puzzle_vaca_p2 = function() {
        this.spriteSheet = ss["04_puzzle_vaca_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib._04_puzzle_vaca_p3 = function() {
        this.spriteSheet = ss["04_puzzle_vaca_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib._04_puzzle_vaca_p4 = function() {
        this.spriteSheet = ss["04_puzzle_vaca_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
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


    (lib.welldone = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape.setTransform(60.4, 47.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(63.7, 87.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape_4.setTransform(60.4, 47.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFCC00").s().p("EgzfAG/MBTSgwEMATtAiHMhTSAwEg");
        this.shape_5.setTransform(-93.4, 115.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.Symbol5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("AgMBkIiCBLIA3iNIhwhkICWAJIA9iJIAmCRICWARIh/BQIAfCTg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-20, -19.5, 40, 39.1), null);


    (lib.Symbol2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("A3EY9MAAAgx5MAuJAAAMAAAAx5g");
        this.shape.setTransform(0, -0.6);
        this.shape._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({
            _off: false
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.pointer = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(102,255,0,0.008)").s().p("AhyB6QgJgIABgKQACgUAXgMIATgIIASgJQAOgIATgXIAcghQgHgOgMgFIgMgFQgHgEgDgEQgCgEgBgHQgBgJgCgDQgDgHgQgJQgQgJgBgJQgCgIAJgHQAJgGAJABQANACASATIAaAcQAOAOAGAIIAGAIIAUgXQAUgXAGgQIAEgLQADgHAEgDQAGgGAKACQAKADAFAIQAKAPgKAUQgGALgRARQgXAXgVAaIASAgQAIAPAHAHIAUAMQASAMADAMQADAIgDAJQgDAIgIADQgLADgQgLQgqgdgXgvIgRAYQgNATgIAJQgOANgQAEIgNABQgIACgFADQgDACgHAIQgFAIgFACIgGABQgGAAgGgFg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(-12.2, -12.7, 24.5, 25.5), null);


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmTBqQgKgCgJgGQgJgFgFgFQgEgHAAgGQAAgKAGgGQAHgHALAAIAHACIAJAEIAMAFIAKABQANAAAHgGQAHgGgBgIQAAgGgBgEQgCgFgEgDIgKgFIgQgHQgagJgNgNQgOgQAAgWQAAgOAFgMQAFgKAJgJQAVgRAeABQAZgBAOAIQAOAJAAAOQAAAKgFAGQgFAGgLgBQgFABgIgFQgDgDgFgBQgFgBgFAAQgLAAgFAFQgHAFAAAJQAAAOAcAKQAQAGALAGQAMAHAHAGQAGAHAEAJQAEAKAAAMQgBAQgFAMQgGAMgKAJQgLAJgNAFQgOAEgRAAQgNAAgLgCgAGOBiQgHgHAAgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgMAAgGgIgAALBkQgGgGgEgLIgFgTIhPAAIgGAUQgEALgFAFIgHAFQgDABgEAAQgLAAgHgHQgHgHgBgJIACgHIABgGIA4iQQAMgdAZAAQANgBAJAHQAJAHAEAOIA1CQIACAKIACAFQgBALgGAGQgHAFgKABQgJAAgGgGgAhFAWIA0ABIgahFgAjZBnQgLgBgHgGQgFgHgBgPIABiFIgdAAQgLAAgGgGQgGgFAAgLQAAgKAGgGQAGgGALABIBoAAQAKAAAGAFQAFAFACALQgBALgGAFQgGAFgLABIgcAAIABCFQgCAPgGAHQgGAHgJAAIgBAAgAEYBgQgGgHAAgPIAAiFIgdAAQgLgBgFgFQgHgFABgLQAAgLAGgEQAFgGAMAAIBngBQALABAGAFQAFAGABAKQAAALgHAFQgFAGgLgBIgcABIAACGQgBAOgGAHQgGAHgLAAQgKgBgHgGgABLBhQgGgIAAgPIAAidQAAgMAGgDQAFgFALABIApAAQAlAAAUARQAUARAAAeQAAAMgDALQgDAKgHAIQgFAHgHAFQgHAFgHACIAdAkIAHAJQADAGAAAIQgBAJgFAGQgGAGgJAAQgHAAgFgDQgGgCgFgHIgxhCIAAAyQgBAPgGAHQgGAHgLAAQgKgBgHgFgAB0gMIAQAAQAOAAAIgGQAHgGABgLQgBgLgHgHQgIgGgOAAIgQAAgAGPAkQgHgHAAgOIAAhcQABgPAGgHQAGgHALAAQAKAAAHAHQAGAGAAAQIAABbQAAAPgHAHQgGAHgLAAQgKAAgGgHg");
        this.shape.setTransform(58, 52.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(58.7, 82.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC3300").s().p("AEuC8QgKgDgFgJQgFgIADgKQACgLAJgFQAIgEALACQAKADAFAJQAFAIgCAKQgEAKgIAGQgGADgGAAIgHgBgACvCXQgJgDgFgIQgFgIAEgOIAMgrIghhlQgFgOAEgIQADgJAJgEQAKgEAIAEQAJAEAFAOIAYBQIA9g5QAMgKAJABQAJABAGAIQAGAIgBAJQgBAJgLAJIhQBIIgLArQgEAOgIAFQgFADgGAAIgHgBgAE+CBQgKgDgEgIQgEgIADgPIAYhXQAEgNAIgGQAHgEAKADQAKACAFAIQAEAHgEAPIgXBXQgEAOgIAFQgFAEgHAAIgGgBgAFMA4IAAABIABgCIAAgBIgBACgAA9B7QgIgCgFgGQgEgIgBgLIgBgUIhJgUIgMARQgGAKgGAEQgEACgDAAIgHgBQgLgCgFgIQgGgJADgIIACgIIAEgFIBYh5QAUgaAYAHQAMADAGAJQAHAJABAOIAOCXIAAAJIgBAGQgDAJgHAEQgFADgFAAIgIgCgAgHAUIAvANIgGhHgAh9BGIhIgTQgNgDgDgFQgEgGADgKIApiWQADgOAJgEQAHgGAKAEQAKACAFAIQAEAIgEAOIgiB/IAxAMQAKADAEAHQAEAHgCAKQgDAKgHAEQgEACgFAAIgIgBgAliAJQgKgDgFgHQgFgIAEgOIAoiWQAEgMAHgCQAGgCAKACIAkAKQAYAGAOANQAPANAEARQAFARgGAVQgIAfgXANQgWAMgmgKIgOgDIgJAkQgEANgIAEQgFAEgGAAIgGgBgAkxhYIAOAEQAPAEAKgFQAJgEAEgNQADgNgFgKQgGgJgPgEIgOgEg");
        this.shape_4.setTransform(61.1, 48.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4wAZoMAAAgzPMBxhAAAMAAAAzPg");
        this.shape_5.setTransform(310.3, 112.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.complete_puzzle = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_2
        this.instance = new lib._04_puzzle_vaca();
        this.instance.parent = this;
        this.instance.setTransform(0, 1);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AykYDMAAAgwFMAlJAAAMAAAAwFg");
        this.shape.setTransform(115.3, 151);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.complete_puzzle, new cjs.Rectangle(-3.6, -2.9, 237.9, 307.8), null);


    (lib.colision = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(102,255,0,0.008)").s().p("AkHEIIAAoPIIPAAIAAIPg");
        this.shape.setTransform(26.4, 26.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.colision, new cjs.Rectangle(0, 0, 52.8, 52.8), null);


    (lib.btn_menu = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.3, 9.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5, 9.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.3, 9.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(5, 9.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.5, 9.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.5, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 71, 19.3);


    (lib.borde = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ApSMCIAA4DISlAAIAAYDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.borde, new cjs.Rectangle(-59.5, -77, 119, 154), null);


    (lib.bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("Egq9AbYMAAAg2vMBV7AAAMAAAA2vg");
        this.shape.setTransform(0, 4.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-274.9, -170.5, 550, 350.4);


    (lib.bennissimo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DCDB00").s().p("AvQDcQgHgEgEgFIgGgMIhWi7QgHgRAEgLQAEgMAMgFQAMgGALAFQALAFAIARIA3B/IAdhrIAEgJIADgHQAEgFAFgDQAFgDAHgBIAGAAIAGACQAHABAEAEQAEAFAGALIAvBkIAfiHQAFgSAKgGQAKgHANADQANADAGALQAGAKgEATIg0DHIgFAMQgDAHgFAEQgGAFgLABQgIAAgGgDQgGgEgEgGQgFgGgCgFIgvhjIgeBqIgFAMQgEAHgGAFQgFAEgKABQgIAAgGgDgAquDAQgHgFgBgPIgTjUQgBgPAGgGQAGgFAQgBIB5gLQAOgBAIAGQAIAGACANQABAOgHAIQgHAIgOABIhaAIIAEAuIBSgHQAOgBAIAGQAIAHABAOQABANgGAIQgHAIgOABIhSAHIAEAyIBegIQAOgBAIAGQAIAGABANQABAOgHAIQgHAIgNABIh9ALIgIAAQgKAAgFgDgAnRCpQgJgIgCgUIgRi9QgBgTAIgJQAHgJANgCQAOgBAJAIQAIAIACATIAQCrIBAgGQAPgBAIAGQAIAGABANQABAOgHAIQgHAIgOABIhZAIIgHAAQgOAAgHgGgAkWCYQgKgIgBgTIgRi9QgCgTAIgKQAHgJAOgBQANgBAJAIQAJAIACATIAPCqIBBgFQAOgCAIAHQAIAGABANQACAOgHAIQgHAHgPACIhYAHIgIABQgNAAgHgHgAAECDQgHgEgBgPIgTjUQgBgPAHgGQAHgGANgBIAugEQAhgDAbAHQAaAHATARQAmAiAHA9QADAbgGAYQgHAXgQAUQgPATgbAMQgbALgmAEIgoADIgHABQgJAAgGgEgAA4hNIgRABIANCXIAPgBQAogDARgUQASgUgDgiQgEgogUgTQgSgQgfAAIgKABgAFDBpQgagHgVgSQgVgRgMgZQgMgXgDgeQgCgeAHgaQAIgZASgVQARgVAYgMQAYgMAdgCQAdgDAZAIQAYAHAWASQAVARANAYQAMAYACAeQADAfgIAYQgHAagSAVQgSAVgYALQgXAMgdACIgQABQgUAAgSgFgAFmhqQgRACgMAGQgNAHgJAMQgJALgEAPQgEAPACARQADAiAWAUQALAKAOAEQANAEARgBQAQgCANgGQAMgGAJgMQAJgMAFgOQADgOgBgSQgCgRgGgOQgHgOgLgKQgLgJgNgFQgLgDgLAAIgIAAgAIsBPQgJgIgBgTIgSjHQgBgNAHgIQAHgJAOgBQAKgBAIAEQAJAEAIAKIBnB9IgMhzQgCgTAIgJQAHgKAOgBQANgBAJAIQAJAIACATIARDGQACAOgHAIQgHAJgOABQgKABgJgFQgJgEgIgJIhmh6IAMBvQABATgHAKQgIAJgNACIgDAAQgMAAgIgHgAMqA8QgHgEgBgPIgTjUQgBgPAGgGQAGgGAQgBIB6gKQANgCAIAHQAIAGACANQABAOgHAIQgHAHgNACIhbAIIAEAvIBSgHQAOgBAIAGQAIAHABANQABAOgGAHQgHAIgOABIhSAIIAEAxIBegIQAOgBAIAFQAIAGABAOQACAOgIAHQgGAIgOABIh9ALIgIABQgKAAgFgEgAQHAoQgJgIgCgNQgBgPAIgIQAJgKAOgCQANAAAKAIQAKAIABANQABAOgIAJQgIALgOABIgDAAQgMAAgJgIgAQBgmQgIgIgCgTIgLh2QgBgTAHgKQAHgJAOgBQANgBAJAHQAJAJACATIALB2QABATgIAJQgHAKgNABIgFAAQgLAAgHgHg");
        this.shape.setTransform(-8.7, 5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bennissimo, new cjs.Rectangle(-117.1, -17.3, 216.9, 44.7), null);


    (lib.mc_over = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();
            estrella1.onEnterFrame = function() {
            this._rotation -= 5;
            };
            estrella2.onEnterFrame = function() {
            this._rotation -= 5;
            };
            estrella3.onEnterFrame = function() {
            this._rotation -= 5;
            };
            estrella4.onEnterFrame = function() {
            this._rotation -= 5;
            };
            */
            this.removeAllEventListeners();
            this.on("tick", onUpdate.bind(this));

            function onUpdate(e) {
                this.estrella1.rotation -= 5;
                this.estrella2.rotation -= 5;
                this.estrella3.rotation -= 5;
                this.estrella4.rotation -= 5;
            }
        }
        this.frame_147 = function() {
            this.stop();

            this.play_btn.removeAllEventListeners();

            this.play_btn.on("click", onAgain.bind(this));

            function onAgain(e) {
                this.parent.puzzle.onRestart();
                this.visible = false;
                playSound("sound_again");
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(147).call(this.frame_147).wait(45));

        // otra vez
        this.play_btn = new lib.welldone();
        this.play_btn.name = "play_btn";
        this.play_btn.parent = this;
        this.play_btn.setTransform(274.7, 4.7, 1, 1, 30, 0, 0, 59, 58.9);
        this.play_btn.alpha = 0;
        this.play_btn._off = true;
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.welldone(), 3);

        this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(131).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 16).wait(45));

        // muy bien
        this.instance = new lib.bennissimo();
        this.instance.parent = this;
        this.instance.setTransform(279.3, -112.6, 1.94, 1.94, 19, 0, 0, 0.1, -0.1);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({
            _off: false
        }, 0).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: 279.1,
            y: -112.3,
            alpha: 1
        }, 72).wait(97));

        // estrellas
        this.estrella4 = new lib.Symbol5();
        this.estrella4.name = "estrella4";
        this.estrella4.parent = this;
        this.estrella4.setTransform(381.2, -83.3, 0.645, 0.645, 90);

        this.estrella1 = new lib.Symbol5();
        this.estrella1.name = "estrella1";
        this.estrella1.parent = this;
        this.estrella1.setTransform(380.4, -151.3, 0.645, 0.645, 45);

        this.estrella3 = new lib.Symbol5();
        this.estrella3.name = "estrella3";
        this.estrella3.parent = this;
        this.estrella3.setTransform(165.6, -63.2, 0.645, 0.645, 60);

        this.estrella2 = new lib.Symbol5();
        this.estrella2.name = "estrella2";
        this.estrella2.parent = this;
        this.estrella2.setTransform(148.9, -121.6, 0.645, 0.645);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.estrella2
            }, {
                t: this.estrella3
            }, {
                t: this.estrella1
            }, {
                t: this.estrella4
            }]
        }).wait(192));

        // complete_puzzle
        this.joined_mc = new lib.complete_puzzle();
        this.joined_mc.name = "joined_mc";
        this.joined_mc.parent = this;
        this.joined_mc.setTransform(-81.7, -159.1, 0.856, 0.839);

        this.timeline.addTween(cjs.Tween.get(this.joined_mc).wait(192));

        // bg
        this.instance_1 = new lib.bg("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(113, -47.4, 1.118, 0.851);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-194.4, -192.5, 614.9, 298.1);


    (lib.Symbol6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* stop();*/
            this.stop();
        }
        this.frame_1 = function() {
            playSound("kl1");
        }
        this.frame_19 = function() {
            /* stop();*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(1));

        // Layer 2
        this.instance = new lib.complete_puzzle();
        this.instance.parent = this;
        this.instance.setTransform(53.8, 2.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.37,
            scaleY: 0.37,
            x: -57.2,
            y: 0.2
        }, 19).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(50.2, -0.7, 237.9, 307.9);


    (lib.piece4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_2
        this.pointer = new lib.pointer();
        this.pointer.name = "pointer";
        this.pointer.parent = this;
        this.pointer.setTransform(57.5, 75);

        this.timeline.addTween(cjs.Tween.get(this.pointer).wait(1));

        // Layer 3
        this.instance = new lib._04_puzzle_vaca_p4();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 4
        this.instance_1 = new lib.borde();
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.5, 77);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.piece4, new cjs.Rectangle(0, 0, 119, 154), null);


    (lib.piece3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_2
        this.pointer = new lib.pointer();
        this.pointer.name = "pointer";
        this.pointer.parent = this;
        this.pointer.setTransform(47.1, 81.9);

        this.timeline.addTween(cjs.Tween.get(this.pointer).wait(1));

        // Layer 2
        this.instance = new lib._04_puzzle_vaca_p3();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.instance_1 = new lib.borde();
        this.instance_1.parent = this;
        this.instance_1.setTransform(55.5, 77);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.piece3, new cjs.Rectangle(-4, 0, 119, 154), null);


    (lib.piece2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_2
        this.pointer = new lib.pointer();
        this.pointer.name = "pointer";
        this.pointer.parent = this;
        this.pointer.setTransform(57.5, 75);

        this.timeline.addTween(cjs.Tween.get(this.pointer).wait(1));

        // Layer 4
        this.instance = new lib._04_puzzle_vaca_p2();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 5
        this.instance_1 = new lib.borde();
        this.instance_1.parent = this;
        this.instance_1.setTransform(55.5, 73);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.piece2, new cjs.Rectangle(-4, -4, 119, 154), null);


    (lib.piece1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa_2
        this.pointer = new lib.pointer();
        this.pointer.name = "pointer";
        this.pointer.parent = this;
        this.pointer.setTransform(47.1, 81.9);

        this.timeline.addTween(cjs.Tween.get(this.pointer).wait(1));

        // Layer 4
        this.instance = new lib._04_puzzle_vaca_p1();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 5
        this.instance_1 = new lib.borde();
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.5, 73);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.piece1, new cjs.Rectangle(0, -4, 119, 154), null);


    (lib.container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.play_btn.on("click", onPlay.bind(this));

            var pieces = 4;
            var num_pieces = pieces;

            onRestart.bind(this)();

            // Funcion llamada de forma externa
            this.onRestart = onRestart.bind(this);


            function onPlay(e) {
                this.play_btn.visible = false;
                this.muestra.gotoAndPlay(1);
                this.falso.visible = false;
            }


            this.p1.on("mousedown", onMouseDown.bind(this));
            this.p1.on("pressmove", onMouseMove.bind(this));
            this.p1.on("pressup", onMouseUp.bind(this));
            this.p1.objective = this.c1;
            this.p1.assets = this.inv_p1;
            this.p1.originX = this.p1.x;
            this.p1.originY = this.p1.y;

            this.p2.on("mousedown", onMouseDown.bind(this));
            this.p2.on("pressmove", onMouseMove.bind(this));
            this.p2.on("pressup", onMouseUp.bind(this));
            this.p2.objective = this.c2;
            this.p2.assets = this.inv_p2;
            this.p2.originX = this.p2.x;
            this.p2.originY = this.p2.y;

            this.p3.on("mousedown", onMouseDown.bind(this));
            this.p3.on("pressmove", onMouseMove.bind(this));
            this.p3.on("pressup", onMouseUp.bind(this));
            this.p3.objective = this.c3;
            this.p3.assets = this.inv_p3;
            this.p3.originX = this.p3.x;
            this.p3.originY = this.p3.y;

            this.p4.on("mousedown", onMouseDown.bind(this));
            this.p4.on("pressmove", onMouseMove.bind(this));
            this.p4.on("pressup", onMouseUp.bind(this));
            this.p4.objective = this.c4;
            this.p4.assets = this.inv_p4;
            this.p4.originX = this.p4.x;
            this.p4.originY = this.p4.y;

            function onRestart() {
                num_pieces = pieces;
                for (var i = 1; i <= pieces; i++) {
                    this["p" + i].x = Math.random() * 180;
                    this["p" + i].y = Math.random() * 200;
                }

                this.p1.visible = true;
                this.p2.visible = true;
                this.p3.visible = true;
                this.p4.visible = true;

                this.inv_p1.visible = false;
                this.inv_p2.visible = false;
                this.inv_p3.visible = false;
                this.inv_p4.visible = false;
            }




            function onMouseDown(e) {

                var item = e.currentTarget;
                item.offset = {
                    x: 0,
                    y: 0
                };

                var pt = item.parent.globalToLocal(e.stageX, e.stageY);
                item.offset.x = pt.x - item.x;
                item.offset.y = pt.y - item.y;
                item.drag = true;

                item.parent.setChildIndex(item, item.parent.getNumChildren() - 1);
            }

            function onMouseMove(e) {
                var item = e.currentTarget;
                if (item.drag) {
                    var pt = item.parent.globalToLocal(e.stageX, e.stageY);
                    item.x = pt.x - item.offset.x;
                    item.y = pt.y - item.offset.y;
                }

            }

            function onMouseUp(e) {
                var item = e.currentTarget;
                var objective = item.objective;

                if (item.drag) {

                    var pt = item.localToLocal(item.pointer.x, item.pointer.y, objective);
                    if (objective.hitTest(pt.x, pt.y)) {
                        item.assets.visible = true;
                        item.visible = false;
                        num_pieces--;

                        playSound("snd_ok");


                        if (num_pieces == 0) {
                            this.parent.anim.gotoAndPlay(1);
                            this.parent.anim.visible = true;
                            playSound("jingle");
                        }
                    }
                    /*else 
                    {
                    	item.x = item.originX;
                    	item.y = item.originY;
                    }*/

                    item.drag = false;
                }
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // start
        this.play_btn = new lib.play_btn();
        this.play_btn.name = "play_btn";
        this.play_btn.parent = this;
        this.play_btn.setTransform(-280.5, 117.1, 1, 1, 0, 0, 0, 59, 59);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CB3200").s().p("AlyAAIC2h8IAAAtIIvAAIAACfIovAAIAAAtg");
        this.shape.setTransform(29.3, 163.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFCC00").s().p("AjSCeIi2h9QgLgIgFgMQgEgNAEgMQAFgMALgIIC2h9QAMgIAQABQAOACAKAMQAKALAAAPIAAAFIIHAAQARAAAMALIAAABQALAMAAAQIAACfQAAARgLAMQgMALgRAAIoHAAIAAAFQAAAPgKALQgKAMgPACIgFAAQgMAAgKgHg");
        this.shape_1.setTransform(29.2, 163.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.play_btn
            }]
        }).wait(1));

        // se va en alpha
        this.muestra = new lib.Symbol6();
        this.muestra.name = "muestra";
        this.muestra.parent = this;
        this.muestra.setTransform(-192.1, 167.8, 1, 1, 0, 0, 0, 119, 153.9);

        this.timeline.addTween(cjs.Tween.get(this.muestra).wait(1));

        // falso
        this.falso = new lib.Symbol2();
        this.falso.name = "falso";
        this.falso.parent = this;
        this.falso.setTransform(164.9, 163.9, 1.095, 1.058);
        new cjs.ButtonHelper(this.falso, 0, 1, 2, false, new lib.Symbol2(), 3);

        this.timeline.addTween(cjs.Tween.get(this.falso).wait(1));

        // piezas
        this.p1 = new lib.piece2();
        this.p1.name = "p1";
        this.p1.parent = this;
        this.p1.setTransform(33.6, 165.1);

        this.p3 = new lib.piece3();
        this.p3.name = "p3";
        this.p3.parent = this;
        this.p3.setTransform(173.1, -2.1);

        this.p4 = new lib.piece4();
        this.p4.name = "p4";
        this.p4.parent = this;
        this.p4.setTransform(166.3, 167.7);

        this.p2 = new lib.piece1();
        this.p2.name = "p2";
        this.p2.parent = this;
        this.p2.setTransform(19.6, 1.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.p2
            }, {
                t: this.p4
            }, {
                t: this.p3
            }, {
                t: this.p1
            }]
        }).wait(1));

        // inv_p1
        this.inv_p2 = new lib.piece1();
        this.inv_p2.name = "inv_p2";
        this.inv_p2.parent = this;
        this.inv_p2.setTransform(-142.9, 16.8);
        this.inv_p2.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.inv_p2).wait(1));

        // inv_p2
        this.inv_p1 = new lib.piece2();
        this.inv_p1.name = "inv_p1";
        this.inv_p1.parent = this;
        this.inv_p1.setTransform(-257.1, 17);
        this.inv_p1.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.inv_p1).wait(1));

        // inv_p3
        this.inv_p3 = new lib.piece3();
        this.inv_p3.name = "inv_p3";
        this.inv_p3.parent = this;
        this.inv_p3.setTransform(-257.5, 166.8);
        this.inv_p3.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.inv_p3).wait(1));

        // inv_p4
        this.inv_p4 = new lib.piece4();
        this.inv_p4.name = "inv_p4";
        this.inv_p4.parent = this;
        this.inv_p4.setTransform(-143.1, 166.6);
        this.inv_p4.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.inv_p4).wait(1));

        // colisiones
        this.c4 = new lib.colision();
        this.c4.name = "c4";
        this.c4.parent = this;
        this.c4.setTransform(-81, 253.5, 1, 1, 0, 0, 0, 26.4, 26.4);

        this.c3 = new lib.colision();
        this.c3.name = "c3";
        this.c3.parent = this;
        this.c3.setTransform(-201.7, 248.5, 1, 1, 0, 0, 0, 26.4, 26.4);

        this.c2 = new lib.colision();
        this.c2.name = "c2";
        this.c2.parent = this;
        this.c2.setTransform(-81, 97.5, 1, 1, 0, 0, 0, 26.4, 26.4);

        this.c1 = new lib.colision();
        this.c1.name = "c1";
        this.c1.parent = this;
        this.c1.setTransform(-201.7, 92.5, 1, 1, 0, 0, 0, 26.4, 26.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.c1
            }, {
                t: this.c2
            }, {
                t: this.c3
            }, {
                t: this.c4
            }]
        }).wait(1));

        // off_stage
        this.no_of_pieces = new cjs.Text("4", "18px 'Comic Sans MS'");
        this.no_of_pieces.name = "no_of_pieces";
        this.no_of_pieces.lineHeight = 27;
        this.no_of_pieces.lineWidth = 47;
        this.no_of_pieces.parent = this;
        this.no_of_pieces.setTransform(-509.5, 80);

        this.timeline.addTween(cjs.Tween.get(this.no_of_pieces).wait(1));

        // marco
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#000000").ss(1, 1, 1).p("AylAAMAlMAAA");
        this.shape_2.setTransform(-142.1, 167.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#000000").ss(1, 1, 1).p("AAA4DMAAAAwH");
        this.shape_3.setTransform(-142.1, 167.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#000000").ss(4, 1, 1).p("ASn4DMAAAAwHMglMAAAMAAAgwHg");
        this.shape_4.setTransform(-142.1, 167.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCCC").s().p("AymYDMAAAgwGMAlNAAAMAAAAwGg");
        this.shape_5.setTransform(-142.1, 167.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.container, new cjs.Rectangle(-511.5, -5.8, 838.2, 338), null);


    (lib.Symbol1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.anim.stop();
            this.anim.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // anim
        this.anim = new lib.mc_over();
        this.anim.name = "anim";
        this.anim.parent = this;
        this.anim.setTransform(3, -237.7, 1.164, 1.198, 0, 0, 0, 116.8, -239.5);

        this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

        // puzzle
        this.puzzle = new lib.container();
        this.puzzle.name = "puzzle";
        this.puzzle.parent = this;
        this.puzzle.setTransform(28.7, -156.6);

        this.timeline.addTween(cjs.Tween.get(this.puzzle).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-482.8, -181.4, 839.1, 357.2), null);


    // stage content:
    (lib._04puzzlevaca = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            createjs.Touch.enable(stage);

            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // marco
        this.shape = new cjs.Shape();
        // this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(360.8, 21);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.parent = this;
        this.menu_btn.setTransform(52.1, 26.5, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("AgqbeMAAAg27IBUAAMAAAA27g");
        this.shape_1.setTransform(4.3, 191.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#009999").s().p("AgpbdMAAAg25IBTAAMAAAA25g");
        this.shape_2.setTransform(725.8, 185.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg37gSKIABAAMAAAAnqIACAAIAAGPMBvqAAAIAAlsIACgfMAAAgnuIABAAIAAk9In6AAIAAAAMhgxAAAIAAAAInEAAIAAACIgBAAg");
        this.shape_3.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.menu_btn
            }, {
                t: this.shape
            }]
        }).wait(1));

        // Capa_1
        this.instance = new lib.Symbol1();
        this.instance.parent = this;
        this.instance.setTransform(302.6, 173.3, 1, 1, 0, 0, 0, -63.2, -16.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // fondo
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5Vg");
        this.shape_4.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(247.9, 183.5, 847.1, 367);
    // library properties:
    lib.properties = {
        id: 'FCB285BBA3AD4F49B1AE1BB4C236CDED',
        width: 730,
        height: 367,
        fps: 30,
        color: "#333333",
        opacity: 1.00,
        manifest: [{
                src: "images/04_puzzle_vaca_atlas_.png",
                id: "04_puzzle_vaca_atlas_"
            },
            {
                src: "sarasa/sound_again.mp3",
                id: "sound_again"
            },
            {
                src: "sarasa/kl1.mp3",
                id: "kl1"
            },
            {
                src: "sarasa/snd_fault.mp3",
                id: "snd_fault"
            },
            {
                src: "sarasa/snd_ok.mp3",
                id: "snd_ok"
            },
            {
                src: "sarasa/jingle.mp3",
                id: "jingle"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['FCB285BBA3AD4F49B1AE1BB4C236CDED'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;