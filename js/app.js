import { playAudio, isMatch, checkGameOver, startGame, restartGame } from './utils.js';

export const data = [
    // 完整的数据对照表内容
    ["ArrayPolar", "环形阵列"],
    ["ArrayLinear", "直线阵列"],
    ["ArrayCrvOnSrf", "阵列曲线到曲面上"],
    ["ArrayCrv", "沿着曲线阵列"],
    ["Array", "矩形阵列"],
    ["ArcBlend", "弧形混接"],
    ["ApplyCrv", "应用曲线到曲面上"],
    ["Arc", "中心点圆弧"],
    ["Align", "对齐"],
    ["Block", "定义块"],
    ["Box", "盒子方块"],
    ["BlockManager", "管理块"],
    ["BooleanDifference", "布尔运算差集"],
    ["BooleanUnion", "布尔运算并集"],
    ["BooleanIntersection", "布尔运算交集"],
    ["BooleanSplit", "布尔运算分割"],
    ["BackgroundBitmap", "背景图导入"],
    ["MergeCoplanarFace", "合并同一平面"],
    ["BlendCrv", "混接曲线"],
    ["BlendSrf", "混接曲面"],
    ["Curve", "曲线"],
    ["Circle", "圆形"],
    ["Circle P", "两点圆形"],
    ["CageEdit", "变形控制器"],
    ["InterpCrv", "内插点曲线"],
    ["Crv2View", "两个视图的曲线"],
    ["ChamferEdge", "边缘倒斜角"],
    ["Contour", "等高线"],
    ["CreateUVCrv", "建立UV曲线"],
    ["ChangeDegree", "更改阶数"],
    ["ChangeLayer", "改变图层"],
    ["DupEdge", "复制边缘"],
    ["Ellipse", "椭圆"],
    ["DupBorder", "复制边框"],
    ["DeleteSubCrv", "截断曲线"],
    ["Divide", "等分点"],
    ["ExtrudeCrv", "拉伸"],
    ["ExtractIsoCurve", "抽离结构线"],
    ["ExtractWireframe", "抽离线框"],
    ["ExplodeBlock", "炸开组块"],
    ["EdgeSrf", "二、三、四边成面"],
    ["ExtrudeCrvAlongCrv", "沿着曲线挤出曲面"],
    ["Untrim", "取消修剪"],
    ["ExtractSrf", "抽离曲面"],
    ["ExtractSubCrv", "抽离子线段"],
    ["Extend", "延伸曲线"],
    ["ExtendCrvOnSrf", "延伸曲面上的曲线"],
    ["ExtendSrf", "延伸曲面边缘"],
    ["FilletEdge", "边缘圆角"],
    ["FilletSrf", "曲面圆角"],
    ["Fillet", "曲线圆角"],
    ["Cap", "加盖"],
    ["Flow", "沿着曲线流动"],
    ["Flip", "翻转方向"],
    ["Fin", "沿着法线方向挤出面"],
    ["FlowAlongSrf", "沿着曲面流动"],
    ["Group", "群组"],
    ["UnGroup", "解组"],
    ["RemoveFromGroup", "移出群组"],
    ["Hide", "隐藏选择"],
    ["Show", "显示隐藏"],
    ["Helix", "螺旋线"],
    ["Isolate", "单独显示选中物体"],
    ["ShowSelected", "按选显示物体"],
    ["Spiral", "平坦螺旋线"],
    ["IsolateLock", "反选锁定"],
    ["InsertKnot", "插入点"],
    ["InsertControlPoint", "插入控制点"],
    ["Intersect", "计算相交线"],
    ["Join", "组合"],
    ["Line", "创建直线"],
    ["Line b", "两侧直线"],
    ["lock", "锁定选择物体"],
    ["Loft", "放样"],
    ["MergeAllCoplanarFaces", "合并所有共平面"],
    ["Move", "移动"],
    ["MoveUVN", "按UVN移动"],
    ["MergeEdge", "合并边缘"],
    ["MergeSrf", "合并曲面"],
    ["MakeHole", "建立洞"],
    ["Mirror", "镜像"],
    ["Match", "衔接曲线"],
    ["MatchSrf", "衔接曲面"],
    ["NetworkSrf", "网格线建立曲面"],
    ["Offset", "偏移曲线"],
    ["OffsetSrf", "偏移曲面"],
    ["OffsetCrvOnSrf", "偏移曲面上的曲线"],
    ["OrientCrvToEdge", "对齐曲线到边缘"],
    ["OneLayerOn", "只打开一个图层"],
    ["OrientOncrv", "定位到曲线上"],
    ["OrientOnSrf", "定位到曲面上"],
    ["Point", "点"],
    ["Pipe", "圆管"],
    ["Polygon", "正多边形"],
    ["Polyline", "多段线"],
    ["Project", "投影曲线到曲面上"],
    ["Pull", "拉回曲线"],
    ["Orient", "两点定位"],
    ["Sphere", "球体"],
    ["Orient3pt", "三点定位"],
    ["Revolve", "旋转成型"],
    ["RailRevolve", "沿着路径旋转"],
    ["Ribbon", "彩带曲面"],
    ["Rectangle C", "中心点矩形"],
    ["PlanarSrf", "平面线建立曲面"],
    ["Rebuild", "重建曲线、曲面"],
    ["Rectangle", "矩形"],
    ["RebuildEdges", "重建边缘"],
    ["RemoveMultiKnot", "移除复节点"],
    ["Rotate", "旋转"],
    ["RoundHole", "圆洞"],
    ["Rotate3d", "3d旋转"],
    ["Ribbon", "彩带曲面"],
    ["Plane", "矩形平面"],
    ["Sweep2", "双轨扫掠"],
    ["Sweep1", "单轨扫掠"],
    ["Scale2d", "2轴缩放"],
    ["Scale", "3轴缩放"],
    ["SubCrv", "子线段"],
    ["Split", "分割"],
    ["SplitEdge", "分割边缘"],
    ["Shell", "壳、抽壳"],
    ["ShortPath", "曲面上两点最短路径"],
    ["Scale1d", "单轴缩放"],
    ["Setpt", "设定点坐标"],
    ["ShrinkTrimmedSrf", "缩回已修剪曲面边缘"],
    ["SelU", "选择U方向点"],
    ["SelV", "选择V方向的点"],
    ["SrfSeam", "设定曲面的接缝位置"],
    ["SetLayerToObject", "设定物体到指定图层"],
    ["Symmetry", "对称"],
    ["Trim", "修剪"],
    ["TweenCurves", "两曲线间建立曲线"],
    ["UnrollSrf", "展开曲面"],
    ["Smash", "摊平曲面"],
    ["UnjoinEdge", "断开曲面连接"],
    ["UntrimHoles", "补洞"],
    ["UnlockSelected", "解锁选择的物体"],
    ["Unlock", "解除冻结物体"],
    ["Untrim", "取消修剪"],
    ["Copy", "复制"],
    ["SetDisplayMode _M _W", "线框显示"],
    ["SetDisplayMode _M _S", "着色显示"],
    ["SolidPtOn", "显示实体点"],
    ["Pushpull", "推拉曲面"],
    ["SoftMove", "软移动"],
    ["CPlane", "指定操作平面"],
    ["Explode", "炸开"],
    ["Explode _Block", "炸开块"],
    ["Zoom _Extents", "物体视图居中"],
    ["ShowEdges", "显示外露边缘"],
    ["Zebra", "显示斑马纹"],
    ["Zoom _S", "视图居中选择物体"],
    ["Radiate", "径向对称"],
    ["3dFace", "追加面"],
    ["InsertEdge", "插入环形"],
    ["InsertEdge _Typ", "插入循环"],
    ["Reflect", "对称"],
    ["RemoveSymmetry", "移除对称"],
    ["ExtrudeSubD", "细分挤出"],
    ["Inset", "插入细分边缘"],
    ["Fill", "补洞"],
    ["OffsetSubD", "细分偏移"],
    ["Bridge", "桥接"],
    ["SubDCrease", "加锐边"],
    ["RemoveCrease", "移除锐边"],
    ["Slide", "滑动点或线"],
    ["InsertPoint", "插入点"],
    ["Bevel", "细分斜角"],
    ["SubDExpandEdges", "扩展边缘"],
    ["Stitch", "缝合点和线"]
];

function decodeHtmlEntities(str) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
}

data.forEach(pair => {
    pair[1] = decodeHtmlEntities(pair[1]);
});

const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const gameOver = document.getElementById("game-over");
const elapsedTime = document.getElementById("elapsed-time");
const restartButton = document.getElementById("restart-button");
let tiles = [];
let firstTile = null;
let startTime;

function getRandomData() {
    const shuffled = data.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
}

function initGame() {
    startTime = Date.now();
    const selectedData = getRandomData();
    const shuffledData = selectedData
        .flatMap(pair => pair)
        .sort(() => Math.random() - 0.5);

    gameContainer.innerHTML = '';
    tiles = [];

    shuffledData.forEach((text, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.innerHTML = text;
        tile.dataset.index = index;
        gameContainer.appendChild(tile);
        tiles.push(tile);

        tile.addEventListener("click", () => handleTileClick(tile));
    });
}

function createParticles(x, y) {
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particle-container");
    particleContainer.style.left = `${x}px`;
    particleContainer.style.top = `${y}px`;

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particleContainer.appendChild(particle);
    }

    document.body.appendChild(particleContainer);

    setTimeout(() => {
        particleContainer.remove();
    }, 1000); // 粒子效果持续 1 秒
}

function handleTileClick(tile) {
    if (tile.classList.contains("hidden") || tile === firstTile) return;

    tile.style.backgroundColor = "#d0f0d0";
    playAudio(tile.innerText); // 使用 utils.js 中的 playAudio 函数

    if (!firstTile) {
        firstTile = tile;
    } else {
        const firstText = firstTile.textContent.trim();
        const secondText = tile.textContent.trim();

        if (isMatch(firstText, secondText)) { // 确保传递正确的参数
            setTimeout(() => {
                const rect1 = firstTile.getBoundingClientRect();
                const rect2 = tile.getBoundingClientRect();

                createParticles((rect1.left + rect1.right) / 2, (rect1.top + rect1.bottom) / 2);
                createParticles((rect2.left + rect2.right) / 2, (rect2.top + rect2.bottom) / 2);

                firstTile.classList.add("hidden");
                tile.classList.add("hidden");
                firstTile = null;
                checkGameOver(tiles, startTime, elapsedTime, gameContainer, gameOver);
            }, 300);
        } else {
            firstTile.classList.add('shake');
            tile.classList.add('shake');
            setTimeout(() => {
// 重置为原来的颜色
                firstTile.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                tile.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                firstTile.classList.remove('shake');
                tile.classList.remove('shake');
                firstTile = null; // 重置选中状态
            }, 500);
        }
    }
}

startButton.addEventListener('click', () => {
    startGame(startButton, gameContainer, initGame); // 调用 utils.js 中的 startGame 函数
});

restartButton.addEventListener('click', () => {
    restartGame(gameOver, gameContainer, initGame); // 调用 utils.js 中的 restartGame 函数
});