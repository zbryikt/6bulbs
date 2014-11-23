// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('main', []);
x$.controller('main', ['$scope', '$timeout', '$interval'].concat(function($scope, $timeout, $interval){
  var j, i, win, ldTt, ldB, ldH, jcH, court, ref$, w, h, orientDetect;
  import$($scope, {
    hint: false,
    stage: 'judge',
    rlt: {
      h: ['0', 'p5', 'p6', 'p7', 'p8', 'p9'],
      c: 5
    },
    jdg: {
      cc: 5,
      cv: 0,
      v: (function(){
        var i$, lresult$, j$, results$ = [];
        for (i$ = 0; i$ <= 5; ++i$) {
          j = i$;
          lresult$ = [];
          for (j$ = 0; j$ <= 5; ++j$) {
            i = j$;
            lresult$.push(1);
          }
          results$.push(lresult$);
        }
        return results$;
      }())
    },
    scoring: function(d){
      var ref$, ref1$;
      $scope.jdg.v[$scope.jdg.cc][$scope.jdg.cv] = d;
      $scope.jdg.cv++;
      return (ref1$ = (ref$ = $scope.jdg).cv) <= 6
        ? ref1$
        : ref$.cv = 6;
    },
    choosehead: function(d){
      var ref$;
      $scope.rlt.c += d;
      (ref$ = $scope.rlt).c >= 1 || (ref$.c = 1);
      (ref$ = $scope.rlt).c <= 5 || (ref$.c = 5);
      return $scope.jdg.cc = $scope.rlt.c;
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
  jcH = $('#jc-h');
  court = $('#court');
  ref$ = [win.width(), win.height()], w = ref$[0], h = ref$[1];
  orientDetect = function(check){
    var ref$, ldSpare, smMode, hc, wc, mh, cw, ch, r, bw, bh, i$, i, a, x, y, jchw, jchh, sw, fs, sentCss;
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
      ldB.css({
        top: (hc - ldB.height()) + "px",
        left: parseInt((w + wc) / 2) + "px"
      });
    } else {
      ldB.removeClass('mobile');
    }
    mh = h * 0.1 >= 60 ? h * 0.1 : 60;
    court.css({
      top: parseInt(mh) + "px",
      height: parseInt(h * 0.8) + "px"
    });
    ref$ = [court.width(), court.height()], cw = ref$[0], ch = ref$[1];
    if (cw * 775 / 547 > ch) {
      r = ch * 201 / 775;
    } else {
      r = cw * 201 / 546;
    }
    ref$ = [parseInt(1.4 * r * 40 / 201), parseInt(1.4 * r * 60 / 201)], bw = ref$[0], bh = ref$[1];
    for (i$ = 0; i$ <= 5; ++i$) {
      i = i$;
      a = 2 * Math.PI * ((i + 5) % 6) / 6;
      x = parseInt(r * Math.cos(a) + cw / 2) - bw / 2;
      y = parseInt(r * Math.sin(a) + ch * 465 / 1000) - bh / 2;
      $("#bulb" + (i + 1)).css({
        left: parseInt(x) + "px",
        top: parseInt(y) + "px",
        width: bw + "px",
        height: bh + "px"
      });
    }
    ref$ = [1.4 * r * 136 / 201, 1.4 * r * 150 / 201], jchw = ref$[0], jchh = ref$[1];
    jcH.css({
      width: parseInt(jchw) + "px",
      height: parseInt(jchh) + "px",
      marginLeft: "-" + parseInt(jchw / 2) + "px",
      marginTop: "-" + parseInt(jchh / 2) + "px",
      backgroundPosition: "-" + parseInt((5 - $scope.jdg.cc) * jchw) + "px center"
    });
    if (cw * 775 / 547 > ch) {
      sw = (w - ch * 547 / 775) / 2 - 20;
    } else {
      sw = (w - cw) / 2 - 20;
    }
    fs = w < 991 || h < 600 ? '12px' : '1.1em';
    sentCss = {
      width: parseInt(sw) + "px",
      fontSize: fs
    };
    $('#jg-sent1').css(sentCss);
    $('#jg-sent2').css(sentCss);
    return $('#jg-sent3').css(sentCss);
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