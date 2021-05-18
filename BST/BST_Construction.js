'use strict'

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  /* =============== INSERTION =============== */
  insert(value) {
    // insert to left
    if (value < this.value) {
      if (this.left === null) this.left = new BST(value)
      else this.left.insert(value)
    }

    //   insert to right
    else {
      if (this.right === null) this.right = new BST(value)
      else this.right.insert(value)
    }
  }

  /* =============== SEARCHING =============== */
  contains(value) {
    // go to left
    if (value < this.value) {
      if (this.left === null) return false
      else return this.left.contains(value)
    }

    // go to right
    if (value > this.value) {
      if (this.right === null) return false
      else return this.right.contains(value)
    }

    // probably root
    else return true
  }

  /* =============== DELETION =============== */
  remove(value, parent = null) {
    // left
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this)
      }
    }
    // right
    else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this)
      }
    }

    // other
    else {
      // if current has both left and right nodes
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      }

      //   if parent is null
      else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right !== null) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          //   This is a single-node tree, do nothing
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }

    return this
  }

  /* =============== GET MIN VALUE =============== */
  getMinValue() {
    if (this.left === null) return this.value
    else return this.left.getMinValue()
  }
}

const bst = new BST(10)

bst.insert(5)
bst.insert(17)
bst.insert(8)
