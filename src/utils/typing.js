class Typing {
  constructor(props) {
    this.props = props || {};
    this.source = props.source;
    this.output = props.output;
    this.delay = props.delay || 120;
    this.chain = {
      parent: null,
      dom: this.output,
      val: []
    };
    if (!(typeof this.props.done === "function")) this.props.done = function () {}
  }

  // 初始化函数
  init = () => {
    this.chain.val = this.convert(this.source, this.chain.val);
  }
  // 将dom节点的子节点转换成数组
  convert = (dom, arr) => {
    let children = Array.from(dom.current.childNodes);
    for (let i = 0; i < children.length; i++) {
      let node = children[i];
      if (node.nodeType === 3) {
        // 将字符串转换成字符串数组, 后面才能一个一个打印
        arr = arr.concat(node.nodeValue.split(""));
      } else if (node.nodeType === 1) {
        let val = [];
        val = this.convert(node, val);
        // 不懂下面的push有什么作用
        arr.push({
          dom: node,
          val
        });
      }
    }
    return arr;
  }
  // 在浏览器中打印字符
  print = (dom, val, callback) => {
    setTimeout(() => {
      dom.appendChild(document.createTextNode(val));
      callback();
    }, this.delay);
  }
  // 但打印最后一个字符时, 动画完毕, 执行done
  play = ele => {
    if (!ele.val.length) {
      if (ele.parent) this.play(ele.parent);
      else this.props.done();
      return;
    }
    // 获取数组中第一个元素, 并且删除第一个元素
    const current = ele.val.shift();
    if (typeof current === "string") {
      this.print(ele.dom.current, current, () => {
        // 继续打印下一个字符
        this.play(ele);
      });
    } else {
      const dom = current.dom.cloneNode();
      ele.dom.current.appendChild(dom);
      this.play({
        parent: ele,
        dom,
        val: current.val
      });
    }
  }

  // 执行开始函数
  start = () => {
    this.init();
    this.play(this.chain);
  }
}

export default Typing;