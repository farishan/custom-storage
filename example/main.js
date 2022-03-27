requirejs(['../index'], (CustomStorage) => {
    const s = new CustomStorage()
    console.log(s)

    s.setItem('test', 'test')
    console.log(s.getItem('test'))
})