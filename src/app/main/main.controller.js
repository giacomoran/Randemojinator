(function() {
  'use strict';

  angular
    .module('randemojinator')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location) {
    var eyeleft;
    var colorArray = ["#F8DE73", "#7ECEFD", "#675FD6", "#FF4A4A", "#9CABE4", "#3FC380"];
    var bgColor;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 160;
    canvas.height = 160;

    $scope.emoji = $location.search();
    $scope.absurl = $location.absUrl();

    $scope.updateEmoji = function() {
        var e = $scope.emoji;
        e.background = backgroundRand();
        e.mouth = mouthRand();
        e.eyeleft = eyeleftRand();
        e.eyeright = eyerightRand();
        e.extra = extraRand();
        $location.search('background', e.background);
        $location.search('mouth', e.mouth);
        $location.search('eyeleft', e.eyeleft);
        $location.search('eyeright', e.eyeright);
        $location.search('extra', e.extra);
        $scope.bgStyle = {"background-color": bgRand() };
        bgColor = $scope.bgStyle["background-color"];
        $('#background').on('load', function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            generateCanvas();
        });
        $('.clickhandler > img').each(function(){
        	if (!this.complete) {
        		$(this).load(function(){
                    generateCanvas();
        		});
        	} else {
                generateCanvas();
        	}
        });
    };

    if($.isEmptyObject($location.search())) {
        $scope.updateEmoji();
    }
    console.log($location.search());

    function generateCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        var backgroundEl = document.getElementById('background');
        var mouthEl = document.getElementById('mouth');
        var eyeleftEl = document.getElementById('eyeleft');
        var eyerightEl = document.getElementById('eyeright');
        var extraEl = document.getElementById('extra');

        context.globalAlpha = 1.0;
        context.drawImage(backgroundEl, 0, 0);
        context.drawImage(mouthEl, 0, 0);
        context.drawImage(eyeleftEl, 0, 0);
        context.drawImage(eyerightEl, 0, 0);
        context.drawImage(extraEl, 0, 0);
    }

    function backgroundRand() {
        var rand = Math.floor(1 + Math.random()*58);
        if (rand > 56) {
            return '03';
        } else if (rand === 56) {
            return '02';
        } else if (rand === 55) {
            return '04';
        } else {
            return '01';
        }
    }

    function extraRand() {
        var rand = Math.floor(1 + Math.random()*58);
        if (rand > 12) {
            return '00';
        } else if (rand > 9) {
            return rand;
        } else {
            return '0' + rand;
        }
    }

    function mouthRand() {
        var rand = Math.floor(Math.random()*26);
        if (rand > 9) {
            return rand;
        } else {
            return '0' + rand;
        }
    }

    function eyeleftRand() {
        var rand = Math.floor(1 + Math.random()*32);
        if (rand > 9) {
            eyeleft = rand;
            return eyeleft;
        } else {
            eyeleft = '0' + rand;
            return eyeleft;
        }
    }

    function eyerightRand() {
        var firstrand = Math.floor(Math.random()*100);
        if (firstrand <= 60) {
            return eyeleft;
        } else {
            var rand = Math.floor(1 + Math.random()*32);
            if (rand > 9) {
                return rand;
            } else {
                return '0' + rand;
            }
        }
    }

    function bgRand() {
        var rand = Math.floor(Math.random()*colorArray.length);
        if (colorArray[rand] === bgColor) {
            bgRand();
        } else {
            return colorArray[rand];
        }
    }

    //share button
    $('.share').on('click', function(e) {

		e.preventDefault();

		var $this = $(this);

		$this.animate({
			'width': $this.width() === 304 ? '64px' : '304px'
		}, 300, 'swing');

	});



    // var vm = this;
    //
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1437073998658;
    // vm.showToastr = showToastr;
    //
    // activate();
    //
    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }
    //
    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }
    //
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();
    //
    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
