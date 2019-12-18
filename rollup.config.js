import gzip from 'rollup-plugin-gzip'
import postcss from 'rollup-plugin-postcss'
import ts from '@wessberg/rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import { name, dependencies, peerDependencies } from './package.json'

const pkg_name = name.substr(1).replace('/', '_')

export default {
    input: 'src/index.ts',
    output: {
        file: `dist/${pkg_name}.js`,
        format: 'iife',
        name: pkg_name
    },
    external: [
        ...Object.keys(dependencies || {}),
        ...Object.keys(peerDependencies || {})
    ],
    plugins: [
        postcss(),
        ts({ transpiler: 'babel' }),
        resolve(),
        ...(process.env.BUILD === 'production' ? [terser(), gzip()] : [])
    ],
    onwarn(warning) {
        if (warning.code !== 'CIRCULAR_DEPENDENCY')
            console.warn(`(!) ${warning.message}`)
    }
}
