// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('main', []);
x$.controller('main', ['$scope', '$timeout', '$interval'].concat(function($scope, $timeout, $interval){
  var win, ldTt, ldB, ldH, ref$, w, h, orientDetect;
  import$($scope, {
    hint: false,
    stage: 'judge',
    rlt: {
      h: ['0', 'p5', 'p6', 'p7', 'p8', 'p9'],
      c: 5
    },
    choosehead: function(d){
      var ref$, ref1$;
      $scope.rlt.c += d;
      (ref$ = $scope.rlt).c >= 1 || (ref$.c = 1);
      return (ref1$ = (ref$ = $scope.rlt).c) <= 5
        ? ref1$
        : ref$.c = 5;
    }
  });
  $scope.$watch('rlt.c', function(){
    var v;
    $scope.rlt.h = (function(){
      var i$, results$ = [];
      for (i$ = -1; i$ <= 4; ++i$) {
        v = i$;
        results$.push("p" + (v + $scope.rlt.c));
      }
      return results$;
    }());
    return $scope.rlt.b = "p" + (6 - $scope.rlt.c);
  });
  $scope.$watch('choose', function(){
    return setTimeout(function(){
      return $(window).scrollTop('500');
    }, 100);
  });
  win = $(window);
  ldTt = $('#ld-tt');
  ldB = $('#ld-b');
  ldH = $('#ld-h');
  ref$ = [win.width(), win.height()], w = ref$[0], h = ref$[1];
  orientDetect = function(check){
    var ref$, ldSpare, smMode, hc, wc;
    ref$ = [win.width(), win.height()], w = ref$[0], h = ref$[1];
    $scope.hint = w < h;
    ldSpare = ldTt.height() + 150 + 30;
    smMode = ldSpare > h * 0.4;
    hc = h - (smMode ? ldTt.height() + 30 : ldSpare);
    hc >= 200 || (hc = 200);
    ref$ = [hc * 437 / 375, hc].map(function(it){
      return parseInt(it);
    }), wc = ref$[0], hc = ref$[1];
    ldH.css({
      width: wc + "px",
      height: hc + "px",
      opacity: 1
    });
    if (smMode) {
      ldB.addClass('mobile');
      return ldB.css({
        top: (hc - ldB.height()) + "px",
        left: parseInt((w + wc) / 2) + "px"
      });
    } else {
      return ldB.removeClass('mobile');
    }
  };
  win.resize(function(){
    return $scope.$apply(function(){
      return orientDetect();
    });
  });
  $timeout(orientDetect, 500);
  return $interval(function(){
    return orientDetect(true);
  }, 1000);
}));
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}