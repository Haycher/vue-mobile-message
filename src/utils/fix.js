// fix 弹窗出来之后依旧键盘没有回收
function hideKeyboard(){
    let inputs = Array.prototype.slice.call(document.querySelectorAll('input'))
    inputs.forEach(input => {
        input.blur()
    })
}

function scrollHandler(e){
    return e.preventDefault();
}

// 弹窗显示后禁用页面滚动
function preventScroll(){
    document.addEventListener('touchmove', scrollHandler, { passive: false });
}

// 弹窗隐藏后恢复页面滚动
function recoverScroll(){
    document.removeEventListener('touchmove', scrollHandler, { passive: false });
}

export default{
    hideKeyboard,
    preventScroll,
    recoverScroll
}