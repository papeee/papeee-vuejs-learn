export default {
    input: './src/main.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
