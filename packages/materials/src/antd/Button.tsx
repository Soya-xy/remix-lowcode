import { mapComponent } from "../utils";
import { Button as AntdButton } from 'antd'
export const Button = mapComponent(AntdButton, { title: 'children' })
