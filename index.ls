angular.module \main, <[]>
  ..controller \main, <[$scope $http $timeout $interval]> ++ ($scope, $http, $timeout, $interval) ->
    fmt = ->
      it.replace "\\n", "\n"
    $scope <<< do
      hint: false
      stage: \judge
      rlt: h: <[0 p5 p6 p7 p8 p9]>, c: 5
      jdg: 
        cc: 5
        cv: 0
        v: [[1 for i from 0 to 5] for j from 0 to 5]
      ctx: view: '', achieve: '', more: ''

      scoring: (d) ->
        $scope.jdg.v[$scope.jdg.cc][$scope.jdg.cv] = d
        $scope.jdg.cv++
        $scope.jdg.cv <?= 6
        $scope.knowmore = false
      context: -> if $scope.data =>
        obj = $scope.data[5 - $scope.jdg.cc].feed.entry[$scope.jdg.cv]
        $scope.ctx.view = obj['gsx$政見']['$t']
        $scope.ctx.achieve = obj['gsx$政績']['$t']
        $scope.ctx.more = obj['gsx$問題']['$t']
        $scope.ctx.cat = obj['gsx$分類']['$t']

      bulbcls: (id) ->
        ret = 's' + $scope.jdg.v[$scope.jdg.cc][id]
        if $scope.jdg.cv == id => ret += ' active'
        ret
      choosehead: (d) ->
        $scope.rlt.c += d
        $scope.rlt.c >?= 1
        $scope.rlt.c <?= 5
        $scope.jdg.cc = $scope.rlt.c
    $scope.$watch 'rlt.c' ->
      $scope.rlt.h = ["p#{v + $scope.rlt.c}" for v from -1 to 4]
      $scope.rlt.b = "p#{6 - $scope.rlt.c}"
    $scope.$watch 'choose' ->
      setTimeout (-> $(window)scrollTop \500), 100

    win = $(window)
    ld-tt = $(\#ld-tt)
    ld-b = $(\#ld-b)
    ld-h = $(\#ld-h)
    jc-h = $(\#jc-h)
    court = $(\#court)
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

      #court
      mh = if h * 0.1 >= 60 => h * 0.1 else 60
      court.css {top: "#{parseInt(mh)}px", height: "#{parseInt(h*0.8)}px"}
      [cw,ch] = [court.width!, court.height!]
      if cw * 775 / 547 > ch => 
        r = ( ch * 201 / 775 )
      else
        r = ( cw * 201 / 546 )
      [bw,bh] = [parseInt(1.4 * r * 40 / 201), parseInt(1.4 * r * 60 / 201)]
      for i from 0 to 5 =>
        a = 2 * Math.PI * (( i + 5 ) % 6) / 6
        x = parseInt(r * Math.cos(a) + cw / 2) - bw / 2
        y = parseInt(r * Math.sin(a) + ch * 465 / 1000) - bh / 2
        $("\#bulb#{i + 1}").css do
          left: "#{parseInt(x)}px"
          top: "#{parseInt(y)}px"
          width: "#{bw}px"
          height: "#{bh}px"
      [jchw,jchh] = [1.4 * r * 136 / 201, 1.4 * r * 150 / 201]
      jc-h.css do
        width: "#{parseInt(jchw)}px"
        height: "#{parseInt(jchh)}px"
        marginLeft: "-#{parseInt(jchw / 2)}px"
        marginTop: "-#{parseInt(jchh / 2)}px"
        backgroundPosition: "-#{parseInt((5 - $scope.jdg.cc) * jchw)}px center"
      if cw * 775 / 547 > ch => 
        sw = (w - (ch * 547 / 775)) / 2 - 20
      else
        sw = (w - cw) / 2 - 20
      fs = if w < 991 or h < 600 => \12px else \1.1em
      sent-css = width: "#{parseInt(sw)}px", fontSize: fs
      $(\#jg-sent1).css sent-css
      $(\#jg-sent2).css sent-css
      $(\#jg-sent3).css sent-css


    win.resize -> $scope.$apply -> orient-detect!
    $timeout orient-detect, 500
    $interval (-> orient-detect true), 1000

    $http do
      url: \data.json
      method: \GET
    .success (d) ->
      $scope.data = d
      console.log $scope.data
      $scope.context!
    $scope.$watch 'jdg.cc', $scope.context
    $scope.$watch 'jdg.cv', $scope.context
