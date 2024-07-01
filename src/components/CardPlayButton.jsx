import { Pause,Play } from './Player'

export function CardPlayButton ( {id, color } ) {
  return (
    // <button className={`bg-${color}-500 rounded-full p-2`}>
    <button className={`bg-green-500 rounded-full p-2`}>
      <Play />
    </button>
  )
}