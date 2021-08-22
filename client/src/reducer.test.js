const reducer = require("./reducer")
// @ponicode
describe("reducer.default", () => {
    test("0", () => {
        let callFunction = () => {
            reducer.default({ currentPin: { _id: "proj_" }, pins: [7588892, "fake_user", 7588892, "someUser", "A1234", "b'nXQpVsglEGFJgfK'", "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"] }, { type: "CREATE_DRAFT", payload: { _id: "bc23a9d531064583ace8f67dad60f6bb" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reducer.default({ currentPin: { _id: "project_secret_" }, pins: ["/people/%s/@self", "fake_user_id", "someUser", "A1234", "fake_user_id", "A1234", "A1234", 7588892] }, { type: "LOGIN_USER", payload: { _id: 2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reducer.default({ currentPin: { _id: 2 }, pins: [7588892, "test_user", "b'nXQpVsglEGFJgfK'", "fake_user", "A1234", "c466a48309794261b64a4f02cfcc3d64", "someUser", "someUser"] }, { type: "IS_LOGGED_IN", payload: { _id: 12 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reducer.default({ currentPin: { _id: "projects/" }, pins: ["fake_user_id", "fake_user_id", "b'nXQpVsglEGFJgfK'", "b'nXQpVsglEGFJgfK'", "b'nXQpVsglEGFJgfK'", "b'nXQpVsglEGFJgfK'", "A1234", "c466a48309794261b64a4f02cfcc3d64"] }, { type: "CREATE_COMMENT", payload: { _id: "YOUR_PROJECT_ID" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reducer.default({ currentPin: { _id: 2 }, pins: ["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", "someUser", "b'nXQpVsglEGFJgfK'", "c466a48309794261b64a4f02cfcc3d64", "fake_user_id", "c466a48309794261b64a4f02cfcc3d64", "/people/%s/@self"] }, { type: "UPDATE_DRAFT_LOCATION", payload: { _id: "YOUR_PROJECT_ID" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reducer.default(undefined, { type: undefined, payload: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
