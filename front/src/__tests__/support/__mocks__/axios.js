const axios = {
    post: jest.fn( () => {
        Promise.resolve({
            data: {}
        })
    })
}

export default axios;