import { mapComponent } from "../utils";
export const compontendName = "卡片"

function NCard() {
  return <>
    <div>Card</div>
  </>
}

export const Card = mapComponent(NCard, { title: 'children' })
