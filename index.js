define(() => {
    function CustomStorage() {
        this.data = {}
        this.length = 0

        return this
    }

    CustomStorage.prototype.clear = function () {
        this.data = {}
    }

    CustomStorage.prototype.setItem = function (key, value) {
        if (!key || !value) throw Error('Invalid arguments.')

        this.data[key] = JSON.stringify(value)
        this.length++

        return this.data
    }

    CustomStorage.prototype.getItem = function (key) {
        if (!key) throw Error('Invalid arguments.')
        if (!this.data[key]) throw Error(`No data with key: ${key}`)

        return JSON.parse(this.data[key])
    }

    CustomStorage.prototype.removeItem = function (key) {
        if (!key) throw Error('Invalid arguments.')
        if (!this.data[key]) throw Error(`No data with key: ${key}`)

        delete this.data[key]
        this.length--

        return this.data
    }

    return CustomStorage
})
