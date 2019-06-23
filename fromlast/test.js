const fromLast = require("./index");
const L = require("./linkedlist");

const { LinkedList } = L;

describe("Linked List - get element Nth position from last node: ", () => {
  test("fromLast returns the node n elements from the end", () => {
    const l = new LinkedList();

    l.insertLast("a");
    l.insertLast("b");
    l.insertLast("c");
    l.insertLast("d");
    l.insertLast("e");

    expect(fromLast(l, 3).data).toEqual("b");
  });
});
