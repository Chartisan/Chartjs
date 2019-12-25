import gzip from 'rollup-plugin-gzip'
import postcss from 'rollup-plugin-postcss'
// import ts from '@wessberg/rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { main, peerDependencies } from './package.json'
// import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
// import typescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

export default {
    input: 'src/index.ts',
    output: [
        {
            file: main,
            format: 'umd',
            name: `chartisan`,
            globals: {
                'chart.js': 'Chart'
            }
        }
    ],
    external: [
        // ...Object.keys(dependencies || {}),
        'chart.js',
        ...Object.keys(peerDependencies || {})
    ],
    plugins: [
        postcss(),
        resolve({ extensions }),
        commonjs({ include: 'node_modules/**' }),
        // typescript({ tsconfig: 'tsconfig.json' }),
        babel({ extensions, include: ['src/**/*'] }),
        ...(process.env.BUILD === 'production' ? [terser(), gzip()] : [])
    ],
    onwarn(warning) {
        if (warning.code !== 'CIRCULAR_DEPENDENCY')
            console.warn(`(!) ${warning.message}`)
    }
}
