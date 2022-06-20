let index = 0
var animation = false
var count = document.querySelectorAll('.paging').length
var home = document.querySelector('.homepage');
var click_one_lamp = document.querySelector('.click_one_lamp');
var click_two_lamp = document.querySelector('.click_two_lamp');
var one_click = document.querySelector('.one_click');
var two_click = document.querySelector('.two_click');
var left_move = document.querySelector('.left_move');
var man_img = document.querySelector('.man_img');
var man_two_img = document.querySelector('.man_two_img');
var hat = document.querySelector('.hat');
var left_two_move = document.querySelector('.left_two_move');
var weather_right = document.querySelector(".weather_right")
var weather_left = document.querySelector(".weather_left")
var terrain = document.querySelector('.terrain')
var weather = document.querySelector('.weather')
var four_click = document.querySelector('.four_click')
var click_four_lamp = document.querySelector('.click_four_lamp')
var vehicle = document.querySelector('.vehicle')
var four_home = document.querySelector('.four_home')
var vehicleall = document.querySelectorAll('.vehicleall')
var wehicle_img = document.querySelectorAll('.wehicle_img')
var videos_five = document.querySelectorAll('.videos_five')
var five_lamp = document.querySelectorAll('.five_lamp')

window.onmousewheel = function(e) {
        // 判断是否正在滚动
        if (animation) {
            return;
        }
        if (e.deltaY > 0) {
            // 向下滚动
            // 判断向下滚动是否在最后一页
            if (index == count - 1) {
                return;
            }
            index = index + 1;
        } else {
            // 向上滚动
            // 判断向上滚动是否在第一一页
            if (index == 0) {
                return;
            }
            index = index - 1;
        }
        home.style.marginTop = -index * innerHeight + "px"
        animation = true;
        setTimeout(() => {
            animation = false;
        }, 700);
    }
    // 点击呼吸灯
click_one_lamp.onclick = function() {
        // 背景图显示
        one_click.style.display = 'block';
        // 小灰人装备显示
        man_img.style.display = 'block';
        var left = 50
            // 设置字体左移
        var time = setInterval(() => {
            left_move.style.left = left-- + "%"
            if (left == 30) {
                clearInterval(time)
            }
        }, 30)
    }
    // 定义计时器
var equipment
    // 滑动到装备时事件
hat.onmouseover = function() {
        // 边框变色
        hat.style.border = "#e69800 2px solid"
            // 初始值
        var num = 0
            // 每过0.5s 背景图位置发生变化完成切换
        equipment = setInterval(() => {
            num += 1
            if (num < 8) {
                this.style.background = `url(./imgs/equip.png) ${num * -82+'px'} 0px `
            } else {
                num = 0
            }
        }, 500)
    }
    // 滑出时关闭
hat.onmouseout = function() {
    hat.style.border = "#000 2px solid"
        // this.style.background = `url(./imgs/equip.png) 0px 0px `
    clearInterval(equipment)

}
click_two_lamp.onclick = function() {
        // 背景图显示
        two_click.style.display = 'block';
        // 武器配件显示
        man_two_img.style.display = 'block';
        var left = 50
            // 设置字体左移
        var time = setInterval(() => {
            left_two_move.style.left = left-- + "%"
            if (left == 30) {
                clearInterval(time)
            }
        }, 30)
    }
    // 点击地形
weather_right.onclick = function() {
        // 天气隐藏
        weather.style.display = 'none';
        // 地形精灵图尺寸变为选中
        weather_right.style.background = `url(./imgs/sprite.png)-110px -764px `
            // 天气精灵图尺寸变为选中
        weather_left.style.background = `url(./imgs/sprite.png)-0 -678px `
            //字体颜色改变
        weather_right.style.color = '#e69800';
        weather_left.style.color = "#fff"
            // 地形显示
        terrain.style.display = 'flex';
    }
    // 点击天气
weather_left.onclick = function() {
    //字体颜色改变
    weather_left.style.color = '#e69800';
    weather_right.style.color = "#fff"
        //天气显示
    weather.style.display = 'flex';
    // 地形隐藏
    terrain.style.display = 'none';
    // 地形精灵图尺寸变为未选中
    weather_right.style.background = `url(./imgs/sprite.png)-110px -678px `
        // 天气精灵图尺寸变为选中
    weather_left.style.background = `url(./imgs/sprite.png)-0 -764px `
}
click_four_lamp.onclick = function() {
        four_click.style.display = "block"
        four_home.style.display = "none"
    }
    // 选中的精灵图尺寸
var arr = ["url(./imgs/sprite.png)0 -913px",
        "url(./imgs/sprite.png)-73px -913px",
        "url(./imgs/sprite.png)-160px -913px",
        "url(./imgs/sprite.png)-262px -913px",
        "url(./imgs/sprite.png)-360px -913px",
    ]
    // 未中的精灵图尺寸
var arr1 = ["url(./imgs/sprite.png)0 -850px",
        "url(./imgs/sprite.png)-73px -850px",
        "url(./imgs/sprite.png)-160px -850px",
        "url(./imgs/sprite.png)-262px -850px",
        "url(./imgs/sprite.png)-360px -850px",
    ]
    // 切换载具
for (let i = 0; i < vehicleall.length; i++) {
    // 遍历
    vehicleall[i].onclick = function() {
        // vehicleall[i].style.background = arr1[i]
        // vehicleall[i].style.background = arr[i]
        for (let j = 0; j < vehicleall.length; j++) {
            // 所有元素切换没选中状态
            vehicleall[j].style.background = arr1[j]
                // 点击元素的切换状态
            vehicleall[i].style.background = arr[i]
                //汽车全部隐藏删除display = "block"的类名
            wehicle_img[j].classList.remove("block")
                // 点击对应汽车显示添加display = "block"的类名
            wehicle_img[i].classList.add("block")
        }
    }
}

for (let i = 0; i < videos_five.length; i++) {
    // 划入显示
    five_lamp[i].onmouseover = function() {
            videos_five[i].style.display = "block"
        }
        // 滑出隐藏
    five_lamp[i].onmouseout = function() {
        videos_five[i].style.display = "none"
    }
}