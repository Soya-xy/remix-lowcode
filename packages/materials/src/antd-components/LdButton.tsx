import { mapComponent } from "../utils";
import { Button as AntdButton } from 'antd'
export const compontendName = '按钮'
export const LdButton = mapComponent(AntdButton, { title: 'children' })
