
$(function()
{
	//-------------------------------OBJECTS--------------------------------------//
	var ColorScheme = {
		One: 'rgb(24, 138, 112)',
		Two: 'rgb(141, 229, 150)',
		Three: 'rgb(255, 248, 175)',
		Four:'rgb(75, 173, 126)',
		Five:'rgb(208, 245, 169)',
		Black:'rgb(0, 0, 0)',
		White:'rgb(255, 255, 255)',
		TextColor: '#484238'
	};

	var playing=false, started=false;
	var dragged=0;
	var interval = undefined;
	var assets = {images:[]};
	var scene = {layers: {}, MainScreenLayer:null, UI: {components:{}}, components:[], animations:[], height:550, width:1024, stage:undefined, timeline:{duration: 180000, startTime: undefined, currentTime:undefined, pauseTime:0, pauseTimeStart:0, pauseTimeEnd:0, currentScene:undefined, frameRate:30, waiting:false}};
	var MusicNote = document.getElementById('music');
	MusicNote.volume = 0.1;
	//------------------------------MAIN FUNCTIONS------------------------------//
	
	function preloadImages(arr)
	{
		var loadedImages=0, dir="./Images/";
		var arr = (typeof arr!="object")?[arr]:arr;
		for(var i=0; i<arr.length; i++)
		{
			try
			{
				assets.images[i]=new Image();
				assets.images[i].src = dir+arr[i];
				assets.images[i].onload = function()
				{
					loadedImages++;
					if(loadedImages==arr.length)
					{
						iniScene();
					}
				}
				assets.images[i].onerror = function()
				{
					trace("Error loading image: "+arr[i]);
				}
			}
			catch(ex)
			{
				trace("Image Loading Error: "+ex);
			}
		}
	}
	
	function iniScene()
	{
		scene.stage = new Kinetic.Stage(
		{
			container: 'container',
			width: scene.width,
			height:scene.height
		});
		
		var UILayer = new Kinetic.Layer();
		var UIGroup = new Kinetic.Group();
		var UIComponents = createUIComponents(scene.width, scene.height);
		scene.MainScreenLayer = new Kinetic.Layer();
		
		UIGroup.add(UIComponents.bg);
		UIGroup.add(UIComponents.bar);
		UIGroup.add(UIComponents.playPauseButton);
		UIGroup.add(UIComponents.sceneForwardButton);
		UIGroup.add(UIComponents.sceneBackwardButton);
		UIGroup.add(UIComponents.pauseButton);
		UIGroup.add(UIComponents.volumeBar);
		UIGroup.add(UIComponents.timeField);
		scene.UI.components = UIComponents;
		
		UIGroup.setY(540);
		UILayer.add(UIGroup);
		UIComponents.pauseButton.setVisible(false);		
		
		var scene0Components = createScene0Components(scene.width, scene.height);
		scene.components.push(scene0Components);
		var scene0Animations = createScene0Animations();
		scene.animations.push(scene0Animations);
		
		var scene1Components = createScene1Components();
		scene.components.push(scene1Components);
		var scene1Animations = createScene1Animations();
		scene.animations.push(scene1Animations);
		
		var scene2Components = createScene2Components();
		scene.components.push(scene2Components);
		var scene2Animations = createScene2Animations();
		scene.animations.push(scene2Animations);

		var scene3Components = createScene3Components();
		scene.components.push(scene3Components);
		var scene3Animations = createScene3Animations();
		scene.animations.push(scene3Animations);
		
		var scene4Components = createScene4Components();
		scene.components.push(scene4Components);
		var scene4Animations = createScene4Animations();
		scene.animations.push(scene4Animations);
		
		var scene5Components = createScene5Components();
		scene.components.push(scene5Components);
		var scene5Animations = createScene5Animations();
		scene.animations.push(scene5Animations);
		
		var scene6Components = createScene6Components();
		scene.components.push(scene6Components);
		var scene6Animations = createScene6Animations();
		scene.animations.push(scene6Animations);
		
		var scene7Components = createScene7Components();
		scene.components.push(scene7Components);
		var scene7Animations = createScene7Animations();
		scene.animations.push(scene7Animations);
		
		var scene8Components = createScene8Components();
		scene.components.push(scene8Components);
		var scene8Animations = createScene8Animations();
		scene.animations.push(scene8Animations);
		
		var scene9Components = createScene9Components();
		scene.components.push(scene9Components);
		var scene9Animations = createScene9Animations();
		scene.animations.push(scene9Animations);
		
		var scene10Components = createScene10Components();
		scene.components.push(scene10Components);
		var scene10Animations = createScene10Animations();
		scene.animations.push(scene10Animations);
		
		var scene11Components = createScene11Components();
		scene.components.push(scene11Components);
		var scene11Animations = createScene11Animations();
		scene.animations.push(scene11Animations);
		
		for(var i=0; i<4; i++)
		{
			scene.animations.push(undefined);
			scene.components.push(undefined);
		}
		/*var scene12Components = createScene12Components();
		scene.components.push(scene12Components);
		var scene12Animations = createScene12Animations();
		scene.animations.push(scene12Animations);
		
		var scene13Components = createScene13Components();
		scene.components.push(scene13Components);
		var scene13Animations = createScene13Animations();
		scene.animations.push(scene13Animations);
		
		var scene14Components = createScene14Components();
		scene.components.push(scene14Components);
		var scene14Animations = createScene14Animations();
		scene.animations.push(scene14Animations);
		
		var scene15Components = createScene15Components();
		scene.components.push(scene15Components);
		var scene15Animations = createScene15Animations();
		scene.animations.push(scene15Animations);*/
		
		var scene16Components = createScene16Components();
		scene.components.push(scene16Components);
		var scene16Animations = createScene16Animations();
		scene.animations.push(scene16Animations);
		
		var scene17Components = createScene17Components();
		scene.components.push(scene17Components);
		var scene17Animations = createScene17Animations();
		scene.animations.push(scene17Animations);
		
		var scene18Components = createScene18Components();
		scene.components.push(scene18Components);
		var scene18Animations = createScene18Animations();
		scene.animations.push(scene18Animations);
		
		var scene19Components = createScene19Components();
		scene.components.push(scene19Components);
		var scene19Animations = createScene19Animations();
		scene.animations.push(scene19Animations);
		
		var scene20Components = createScene20Components();
		scene.components.push(scene20Components);
		var scene20Animations = createScene20Animations();
		scene.animations.push(scene20Animations);
		
		scene.stage.add(UILayer);
		scene.stage.add(scene.MainScreenLayer);
		
		BindRolloverEvents({sceneForwardButton:UIComponents.sceneForwardButton, sceneBackwardButton:UIComponents.sceneBackwardButton, playPauseButton:UIComponents.playPauseButton});
		BindClickEvents({playPauseButton:UIComponents.playPauseButton, pauseButton:UIComponents.pauseButton});
	}
	
	//-------------------------------------------USER INTERFACE------------------------------//
	function createUIComponents(canvasW, canvasH)
	{				
		var bg = new Kinetic.Rect({
			x: 0,
			y:0,
			width: canvasH,
			height: canvasW,
			fill: ColorScheme.Three
		});
		
		var playPauseButton = new Kinetic.Polygon({
			points: [0, 0, 0, 40, 30, 20],
			fill: ColorScheme.Two,
			stroke: ColorScheme.One
		});
		
		var sceneForwardButton1 = new Kinetic.Polygon({
			points: [0, 0, 0, 30, 15, 15],
			fill: ColorScheme.Two
		});
		var sceneForwardButton2 = sceneForwardButton1.clone();
		
		var bar = new Kinetic.Line({
			points: [0, 0, canvasW-100, 0],
			stroke: ColorScheme.One,
			strokeWidth: 12,
			lineCap: 'round',
			lineJoin: 'round'
		});
		
		var pauseButton= new Kinetic.Group();
		
		var line1 = new Kinetic.Rect({
			fill:ColorScheme.Two,
			stroke: ColorScheme.One,
			width: 8,
			height: 40
		});
		
		var line2 = line1.clone();
		line2.move(15, 0);
		
		pauseButton.add(line1);
		pauseButton.add(line2);
		
		pauseButton.move((canvasW/2)-15, -50);
		playPauseButton.move((canvasW/2)-15, -50);
		
		sceneForwardButton1.move(0, 0);
		sceneForwardButton2.move(15, 0);
		
		bar.move(50, -75);
		
		var sceneForwardButton = new Kinetic.Group();
		sceneForwardButton.add(sceneForwardButton1);
		sceneForwardButton.add(sceneForwardButton2);
		
		var sceneBackwardButton = sceneForwardButton.clone();
		sceneForwardButton.move(scene.width/2 +100, -50);
		sceneBackwardButton.setScale(-1, 1);
		sceneBackwardButton.move(scene.width/2-100, -50);
		
		var volumeBar = new Kinetic.Group();
		var volumeLine = new Kinetic.Line({
			points: [0, 0, 100, 0],
			stroke: ColorScheme.One,
			strokeWidth: 6,
			lineCap: 'round',
			lineJoin: 'round'
		});
		
		var volumeSlider= new Kinetic.Circle({
			radius: 5,
			fill: ColorScheme.Two
		});
		
		volumeBar.add(volumeLine);
		volumeBar.add(volumeSlider);
		
		volumeBar.move(100, -30);
		
		var timeField = new Kinetic.Text({
			text: '0:00/'+millisecondsToTime(scene.timeline.duration),
			fontSize: 15,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor
		});
		
		timeField.move(scene.width-100, -50);
		timeField.setOffset({
			x: timeField.getWidth()/2
		});
		return {bg:bg, playPauseButton:playPauseButton, sceneBackwardButton:sceneBackwardButton, sceneForwardButton:sceneForwardButton, bar: bar, pauseButton:pauseButton, timeField:timeField, volumeBar:volumeBar};
	}
	
	function BindRolloverEvents(obj)
	{
		function bindP(p)
		{
			p.on('mouseover', function()
			{
				p.setFill(ColorScheme.Four);
				p.getLayer().draw();
				document.body.style.cursor = 'pointer';
			});
			
			p.on('mouseout', function()
			{
				p.setFill(ColorScheme.Two);
				p.getLayer().draw();
				document.body.style.cursor = 'default';
			});
		}
		
		function bindG(g)
		{
			var arr = g.getChildren();
			for(var i=0; i<arr.length; i++)
			{
				bindGC(arr[i], g);
			}
			
			function bindGC(p, gr)
			{
				var a=gr.getChildren();
				
				p.on('mouseover', function()
				{
					for(var j=0; j<a.length;j++)
					{
						a[j].setFill(ColorScheme.Four);
						a[j].getLayer().draw();
						document.body.style.cursor = 'pointer';
					}
				});
				
				p.on('mouseout', function()
				{
					for(var j=0; j<a.length;j++)
					{
						a[j].setFill(ColorScheme.Two);
						a[j].getLayer().draw();
						document.body.style.cursor = 'default';
					}
				});
			}
		}
		
		for(var key in obj)
		{
			if(obj.hasOwnProperty(key))
			{
				if(key=="playPauseButton")
				{
					bindP(obj[key]);
				}
				else if(key=="sceneForwardButton")
				{
					bindG(obj[key]);
				}
				else if(key=="sceneBackwardButton")
				{
					bindG(obj[key]);
				}
			}
		}
	}
	
	//-----------------------------------------------------SCENES---------------------------------------------------//
	//-------------------------------------------------Components and Animations------------------------------------//
	
	function createScene0Components(canvasW, canvasH)
	{		
		var txt = new Kinetic.Group();
		var txt1 = new Kinetic.Text({
			x: 0,
			y: 0,
			text: 'I may copy it, right?',
			fontSize: 30,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene0Components'
		});
		
		txt1.setOffset({
			x: txt1.getWidth()/2
		});
		
		var txt2 = new Kinetic.Text({
			x: 0,
			y: 100,
			text: 'An interactive guide to copyright',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene0Components'
		});
		
		txt2.setOffset({
			x: txt2.getWidth()/2
		});
		
		txt1.setX(scene.width/2);
		txt2.setVisible(false);
		txt.add(txt1);
		txt.add(txt2);
		
		txt.move(0, canvasH/2);
		
		var img = new Kinetic.Image({
			image: assets.images[0],
			scale : {x:0.5, y:0.5},
			name:'scene0Components'
		});
		img.move((scene.width/2)-(img.getWidth()/4), 50);
		return {txt:txt, img:img};
	}
	
	function createScene0Animations()
	{
		var startTime = 0, endTime= 6000, duration=endTime-startTime;
		var transitionFlag=false;
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			//var txt = scene.components[0].txt;
			var txts = scene.components[0].txt.getChildren();
			var img = scene.components[0].img;
			
			for(var key in txts)
			{
				txts[key].setOpacity(time/duration);
			}
			img.setOpacity(time/duration);
			if(time/duration>0.25)
			{
				if(!transitionFlag)
				{
					txts[1].setVisible(true);
					txts[1].transitionTo({
						x:scene.width/2,
						duration: 1,
						easing: 'elastic-ease-in-out'
					});
					transitionFlag=true;
				}
			}
		});
		return {anim: anim, startTime:startTime, endTime:endTime};
	}
	function createScene1Animations()
	{
		var startTime = 6000, endTime= 18000, duration=endTime-startTime;
		var flags=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.9)
			{
				if(flags[6]==undefined)
				{
					scene.components[1].img4.setVisible(true);
					scene.components[1].img4.transitionTo({x:(scene.width)-170, y:scene.height/2, duration: 1, easing: 'elastic-ease-in-out'});
					flags[6]=true;
				}
			}
			else if(time/duration>0.8)
			{
				if(flags[5]==undefined)
				{
					scene.components[1].img3.setVisible(true);
					scene.components[1].img3.transitionTo({x:(scene.width/2)+70, y:(scene.height/2)+40, duration: 1, easing: 'elastic-ease-in-out'});
					flags[5]=true;
				}
			}
			else if(time/duration>0.7)
			{
				if(flags[4]==undefined)
				{
					scene.components[1].img2.setVisible(true);
					scene.components[1].img2.transitionTo({x:(scene.width/2)-200, y:scene.height/2, duration: 1, easing: 'elastic-ease-in-out'});
					flags[4]=true;
				}
			}
			/*img2.move((scene.width/2)-200, scene.height/2);
				img3.move((scene.width/2)+70, scene.height/2);
				img4.move((scene.width)-170, scene.height/2);*/
			else if(time/duration>0.6)
			{
				if(flags[3]==undefined)
				{
					scene.components[1].img1.setVisible(true);
					scene.components[1].img1.transitionTo({x:50, y:scene.height/2, duration: 1, easing: 'elastic-ease-in-out'});
					flags[3]=true;
				}
			}
			else if(time/duration>0.5)
			{
				if(flags[2]==undefined)
				{
					scene.components[1].txt3.setVisible(true);
					scene.components[1].txt3.transitionTo({x:scene.width/2, y:130, duration: 1, easing: 'elastic-ease-in-out'});
					flags[2]=true;
				}
			}
			else if(time/duration>0.33)
			{
				if(flags[1]==undefined)
				{
					scene.components[1].txt2.setVisible(true);
					scene.components[1].txt2.transitionTo({x:scene.width/2, y:80, duration: 1, easing: 'elastic-ease-in-out'});
					flags[1]=true;
				}
			}
			else if(time/duration>0.17)
			{
				if(flags[0]==undefined)
				{
					scene.components[1].txt1.setVisible(true);
					scene.components[1].txt1.transitionTo({x:scene.width/2, y:30, duration: 1, easing: 'elastic-ease-in-out'});
					flags[0]=true;
				}
			}
		/*				txt1.move(scene.width/2, 30);
		txt2.move(scene.width/2, 80);
		txt3.move(scene.width/2, 130);*/
			//scene.components[1].txt1.show();
		});
		
		var circleAnim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.5)
			{
				scene.components[1].circle.setX(time/10);
			}
		});
		
		scene.components[1].rectangle.setDraggable(true);
		return {anim:anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene1Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'So what is copyright?',
			fontSize: 25,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene1Components',
			visible: true
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Exclusive rights given to an author of an original work',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene1Components',
			visible: true
		});
		
		var txt3 = new Kinetic.Text({
			text: 'Original Works included in the copyright are: ',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene1Components',
			visible: true
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[1],
			scale : {x:0.5, y:0.5},
			name:'scene1Components'
		});
		
		var img2 = new Kinetic.Image({
			image: assets.images[2],
			scale : {x:0.5, y:0.5},
			name:'scene1Components'
		});
		
		var img3 = new Kinetic.Image({
			image: assets.images[3],
			scale : {x:0.25, y:0.25},
			name:'scene1Components'
		});
		
		var img4 = new Kinetic.Image({
			image: assets.images[4],
			scale : {x:0.5, y:0.5},
			name:'scene1Components'
		});
		
		//img1.move(50, scene.height/2);
		/*img2.move((scene.width/2)-200, scene.height/2);
		img3.move((scene.width/2)+70, scene.height/2);
		img4.move((scene.width)-170, scene.height/2);*/
		
		setVisible([img1, img2, img3, img4], false);
		setVisible([txt1, txt2, txt3], false);
		
		centreText([txt1, txt2, txt3]);
		/*txt1.move(scene.width/2, 30);
		txt2.move(scene.width/2, 80);
		txt3.move(scene.width/2, 130);*/
		
		var rectangle = new Kinetic.Rect({
			width: 100,
			height: 100,
			fill: ColorScheme.One,
			stroke: ColorScheme.Black,
			strokeWidth: 5,
			draggable: false,
			name:'scene1Components',
			dragBoundFunc: function(pos){
				return boundsFunction(pos, this, {x1:0, y1:0, x2:scene.width-this.getWidth(), y2:scene.height-this.getHeight()-75}, {x1: 100, y1: 100, x2: 200, y2: 200});
			},
			visible: false
		});
		
		var circle = new Kinetic.Circle({
			radius: 70,
			fill:ColorScheme.Four,
			x: 400,
			y: 300,
			stroke: ColorScheme.Two,
			name:'scene1Components',
			visible: false
		});

		return {img1: img1, img2: img2, img3: img3, img4: img4, txt2: txt2, txt3: txt3, txt1: txt1, rectangle:rectangle, circle:circle};
	}
	
	function createScene2Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Through Copyright, the creator has exclusive rights to -',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene2Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Reproduce the work in any manner',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene2Components',
		});
		var txt3 = new Kinetic.Text({
			text: 'Publish the work',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene2Components',
		});
		var txt4 = new Kinetic.Text({
			text: 'Make an adaptation of the work',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene2Components',
		});
		
		centreText([txt1, txt2, txt3, txt4]);
		/*txt1.move((scene.width/2), (scene.height/2)-200);
		txt2.move((scene.width/2), (scene.height/2)-150);
		txt3.move((scene.width/2), (scene.height/2)-100);
		txt4.move((scene.width/2), (scene.height/2)-50);*/
		
		setVisible([txt1, txt2, txt3, txt4], false);
		return {txt1: txt1, txt2: txt2, txt3: txt3, txt4: txt4};
	}
	
	function createScene2Animations()
	{
		var startTime = 18000;
		var endTime= 28000;
		var duration=endTime-startTime;
		
		var flag=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.6)
			{
				if(flag[3]==undefined)
				{
					scene.components[2].txt4.setVisible(true);
					scene.components[2].txt4.transitionTo({x:scene.width/2, y:(scene.height/2)-50, duration: 1, easing: 'elastic-ease-in-out'});
					//scene.components[1].img1.transitionTo({x:50, y:scene.height/2, duration: 1, easing: 'elastic-ease-in-out'});
					flag[3]=true;
				}
			}
			else if(time/duration>0.5)
			{
				if(flag[2]==undefined)
				{
					scene.components[2].txt3.setVisible(true);
					scene.components[2].txt3.transitionTo({x:scene.width/2, y:(scene.height/2)-100, duration: 1, easing: 'elastic-ease-in-out'});
					flag[2]=true;
				}
			}
			else if(time/duration>0.33)
			{
				if(flag[1]==undefined)
				{
					scene.components[2].txt2.setVisible(true);
					scene.components[2].txt2.transitionTo({x:scene.width/2, y:(scene.height/2)-150, duration: 1, easing: 'elastic-ease-in-out'});
					flag[1]=true;
				}
			}
			else if(time/duration>0.17)
			{
				if(flag[0]==undefined)
				{
					//scene.components[1].txt1.transitionTo();
					scene.components[2].txt1.setVisible(true);
					scene.components[2].txt1.transitionTo({x:scene.width/2, y:(scene.height/2)-200, duration: 1, easing: 'elastic-ease-in-out'});
					flag[0]=true;
				}
			}
			
			/*
					txt1.move((scene.width/2), (scene.height/2)-200);
		txt2.move((scene.width/2), (scene.height/2)-150);
		txt3.move((scene.width/2), (scene.height/2)-100);
		txt4.move((scene.width/2), (scene.height/2)-50);
			*/
		});
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene3Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'How to get copyright enabled on your creations?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		var txt2 = new Kinetic.Text({
			text: 'Copyright is an automatic right, you do not need to register',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'How long does it last?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		
		var txt4 = new Kinetic.Text({
			text: '50 years',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		
		var txt5 = new Kinetic.Text({
			text: 'from the first date published or made public',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		
		var txt6 = new Kinetic.Text({
			text: 'or from the end of the death of the author',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene3Components',
		});
		
		setVisible([txt1, txt2, txt3, txt4, txt5, txt6], false);
		centreText([txt1, txt2, txt3, txt4, txt5, txt6]);
		
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.width/2, 150);
		txt4.move(scene.width/2, 200);
		txt5.move(scene.width/2, 250);*/
		
		return {txt1:txt1, txt2:txt2, txt3:txt3, txt4:txt4, txt5:txt5, txt6:txt6};
	}
	
	function createScene3Animations()
	{
		var startTime = 28000, endTime= 42000, duration=endTime-startTime;
		
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.85)
			{
				if(fla[5]==undefined)
				{
					scene.components[3].txt6.setVisible(true);
					scene.components[3].txt6.transitionTo({x:scene.width/2, y:300, duration: 1, easing: 'elastic-ease-in-out'});
					fla[5]=true;
				}
			}
			
			else if(time/duration>0.7)
			{
				if(fla[4]==undefined)
				{
					scene.components[3].txt5.setVisible(true);
					scene.components[3].txt5.transitionTo({x:scene.width/2, y:250, duration: 1, easing: 'elastic-ease-in-out'});
					fla[4]=true;
				}
			}
			else if(time/duration>0.55)
			{
				if(fla[3]==undefined)
				{
					scene.components[3].txt4.setVisible(true);
					scene.components[3].txt4.transitionTo({x:scene.width/2, y:200, duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
			else if(time/duration>0.4)
			{
				if(fla[2]==undefined)
				{
					scene.components[3].txt3.setVisible(true);
					scene.components[3].txt3.transitionTo({x:scene.width/2, y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[1]==undefined)
				{
					scene.components[3].txt2.setVisible(true);
					scene.components[3].txt2.transitionTo({x:scene.width/2, y:100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[3].txt1.setVisible(true);
					scene.components[3].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.width/2, 150);
		txt4.move(scene.width/2, 200);
		txt5.move(scene.width/2, 250);*/
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene4Components()
	{	
		var txt1 = new Kinetic.Text({
			text: 'You cannnot simply',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene4Components',
		});
		var txt2 = new Kinetic.Text({
			text: 'reuse the material found on the web',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene4Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'unless',
			fontSize: 30,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene4Components',
		});
		
		var txt4 = new Kinetic.Text({
			text: 'it is in public domain or licensed under specific creative common licenses',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene4Components',
		});
		
		var txt5 = new Kinetic.Text({
			text: 'Wondering what creative common licenses and public domain means?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene4Components',
		});
		centreText([txt1, txt2, txt3, txt4, txt5]);
		setVisible([txt1, txt2, txt3, txt4, txt5], false);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.width/2, 150);
		txt4.move(scene.width/2, 200);
		txt5.move(scene.width/2, 250);*/
		
		return {txt1:txt1, txt2:txt2, txt3:txt3, txt4:txt4, txt5:txt5};
	}
	
	
	function createScene4Animations()
	{
		var startTime = 42000, endTime= 52000, duration=endTime-startTime;
		
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.9)
			{
				if(fla[4]==undefined)
				{
					scene.components[4].txt5.setVisible(true);
					scene.components[4].txt5.transitionTo({x:scene.width/2, y:250, duration: 1, easing: 'elastic-ease-in-out'});
					fla[4]=true;
				}
			}
			else if(time/duration>0.7)
			{
				if(fla[3]==undefined)
				{
					scene.components[4].txt4.setVisible(true);
					scene.components[4].txt4.transitionTo({x:scene.width/2, y:200, duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
			else if(time/duration>0.5)
			{
				if(fla[2]==undefined)
				{
					scene.components[4].txt3.setVisible(true);
					scene.components[4].txt3.transitionTo({x:scene.width/2, y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.3)
			{
				if(fla[1]==undefined)
				{
					scene.components[4].txt2.setVisible(true);
					scene.components[4].txt2.transitionTo({x:scene.width/2, y:100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[4].txt1.setVisible(true);
					scene.components[4].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.width/2, 150);
		txt4.move(scene.width/2, 200);
		txt5.move(scene.width/2, 250);*/
		return { anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene5Components()
	{
		/*var img1 = new Kinetic.Image({
			image: assets.images[11],
			scale : {x:0.6, y:0.6},
			name:'scene6Components'
		});*/
		
		var txt1 = new Kinetic.Text({
			text: 'Creative Common License',
			fontSize: 35,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene5Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'These allow the creators to manage copyright permissions on their works.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene5Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'Creators have the ability to choose the kind of protections and freedoms that will govern the use of their work.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene5Components',
		});
		
		var txt4 = new Kinetic.Text({
			text: 'This is done by creating different kinds of licenses.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene5Components',
		});
		
		setVisible([txt1, txt2, txt3, txt4], false);
		centreText([txt1, txt2, txt3, txt4]);
		
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.swidth/2, 150);*/
		
		return {txt1:txt1, txt2:txt2, txt3:txt3, txt4:txt4};
	}
	
	function createScene5Animations()
	{
		var startTime = 52000, endTime= 68000, duration=endTime-startTime;
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.8)
			{
				if(fla[3]==undefined)
				{
					scene.components[5].txt4.setVisible(true);
					scene.components[5].txt4.transitionTo({x:scene.width/2, y:200, duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
			else if(time/duration>0.55)
			{
				if(fla[2]==undefined)
				{
					scene.components[5].txt3.setVisible(true);
					scene.components[5].txt3.transitionTo({x:scene.width/2, y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.3)
			{
				if(fla[1]==undefined)
				{
					scene.components[5].txt2.setVisible(true);
					scene.components[5].txt2.transitionTo({x:scene.width/2, y:100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[5].txt1.setVisible(true);
					scene.components[5].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		/*
		img1.move(50, scene.height/2);
		img2.move((scene.width/2)-200, scene.height/2);
		img3.move((scene.width/2)+70, scene.height/2);
		img4.move((scene.width)-170, scene.height/2);
		
		setVisible([img1, img2, img3, img4], false);
		centreText([txt1, txt2, txt3]);
		
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.swidth/2, 150);
		*/
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene6Components()
	{
		var img1 = new Kinetic.Image({
			image: assets.images[10],
			scale : {x:0.6, y:0.6},
			name:'scene6Components'
		});
		
		var img2 = new Kinetic.Image({
			image: assets.images[11],
			scale : {x:0.6, y:0.6},
			name:'scene6Components'
		});
		
		var img3 = new Kinetic.Image({
			image: assets.images[12],
			scale : {x:0.6, y:0.6},
			name:'scene6Components'
		});
		
		var txt1 = new Kinetic.Text({
			text: 'Combine several of these terms to create custom licences',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene6Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'These are examples of creative common licenses',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene6Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'Look at the Creative Commons licenses when using online sources to avoid copyright infringment',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene6Components',
		});
		var txt4 = new Kinetic.Text({
			text: 'As an excercise, think about the Creative Commons License used for this guide.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene6Components',
		});
		
		setVisible([txt1, txt2, txt3, txt4], false);
		centreText([txt1, txt2, txt3, txt4]);
		
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 100);
		txt3.move(scene.swidth/2, 150);*/
		
		setVisible([img1, img2, img3], false);
		/*img1.move(50, scene.height/2);
		img2.move((scene.width/2)-200, scene.height/2);
		img3.move((scene.width/2)+70, scene.height/2);*/

		return {img1:img1, img2:img2, img3:img3, txt1:txt1, txt2:txt2, txt3:txt3, txt4:txt4};
	}
	
	function createScene6Animations()
	{
		var startTime = 124000, endTime= 140000, duration=endTime-startTime;
		
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.8)
			{
				if(fla[6]==undefined)
				{
					scene.components[6].txt4.setVisible(true);
					scene.components[6].txt4.transitionTo({x:(scene.width/2), y:(scene.height/2)+150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[6]=true;
				}
			}
			else if(time/duration>0.7)
			{
				if(fla[5]==undefined)
				{
					scene.components[6].txt3.setVisible(true);
					scene.components[6].txt3.transitionTo({x:(scene.width/2), y:(scene.height/2)+100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[5]=true;
				}
			}
			else if(time/duration>0.5)
			{
				if(fla[4]==undefined)
				{
					scene.components[6].txt2.setVisible(true);
					scene.components[6].txt2.transitionTo({x:(scene.width/2), y:(scene.height/2)+50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[4]=true;
				}
			}
			
			else if(time/duration>0.4)
			{
				if(fla[3]==undefined)
				{
					scene.components[6].img3.setVisible(true);
					scene.components[6].img3.transitionTo({x:550, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
			else if(time/duration>0.3)
			{
				if(fla[2]==undefined)
				{
					scene.components[6].img2.setVisible(true);
					scene.components[6].img2.transitionTo({x:300, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[1]==undefined)
				{					
					scene.components[6].img1.setVisible(true);
					scene.components[6].img1.transitionTo({x:50, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[6].txt1.setVisible(true);
					scene.components[6].txt1.transitionTo({x:(scene.width/2), y:(scene.height/2), duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		/*img1.move(50, scene.height/2);
		img2.move((scene.width/2)-200, scene.height/2);
		img3.move((scene.width/2)+70, scene.height/2);*/
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene7Components()
	{
		var f = 0.4;
		var txt1 = new Kinetic.Text({
			text: 'Drag the following licenses in the correct places',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene7Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Not correct yet',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: "rgb(255,0, 0)",
			name:'scene7Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[10],
			scale : {x:0.5, y:0.5},
			name:'scene7Components',
			dragBoundFunc: function(pos){
				return boundsFunction(pos, this, {x1:0, y1:0, x2:scene.width-this.getWidth(), y2:scene.height-this.getHeight()-70});
			}
		});
		
		img1.on('dragend', function(e)
		{
			trace("Came here ar drag end");
			trace("Image: x: " + img1.getX() +" and y: "+ img1.getY());
			trace("Drag 3 Start: x: " + drg3.getX() +" and y: "+ drg3.getY());
			trace("Drag 3 End: x: " + (drg3.getX()+drg3.getWidth())+" and y: "+ (drg3.getY()+drg3.getHeight()));
			if(checkBounds(img1, {x1: drg3.getX(), x2:drg3.getX()+drg3.getWidth()*f,  y1:drg3.getY(), y2:drg3.getY()+drg3.getHeight()*f}))
			{
				//endWait();
				trace("came to if");
				img1.setDraggable(false);
				dragged++;
				if(dragged==2)
				{
					endWait();
					dragged=0;
				}
			}
			else
			{
				trace("came to else");
				scene.timeline.waiting = true;
			};
		});
		
		/*
		accom - x1: img1.getX(), x2:img1.getX()+img1.getWidth()+img1.getX(),  y1:img1.getY(), y2:img1.getY()+img1.getHeight()
		restr - x1: x2: y1: y2:
		betw - x1: x2: y1: y2:
		*/
		var img2 = new Kinetic.Image({
			image: assets.images[11],
			scale : {x:0.5, y:0.5},
			name:'scene7Components',
			dragBoundFunc: function(pos){
				return boundsFunction(pos, this, {x1:0, y1:0, x2:scene.width-this.getWidth(), y2:scene.height-this.getHeight()-70});
			}
		});
		
		img2.on('dragend', function(e)
		{
			trace("Came here ar drag end");			
			trace("Image: x: " + img2.getX() +" and y: "+ img2.getY());
			trace("Drag 1 Start: x: " + drg1.getX() +" and y: "+ drg1.getY());
			trace("Drag 1 End: x: " + (drg1.getX()+drg1.getWidth())+" and y: "+ (drg1.getY()+drg1.getHeight()));
			
			if(checkBounds(img2, {x1: drg1.getX(), x2:drg1.getX()+drg1.getWidth()*f,  y1:drg1.getY(), y2:drg1.getY()+drg1.getHeight()*f}))
			{
				//endWait();
				trace("came to if");
				img2.setDraggable(false);
				dragged++;
				if(dragged==3)
				{
					endWait();
					dragged=0;
				}
			}
			else
			{
				trace("came to else");
				scene.timeline.waiting = true;
			};
		});
		
		var img3 = new Kinetic.Image({
			image: assets.images[12],
			scale : {x:0.5, y:0.5},
			name:'scene7Components',
			dragBoundFunc: function(pos){
				return boundsFunction(pos, this, {x1:0, y1:0, x2:scene.width-this.getWidth(), y2:scene.height-this.getHeight()-70});
			}
		});
		
		img3.on('dragend', function(e)
		{
			trace("Came here ar drag end");
			
			trace("Image: x: " + img3.getX() +" and y: "+ img3.getY());
			trace("Drag 2 Start: x: " + drg2.getX() +" and y: "+ drg2.getY());
			trace("Drag 2 End: x: " + (drg2.getX()+drg2.getWidth())+" and y: "+ (drg2.getY()+drg2.getHeight()));
			
			if(checkBounds(img3, {x1: drg2.getX(), x2:drg2.getX()+drg2.getWidth()*f,  y1:drg2.getY(), y2:drg2.getY()+drg2.getHeight()*f}))
			{
				//endWait();
				trace("came to if");
				img3.setDraggable(false);
				dragged++;
				if(dragged==3)
				{
					endWait();
					dragged=0;
				}
			}
			else
			{
				trace("came to else");
				scene.timeline.waiting = true;
			};
		});
		
		var drg1 = new Kinetic.Image({
			image: assets.images[13],
			scale : {x:0.4, y:0.4},
			name:'scene7Components'
		});
		
		var drg2 = new Kinetic.Image({
			image: assets.images[18],
			scale : {x:0.4, y:0.4},
			name:'scene7Components'
		});
		
		var drg3 = new Kinetic.Image({
			image: assets.images[14],
			scale : {x:0.4, y:0.4},
			name:'scene7Components'
		});
		centreText([txt1, txt2]);
		//txt1.move(scene.width/2, 50);
		/*img1.move((scene.width/2)-150, 250);
		img2.move((scene.width/2), 250);
		img3.move((scene.width/2)+150, 250);*/
		
		setVisible([img1, img2, img3, txt1, txt2, drg1, drg2, drg3], false);
		return {txt1: txt1, txt2: txt2, img1: img1, img2: img2, img3:img3, drg1:drg1, drg2: drg2, drg3:drg3};
	}
	
	function createScene7Animations()
	{
		var startTime = 140000, endTime= 146000, duration=endTime-startTime;
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			if(time/duration>0.35)
			{
				if(fla[3]==undefined)
				{
					scene.components[7].drg1.setVisible(true);
					scene.components[7].drg1.transitionTo({x:(scene.width/2)+100, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					
					scene.components[7].drg2.setVisible(true);
					scene.components[7].drg2.transitionTo({x:(scene.width/2)+100, y:175, duration: 1, easing: 'elastic-ease-in-out'});
					
					scene.components[7].drg3.setVisible(true);
					scene.components[7].drg3.transitionTo({x:(scene.width/2)+100, y:300, duration: 1, easing: 'elastic-ease-in-out'});
					
					scene.components[7].img3.setVisible(true);
					scene.components[7].img3.transitionTo({x:50, y:300, duration: 1, easing: 'elastic-ease-in-out'});
					scene.components[7].img3.setDraggable(true);
					
					scene.components[7].txt2.setVisible(true);
					scene.components[7].txt2.transitionTo({x:(scene.width/2)-50, y:325, duration: 1, easing: 'elastic-ease-in-out'});
					scene.timeline.waiting = true;
					fla[3]=true;
				}
			}
			else if(time/duration>0.3)
			{
				if(fla[2]==undefined)
				{
					scene.components[7].img2.setVisible(true);
					scene.components[7].img2.transitionTo({x:50, y:200, duration: 1, easing: 'elastic-ease-in-out'});
					scene.components[7].img2.setDraggable(true);
					fla[2]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[1]==undefined)
				{
					scene.components[7].img1.setVisible(true);
					scene.components[7].img1.transitionTo({x:50, y:100, duration: 1, easing: 'elastic-ease-in-out'});
					scene.components[7].img1.setDraggable(true);
					fla[1]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[0]==undefined)
				{
					scene.components[7].txt1.setVisible(true);
					scene.components[7].txt1.transitionTo({x:scene.width/2, y:40, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
			
			/*txt1.move(scene.width/2, 50);
			/*img1.move((scene.width/2)-150, 250);
			img2.move((scene.width/2), 250);
			img3.move((scene.width/2)+150, 250);*/
			/*if(time/duration>0.9&&scene.components[1].rectangle.getX()<500)
			{
				scene.timeline.waiting=true;
			}
			
			if(!checkBounds(scene.components[7].img1))
			{
				//trace("came here");
				scene.timeline.waiting=true;
			}*/
		});
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	function createScene8Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Suppose you want to download some music for a video?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene8Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Click on the source which is better to use (Hint: Look at the CC licenses)',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene8Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[15],
			scale : {x:1, y:1},
			name:'scene8Components'
		});
		
		img1.on("click", function(e){
			trace("img1 clicked");
			endWait();
		});
		
		var img2 = new Kinetic.Image({
			image: assets.images[16],
			scale : {x:1, y:1},
			name:'scene8Components'
		});
		
		img2.on("click", function(e){
			trace("img2 clicked");
			txt2.setText("Thats wrong");
			txt2.setFill("rgb(255, 0, 0)");
			centreText([txt2]);
			txt2.setX(scene.width/2);
			txt2.setY(100);
			scene.stage.draw();
		});
		
		centreText([txt1, txt2]);
		setVisible([txt1, txt2, img1, img2], false);
		return {txt1:txt1, txt2:txt2, img1:img1, img2:img2};
	}
	
	function createScene8Animations()
	{
		var startTime = 146000, endTime= 154000, duration=endTime-startTime;
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			// update stuff
			/*if(time/duration>0.7)
			{
				if(fla[3]==undefined)
				{
					scene.components[8].img3.setVisible(true);
					scene.components[8].img3.transitionTo({x:(scene.width/2)+150, y:250, duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
			else if(time/duration>0.5)
			{
				if(fla[2]==undefined)
				{
					scene.components[8].img2.setVisible(true);
					scene.components[8].img2.transitionTo({x:(scene.width/2), y:250, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}*/
			if(time/duration>0.5)
			{
				if(fla[3]==undefined)
				{
					scene.components[8].img2.setVisible(true);
					scene.components[8].img2.transitionTo({x:550, y:150, duration: 1, easing: 'elastic-ease-in-out'});
					scene.timeline.waiting=true;
					fla[3]=true;
				}
			}
			else if(time/duration>0.4)
			{
				if(fla[2]==undefined)
				{
					scene.components[8].img1.setVisible(true);
					scene.components[8].img1.transitionTo({x:50, y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[1]==undefined)
				{
					scene.components[8].txt2.setVisible(true);
					scene.components[8].txt2.transitionTo({x:(scene.width/2), y:100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[8].txt1.setVisible(true);
					scene.components[8].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
			
			/*if(!checkBounds(scene.components[8].txt1))
			{
				//trace("came here");
				//scene.timeline.waiting=true;
			}*/
		});
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene9Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Fair Use',
			fontSize: 35,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene9Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'If a source is being used for educational purposes, it is considered fair use.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene9Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'That is why it is recommended to use educational resources as much as possible to avoid infringement.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene9Components',
		});
		
		centreText([txt1, txt2, txt3]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		txt3.move(scene.width/2, 250);*/
		setVisible([txt1, txt2, txt3], false);
		return {txt1:txt1, txt2:txt2, txt3:txt3};
		//return {};
	}
	
	function createScene9Animations()
	{
		var startTime = 154000, endTime= 164000, duration=endTime-startTime;
		var fla=[];
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.5)
			{
				if(fla[2]==undefined)
				{
					scene.components[9].txt3.setVisible(true);
					scene.components[9].txt3.transitionTo({x:(scene.width/2), y:250, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[1]==undefined)
				{
					scene.components[9].txt2.setVisible(true);
					scene.components[9].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[9].txt1.setVisible(true);
					scene.components[9].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene10Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Public Domain',
			fontSize: 35,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene10Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[17],
			scale : {x:0.25, y:0.25},
			name:'scene10Components'
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Works that can be used, copied, publish and distributed without any restrictions.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene10Components',
		});
		
		var txt3 = new Kinetic.Text({
			text: 'Works published before 1923, work by long-dead creators and work that creators have placed in the Public Domain.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene10Components',
		});
		
		centreText([txt1, txt2, txt3]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		txt3.move(scene.width/2, 250);*/
		setVisible([txt1, txt2, txt3, img1], false);
		return {txt1:txt1, txt2:txt2, txt3:txt3, img1:img1};
	}
	
	function createScene10Animations()
	{
		var startTime = 164000, endTime= 180000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.5)
			{
				if(fla[2]==undefined)
				{
					scene.components[10].txt3.setVisible(true);
					scene.components[10].txt3.transitionTo({x:(scene.width/2), y:350, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[1]==undefined)
				{
					scene.components[10].txt2.setVisible(true);
					scene.components[10].txt2.transitionTo({x:(scene.width/2), y:300, duration: 1, easing: 'elastic-ease-in-out'});
					scene.components[10].img1.setVisible(true);
					scene.components[10].img1.transitionTo({x:(scene.width/2)-50, y:100, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.1)
			{
				if(fla[0]==undefined)
				{
					scene.components[10].txt1.setVisible(true);
					scene.components[10].txt1.transitionTo({x:scene.width/2, y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene11Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'So which sources do you think are best to use?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene11Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Educational sources, Sources in Public Domain and sources with creative commons licenses are best.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene11Components',
		});
		
		centreText([txt1, txt2]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);*/
		setVisible([txt1, txt2], false);
		return {txt1:txt1, txt2:txt2};
	}
	function createScene11Animations()
	{
		var startTime = 180000, endTime= 190000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.5)
			{
				if(fla[1]==undefined)
				{
					scene.components[11].txt2.setVisible(true);
					scene.components[11].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.25)
			{
				if(fla[0]==undefined)
				{
					scene.components[11].txt1.setVisible(true);
					scene.components[11].txt1.transitionTo({x:(scene.width/2), y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	/*function createScene12Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Where should you look for sources in a situation like this?',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene12Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Options',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene12Components',
		});
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2};
	}
	
	function createScene12Animations()
	{
		var startTime = 156000, endTime= 166000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}
	
	function createScene13Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Topic#13',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene13Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'I do not know',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene13Components',
		});
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2};
	}
	
	function createScene13Animations()
	{
		var startTime = 166000, endTime= 176000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}
	
	function createScene14Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Fair Use',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene14Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'For educational use',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene14Components',
		});
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2};
	}
	
	function createScene14Animations()
	{
		var startTime = 176000, endTime= 186000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}
	
	function createScene15Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Another Topic',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene15Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Idont',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene15Components',
		});
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2};
	}
	
	function createScene15Animations()
	{
		var startTime = 186000, endTime= 196000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}*/
	
	function createScene16Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Credits and Resources:',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene16Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Eric Rowell - KineticJS\nIncompetech.com - RoyalFree Music\nCretiveCommons.org\nBrainPop - Learning About Copyright',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene16Components',
		});
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2};
	}
	
	function createScene16Animations()
	{
		var startTime = 190000, endTime= 200000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}
	
	function createScene17Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Attribution',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene17Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Other can copy, distribute, display, perform and remix your work if they credit your name as requested by you.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene17Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[6],
			scale : {x:0.5, y:0.5},
			name:'scene17Components'
		});
		
		/*img1.move(50, scene.height/2);*/
		
		setVisible([img1], false);
		
		centreText([txt1, txt2]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);*/
		setVisible([txt1, txt2], false);
		return {txt1:txt1, txt2:txt2, img1:img1};
	}
	
	
	function createScene17Animations()
	{
	
		var startTime = 68000, endTime= 82000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.6)
			{
				if(fla[2]==undefined)
				{
					scene.components[17].txt2.setVisible(true);
					scene.components[17].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			
			else if(time/duration>0.4)
			{
				if(fla[1]==undefined)
				{
					scene.components[17].txt1.setVisible(true);
					scene.components[17].txt1.transitionTo({x:(scene.width/2), y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[0]==undefined)
				{
					scene.components[17].img1.setVisible(true);
					scene.components[17].img1.transitionTo({x:50, y:scene.height/2, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
			
		return {anim: anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene18Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'No Derivative Works',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene18Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Others can only copy, distribute, display or perform verbatim copies of your work.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene18Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[7],
			scale : {x:0.3, y:0.3},
			name:'scene18Components'
		});
		
		/*img1.move(50, scene.height/2);*/
		
		setVisible([img1], false);
		
		centreText([txt1, txt2]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);*/
		setVisible([txt1, txt2], false);
		return {txt1:txt1, txt2:txt2, img1:img1};
	}
	
	
	function createScene18Animations()
	{
		var startTime = 82000, endTime= 96000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.6)
			{
				if(fla[2]==undefined)
				{
					scene.components[18].txt2.setVisible(true);
					scene.components[18].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[2]=true;
				}
			}
			
			else if(time/duration>0.4)
			{
				if(fla[1]==undefined)
				{
					scene.components[18].txt1.setVisible(true);
					scene.components[18].txt1.transitionTo({x:(scene.width/2), y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[1]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[0]==undefined)
				{
					scene.components[18].img1.setVisible(true);
					scene.components[18].img1.transitionTo({x:50, y:(scene.height/2)-20, duration: 1, easing: 'elastic-ease-in-out'});
					fla[0]=true;
				}
			}
		});
			
		return {anim:anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene19Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Share Alike',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene19Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Others can distibute your work only under a license identical to the one you have chosen for your work.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene19Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[8],
			scale : {x:0.3, y:0.3},
			name:'scene19Components'
		});
		
		/*img1.move(50, scene.height/2);*/
		
		setVisible([img1], false);
		
		centreText([txt1, txt2]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);*/
		setVisible([txt1, txt2], false);
		return {txt1:txt1, txt2:txt2, img1:img1};
	}
	
	function createScene19Animations()
	{
		var startTime = 96000, endTime= 110000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.6)
			{
				if(fla[5]==undefined)
				{
					scene.components[19].txt2.setVisible(true);
					scene.components[19].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[5]=true;
				}
			}
			
			else if(time/duration>0.4)
			{
				if(fla[4]==undefined)
				{
					scene.components[19].txt1.setVisible(true);
					scene.components[19].txt1.transitionTo({x:(scene.width/2), y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[4]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[3]==undefined)
				{
					scene.components[19].img1.setVisible(true);
					scene.components[19].img1.transitionTo({x:50, y:(scene.height/2), duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
		});
			
		return {anim:anim, startTime: startTime, endTime: endTime};
	}
	
	function createScene20Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Non-commercial',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene20Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Other can copy, distribute, display, perform or remix your work but for non-commercial purposes only.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene20Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[9],
			scale : {x:0.5, y:0.5},
			name:'scene20Components'
		});
		
		/*img1.move(50, scene.height/2);*/
		
		setVisible([img1], false);
		
		centreText([txt1, txt2]);
		/*txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);*/
		setVisible([txt1, txt2], false);
		return {txt1:txt1, txt2:txt2, img1:img1};
	}
	
	
	function createScene20Animations()
	{
		var startTime = 110000, endTime= 124000, duration=endTime-startTime;
		var fla=[];
		
		var anim = new Kinetic.Animation(function(frame)
		{
			var time = frame.time,
			timeDiff = frame.timeDiff,
			frameRate = frame.frameRate;
			
			if(time/duration>0.6)
			{
				if(fla[5]==undefined)
				{
					scene.components[20].txt2.setVisible(true);
					scene.components[20].txt2.transitionTo({x:(scene.width/2), y:150, duration: 1, easing: 'elastic-ease-in-out'});
					fla[5]=true;
				}
			}
			
			else if(time/duration>0.4)
			{
				if(fla[4]==undefined)
				{
					scene.components[20].txt1.setVisible(true);
					scene.components[20].txt1.transitionTo({x:(scene.width/2), y:50, duration: 1, easing: 'elastic-ease-in-out'});
					fla[4]=true;
				}
			}
			else if(time/duration>0.2)
			{
				if(fla[3]==undefined)
				{
					scene.components[20].img1.setVisible(true);
					scene.components[20].img1.transitionTo({x:50, y:(scene.height/2), duration: 1, easing: 'elastic-ease-in-out'});
					fla[3]=true;
				}
			}
		});
			
		return {anim:anim, startTime: startTime, endTime: endTime};
	}
	
	/*function createScene17Components()
	{
		var txt1 = new Kinetic.Text({
			text: 'Other can copy, distribute, display, perform and remix your work if they cred your name as requested by you.',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene17Components',
		});
		
		var txt2 = new Kinetic.Text({
			text: 'Other can only copy',
			fontSize: 20,
			fontFamily: 'Montaga',
			fill: ColorScheme.TextColor,
			name:'scene17Components',
		});
		
		var img1 = new Kinetic.Image({
			image: assets.images[6],
			scale : {x:0.5, y:0.5},
			name:'scene5Components'
		});
		
		var img2 = new Kinetic.Image({
			image: assets.images[7],
			scale : {x:0.5, y:0.5},
			name:'scene5Components'
		});
		
		var img3 = new Kinetic.Image({
			image: assets.images[8],
			scale : {x:0.5, y:0.5},
			name:'scene5Components'
		});
		
		var img4 = new Kinetic.Image({
			image: assets.images[9],
			scale : {x:0.5, y:0.5},
			name:'scene5Components'
		});
		
		/*img1.move(50, scene.height/2);
		img2.move((scene.width/2)-200, scene.height/2);
		img3.move((scene.width/2)+70, scene.height/2);
		img4.move((scene.width)-170, scene.height/2);
		
		setVisible([img1, img2, img3, img4], false);
		
		centreText([txt1, txt2]);
		txt1.move(scene.width/2, 50);
		txt2.move(scene.width/2, 150);
		setVisible([txt1, txt2], true);
		return {txt1:txt1, txt2:txt2, img1:img1, img2:img2, img3:img3, img4:img4};
	}
	
	function createScene17Animations()
	{
		var startTime = 146000, endTime= 156000, duration=endTime-startTime;
		return {startTime: startTime, endTime: endTime};
	}*/
	//--------------------------------------------------------CORE--------------------------------------//
	function BindClickEvents(obj)
	{
		var pl = obj.playPauseButton;
		var pa = obj.pauseButton;
		
		pl.on('click', function(){
			pa.setVisible(true);
			pl.setVisible(false);
			playing=true;
			
			if(scene.timeline.currentTime==undefined||scene.timeline.currentTime==0)
			{
				scene.timeline.startTime=getCurrentTime();
				interval = setInterval(tick, 1000/scene.timeline.frameRate);
				scene.timeline.currentScene=0;
			}
			else
			{
				scene.timeline.pauseTimeEnd=getCurrentTime();
				scene.timeline.pauseTime += scene.timeline.pauseTimeEnd-scene.timeline.pauseTimeStart;
				interval = setInterval(tick, 1000/scene.timeline.frameRate);
			}
			MusicNote.play();
			scene.components[1].rectangle.setDraggable(true);
			scene.stage.draw();
		});
		
		pa.on('click', function(){
			pl.setVisible(true);
			pa.setVisible(false);
			playing=false;			
			scene.components[1].rectangle.setDraggable(false);
			scene.stage.draw();
			clearInterval(interval);
			MusicNote.pause();
			scene.timeline.pauseTimeStart = getCurrentTime();
		});
	}
	
	function tick()
	{
		scene.timeline.currentTime= getCurrentTime()-scene.timeline.startTime-scene.timeline.pauseTime;
		var timeInFormat = millisecondsToTime(scene.timeline.currentTime)+"/"+millisecondsToTime(scene.timeline.duration);
		scene.UI.components.timeField.setText(timeInFormat);
		
		playScene(scene.timeline.currentTime);
		if(playing)scene.stage.draw();
	}
	
	function playScene(t)
	{
		for(var i = 0; i<scene.animations.length; i++)
		{
			if(scene.animations[i]!=undefined&&scene.animations[i]!=null&&scene.animations[i].startTime!=undefined)
			{
				if(t>scene.animations[i].startTime&&t<scene.animations[i].endTime)
				{
					//trace("Time: "+t+" & Scene No: "+i);
					playCorrectScene(i);
				}
			}
			else
			{
				//trace("Scene Aniamtions Not filled for Animation no. " + i);
			}
		}
	}
	
	function playCorrectScene(sceneID)
	{
		var removeScene = function(id)
		{			
			/*try
			{*/
				var temp = '.scene'+id+'Components';
				//var layer = scene.stage.getChildren()[1];
				var arr = scene.MainScreenLayer.get(temp);
				//layer.removeChildren();
				//MainScreenLayer.getChildren()[0].remove();
				for (var i =0; i<arr.length; i++)
				{
					arr[i].setVisible(false);
					//layer.arr[i].remove();
					//trace("Removing Scene: "+id);
					//arr[i].remove();
					/*try
					{
						//arr[i].setVisible(false);
						arr[i].remove();
						//scene.stage.getChildren()[1].remove(arr[i]);
						layer.arr[i].remove();
					}
					catch(ex)
					{
						trace(ex);
					}*/
				}
			//}
			/*catch(ex)
			{
				trace(ex);
			}*/
			var anims = scene.animations[id];
			for(var i in anims)
			{
				trace("Stopping Animations for "+id);
				try
				{
					trace(anims[i]);
					anims[i].stop();
				}
				catch(ex)
				{
					trace("caught exception: "+ex);
				}
			}
		}
		
		var addScene = function(ID)
		{			
			if(scene.stage.getChildren()[1]==undefined)
			{
				trace("Undefined Stage");
			}
			
			var temp = '.scene'+ID+'Components';
			var obj = scene.components[ID];
			for(var key in obj)
			{
				trace("Adding to stage: "+obj[key]);
				scene.stage.getChildren()[1].add(obj[key]);
			}
			
			var anims = scene.animations[ID];
			for(var i in anims)
			{
				trace("Playing Animations for "+ID);
				try
				{
					trace(anims[i]);
					anims[i].start();
				}
				catch(ex)
				{
					trace("caught exception: "+ex);
				}
			}
			scene.timeline.currentScene = ID;
		}
			
		if(scene.timeline.currentScene != sceneID)
		{
			if(!scene.timeline.waiting)
			{
				removeScene(scene.timeline.currentScene);
				addScene(sceneID);
			}
			else
			{
				trace("waiting");
				clearInterval(interval);
				interval=false;
				scene.timeline.pauseTimeStart = getCurrentTime();
			}
		}
		else if(sceneID==0&&!started)
		{
			addScene(0);
			started=true;
		}
	}
	
	function endWait()
	{
		trace("Ending Wait");
		scene.timeline.waiting = false;
		if(!interval)
		{
			scene.timeline.pauseTimeEnd=getCurrentTime();
			scene.timeline.pauseTime += scene.timeline.pauseTimeEnd-scene.timeline.pauseTimeStart;
			interval = setInterval(tick, 1000/scene.timeline.frameRate);
			//scene.components[1].rectangle.setDraggable(false);
		}
	}
	//---------------------------------UTILITY FUNCTIONS------------------------------//
	
	function checkBounds(shape, obj)
	{
		if(shape.getX()<obj.x2 && shape.getX()>obj.x1 && shape.getY()<obj.y2 && shape.getY()>obj.y1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	function boundsFunction(pos, shape, obj1)
	{
		var newY;
		var newX;
		
		if(obj1==undefined)
		{	
			var obj1 = {x1:0, y1:0, x2:scene.width-shape.getWidth(), y2:scene.height-shape.getHeight()};
		}
		
		if(pos.y>obj1.y2)
		{
			newY=obj1.y2;
		}
		else if(pos.y<obj1.y1)
		{
			newY = obj1.y1;
		}
		else
		{
			newY=pos.y;
		}
		
		if(pos.x<obj1.x1)
		{
			newX = obj1.x1;
		}
		else if(pos.x>obj1.x2)
		{
			newX= obj1.x2;
		}
		else
		{
			newX=pos.x;
		}
		
		/*if(newX>obj2.x1&&newX<obj2.x2&&newY>obj2.y1&&newY<obj2.y2)
		{
			if(dragged==undefined)
			{
				dragged=0;
			}
			dragged++;
			if(dragged)endWait();
		}
		else
		{
			scene.timeline.waiting = true;
		}*/		
		return {
			x: newX,
			y: newY
		}
	}
	
	function millisecondsToTime(milli)
	{
		var milliseconds = milli%1000;
		var seconds = Math.floor((milli/1000)%60);
		var minutes = Math.floor((milli/(60*1000))%60);
		
		return minutes + ":" + prependZero(seconds);
	}
	
	function prependZero(n)
	{
		return ('0'+n).slice(-2);
	}
	
	function getCurrentTime()
	{
		return (new Date()).getTime();
	}
	
	function trace(s)
	{
		console.log(s);
	}
	
	function centreText(obj)
	{
		for(var key in obj)
		{
			if(obj.hasOwnProperty(key))
			{
				obj[key].setOffset({
					x: obj[key].getWidth()/2
				});
			}
		}
	}
	
	function setVisible(arr, bool)
	{
		for(key in arr)
		{
			if(arr.hasOwnProperty(key))
			{
				arr[key].setVisible(bool);
			}
		}
	}
	//-------------------------------DRAW FUNCTIONS---------------------//

	 
	//---------------------------------OTHER THAN CANVAS---------------//
	 
	function updateClock()
	{
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		
		if(minutes<10)
		{
			minutes = "0"+minutes;
		}
		if(seconds<10)
		{
			seconds = "0"+seconds;
		}
		if(hours<10)
		{
			hours = "0"+hours;
		}
		$("#time").html(hours + ":" + minutes + ":" + seconds);
		
		if(hours>11)
		{
			$("#time").append(" PM");
		}
		else
		{
			$("#time").append(" AM");
		}
		setTimeout(updateClock, 1000);
	}
	updateClock();
	preloadImages(["c_symbol.png", "art.png", "music.png", "media.png", "books.png", "cc_symbol.png", "cc_attr.png", "cc_share.png", "cc_deriv.png", "cc_non-comm.png",/**/ "cc_1.png", "cc_2.png", "cc_3.png", "accom.png", "restr.png",/**/ "choice1.png", "choice2.png", "public_domain.png", "between.png"/**/]);
})
/*
//-----------------------------------------------------------------------------
//-------------------------------CANVAS----------------------------------------
var canvas, ctx;
var circles = [];
var selectedCircle;
var hoveredCircle;

//-----------------------------------------------------------------------------
//objects

function Circle(x, y, radius)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
}

//-----------------------------------------------------------------------------
//draw functions

function clear()
{
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawCircle(ctx, x, y, radius)
{
	ctx.fillStyle = 'rgba(255, 35, 55, 1.0)';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function drawmyCanvas()
{ 	
	// main drawmyCanvas function
    clear(); // clear canvas

    ctx.beginPath(); // custom shape begin
    ctx.fillStyle = 'rgba(255, 110, 110, 0.5)';
    ctx.moveTo(circles[0].x, circles[0].y);
    for (var i=0; i<circles.length; i++) 
	{
        ctx.lineTo(circles[i].x, circles[i].y);
    }
    ctx.closePath(); // custom shape end
    ctx.fill(); // fill custom shape
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.stroke(); // draw border
	
    for (var i=0; i<circles.length; i++)
	{ // display all our circles
        drawCircle(ctx, circles[i].x, circles[i].y, (hoveredCircle == i) ? 25 : 15);
    }
}


//------------------------------------------------------------------------------
//initialization

function iniCanvas()
{
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	
	var circleRadius = 15;
	var width = canvas.width;
	var height = canvas.height;
	
	var circlesCount = 7;
	for (var i=0; i<circlesCount; i++)
	{
		var x = Math.random()*width;
		var y = Math.random()*height;
		circles.push(new Circle(x, y, circleRadius));
	}
	
	$("#myCanvas").mousedown(function(e)
	{
		var canvasPosition = $(this).offset();
		var mouseX = e.layerX || 0;
		var mouseY = e.layerY || 0;
		
		for (var i=0; i<circles.length; i++)
		{
			var circleX = circles[i].x;
			var circleY = circles[i].y;
			var radius = circles[i].radius;
			
			if(Math.pow(mouseX-circleX, 2)+Math.pow(mouseY-circleY, 2)<Math.pow(radius, 2))
			{
				selectedCircle = i;
				break;
			}
		}
	});
	
	$("#myCanvas").mousemove(function (e)
	{
		var mouseX = e.layerX ||0;
		var mouseY = e.layerY ||0;
		
		if(selectedCircle!=undefined)
		{	
			var canvasPosition = $(this).offset();
			var radius = circles[selectedCircle].radius;
			circles[selectedCircle]= new Circle(mouseX, mouseY, radius);
		}
		
		hoveredCircle = undefined;
		for(var j=0; j<circles.length; j++)
		{
			var circleX = circles[j].x;
			var circleY	= circles[j].y;
			var radius = circles[j].radius;
			
			if(Math.pow(mouseX-circleX,2) + Math.pow(mouseY-circleY,2) < Math.pow(radius,2))
			{
				hoveredCircle = j;
				break;
			}
		}
	});
	
	$('#myCanvas').mouseup(function(e)
	{
		selectedCircle = undefined;
	});
	
	setInterval(drawmyCanvas, 30);
}*/

	//function drawLine(ctx, sX, sY, eX, eY, sRGB, fRGB, lWidth, capStyle)
	/*function drawLine(drawObj)
	{
		drawObj.ctx.beginPath();
		drawObj.ctx.moveTo(drawObj.sX||0, drawObj.sY||0);
		drawObj.ctx.lineTo(drawObj.eX||0, drawObj.eY||0);
		drawObj.ctx.lineWidth = drawObj.lWidth||4;
		drawObj.ctx.fillStyle = drawObj.fRGB||ColorScheme.Two;
		drawObj.ctx.strokeStyle = drawObj.sRGB||ColorScheme.One;
		drawObj.ctx.lineCap = drawObj.capStyle||'round';
		drawObj.ctx.stroke();
	}

	function drawTri(drawObj)
	{
		drawObj.ctx.beginPath();
		drawObj.ctx.moveTo(drawObj.aX||0, drawObj.aY||0);
		drawObj.ctx.lineTo(drawObj.bX||0, drawObj.bY||0);
		drawObj.ctx.lineTo(drawObj.cX||0, drawObj.cY||0);
		drawObj.ctx.lineTo(drawObj.aX||0, drawObj.aY||0);
		drawObj.ctx.lineWidth = drawObj.lWidth || 4;
		drawObj.ctx.strokeStyle = drawObj.sRGB||ColorScheme.One;
		drawObj.ctx.fillStyle = drawObj.fRGB||ColorScheme.Two;
		drawObj.ctx.lineCap = drawObj.capStyle||'round';
		drawObj.ctx.lineJoin = drawObj.capStyle||'round';
		drawObj.ctx.fill();
		drawObj.ctx.stroke();
	}
	
	function drawRect(drawObj)
	{
		drawObj.ctx.beginPath();
		drawObj.ctx.rect(drawObj.sX||0, drawObj.sY||0, drawObj.w||0, drawObj.h||0);
		drawObj.ctx.fillStyle = drawObj.fRGB||ColorScheme.Two;
		drawObj.ctx.strokeStyle = drawObj.sRGB||ColorScheme.One;
		drawObj.ctx.fill();
		drawObj.ctx.stroke();
	}

	function loadImage(ctx, src, x, y, width, height)
	{
		var img = new Image();
		img.onload = function()
		{
			ctx.drawImage(img, x, y, width, height);
		};
		img.src = src;
	}*/
	
	/*	function getCanvas()
	{
		if(canvas)
		{
			return canvas;
		}
		else
		{
			var canvas = {};
			canvas.node = document.getElementById("myCanvas");
			canvas.context = canvas.node.getContext('2d');
			canvas.canvasH = canvas.node.height || 500;
			canvas.canvasW = canvas.node.width || 800;
			return canvas;
		}
	}*/