 app = new Vue({
            el: "#app",
            data() {
                return {
                    ifshow: true,
                    checked: false,
                    radio: '1',
                    activeSelect: '',
                    selectOption: [{
                        value: '0%', //实际内容
                        label: '0%'//显示文案
                    }, {
                        value: '50%',
                        label: '50%'
                    }, {
                        value: '100%',
                        label: '100%'
                    }],
                    input: "",
                    showOption: false,
                    tabValue: "one",
                }
            },
            mounted() {
                this.setRect(360, 320);

                //竖屏
                var sWidth = window.screen.width; //屏幕宽
                var sHeight = window.screen.height; //屏幕高

                //全屏显示
                if (window.screen.availWidth > window.screen.availHeight) {
                    //横屏，宽高置换
                    sWidth = window.screen.height; //屏幕宽
                    sHeight = window.screen.width; //屏幕高
                }
                setWindowRect(0, 0, sWidth, sHeight);

                setButtonAction(function () {
                    var menu = document.querySelector("#app");
                    if (menu.style.display == 'none') {
                        menu.style.display = 'block';
                        //显示菜单之后, 设置触控不可穿透悬浮窗口
                        setWindowTouch(true);
                    } else {
                        menu.style.display = 'none';
                        //隐藏菜单之后, 设置触控穿透悬浮窗口
                        setWindowTouch(false);
                    }
                });
            },
            methods: {
                setRect(w,
                    h,
                    x = -1,
                    y = -1) {
                    var boxW = w;
                    var boxH = h;

                    var ayMenu = this.$refs.menuMain;
                    ayMenu.style.width = `${boxW}px`;
                    ayMenu.style.height = `${boxH}px`;
                    if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
                    if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;
                },
                titleTouchStart(event) {
                    this.touchStartX = parseInt(event.touches[0].clientX);
                    this.touchStartY = parseInt(event.touches[0].clientY);

                    var ayMenu = this.$refs.menuMain;
                    this.menuLastX = ayMenu.offsetLeft;
                    this.menuLastY = ayMenu.offsetTop;
                },
                titleTouchMove(event) {
                    event.preventDefault();
                    var distanceX = event.touches[0].clientX - this.touchStartX;
                    var distanceY = event.touches[0].clientY - this.touchStartY;
					
                    var ayMenu = this.$refs.menuMain;
				},	
function readI32(addr) {
    return Number(h5gg.getValue(addr, "I32"));
}

function readF64(addr) {
    return Number(h5gg.getValue(addr, "F64"));
}

function searchAndReplace(searchValue, replaceValue, valueType) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, valueType, '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length === 0) {
        alert("Không tìm thấy giá trị cần thay thế.");
        return;
    }

    for (var i = 0; i < results.length; i++) {
        if (valueType === "I32") {
            var read = readI32(results[i].address);
        } else if (valueType === "F64") {
            var read = readF64(results[i].address);
        }

        if (read === searchValue) {
            h5gg.setValue(results[i].address, replaceValue.toString(), valueType);
        }
    }

    alert("thay thế hoàn tất ");
}

function Unban() {
    var searchValue = 357958400;
    var replaceValue = 100;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("370")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert("Đã thực hiện Anti ban!");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}