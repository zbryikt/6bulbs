require! <[fs request]>

url = (page) -> "https://spreadsheets.google.com/feeds/list/1RiIPdwuzW7wjuSv4hrgAIxbjhntK6nDowmg99bvN8T0/#page/public/values?alt=json"


ids = [1,2,3,4,5]
ret = []

fetch = ->
  if !ids.length =>
    fs.write-file-sync \data.json, JSON.stringify(ret)
    return
  id = ids.splice(0,1)
  (e,r,b) <- request do
    url: url id
    method: \GET
  console.log b
  ret.push JSON.parse b
  setTimeout (-> fetch!), 100

fetch!
