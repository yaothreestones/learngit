/**
 * 自用框架
 * import { w } from './wtool';
 * w.$('node')  获取单个元素
 * w.$$('node')  获取多个的元素
 * w.hasClass(elementId, cName)  检查元素是否有指定class
 * w.addClass(elementId, cName)  添加class
 * w.replaceClass(elementId, cName,nName)  替换class
 * w.removeClass(elementId, cName)   删除class
 * w.removaAllChildNodes(elementId)   删除所有子节点
 * w.addEvent(elementId, event, func)  添加事件
 * w.formatSeconds(value)  把数值格式化为时间
 * w.attr(node, attr, newVal)  获取或设置元素属性 newVal为空是为查询
 */

export var w = {
    /**
     * 获取单个的元素
     * 
     * @param {String} selector
     * @param {Element} [context=document]
     * @returns {Element} element
     */
    $: (selector) => {
        if (document instanceof NodeList) {
            return Array.from(document, node => {
                return node.querySelector(selector);
            })
        }
        return document.querySelector(selector);
    },

    /**
     * 获取多个的元素
     * 
     * @param {String} selector
     * @param {Element} [context=document]
     * @returns {Element} element
     */
    $$: (selector) => {
        if (document instanceof NodeList) {
            return Array.from(document, node => {
                return node.querySelectorAll(selector);
            })
        }
        return document.querySelectorAll(selector);
    },
    /**
     * 检查元素是否有指定class
     * 
     * @param {String} cName
     * @param {Element} elementId
     * @returns {boolean} boolean
     */
    hasClass(elementId, cName) {
        return !!elementId.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    },
    /**
     * 元素添加class
     * 
     * @param {String} cName
     * @param {Element} elementId
     */
    addClass(elementId, cName) {
        if (!w.hasClass(elementId, cName)) {
            elementId.className += " " + cName;
        }
    },
    /**
     * 元素替换class
     * 
     * @param {Element} elementId
     * @param {String} cName
     * @param {String} nName
     */
    replaceClass(elementId, cName, nName) {
        w.removeClass(elementId, cName)
        w.addClass(elementId, nName)
    },
    /**
     * 元素删除class
     * 
     * @param {String} cName
     * @param {Element} elementId
     */
    removeClass(elementId, cName) {
        if (w.hasClass(elementId, cName)) {
            elementId.className = elementId.className.replace(new RegExp('(^|\\b)' + cName.split(' ').join('|') + '(\\b|$)', 'gi'), '');
        }
    },
    /**
     * 删除所有子节点
     * 
     * @param {Element} elementId
     */
    removaAllChildNodes(elementId) {
        var childs = elementId.childNodes;
        for (var i = childs.length - 1; i >= 0; i--) {
            elementId.removeChild(childs.item(i));
        }
    },
    /**
     * 删除自身节点
     * 
     * @param {Element} elementId
     */
    removaSelfNodes(elementId) {
        w.removaAllChildNodes(elementId);
        var parent = elementId.parentNode;
        parent.removeChild(elementId);
    },

    /**
     * 获取或设置元素属性
     * 
     * @param {Element} node
     * @param {String} attr
     * @param {String} [newVal=null]
     * @returns {String} element's attribute value or null
     */
    attr: (node, attr, newVal) => {
        // newVal = null
        if (newVal) {
            node.setAttribute(attr, newVal);
            return;
        }
        return node.getAttribute(attr);
    },
    /**
     * 添加事件
     * 
     * @param {Element} elementId
     * @param {String} event
     * @param {String} func
     */
    addEvent(elementId, event, func) {
        if (elementId != null) {
            if (elementId.addEventListener) {
                elementId.addEventListener(event, func, false);
            } else if (elementId.attachEvent) {
                elementId.attachEvent('on' + event, func);
            } else {
                elementId['on' + event] = func;
            }
        } else {
            console.log("elementId:null")
            return false
        }
    },
    /**
     * 将数值格式化为时间
     * 
     * @param {String} value
     * @returns {String} timr or NaN
     */
    formatSeconds(value) {
        var minute = parseInt(value / 60)
        var second = parseInt(value - minute * 60)
        var result
        second = (second >= 10) ? second : '0' + second
        result = minute + ":" + second
        if (result == "NaN:NaN") {
            return "--:--"
        } else {
            return result
        }
    }
}