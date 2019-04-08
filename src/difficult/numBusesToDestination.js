//  815. 公交路线 https://leetcode-cn.com/problems/bus-routes/

// 我们有一系列公交路线。每一条路线 routes[i] 上都有一辆公交车在上面循环行驶。例如，有一条路线 routes[0] = [1, 5, 7]，表示第一辆 (下标为0) 公交车会一直按照 1->5->7->1->5->7->1->... 的车站路线行驶。
// 假设我们从 S 车站开始（初始时不在公交车上），要去往 T 站。 期间仅可乘坐公交车，求出最少乘坐的公交车数量。返回 -1 表示不可能到达终点车站。

// 示例:
//     输入:
//         routes = [[1, 2, 7], [3, 6, 7]]
//         S = 1
//         T = 6
//     输出: 2
//     解释:
//         最优策略是先乘坐第一辆公交车到达车站 7, 然后换乘第二辆公交车到车站 6。

// 说明:
//     1 <= routes.length <= 500.
//     1 <= routes[i].length <= 500.
//     0 <= routes[i][j] < 10 ^ 6.

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
function numBusesToDestination(routes, S, T) {
  var routesLen = routes.length,
    {allSites, midSites} = getSiteObj(routes);

  // 没有车辆进过起点或终点， 则直接返回-1
  if (!allSites[S] || !allSites[T]) return -1;


  function getMidSite(start, to) {
    var routesS = allSites[start],
      routesT = allSites[to];
    var comRoute = getCommon(routesS,routesT);

    if(comRoute > -1) return `起点与终点有车${comRoute}直达`


  }
}

/**
 * 在两个数组中寻找相同的元素， 如果有，返回这个元素，如果没有返回-1
 * 如「1，2，3」与「3，4，5」中相同的元素是3。 返回3
 * */
function getCommon(arr1,arr2) {
    var len = arr1.length;
    var i;
    for(i=0;i<len;i++){
        if(arr2.includes(arr1[i])) return arr1[i]
    }
    return -1
}


/**
 * 返回所有站点的公交车线路的对象
 * @param {number[][]} routes
 */
function getSiteObj(routes) {
  var allSites = {},
    midSites = {},
    lenI = routes.length,
    lenJ = 0;
  var i, j, site;

  for(i = 0; i < lenI; i++) {
    lenJ = routes[i].length;
    for(j = 0; j < lenJ; j++) {
      site = routes[i][j];
      if (allSites[site]) {
        allSites[site].push(i);

        // 可中转的站点
        if (!midSites[site]) {
          midSites[site] = [i];
        } else {
          midSites[site].push(i);
        }

      } else {
        allSites[site] = [i];
      }
    }
  }

  // console.log(obj);
  return {
    allSites,
    midSites
  };
}


/**
 * 测试
 */
function test(routes, S, T) {
  const start = new Date().getTime();
  const result = numBusesToDestination(routes, S, T);
  const end = new Date().getTime();
  const during = end - start;
  console.log(`输入: ${routes}, 输出：${result}， 耗时：${during}`);
}

// 运行测试
test([[1, 2, 7], [3, 6, 7]], 1, 6);  // 期望 2
