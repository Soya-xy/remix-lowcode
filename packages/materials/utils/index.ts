import { join, resolve } from 'pathe'
import fs from 'fs-extra'

const needMaterials = ['antd-components', 'basic']

const exportCode = {
  'antd-components': [],
  'basic': [],
}

needMaterials.forEach((material) => {
  const files = fs.readdirSync(resolve(`src/${material}`))
  files.forEach((file: string) => {
    if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(join(`src/${material}`, file), 'utf-8')
      const componentName = content.match(/export const compontendName = ['"](.*)["']/)?.[1] || '组件未定义名称'
      exportCode[material].push({ fileName: file.replace('.tsx', ''), name: componentName })
    }
  })
})

fs.writeFileSync(resolve(`src/materials.ts`), `
export const allMaterial = ${JSON.stringify(exportCode, null, 2)}
`)
