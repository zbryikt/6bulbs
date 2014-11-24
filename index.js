// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('main', []);
x$.controller('main', ['$scope', '$http', '$timeout', '$interval'].concat(function($scope, $http, $timeout, $interval){
  var fmt, j, i, win, ldTt, ldB, ldH, jcH, hmL, hmR, court, ref$, w, h, orientDetect;
  fmt = function(it){
    return it.replace("\\n", "\n");
  };
  import$($scope, {
    hint: false,
    stage: 'land',
    rlt: {
      h: ['0', 'p5', 'p6', 'p7', 'p8', 'p9'],
      c: 5
    },
    cm: ['朱立倫', '吳志鴻', '胡自強', '賴清德', '陳菊'],
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
      }()),
      count: function(){
        return this.v[this.cc].map(function(it){
          if (it === 2) {
            return 1;
          } else {
            return 0;
          }
        }).reduce(function(a, b){
          return a + b;
        }, 0);
      }
    },
    ctx: {
      view: '',
      achieve: '',
      more: '',
      goal: '過關'
    },
    fin: function(){
      $scope.stage = 'fin';
      return this.ctx.goal = this.jdg.count() < 3 ? "唉呀殘念" : "過關！";
    },
    scoring: function(d){
      var ref$;
      $scope.jdg.v[$scope.jdg.cc][$scope.jdg.cv] = d;
      $scope.jdg.cv++;
      if ($scope.jdg.cv > 5) {
        $scope.fin();
      }
      (ref$ = $scope.jdg).cv <= 5 || (ref$.cv = 5);
      return $scope.knowmore = false;
    },
    context: function(){
      var obj;
      if ($scope.data) {
        console.log($scope.jdg.cv);
        obj = $scope.data[5 - $scope.jdg.cc].feed.entry[$scope.jdg.cv];
        $scope.ctx.view = obj['gsx$政見']['$t'];
        $scope.ctx.achieve = obj['gsx$政績']['$t'];
        $scope.ctx.more = obj['gsx$問題']['$t'];
        return $scope.ctx.cat = obj['gsx$分類']['$t'];
      }
    },
    bulbcls: function(id){
      var ret;
      ret = 's' + $scope.jdg.v[$scope.jdg.cc][id];
      if ($scope.jdg.cv === id && $scope.stage !== 'fin') {
        ret += ' active';
      }
      return ret;
    },
    rechoose: function(d){
      $scope.stage = 'choose';
      $scope.rlt.c = d;
      return $scope.jdg.cc = $scope.rlt.c;
    },
    choosehead: function(d){
      var ref$;
      $scope.rlt.c += d;
      (ref$ = $scope.rlt).c >= 1 || (ref$.c = 1);
      (ref$ = $scope.rlt).c <= 5 || (ref$.c = 5);
      return $scope.jdg.cc = $scope.rlt.c;
    },
    start: function(){
      $scope.stage = 'judge';
      $scope.jdg.cc = $scope.rlt.c;
      $scope.jdg.cv = 0;
      return $scope.jdg.knowmore = false;
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
  hmL = $('#fin-ham-l');
  hmR = $('#fin-ham-r');
  court = $('#court');
  ref$ = [win.width(), win.height()], w = ref$[0], h = ref$[1];
  orientDetect = function(check){
    var ref$, ldSpare, smMode, hc, wc, mh, cw, ch, r, bw, bh, i$, i, a, x, y, jchw, jchh, sw, fs, sentCss, r2, r22, hamCss;
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
      $("#bulb" + (i + 1) + " .inner").css({
        fontSize: parseInt(bw / 2) + "px"
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
    $('#jg-sent3').css(sentCss);
    r2 = parseInt(r * 206 / 201);
    r22 = parseInt(r2 / 2);
    hamCss = {
      width: r2 + "px",
      height: r2 + "px",
      marginLeft: "-" + r22 + "px",
      marginTop: "-" + r22 + "px"
    };
    hmL.css(hamCss);
    return hmR.css(hamCss);
  };
  win.resize(function(){
    return $scope.$apply(function(){
      return orientDetect();
    });
  });
  $timeout(orientDetect, 500);
  $interval(function(){
    return orientDetect(true);
  }, 1000);
  $http({
    url: 'data.json',
    method: 'GET'
  }).success(function(d){
    $scope.data = d;
    console.log($scope.data);
    return $scope.context();
  });
  $scope.$watch('jdg.cc', $scope.context);
  return $scope.$watch('jdg.cv', $scope.context);
}));
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}