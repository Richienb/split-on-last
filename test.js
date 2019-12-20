import test from "ava"
import splitOnLast from "."

test("main", (t) => {
    t.deepEqual(splitOnLast("a-b-c", "-"), ["a-b", "c"])
    t.deepEqual(splitOnLast("key:value:value2", ":"), ["key:value", "value2"])
    t.deepEqual(splitOnLast("a---b---c", "---"), ["a---b", "c"])
    t.deepEqual(splitOnLast("a-b-c", "+"), [])
    t.deepEqual(splitOnLast("abc", ""), [])

    t.throws(() => {
        splitOnLast("abc", null)
    }, {
        instanceOf: TypeError,
        message: "Expected the arguments to be of type `string`",
    })
})
