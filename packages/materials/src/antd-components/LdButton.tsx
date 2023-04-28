import { Button as AntdButton } from 'antd'
import { mapComponent } from '../utils'

export const compontendName = '按钮'
export const LdButton = mapComponent(AntdButton, { title: 'children' })
