import { mapComponent } from "../utils";
import { Button as AntdButton } from 'antd'
export const compontendName = '按钮'
export const Button = mapComponent(AntdButton, { title: 'children' })
