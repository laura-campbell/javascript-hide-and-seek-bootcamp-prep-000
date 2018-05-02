function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target') }


function increaseRankBy(n) {
  const children = document.querySelectorAll('.ranked-list li')
   for (let i=0; i < children.length; i++) {
     children[i].innerHTML = parseInt(children[i].innerHTML) + n
   }
}

function deepestChild() {
  let node = document.querySelector('#grand-node')
  let next = node.children[0]
  while (next) {
    node = next
    next = node.children[0]
  }
  return node
}
