angular.module \main, <[]>
  ..controller \main, <[$scope $timeout $interval]> ++ ($scope, $timeout, $interval) ->
    $scope <<< do
      hint: false
      choose: true
      rlt: h: <[0 p5 p6 p7 p8 p9]>, c: 5

      choosehead: (d) ->
        $scope.rlt.c += d
        $scope.rlt.c >?= 0
        $scope.rlt.c <?= 5
        $scope.rlt.h = ["p#{v + $scope.rlt.c}" for v from -1 to 4]

    win = $(window)
    ld-tt = $(\#ld-tt)
    ld-b = $(\#ld-b)
    ld-h = $(\#ld-h)
    [w,h] = [win.width!, win.height!]

    orient-detect = (check) ->
      [w,h] := [win.width!, win.height!]
      $scope.hint = (w < h)
      # be sure to update here if we change the size in style sheet
      ld-spare = ld-tt.height! + /*ld-b.height!*/ 150 + 30
      sm-mode = ld-spare > h * 0.4
      hc = h - ( if sm-mode => (ld-tt.height! + 30) else ld-spare )
      hc >?= 200
      [wc,hc] = [hc * 437 / 375, hc]map -> parseInt it
      ld-h.css {width: "#{wc}px", height: "#{hc}px", opacity: 1}
      if sm-mode => 
        ld-b.add-class \mobile
        ld-b.css do
          top: "#{hc - ld-b.height!}px"
          left: "#{parseInt((w + wc)/2)}px"
      else => ld-b.remove-class \mobile
      /*
      cs-b = $(\#cs-box)
      cs-b.css do
        width: "#{parseInt(w * 0.3)}px"
        height: "#{parseInt(h * 0.5)}px"
        marginLeft: "#{parseInt(w * 0.35)}px"
        marginTop: "#{parseInt(h * 0.25)}px"
      */
      
    win.resize -> $scope.$apply -> orient-detect!
    $timeout orient-detect, 500
    $interval (-> orient-detect true), 1000
